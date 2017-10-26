const express = require('express')
const Problem = require('../../models/problem');


function index(req, res, next) {
  Problem.find({}, (err, result) => {
    res.render('problems/index', {
      problems: result
    });
  });
}

function show(req, res, next) {
  res.send('Testing!');
}


function create(req, res, next) {
  let problem = new Problem({
    name: "enfermedad",
    description: "Te sientes mal y te duele todo",
    solution: "Amor <3"
  });
  life.save((err) => {
    if (err) {
      res.send('error!');
    } else {
      res.render('problems/create');
    }
  });

}

module.exports = {
  index,
  show,
  create
};
