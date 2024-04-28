/* Usando Node Http */

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('requerimiento entrante');
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hola Mundo<h1/>');
});

server.listen(3005);