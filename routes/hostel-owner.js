var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Hostel/login');
});
router.get('/signup',(req,res)=>{
  res.render('Hostel/signup')
})
router.post('/register',(req,res)=>{
  console.log(req.body);
})
module.exports = router;
