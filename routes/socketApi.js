let io = require('socket.io')();
let socketApi = {};

socketApi.io = io;

let users = {};

io.on('connection', function (socket) {
  socket.on('initializeUser', data => {
    users[data.username] = socket.id;
    socket.emit('onlineUsers', users);
  });

  socket.on('requestOnlineUsers', data => {
    socket.emit('onlineUsers', users);
  });

  socket.on('sendMessage', data => {
    console.log(users[data.to])
    console.log(users[data.from])
    io.to(users[data.to]).emit('receiveMessage', data)
  });

});

socketApi.sendNotification = () => {
  io.sockets.emit('hello', { msg: 'Hello World!' });
};

module.exports = socketApi;
