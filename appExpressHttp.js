const express = require('express');

const app = express();

app.use((req, res, next)=>{
    let body = '';
    
    req.on('end', ()=>{
        const userName = body.split('=')[1]
        if(userName){
            console.log(userName);
            req.body = {name : userName};
        }
        next();
    })

    req.on('data', (chunk)=>{
        body += chunk;
    });    
});

app.use((req, res, next)=>{
    
    if (req.body){
        res.send('User: ' + req.body.name);
    }
    else{
        res.send(`<form method="POST">
         <input type="text" name="user-name"/>
         <button>Create User</button>
         </form>`);
    }
    
    

});

app.listen(5001);