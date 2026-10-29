var express = require('express');
var router = express.Router();

// Initialize two variables
let vOne = 123;
let vTwo = 60;

/* GET users listing. */
router.get('/', function(req, res, next) {

  // Subtract the smaller value from the larger
  if (vOne > vTwo) {
    vOne = vOne - vTwo;
  } else if (vTwo > vOne) {
    vTwo = vTwo - vOne;
  }

  // Construct and send the response
  res.send(`Values are: ${vOne} and ${vTwo}`);

});

module.exports = router;