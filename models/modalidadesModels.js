let modalidadesBD = [
    {
        nombre: "Modalidad de Ejemplo", 
        id: "e2927cbc-bcb0-4cbf-be9a-277cbdb98b96", 
        categorias: [
            {
                nombre: "Categoria de Ejemplo",
                id: "f2f66e25-c1c1-4846-ac15-90ade2053720",
                reglas: ['Reglas de ejemplo']
            }
        ]
    }
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
    static buscar(buscar, propiedad, valor, propiedad2, valor2){
        console.log('en la funcion',buscar, propiedad, valor, propiedad2, valor2)
        let iModalidad = modalidadesBD.findIndex(mode => mode[propiedad] == valor)
        if (buscar == 'mode') {
            return iModalidad;
        } else if (buscar == 'cat') {
            console.log('en cat funcion')
            if (iModalidad !== -1) {
                let ruta = modalidadesBD[iModalidad].categorias;
                return [ruta, ruta.findIndex(cat => cat[propiedad2] == valor2)];
            } else {
                return "Error"
            }
        } else {
            return false;
        }
        
    }
    static verCAT(modalidadName) {
        console.log('En verCAT',modalidadName)
        let i = this.buscar('mode', "nombre", modalidadName);
        if (i !== -1) {
            return modalidadesBD[i].categorias;
        }
    }
    static crear(data) {
        return new Promise((resolve, reject) => {
            console.log("en models", data, data.nombre);
            let i = this.buscar('mode', "nombre", data.nombre);
            if (i !== -1) {
                return reject('Ya existe una modalidad con ese nombre');
            }
            let add = new modalidad(data.nombre);
            modalidadesBD.push(add);
            resolve();
        })
    }
    
    static agregarCAT(data, modality) {
        return new Promise((resolve, reject) => {
            console.log("en models", data, data.nombre, modality);
            let ind = this.buscar('cat', "nombre", modality, "nombre", data.nombre);
            console.log(ind)
            if (ind == 'Error') {
                return reject('No existe la modalidad indicada: ' + modality);
            }
            if (Array.isArray(ind) && ind[1] !== -1) {
                return reject('Ya existe una categoría con ese nombre');
            }
            if (ind === false) {
                return reject('Error en la búsqueda');
            }
            let arrayCat = ind[0];
            let add = new categoria(data.nombre, data.reglas);
            arrayCat.push(add);
            resolve();
            /*
            let iModalidad = modalidadesBD.findIndex(mode => mode.nombre == modality)
            if (iModalidad !== -1) {
                let arrayCat = modalidadesBD[iModalidad].categorias;
                let i = arrayCat.findIndex(catName => catName.nombre == data.nombre)
                if (i !== -1) {
                    return reject('Ya existe una categoría con ese nombre');
                }
                
            } else {
                
            }
*/
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

module.exports.modalityBD = modalidadesBD;
module.exports.ModalityModels = ModalityModels;