const http = require('http');
const WebSocket = require('ws');

// Use the PORT environment variable provided by Render
const port = process.env.PORT || 8081;

const server = http.createServer();
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

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
