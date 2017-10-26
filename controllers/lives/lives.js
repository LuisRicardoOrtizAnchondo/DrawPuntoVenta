const express = require('express')
const Life = require('../../models/life');


function index(req, res, next) {
  Life.find({}, (err, result) => {
    res.render('lives/index', {
      lives: result
    });
  });
}

function show(req, res, next) {
  res.send('Hola Express!!!!');
}


function create(req, res, next) {
  let life = new Life({
    name: "Richi",
    spiritHash: "iqoasdj8a9yxiue",
    plantOrAnimal: "Human"
  });
  life.save((err) => {
    if (err) {
      res.send('error!!!!');
    } else {
      res.render('lives/create');
    }
  });

}

module.exports = {
  index,
  show,
  create
};
