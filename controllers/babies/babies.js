const express = require('express')
const Baby = require('../../models/baby');


function index(req, res, next) {
  /*Baby.find({}, (err, result) => {
    res.render('babies/index', {
      babies: result
    });
  });*/
res.send('sasad')
}

function show(req, res, next) {
  res.send('Hola Express!!!!');
}


function create(req, res, next) {
  let baby = new Baby({
    name: "Richi",
    lastName: "Ortíz",
    months: "3"
  });
  baby.save((err) => {
    if (err) {
      res.send('error!!!!');
    } else {
      res.render('babies/create');
    }
  });

}

module.exports = {
  index,
  show,
  create
};