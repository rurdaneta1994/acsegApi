var express=require('express');
var bodyParser=require('body-parser');
var rutas=require('./routes/index.js');

var app=express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/persona',rutas.obtenerTodo);

app.get('/persona/:id',rutas.obtenerId);



app.post('/persona',rutas.agregar);

app.put('/persona/:id',rutas.updateId);

app.delete('/persona/:id',rutas.eliminarId);


app.listen(8000);

console.log('escuchando en el puerto 8000');