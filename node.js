const http = require('node:http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world from Node!');
});

server.listen(port, undefined, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});