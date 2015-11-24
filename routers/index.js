'use strict';
var router_main = require('../apps/main/controllers');
//poner las rutas de mis controladores
var routers = function(server){
    server.use('/', router_main);
};

module.exports = routers;