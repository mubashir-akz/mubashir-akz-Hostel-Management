var express = require('express');
var router = express.Router();
var guestHelpers = require('../helpers/guestHelpers')
/* GET home page. */
router.get('/', async (req, res, next)=> {
  res.render('Guest/Login', {  })
});
router.get('/Register',(req,res)=>{
  res.render('Guest/register')
},)
router.get('/home', async (req,res)=>{
  let hostels = await guestHelpers.getHostelList()

  res.render('Guest/home', { title: 'Express',guest:true,hostels});
})
module.exports = router;
