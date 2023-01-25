import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function MessageForApp() {
  const [title, setTitle] = useState("");
  const [strucData, setStrucData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [familleData, setFamilleData] = useState([]);

  const getStructureForMess = () => {
    axios
      .get("http://localhost:5000/structure/all")
      .then((ret) => {
        console.warn(ret.data);
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
        console.warn(ret.data);
        setFamilleData(ret.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getStructureForMess();
    getFamilleForMess();
    console.warn(familleData);
  }, []);

  return (
    <div className="messagesForApp">
      <div className="messagesShortsAffichForApp">
        <div className="messages-affichageForApp">
          <div className="salonsMessagesForApp">
            {strucData &&
              strucData.map((element) => (
                <li
                  className={
                    selected && element.nom === title
                      ? "selected contactListForApp"
                      : "contactListForApp"
                  }
                  key={element.familleId}
                >
                  <NavLink to="/appli/message/room">
                    <button
                      type="submit"
                      onClick={() => {
                        setSelected(true);
                        setTitle(element.nom);
                      }}
                      id="btn-affiche-conForApp"
                    >
                      {element.photoProfil && (
                        <img src={element.photoProfil} alt="profil" />
                      )}
                      {element.nom}
                    </button>
                  </NavLink>
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageForApp;
