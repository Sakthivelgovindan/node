const  fs = require('fs');

const file = fs.readdirSync('./');
console.log(file);

fs.readdir('$',function(err,res){
    if(err) console.log("error : "+ err);
    else console.log("files",res);
});