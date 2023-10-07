var express = require('express');
var router = express.Router();
var team_controller = require('../controllers/team.c');


/* GET Teams */
router.get('/', function(req, res, next) {
  res.send(team_controller.showTeams());
});

/*POST TEAMS*/
router.post('/', function(req, res, next) {
    team_controller.addTeam(req.body)
    res.send(team_controller.showTeams());
  });


/*DELETE TEAMS*/
router.delete('/delete/:id', function(req, res, next) {
    let uID = req.params.id
    team_controller.delTeam(uID)
  });

module.exports = router;

