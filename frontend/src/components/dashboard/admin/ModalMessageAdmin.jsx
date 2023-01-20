import React from "react";
import axios from "axios";

function ModalMessageAdmin({ open, close, selectedId }) {
  if (!open) return null;

  const deleteMessage = () => {
    const id = selectedId;
    axios.delete(`http://localhost:5000/contact/message/all/${id}`);
    closeModal();
  };
  const closeModal = () => {
    close(!open);
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
          <button id="btnDelete" onClick={closeModal}>
            NON
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMessageAdmin;
