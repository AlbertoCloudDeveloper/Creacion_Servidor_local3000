//Creación de un Servidor Local 

const http = require('http'); // Incorporacion de modulo se realiza con el método require 
                              //-- http es el nombre del modulo // 
const hostname = '127.0.0.1';  // Defi el Host
const port = 3000;
                    
const server = http.createServer((req, res) => { // La fx siguiente se llama "Callback"
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});