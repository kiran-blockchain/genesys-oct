
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


io.on("connection", (socket) => {
  // ...
  console.log(socket.id);

  socket.on('disconnect',()=>{
      console.log("User Disconnected =",socket.id)
  });
  socket.on("privateMessage",(userid,data)=>{
      io.to(userid).emit(data);
  })

  io.emit("groupMessage",socket.id+" has joined.");
  //listen to the chat message sent by the client

  socket.on('chat',(data)=>{
      console.log(data);
      io.emit('groupMessage',data)
  })
  socket.emit("Welcome","I am the message from server");
});
app.get("/",(req,res)=>{
    const filePath =__dirname;
    console.log(filePath)
    res.sendFile(filePath+"/client/index.html");
})
httpServer.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server running on port 3000");
    }
});
