const express = require('express');
var app = express();

app.get('/',(req,res) => {
    res.send("hello world this thegkafmdsadmnas");
});

app.listen(3000);
console.log("listening port 3000....")