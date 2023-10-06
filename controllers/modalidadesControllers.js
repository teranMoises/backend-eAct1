var ModalidadModels = require("../models/modalidadesModels");

class ModalidadController {
    todos() {
        return new Promise((resolve, reject) => {
            resolve(ModalidadModels.todos())
        })
    }
    uno() {

    }
    crear() {

    }
    modificar() {
        
    }
    eliminar() {
        
    }
}

module.exports = new ModalidadController();