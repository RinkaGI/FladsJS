const Eris = require('eris');

class FladsClient {
  constructor(token) {
    this.token = token;

    this.erisClient = new Eris(token);
  }

  isReady(fn) {
    return function() {
      this.erisClient.on('ready', () => {
        fn();
      })
    }
  }

  run() {
    this.erisClient.connect()
  }
}

exports.FladsClient = FladsClient;