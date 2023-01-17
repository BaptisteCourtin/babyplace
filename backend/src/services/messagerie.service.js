
const { Server } = require("socket.io");

let sockets = [];

const findSocket = (id) => {
    return sockets.find((element) => element.id === id);
};

const removeSocket = (socketId) => {
    let i = sockets.findIndex((element) => element.socket.id === socketId);
    if (i != -1) sockets.splice(i, 1);
};

const open = () => {

    let ws = new Server({
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

    ws.on("connection", (socket) => {
        console.log(`User ${socket.id} is connected on the website`);

        socket.on("auth", (data) => {
            let s = findSocket(data);
            if (s) removeSocket(s.socket.id);

            sockets.push({
                id: data,
                date: Date.now(),
                socket: socket
            });
            console.log(sockets[0])
            console.log(`WebSocket clientId connected is : ${sockets[0].id}`);
        });


        socket.on("join_room", (room) => {
            socket.join(room);
            let id = sockets[0].id;
            socket.emit("is_logged", (id));
            console.log(`User with id: ${sockets[0].id} joined the room: ${room}`);
        });

        socket.on("send_message", (data) => {
            socket.to(data.room).emit("receive_message", data);
        });

        socket.on("disconnect", () => {
            console.log(`User Disconnected: ${socket.id}`);
        });
    });

    ws.listen(3001, () => {
        console.log("Chat server is running on 3001");
    });

}

module.exports = {
    open
};
