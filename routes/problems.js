var express = require('express');
var router = express.Router();
const problemsController = require('../controllers/problems/problems');

/* GET problems listing. */
router.get('/', problemsController.index);

router.get('/show', problemsController.show);

router.get('/create', problemsController.create);

module.exports = router;
