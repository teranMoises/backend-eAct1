class SponsorController{
    getSponsors(){
        return sponModl.SponsorModel.getAllSponsors(); 
    }
    addSponsor(cathegory, sponsor){
       sponModl.SponsorModel.addSponsor(cathegory,sponsor);
    }
    delTeam(id){
        savesSponsors.delTeam(id)
    }
    showCathegory(){

    }
}
var sponModl = require('../models/sponsorModel')
module.exports = new SponsorController();