import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Nav from "./Nav.admin";
import ModalMessageAdmin from "./ModalMessageAdmin";

function MessageAdmin() {
  const [messageAdminData, setMessageAdminData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const getAllMessage = async () => {
    try {
      const ret = await axios.get("http://localhost:5000/contact/message/all");
      setMessageAdminData(ret.data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const deleteMessage = (id) => {
    setSelectedId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getAllMessage();
  }, [deleteMessage]);

  return (
    <div className="messageAdmin">
      <Nav />
      <div className="messageAdminList">
        <h1>Messages</h1>
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
                <button type="button" onClick={() => deleteMessage(element.id)}>
                  <AiFillCloseCircle id="messageAdminCloseBtn" />
                </button>
              </div>
            </li>
          ))}
      </div>
      <ModalMessageAdmin
        open={isOpen}
        close={setIsOpen}
        selectedId={selectedId}
      />
    </div>
  );
}

export default MessageAdmin;
