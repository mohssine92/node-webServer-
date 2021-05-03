const express = require('express')

const app = express()
const port = 8080
 
// Servir contenido estatico , Middelware de express
app.use( express.static('public'));


app.get('/hi', (req, res) => {
    res.send('hi Mohssine')
})

app.get('*', (req, res) => {
    // res.send('404 | page not found ') 
    res.sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
   

   


 
