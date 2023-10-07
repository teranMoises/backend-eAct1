class teamController{
    showTeams(){
        return savesTeams.showTeams(); 
    }
    addTeam(usuario){
        savesTeams.addTeam(usuario);
    }
    delTeam(id){
        savesTeams.delTeam(id)
    }
    showCathegory(){

    }
}
var savesTeams = require('../models/teamModel')
module.exports = new teamController();