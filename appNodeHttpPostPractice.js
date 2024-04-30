const http = require('http');

const server = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html');
    
    if (req.method === 'POST'){
        console.log('Llego un POST');

        let myBody = '';

        req.on('data', (chunk)=>{
            myBody += chunk;
        });

        req.on('end',()=>{

            let userName = myBody.split('=')[1];

            res.end(`<h1>${userName}</h1>`);
        });
    }
    else {
        console.log('Llego un GET');
        /*literal templates = ALT+96*/
        res.end(`<form method="POST">
        <input type="text" name="username"></input>
        <br><br>
        <button type="submit">Crear Usuario</button>
        </form>`);
    }
});

server.listen(3005);