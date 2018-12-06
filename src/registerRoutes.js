const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const registerSocket = require('./routes/socket');
const file = require('./routes/file');

module.exports = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/file', file);
  // registerSocket();
};
