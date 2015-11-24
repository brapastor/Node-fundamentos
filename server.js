'use strict';

var express = require('express'),
    server = express(),
    port = process.env.PORT || 8000;

//region Declarar url
server.get('/',function(req,res){
   res.send('hello wacissn');
});

server.get('/otra-url/',function(req,res){
    res.send('este es otro url');
});

//endregion
server.listen(port, function(){
    console.log("Servidor escuchando al puerto " + port);
});