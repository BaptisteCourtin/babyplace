import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Messages({ Nom, Email, Photo_profil, Structure_id }) {
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    setRoom("1");
    socket.emit("join_room", room);
  };

  useEffect(() => {
    console.log(room);
  }, [joinRoom]);

  return (
    <div className="messages">
      <div className="messagesShortsAffich">
        <h2>Messagerie</h2>
        <div className="userPart">
          <img src={Photo_profil} alt="photo de profil" id="profilImg" />
          <div className="profilText">
            <p>
              <span>{Nom}</span>
            </p>
            <p id="email">{Email}</p>
          </div>
        </div>
        <div className="messages-affichage">
          <div className="salonsMessages">
            <button type="button" onClick={joinRoom}>
              Joindre Conversation
            </button>
          </div>
        </div>
      </div>
      <div className="conversationAffich">
        <Chat socket={socket} username={Nom} room={room} />
      </div>
    </div>
  );
}

export default Messages;
