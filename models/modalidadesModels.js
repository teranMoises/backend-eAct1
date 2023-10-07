let modalidadesBD = [

];

const { v4: uuidv4 } = require('uuid');

class modalidad {
    constructor(nombre = 'name',ID) {
        this.nombre = nombre;
        this.id = uuidv4();
        this.categorias = [
            //{nombre: undefined, reglas: undefined}
        ];
        if (ID != undefined && typeof ID == "string") {
            this.id = ID;
        }
        /*if (cat != undefined && typeof cat == 'object' && Object.keys(cat).length !== 0) {
            this.categorias.push(cat);
        }*/
    }
}

class categoria {
    constructor(nombre = 'name', rulers = [], ID) {
        this.nombre = nombre;
        this.id = uuidv4();
        this.reglas = [];
        if (rulers != undefined && Array.isArray(rulers) && rulers.length !== 0) {
            this.reglas = rulers;
        }
        if (ID != undefined && typeof ID == "string") {
            this.id = ID;
        }
    }
}

class ModalityModels {
    static todos() {
        //console.log('hola desde models');
        return modalidadesBD;
    }
    static verCAT(modalidadName) {
        let i = modalidadesBD.findIndex(mode => mode.nombre == modalidadName)
        if (i !== -1) {
            return modalidadesBD[i].categorias;
        }
    }
    static crear(data) {
        return new Promise((resolve, reject) => {
            console.log("en models", data, data.nombre);
            let i = modalidadesBD.findIndex(mode => mode.nombre == data.nombre)
            if (i !== -1) {
                return reject('Ya existe una modalidad con ese nombre');
            }
            let add = new modalidad(data.nombre, data.categ);
            modalidadesBD.push(add);
            resolve();
        })
    }
    static agregarCAT(data, modality) {
        return new Promise((resolve, reject) => {
            console.log("en models", data, data.nombre, modality);
            let iModalidad = modalidadesBD.findIndex(mode => mode.nombre == modality)
            if (iModalidad !== -1) {
                let arrayCat = modalidadesBD[iModalidad].categorias;
                let i = arrayCat.findIndex(catName => catName.nombre == data.nombre)
                if (i !== -1) {
                    return reject('Ya existe una categoría con ese nombre');
                }
                let add = new categoria(data.nombre, data.reglas);
                arrayCat.push(add);
                resolve();
            } else {
                return reject('No existe la modalidad indicada: ' + modality);
            }

        })
    }
    static modificarCAT(data, modality, category) {
        return new Promise((resolve, reject) => {
            console.log("en models", data, data.nombre, modality, category);
            let iModalidad = modalidadesBD.findIndex(mode => mode.nombre == modality)
            if (iModalidad !== -1) {
                let arrayCat = modalidadesBD[iModalidad].categorias;
                let i = arrayCat.findIndex(catName => catName.id == category)
                if (i == -1) {
                    return reject('No existe la categoría indicada');
                }
                let add = new categoria(data.nombre, data.reglas, category);
                arrayCat[i] = add;
                resolve(arrayCat);
            } else {
                return reject('No existe la modalidad indicada: ' + modality);
            }
        })
    }
    static quitarCAT(modality, category) {
        return new Promise((resolve, reject) => {
            console.log("en models", modality, category);
            let iModalidad = modalidadesBD.findIndex(mode => mode.nombre == modality);
            if (iModalidad !== -1) {
                let arrayCat = modalidadesBD[iModalidad].categorias;
                let i = arrayCat.findIndex(catName => catName.id == category);
                if (i == -1) {
                    return reject('No existe la categoría indicada');
                }
                resolve(arrayCat.splice(i, 1));
            } else {
                return reject('No existe la modalidad indicada: ' + modality);
            }
        })
    }

}

module.exports = modalidadesBD;
module.exports = ModalityModels;