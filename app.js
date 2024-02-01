const express = require('express');
const socketIo = require('socket.io');
const http = require('http')
const cors = require('cors')

const app = express();
app.use(cors());
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

 server.listen(process.env.Port||8080,function(){
    console.log('Server is runing at http://localhost:8080');
});



