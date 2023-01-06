import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Messages({ nom, prenom, email, photoProfil, structureId }) {
  const [room, setRoom] = useState("");
  const [title, setTitle] = useState("");
  const [strucData, setStrucData] = useState([]);
  const [selected, setSelected] = useState(false)

  const getStructureForMess = () => {
    axios
      .get("http://localhost:5000/structure/all")
      .then((ret) => {
        setStrucData(ret.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const joinRoom = async () => {
    console.log(room);
    await socket.emit("join_room", room);
  };

  useEffect(() => {
    getStructureForMess();
  }, []);

  return (
    <div className="messages">
      <div className="messagesShortsAffich">
        <h2>Messagerie</h2>
        <div className="userPart">
          <img src={photoProfil} alt="photo de profil" id="profilImg" />
          <div className="profilText">
            <p>
              <span>{nom}</span>
            </p>
            <p id="email">{email}</p>
          </div>
        </div>
        <div className="messages-affichage">
          <div className="salonsMessages">
            {strucData &&
              strucData
                .filter((f) => !f.nom.includes(nom))
                .map((element) => (
                  <li className={selected && element.nom === title ? "selected contactList" : "contactList"} key={element.crecheId}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(true);
                        setRoom(structureId + element.crecheId);
                        setTitle(element.nom);
                      }}
                      id="btn-affiche-con"
                    >
                      {element.photoProfil && <img src={element.photoProfil} />}
                      {element.nom}
                    </button>
                  </li>
                ))}
          </div>
        </div>
      </div>
      <div className="conversationAffich">
        {room != "" ? (
          <Chat
            socket={socket}
            username={nom || prenom}
            room={room}
            title={title}
            joinRoom={joinRoom}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Messages;
