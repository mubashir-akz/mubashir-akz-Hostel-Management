var express = require('express');
var router = express.Router();
var guestHelpers = require('../helpers/guestHelpers')
const passport = require('passport');
require('../views/Guest/passport')
/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('Guest/Login', {  })
});
router.get('/Register',(req,res)=>{
  res.render('Guest/register')
});
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/n');
  }
);

router.get('/home', async (req,res)=>{
  let hostels = await guestHelpers.getHostelList()
  res.render('Guest/home', { title: 'Express',guest:true,hostels});
})

module.exports = router;
