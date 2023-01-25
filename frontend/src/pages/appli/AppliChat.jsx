import React from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";
import ChatForApp from "@components/messages/forApp/ChatForApp";
import io from "socket.io-client";

function AppliChat() {
  const room = 2;
  const socket = io.connect("http://localhost:3001");
  const username = "kevindu75@exemple.com";
  const title = "Crêche";

  const joinRoom = async () => {
    console.warn(room);
    await socket.emit("join_room", room);
  };

  return (
    <div className="appli-message">
      <ProfilPlat />
      <main>
        <ChatForApp
          room={room}
          socket={socket}
          title={title}
          joinRoom={joinRoom}
          username={username}
        />
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliChat;
