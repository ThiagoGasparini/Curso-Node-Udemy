let http = require('http');

http.createServer(function(req, res){
  res.end("Bem vindo ao meu site")
}).listen(8181);
console.log('Online');