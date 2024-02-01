const express = require('express');
const socketIo = require('socket.io');
const http = require('http')

const app = express();
const server = http.createServer(app)

const io = socketIo(server)

io.on("connection",(clinet)=>{
    console.log("new clinet connected")
    console.log(clinet.id)

    clinet.on('slocation',(data)=>{
    console.log(data)

    clinet.broadcast.emit('rlocation', data)
    })
})

 server.listen(5000,function(){
    console.log('Server is runing at http://localhost:5000');
});



