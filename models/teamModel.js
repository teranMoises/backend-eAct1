const { v4: uuidv4 } = require('uuid');

let teamsOn = [
    {
        ID:1233,
        Equipo: "EquipoDinaminta",
        Integrantes: [
            {Nombre:"José",Cedula:30786086,Edad:18},
            {Nombre:"Simón",Cedula:4564654,Edad:20},
        ]
    },
]



let found = false
class teamModelC{
    showTeams(){
        return teamsOn
    };
    addTeam(usuario){
        usuario.ID = uuidv4()
        teamsOn.push(usuario);
    };
    delTeam(uID){
        let team = teamsOn.find((team) => team.ID === 123);
        if (team) {
        found = true;
        teamsOn.splice(teamsOn.indexOf(team), 1);
}
    };
    showCathegory(){

    };
}



module.exports = new teamModelC;
