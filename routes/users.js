var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  console.log(req.body);
  if (req.body.username === 'u1' && req.body.password === 'u1@123') {
    res.status(200).json({ statusCode: 200, data: { self: 'u1', to: 'u2' } });
  } else if (req.body.username === 'u2' && req.body.password === 'u2@123') {
    res.status(200).json({ statusCode: 200, data: { self: 'u2', to: 'u1' } });
  } else {
    res
      .status(200)
      .json({ statusCode: 404, data: { message: 'user not found' } });
  }
});

module.exports = router;
