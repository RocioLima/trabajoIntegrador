const fs = require('fs')
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));
const marcas ={
index:function(req,res){
res.set({ 'content-type': 'text/plain; charset=utf-8' }); 
res.write('En esta sección podes encontrar las siguientes marcas: ' + '\n')
res.write('------------------------------------------------------' + '\n')
let nuevoArray = [];
dbConcesionarias.forEach(function(marcas){
marcas.autos.forEach(function (auto){
   if(!nuevoArray.includes(auto.marca)){
            nuevoArray.push(auto.marca)
   }
   })
   nuevoArray.forEach(function(e){
    res.write('Marca: ' + e +'\n')
   })
   res.end() 
});

},
id: function(req, res){
    res.set({ 'content-type': 'text/plain; charset=utf-8' });   
    let idMarcas = req.params.marcas
    res.write('Elegiste la marca: ' + '\n')
    res.write('___________________________'+'\n')
    dbConcesionarias.forEach(function(marcas){
        marcas.autos.forEach(function(auto){
        if(auto.marca == idMarcas){
            res.write( '-' + auto.marca +'\n' + '-Modelo: '+ auto.modelo +'\n' + '-Año: ' + auto.anio + '\n' )
            res.write('\n')
        }    
        })
    })
      res.end() 
}
}

module.exports= marcas;