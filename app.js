require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT
 

//Handelbars
// requerido para ubicar archivos respecto mvc
app.set('view engine', 'hbs'); 
// requerido para carga de parciales
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico , Middelware de express
app.use( express.static('public'));


app.get('/', (req, res) => {
    // esta function de call back sera el controlador 
   // res.send('xxxxxx000');
   res.render('home',{
    nombre: 'Fernando Herrera ',
    title: 'Curso de node'
   });

})
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Fernando Herrera ',
        title: 'Curso de node'
    });

})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Fernando Herrera ',
    title: 'Curso de node'
  });

})



app.get('*', (req, res) => {
    // res.send('404 | page not found ') 
    res.sendFile(__dirname + '/public/404.html');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
   

   


 
