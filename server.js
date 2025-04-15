const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static('public'));

// Socket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // broadcast to all users
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


socket.on('chat message', (msg) => {
  io.emit('chat message', msg); // broadcast message with user info
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
