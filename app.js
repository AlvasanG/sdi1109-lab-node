// Módulos
var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var swig = require('swig');
var mongo = require('mongodb');

var gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

// Variables
app.set('port', 8081);
app.set('db', 'mongodb://admin:sdi@sdi-node-shard-00-00-afcp7.mongodb.net:27017,sdi-node-shard-00-01-afcp7.mongodb.net:27017,sdi-node-shard-00-02-afcp7.mongodb.net:27017/test?ssl=true&replicaSet=SDI-NODE-shard-0&authSource=admin&retryWrites=true');


//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig, gestorBD); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig, gestorBD); // (app, param1, param2, etc.)

// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});