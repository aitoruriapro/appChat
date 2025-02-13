var express = require('express');
var router = express.Router();
var title = 'Express';
var appName = 'AppChat';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title, appName });
});

module.exports = router;
