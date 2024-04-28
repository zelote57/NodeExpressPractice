/* Usando File System 
y Template String
`: ALT+96
*/

const fs = require('fs');

const userName = 'Simba';

fs.writeFile('text-data.txt', `Nombre de Usuario: ${userName}`, (err)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log('archivo creado satisfactoriamente');
});