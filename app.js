const http = require('http');

const PORT = 5000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.end('Hello from EC2!');
});

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});