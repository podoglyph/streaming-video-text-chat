const express = require('express');
const app = express();
const http = require('http').Server(app);
const av = require('tessel-av');
const camera = new av.Camera();
const stream = camera.stream();

const cors = require('cors');
//example default options
const options = {
  path: '/socket.io',
  serveClient: true,
  adapter: 'Adapter',
  origins: '*',
  parser: 'Parser'
}

const io = require('socket.io')(http, {options});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/stream', (req, res) => {
  res.redirect(camera.url);
});

io.on('connection', function(socket) {
  console.log('a user connected yo');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on :3000 yo');
});
