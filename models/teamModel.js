let teamsOn = [
    {
        Equipo: "EquipoDinaminta"
    },
    {
        Equipo: "EquipoNenas",
        ID:123
    },
]
let found = false
class teamModelC{
    showTeams(){
        return teamsOn
    };
    addTeam(usuario){
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