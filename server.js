const { createServer } = require('http');

const server = createServer((req, res) => {
  res.end('oi');
});

server.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333');
});
