var express = require('express');
var router = express.Router();
var guestHelpers = require('../helpers/guestHelpers')
/* GET home page. */
router.get('/', async (req, res, next)=> {
  let hostels = await guestHelpers.getHostelList()

  res.render('Guest/home', { title: 'Express',guest:true,hostels});
});
module.exports = router;
