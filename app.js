const express = require('express');
const app = express();
var ip = require('ip');

app.get('/' ,(req ,res)=>{
    console.log(ip.address())
    res.send(ip.address())
})
app.listen(3000,()=>{
    console.log(`The server is listen on the port no http://localhost:${3000}`)
})