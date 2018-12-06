const stream = require('stream');

class EchoStream extends stream.Writable {
  _write(chunk, enc, next) {
    console.log(chunk.toString());
    next();
  }
}

module.exports = EchoStream;
