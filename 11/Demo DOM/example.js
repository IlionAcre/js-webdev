// 1. Importar el módulo HTTP, que es nativo de Node.js
const http = require("http");

// 2. Definir el nombre del host (tu computadora local) y el puerto
const hostname = "127.0.0.1"; // localhost
const port = 3000;

// 3. Crear el servidor
const server = http.createServer((req, res) => {
  // Esta función se ejecuta cada vez que el servidor recibe una solicitud web

  // Configurar la respuesta HTTP
  res.statusCode = 200; // Código de éxito "OK"
  res.setHeader("Content-Type", "text/plain"); // El contenido es texto simple

  // Enviar la respuesta al cliente
  res.end("¡Hola Mundo desde Node.js!\n");
});

// 4. Poner el servidor a escuchar en el puerto y host definidos
server.listen(port, hostname, () => {
  // Esta función se ejecuta una vez, cuando el servidor se inicia correctamente
  console.log(`El servidor está corriendo en http://${hostname}:${port}/`);
});
