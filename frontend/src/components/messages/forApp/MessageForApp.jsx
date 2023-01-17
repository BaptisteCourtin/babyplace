import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaMoneyBillAlt } from "react-icons/fa";


const socket = io.connect("http://localhost:3001");

function MessageForApp() {

  const [room, setRoom] = useState("");
  const [title, setTitle] = useState("");
  const [strucData, setStrucData] = useState([]);
  const [selected, setSelected] = useState(false)
  const [familleData, setFamilleData] = useState([]);
  const [username, setUsername] = useState("");

  const getStructureForMess = () => {
    axios
      .get("http://localhost:5000/structure/all")
      .then((ret) => {
        console.log(ret.data);
        setStrucData(ret.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getFamilleForMess = () => {
    axios
      .get("http://localhost:5000/famille/all")
      .then((ret) => {
        console.log(ret.data);
        setFamilleData(ret.data);
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
    getFamilleForMess();
  }, []);



  return (
    <div className="messagesForApp">
      <div className="messagesShortsAffichForApp">
        <div className="messages-affichageForApp">
          <div className="salonsMessagesForApp">
            {strucData &&
              strucData
                .map((element) => (
                  <li className={selected && element.nom === title ? "selected contactListForApp" : "contactListForApp"} key={element.familleId}>
                    <NavLink to="/appli/message/room">
                      <button onClick={() => {
                        setSelected(true);
                        setRoom(2);
                        setTitle(element.nom);
                      }}
                        id="btn-affiche-conForApp"
                      >
                        {element.photoProfil && <img src={element.photoProfil} />}
                        {element.nom}
                      </button>
                    </NavLink>

                  </li>
                ))}
          </div>
        </div>
      </div>

    </div >
  );
}

export default MessageForApp;
