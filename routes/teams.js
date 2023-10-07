var express = require('express');
var router = express.Router();
var team_controller = require('../controllers/team.c');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('teamV', { title: 'teamHomes' });
});


/* GET Teams */
router.get('/', function (req, res, next) {
  res.send(team_controller.showTeams());
});

/*POST TEAMS*/
router.post('/', function (req, res, next) {
  let reqController = team_controller.addTeam(req.body)
  if (reqController == "Error: faltan datos") {
    res.status(400).send(reqController);
  } else {
    res.send(reqController);
  }

});


/*DELETE TEAMS*/
router.delete('/delete/:id', function (req, res, next) {
  let uID = req.params.id
  team_controller.delTeam(uID)
});

module.exports = router;

