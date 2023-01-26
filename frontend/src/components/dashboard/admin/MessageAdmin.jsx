import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "./Nav.admin";
import ModalMessageAdmin from "./ModalMessageAdmin";
import ResponseModalAdmin from "./ResponseModalAdmin";

function MessageAdmin() {
  const [messageAdminData, setMessageAdminData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [openRes, setOpenRes] = useState(false);
  const [selectedMail, setSelectedMail] = useState("");
  const [selectedNom, setSelectedNom] = useState("");
  const [selectedPrenom, setSelectedPrenom] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMessage, setSelectedMessage] = useState("");

  const getAllMessage = async () => {
    try {
      const ret = await axios.get(`${import.meta.env.VITE_PATH}/contact/message/all`);
      setMessageAdminData(ret.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteMessage = (id) => {
    setSelectedId(id);
    setIsOpen(!isOpen);
  };

  const repondre = (email, nom, prenom, option, msg) => {
    setSelectedMail(email);
    setSelectedNom(nom);
    setSelectedPrenom(prenom);
    setSelectedOption(option);
    setSelectedMessage(msg);
    setOpenRes(!openRes);
  };

  const closeRes = () => {
    getAllMessage();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getAllMessage();
  }, []);

  return (
    <div className="messageAdmin">
      <Nav />
      <div className="messageAdminList">
        <h1>Messages</h1>
        <div className="messageAdminListBis">
          {messageAdminData &&
            messageAdminData.map((element) => (
              <li key={element.id}>
                <div className="messageListAdminContainer">
                  <div className="messageListAdminHeader">
                    <h4>
                      {element.prenom} {element.nom}
                    </h4>
                    <div className="messageListEmail">{element.email}</div>
                  </div>
                  <div className="optionSelected">{element.optionSelected}</div>
                  <div className="messageListAdminBody">{element.texte}</div>
                  <div className="adminMessageBtn">
                    <button
                      type="submit"
                      id="btnRepondre"
                      onClick={() =>
                        repondre(
                          element.email,
                          element.nom,
                          element.prenom,
                          element.optionSelected,
                          element.texte
                        )
                      }
                    >
                      Répondre
                    </button>
                    <button
                      type="submit"
                      id="btnDelete"
                      onClick={() => deleteMessage(element.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </div>
      </div>
      <ModalMessageAdmin
        open={isOpen}
        close={closeRes}
        selectedId={selectedId}
      />
      <ResponseModalAdmin
        openRes={openRes}
        closeRes={setOpenRes}
        selectedMail={selectedMail}
        selectedNom={selectedNom}
        selectedPrenom={selectedPrenom}
        selectedOption={selectedOption}
        selectedMessage={selectedMessage}
      />
    </div>
  );
}

export default MessageAdmin;
