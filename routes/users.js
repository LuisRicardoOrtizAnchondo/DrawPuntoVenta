var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users/users');

/* GET users listing. */
router.get('/', usersController.index);

router.get('/show', usersController.show);

module.exports = router;
