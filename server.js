'use strict';
//traemos el modulo http
var http = require('http'), //importamos modulo
    port = process.env.PORT || 8000;

var server = http.createServer(function(req,res){
    console.log("haciendo una peticion");
    res.writeHead(200, {'contend_type': 'text/plain'});
    res.end('hola mundo');
}); // con esto creamos un servidor web

//server.on('request',function(req,res){
//   console.log("estoy haciendo una peticion");
//});
server.listen(port, function(){
    console.log("escuchando al puerto " + port)
}); // Que escuche en un determinado puerto
