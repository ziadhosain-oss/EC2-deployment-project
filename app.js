const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from EC2!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
