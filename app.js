const express = require('express');
const app = express();
const IP = require('ip');

app.get('/' ,(req ,res)=>{
    const ipAddress = IP.address();
    res.send(ipAddress)

})

app.get('/express' ,(req ,res)=>{
    const ipAddress = req.socket.remoteAddress;
    res.send(ipAddress);

})

app.get('/header' ,(req ,res)=>{
    const ipAddresses = req.header('x-forwarded-for');
    res.send(ipAddresses);

})


app.listen(3000,()=>{
    console.log(`The server is listen on the port no http://localhost:${3000}`)
})