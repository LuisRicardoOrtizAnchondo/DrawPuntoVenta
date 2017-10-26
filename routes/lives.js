var express = require('express');
var router = express.Router();
const livesController = require('../controllers/lives/lives');

/* GET lives listing. */
router.get('/', livesController.index);

router.get('/show', livesController.show);

router.get('/create', livesController.create);

module.exports = router;
