const Socket = require('socket.io');

module.exports = (server) => {
  const io = Socket(server);
  io.on('connection', (socket) => {
    socket.emit('data', { handshake: 'object' });
    socket.on('data', (data) => {
      console.log(data);
    });
  });
  console.log('registered socker listeners ', io);

  return io;
};
