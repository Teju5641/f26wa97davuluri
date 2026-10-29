var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {

  // Generate a random value
  let x = Math.random() * 100;

  // Check if query argument x is provided
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  // Apply the Math function
  let y = Math.cos(x);

  // Construct and send the response
  res.send(`Math.cos applied to ${x} is ${y}`);

});

module.exports = router;