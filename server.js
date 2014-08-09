var http = require('http');
var port = process.argv[2] || 8000;
var app = http.createServer();
app.listen(port, "0.0.0.0");

var io = require('socket.io')(app);

io.on('connection', function (socket) {
  console.log('user connected', socket.id);

  socket.on('offer', function (data) {
    console.log('relaying offer');
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', function(data) {
    console.log('relaying answer');
    socket.broadcast.emit('answer', data);
  });

  socket.on('candidate', function (data) {
    console.log('relaying candidate');
    socket.broadcast.emit('candidate', data);
  });

  socket.broadcast.emit('new');
});

console.log('+ Running signaling server on 0.0.0.0:' + port);
