const fs = require('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));
const autos ={
index:function(req,res){
    res.set({ 'content-type': 'text/plain; charset=utf-8' });
    res.write('En esta seccion encontraras todos los modelos de autos disponibles en nuestras sucursales ' + '\n');
    res.write('-------------------------------------------------------------------------------------------' + '\n')
    dbConcesionarias.forEach(function(marcas){
        marcas.autos.forEach(function(auto){
        res.write('Marca: ' + auto.marca + '\n')
        res.write('Modelo: ' + auto.modelo + '\n')
        res.write('Año: '+ auto.anio + '\n')
        res.write('\n')
        })
    })
        
res.end();
},


}  

module.exports = autos;