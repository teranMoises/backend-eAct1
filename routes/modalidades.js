var express = require('express');
var router = express.Router();

var modalidadController = require("../controllers/modalidadesControllers");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


/* GET users listing. */
router.get('/', function (req, res, next) {
  modalidadController.todos()
    .then((resultados)=>{
      res.send(resultados)
    }
    )
});


module.exports = router;
