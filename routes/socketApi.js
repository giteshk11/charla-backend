let io = require('socket.io')();
let socketApi = {};

socketApi.io = io;

let users = {};

io.on('connection', function(socket) {
  socket.on('initializeUser', data => {
    users[data.username] = socket;
    console.log(data);
  });

  socket.on('sendData', data => {
    users[data.to].emit('receiveData', data);
  });
});

socketApi.sendNotification = () => {
  io.sockets.emit('hello', { msg: 'Hello World!' });
};

module.exports = socketApi;
