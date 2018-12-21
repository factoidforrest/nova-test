
const router = require('express-promise-router')();
const { tokenize } = require('../models/creditCard');
/* GET home page. */
router.post('/tokenize', (req, res) => {
  req.log.info('Responding submit-cc');
  const ccNum = req.body.cc;
  res.status(200).send({ token: tokenize(ccNum) });
});


module.exports = router;
