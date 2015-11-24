'use strict';
var express =  require('express'),
    router = express.Router();

//creamos rutas
router.route('/')
    .get(function(req,res){
       res.send('hello word');
    });

//router.route('/otra-url/')
//    .get(function(req,res){
//        res.send('otra url');
//    });

module.exports =router;


