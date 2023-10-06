let modalidadesBD = [
    {nombre:'sumo'}
];

const { v4: uuidv4 } = require('uuid');

class ModalidadModels {
    constructor(nombre,reglas = []){
        this.nombre = nombre;
        this.reglas = reglas;
    }
    static todos() {
        console.log('hola desde models');
        return modalidadesBD;
    }
    static uno(id) {

    }
    static crear(modalidad) {
        setTimeout(() => {
            return new Promise((resolve, reject) => {
                modalidad.id = uuidv4();
                modalidadesBD.push(modalidad);
                resolve();
            })
          }, "1000");
        
    }
    static modificar() {
        
    }
    static eliminar() {
        
    }
    
}

module.exports = modalidadesBD;
module.exports = ModalidadModels;