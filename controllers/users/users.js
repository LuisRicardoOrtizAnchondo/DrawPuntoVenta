const express = require('express')
const User = require('../../models/user');


function index(req, res, next) {
  User.find({}, (err, result) => {
    res.render('users/index', {
      users: result
    });
  });
}

function show(req, res, next) {
  res.send('Hola Express!!!!');
}


function create(req, res, next) {
  let user = new User({
    name: "Richi",
    lastName: "Ortíz",
    email: "a291540@uach.mx"
  });
  user.save((err) => {
    if (err) {
      res.send('error!!!!');
    } else {
      res.render('users/create');
    }
  });

}

module.exports = {
  index,
  show,
  create
};
