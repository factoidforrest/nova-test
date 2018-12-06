#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const registerSocket = require('./src/routes/socket');
// const debug = require('debug')('express-template:server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(`Listening on ${port}`);
}


/**
 * Listen on provided port, on all network interfaces.
 */

const server = app.listen(port, onListening);

// registerSocket(server);
// app.on('error', onError);


/**
 * Event listener for HTTP server "error" event.
 */

// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   const bind = typeof port === 'string'
//     ? `Pipe ${port}`
//     : `Port ${port}`;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(`${bind} requires elevated privileges`);
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(`${bind} is already in use`);
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }
