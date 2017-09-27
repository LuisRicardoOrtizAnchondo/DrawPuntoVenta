const express = require('express')


function index(req, res, next){
  let usuarios = [
    {id:1, nombre:"Luis", apellidos:"Ramirez", correo:"l@algo.mx"},
    {id:2, nombre:"Jorge", apellidos:"Lopez", correo:"j@algo.mx"},
    {id:3, nombre:"Pedro", apellidos:"Perez", correo:"p@algo.mx"}
  ];
  res.render('users/index',{usuarios:usuarios});
}

function show(req, res, next) {
  res.send('Hola Express!!!!');
}

module.exports ={
  index,
  show
};
