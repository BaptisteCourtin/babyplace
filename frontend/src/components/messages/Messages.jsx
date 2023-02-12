import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import PropTypes from "prop-types";
import Chat from "./Chat";

const socket = io.connect(`${import.meta.env.VITE_SOCKET}`);

function Messages({ nom, prenom, email, photoProfil, structureId }) {
  const [room, setRoom] = useState("");
  const [title, setTitle] = useState("");
  const [strucData, setStrucData] = useState([]);
  const [selected, setSelected] = useState(false);

  const getStructureForMess = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/all`)
      .then((ret) => {
        setStrucData(ret.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const joinRoom = async () => {
    await socket.emit("join_room", room);
  };

  useEffect(() => {
    getStructureForMess();
    socket.emit("auth", structureId);
  }, []);

  return (
    <div className="messages">
      <div className="messagesShortsAffich">
        <h2>Messagerie</h2>
        <div className="userPart">
          <img src={photoProfil} alt="profil" id="profilImg" />
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
              strucData.map((element) => (
                <li
                  className={
                    selected && element.email === title
                      ? "selected contactList"
                      : "contactList"
                  }
                  key={element.familleId}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(true);
                      setRoom(structureId + element.familleId);
                      setTitle(element.email);
                    }}
                    id="btn-affiche-con"
                  >
                    {element.email}
                  </button>
                </li>
              ))}
          </div>
        </div>
      </div>
      <div className="conversationAffich">
        {room !== "" ? (
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

Messages.propTypes = {
  nom: PropTypes.string,
  prenom: PropTypes.string,
  email: PropTypes.string,
  photoProfil: PropTypes.string,
  structureId: PropTypes.number,
};

export default Messages;
