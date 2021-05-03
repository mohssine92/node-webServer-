const express = require('express')

const app = express()
const port = 8080
 


// TODO : require hbs , Role: Motor de palntillas 
app.set('view engine', 'hbs'); 


// Servir contenido estatico , Middelware de express
app.use( express.static('public'));




app.get('/', (req, res) => {
    // esta function de call back sera el controlador 
   // res.send('xxxxxx000');

   res.render('home');


})
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})



app.get('*', (req, res) => {
    // res.send('404 | page not found ') 
    res.sendFile(__dirname + '/public/404.html');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
   

   


 
