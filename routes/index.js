var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('--> Welcome ');
  res.locals = {
    title: 'Welcome'
  }
  res.render('welcome');
});

module.exports = router;
