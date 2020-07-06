const fs = require('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));
const sucursales={
    index:function(req, res){
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        res.write('Bienvenidos a nuestras sucursales : ' + '\n')
        res.write('-----------------------------------------------------'+'\n')
        dbConcesionarias.forEach(function(sucursales){
            res.write(sucursales.sucursal +'\n' )
            res.write('Direccion: ' + sucursales.direccion + '\n') 
            res.write('Telefono: ' +sucursales.telefono + '\n')
            res.write('\n')
            
         });
         res.end()
    }, 
    id: function(req, res){
       res.set({'content-type':'text/plain;charset=utf-8'}); 
        let idSucursales = req.params.sucursales
        dbConcesionarias.forEach(function(sucursales){
          if (sucursales.sucursal == idSucursales){
        res.write('Bienvenidos a la sucursal : '+ sucursales.sucursal + '\n' + 'Direccion: ' + sucursales.direccion + '\n' + 'Telefono: ' + sucursales.telefono + '\n' )  
         sucursales.autos.forEach(function(auto){
           res.write('\n');
        res.write('Marca: ' + auto.marca + '\n' + 'Modelo: ' + auto.modelo + '\n' + 'Color: ' + auto.color + '\n' + 'Año' + auto.anio + '\n');  
         })
         res.end()
        }
    })

res.send('No se encontró la pagina')
}

}

module.exports = sucursales;