const http = require('http');

/* Archivo ertrada de la app */

http.createServer((req, res) => {

       /*  res.writeHead(200, {'Content-Type': 'text/plain'})  */
      /* res.writeHead(200, {'Content-Type': 'application/json'}) */


 

    res.write('hola1 ');
    res.end();

})
.listen(8080);

console.log('Lesteninng on port 8080'); 