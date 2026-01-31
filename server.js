const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  const podName = process.env.HOSTNAME || 'desconocido';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Práctica 2 - GKE</h1>
    <h2>Alumno: Alberto Ruiz Y Pedro Jimenez</h2>
    <p>Estás viendo el pod: <b>${podName}</b></p>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
