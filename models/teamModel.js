const { v4: uuidv4 } = require('uuid');
var { modalityBD, ModalityModels } = require('./modalidadesModels');

let teamsOn = [
    {
        ID: 1233,
        Equipo: "EquipoDinaminta",
        Integrantes: [
            { Nombre: "José", Cedula: 30786086, Edad: 18 },
            { Nombre: "Simón", Cedula: 4564654, Edad: 20 },
        ],
        Categorias: [11545, 4564]
    },
]



let found = false
class teamModelC {
    showTeams() {
        return teamsOn
    };
    find(idCAT) {
        let i1 = -1;
        let i2 = -1;
        let name = "";
        let found = false;
        //console.log('Categorias:',idCAT)
        //console.log('Categorias:',modalityBD)
        if (modalityBD.length <= 0) {
            return null;
        }
        modalityBD.forEach((mode, indexMode, arreglo) => {
            mode.categorias.forEach((cat, indexCat, arreglo) => {
                //console.log(indexMode,indexCat,cat);
                //console.log('Comparar',idCAT,cat['id'])
                if (Object.hasOwnProperty.call(cat, 'id')) {
                    if (cat['id'] == idCAT) {
                        i1 = indexMode;
                        i2 = indexCat;
                        name = cat['nombre'];
                        found = true;
                    } else {
                        return false;
                    }
                }
            })
        });
        return [found, i1, i2, name]

    }
    findCATs(arrCAT) {
        console.log("findCATs", arrCAT)
        for (const catObj of arrCAT) {
            if (typeof catObj == "string") {
                let returnFind = this.find(catObj);
                console.log("findCATs FIND", returnFind)
                if (returnFind == false || (Array.isArray(returnFind) && returnFind[0] !== true)) {
                    return catObj;
                }
            }
        }
        return true;
    }
    addTeam(usuario) {
        usuario.ID = uuidv4()
        if (usuario.ID != undefined && usuario.Equipo != undefined && usuario.Integrantes != undefined && usuario.Categorias != undefined) {
            let val = this.findCATs(usuario.Categorias);
            console.log(val)
            if (val !== true) {
                return 'Se ha encontrado un ID inválido: ' + val;
            }
            teamsOn.push(usuario);
            return this.showTeams();
        } else {
            //return this.find(usuario.algo)
            return "Error: faltan datos";
        }
    };
    delTeam(uID) {
        let team = teamsOn.find((team) => team.ID === 123);
        if (team) {
            found = true;
            teamsOn.splice(teamsOn.indexOf(team), 1);
        }
    };
    showCategory() {
        let categories = {};
        if (modalityBD.length <= 0) {
            return null;
        }
        modalityBD.forEach((mode, indexMode, arreglo) => {
            mode.categorias.forEach((cat, indexCat, arreglo) => {
                if (Object.hasOwnProperty.call(cat, 'id')) {
                    if (typeof cat['id'] == "string") {
                        if (!Object.hasOwnProperty.call(categories, cat['id'])) {
                            categories[cat['id']] = {"nombre": cat.nombre, "equipos": []};
                        }   
                    }
                }
            })
        });
        console.log(categories)

        teamsOn.forEach((team, indexMode, arreglo) => {
            for (const catID of team.Categorias) {
                if (Object.hasOwnProperty.call(categories, catID)) {
                    categories[catID]['equipos'].push(team);
                }
            }
            
        });
        return categories
    };
    delCategory() {

    };
}



module.exports = new teamModelC;
