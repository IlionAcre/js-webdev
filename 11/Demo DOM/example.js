const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end(
    `
    <h1>Hola mundo desde Node.js</h1>
    <p>AAAAAAAAAAAAAAAAAAAA</p>
    <p>AAAAAAAAAA <a href="https://github.com/faalc/js-webdev/tree/main/11/Demo%20DOM">GitHub</a></p>
  `
  );
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
