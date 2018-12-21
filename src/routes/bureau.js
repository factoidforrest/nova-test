
const router = require('express-promise-router')();
const jwt = require('jsonwebtoken');

const creditCard = require('../models/creditCard');
const { proxy } = require('../services/bureauCaller');


router.post('/proxy', async (req, res) => {
  req.body = jwt.verify(req.body.payload, 'supersecret');

  const cc = creditCard.fetch(req.body.token);
  const { template, encoding, endpoint } = req.body;
  const bureauRes = await proxy(cc, template, encoding, endpoint);
  res.send(bureauRes);
});


module.exports = router;
