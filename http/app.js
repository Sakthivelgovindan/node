const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/') {
        res.write("hello GOolgeçç world");
        res.end();
    }
    else if (req.url === '/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});



server.listen(3000);
console.log('Listening port 3000....');