var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let usuarios = [
    {id:1, nombre:"Luis", apellidos:"Ramirez", correo:"l@algo.mx"},
    {id:2, nombre:"Jorge", apellidos:"Lopez", correo:"j@algo.mx"},
    {id:3, nombre:"Pedro", apellidos:"Perez", correo:"p@algo.mx"}
  ];
  res.render('users/index',{usuarios:usuarios});
});

router.get('/show', function(req, res, next) {
  res.send('Hola Express!!!!');
});

module.exports = router;
