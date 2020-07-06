const fs = require('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));
const home ={
    index:function(req,res){
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        res.write("Bienvenidos" + '\n\n')
        res.write('Te damos la mejor solución para tus busquedas, fáciles, sencillas  y prácticas.' +'\n')
        res.write('¿Qué estas esperando? El auto de tus sueños en una sola página que convina distintas concesionarias que brindan las mejores marcas y modelos de autos.' +'\n')
        res.write('¡Encontrá el Tuyo!' +'\n\n')
        res.write('Sucursales: ' + '\n') 
        dbConcesionarias.forEach(function(sucursales){
            res.write(sucursales.sucursal +'\n' )
             
         });
          res.end()
        
      }
    
} 

    


module.exports = home;