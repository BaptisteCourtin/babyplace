import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function ModalMessageAdmin({ open, close, selectedId }) {
  if (!open) return null;

  const deleteMessage = async () => {
    const id = selectedId;
    try {
      const res = await axios.delete(`http://localhost:5000/contact/message/all/${id}`);
      close();
      toast.success("Le message à bien été supprimé")
    } catch (err) {
      toast.error(err.message);
    };
  };

  return (
    <div className="modalAdminDiv">
      <div className="modalAdminContainer">
        <div className="modalAdminHeader">
          <h4>Confirmation</h4>
        </div>
        <div className="modalAdminBody">
          <p>Etes-vous sûr de vouloir supprimer ce message ?</p>
        </div>
        <div className="modalAdminBtns">
          <button id="btnRepondre" onClick={deleteMessage}>
            OUI
          </button>
          <button id="btnDelete" onClick={close}>
            NON
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMessageAdmin;
