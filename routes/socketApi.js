let io = require('socket.io')();
let socketApi = {};

socketApi.io = io;

let users = [];

io.on('connection', function (socket) {
  socket.on('initializeUser', data => {
    users.push({ username: data.username, socketID: socket.id })
    socket.broadcast.emit('onlineUsers', users);
  });

  socket.on('requestOnlineUsers', data => {
    socket.emit('onlineUsers', users);
  });

  socket.on('sendMessage', data => {
    users.forEach(el => {
      if (el.username === data.to) {
        return io.to(el.socketID).emit('receiveMessage', data)
      }
    })
  });

});

socketApi.sendNotification = () => {
  io.sockets.emit('hello', { msg: 'Hello World!' });
};

module.exports = socketApi;
