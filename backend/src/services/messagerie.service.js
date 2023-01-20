
const { Server } = require("socket.io");

const open = () => {

    let ws = new Server({
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

    ws.on("connection", (socket) => {
        console.log(`User ${socket.id} is connected on the website`);



        socket.on("join_room", (room) => {
            socket.join(room);
            let id = socket.id;
            socket.emit("is_logged", (id));
            console.log(`User with id: ${socket.id} joined the room: ${room}`);
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
