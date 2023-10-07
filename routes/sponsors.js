var express = require('express');
var router = express.Router();
var sponsorC = require('../controllers/Sponsor.c');

/* GET SPONSORS */
router.get('/', function(req, res, next) {
    res.send(sponsorC.getSponsors());
  });
  
  /*POST SPONSORS*/
  router.post('/anadir-patrocinante/:categoria', function(req, res, next) {
    let cate = req.params.categoria;
      sponsorC.addSponsor(cate,req.body)
      res.send(sponsorC.getSponsors());
    });


  module.exports = router;
  
  