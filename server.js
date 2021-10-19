const httpServer= require("http").createServer();
const io=require("socket.io")(httpServer,{
    cors: {
        origin: "http://localhost:3000",
    },
}

);

io.on("connection", (socket)=>{
    socket.on("chat", (args) => {
        socket.broadcast.emit("chat", args);
    })
})

httpServer.listen(3001);