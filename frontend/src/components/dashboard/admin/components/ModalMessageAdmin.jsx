import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

function ModalMessageAdmin({ open, close, selectedId }) {
  if (!open) return null;

  const deleteMessage = async () => {
    const id = selectedId;
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_PATH}/contact/message/all/${id}`
      );
      close();
      console.warn(res.data);
      toast.success("Le message à bien été supprimé");
    } catch (err) {
      toast.error(err.message);
    }
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
          <button type="submit" id="btnRepondre" onClick={deleteMessage}>
            OUI
          </button>
          <button type="submit" id="btnDelete" onClick={close}>
            NON
          </button>
        </div>
      </div>
    </div>
  );
}

ModalMessageAdmin.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  selectedId: PropTypes.string,
};

export default ModalMessageAdmin;
