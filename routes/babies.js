var express = require('express');
var router = express.Router();
const babiesController = require('../controllers/babies/babies');

/* GET babies listing. */
router.get('/', babiesController.index);

router.get('/show', babiesController.show);

router.get('/create', babiesController.create);

module.exports = router;
