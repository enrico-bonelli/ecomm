'use strict';

const http = require('http');
const porta = 3000;
var server = http.createServer((req, res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Test commit su github');
}).listen(porta,()=>console.log(`Server in ascolto su porta ${porta}`));
