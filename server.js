// Importamos Express que para hacer web servers
const express = require('express');
// Creamos un App de express
const app = express()
// Le decimos a ese App que sirva todos los archivos en la carpeta /public
app.use(express.static('src'));
// Indicamos al server que debe escuchar en el puerto 3000 🚀
app.listen(3000 , () => {
    console.log( "app running on port 3000 🚀" )
    console.log( "ve al navegador y coloca localhost:3000" )
    console.log( "ahora configura scss, abre otra rerminal y" )
    console.log( "rpn run sass" )
    })