const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
    console.log('server running at 127.0.0.1:3000');
});

function mathfloor(){
    var num = '';
    for(var i=0;i<3;i++){
        num+=Math.floor(Math.random()*10);
    }
    return parseInt(num)
};

function origindata(){
  var newarr=[];
  for(var i=0;i<7;i++){
    newarr[i]=mathfloor()
  }
  return newarr
};

io.on('connection', (socket) => {
    setInterval(()=>{
        io.emit('receiveMessage', origindata() );
    },3000)
  }
)
