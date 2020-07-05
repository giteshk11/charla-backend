var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/getChatDetails', (req, res, next) => {
  let body = req.body;
  console.log(body)
});

module.exports = router;
