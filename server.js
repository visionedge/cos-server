const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');
  
  ws.on('message', message => {
    console.log('Received:', message);
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server on port 8081
server.listen(8081, () => {
  console.log('WebSocket server is running on port 8081');
});
