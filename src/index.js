 //creamos las contantes con los modulos que vamos a necesitar 
 const express = require("express");
 const app = express(); //arrancamos express
 const path = require ('path'); //path nos ayuda a saber que hay dentro de cada carpeta 

 app.use(express.urlencoded({extended: false}));
 app.use(express.json());
 app.use(require('./routes/index'));

 app.use(express.static(path.join(__dirname, 'public'))); //obtenemos la ruta de public para servir el html al js. 

 app.listen(3000,() => {
     console.log('server on port 3000');
 });

