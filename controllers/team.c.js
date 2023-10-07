class teamController{
    showTeams(){
        return savesTeams.showTeams(); 
    }
    addTeam(usuario){
        return savesTeams.addTeam(usuario);
    }
    delTeam(id){
        savesTeams.delTeam(id)
    }
    showTeamsCAT(){
        return savesTeams.showCategory();
    }
    delTeamCAT(cat,team){
        return savesTeams.delCategory(cat,team);
    }
}
var savesTeams = require('../models/teamModel')
module.exports = new teamController();