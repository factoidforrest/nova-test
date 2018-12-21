const submitCC = require('./routes/credit-card');
const bureau = require('./routes/bureau');

module.exports = (app) => {
  app.use('/credit-card', submitCC);
  app.use('/bureau', bureau);
  // registerSocket();
};
