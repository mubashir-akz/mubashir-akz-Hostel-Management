var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Guest/home', { title: 'Express' });
});
console.log(process.env.DB_CONFIG);
module.exports = router;
