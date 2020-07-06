const express = require('express') // requiero el modulo express
const app = express(); //


app.listen(3030,()=>console.log("El servidor está corriendo")) // levanto servidor

const rutaHome = require('./routes/home'); // requiero el modulo home

const rutaSucursales = require('./routes/sucursales'); // requiero el modulo sucursales

const rutaMarcas = require('./routes/marcas'); // requiero el modulo marcas

const rutaAutos = require('./routes/autos'); // requiero el modulo autos

app.use('/', rutaHome);

app.use('/sucursales', rutaSucursales);

app.use('/marcas', rutaMarcas);

app.use('/autos',rutaAutos);