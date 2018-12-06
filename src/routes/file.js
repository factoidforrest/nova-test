
const router = require('express-promise-router')();
const fs = require('fs');
const { pipeline } = require('stream');
// const EchoStream = require('../services/customStream');

// const testStream = new EchoStream();
/* GET big image */
router.get('/bigfile', (req, res) => {
  const fileSrc = fs.createReadStream('public/images/big.jpg');
  // fileSrc.pipe(testStream);
  // fileSrc.pipe(res);
  pipeline(
    fileSrc,
    res,
    (err) => {
      if (err) {
        console.log('File Error!');
        res.status(500).send('Error');
      }
    },
  );
});

module.exports = router;
