// const express = require('express');
// const router = express.Router()
// const http = require('http');
// const cors = require("cors");
// const { Server } = require("socket.io");

// const serverChat = http.createServer(router);

// const io = new Server(serverChat, {
//     cors: {
//         origin: "http://localhost:3000/dashboard/messages",
//         methods: ["GET", "POST"],
//     },
// });

// io.on("connection", (socket) => {
//     console.log(`User ${socket.id} is connected`);

//     socket.on("join_room", (data) => {
//         socket.join(data);
//         console.log(`User with id: ${socket.id} joined the room: ${data}`);
//     });

//     socket.on("send_message", (data) => {
//         socket.to(data.room).emit("receive_message", data);
//     });

//     socket.on("disconnect", () => {
//         console.log("User Disconnected", socket.id);
//     });
// });


// serverChat.listen(3001, () => {
//     console.log("SERVER IS RUNNING ON 3001");
// })
