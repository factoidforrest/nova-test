
const router = require('express-promise-router')();

/* GET home page. */
router.get('/', (req, res) => {
  req.log.info('Responding index');
  res.render('index', { title: 'Express' });
});

router.get('/hello-world', (req, res) => {
  res.status(200).send({ an: 'object' });
});


module.exports = router;
