import React from "react";
import mdameCoucou from "@assets/landing page/image2.svg";
import PropTypes from "prop-types";

function Modal({ open, closeModal, onReset }) {
  if (!open) return null;

  const handleClose = () => {
    closeModal();
    onReset();
  };

  return (
    <div className="modalDiv">
      <div className="modalContainer">
        <div className="modalDivFirst">
          <img
            src={mdameCoucou}
            id="mdameCouou"
            alt="dessin d'une femme avec son ordinateur"
          />
        </div>
        <div className="modalDivBis">
          <h4>
            Merci pour votre message, nous vous répondrons dans les plus brefs
            délais.
          </h4>
          <button
            type="button"
            className="navBtnLite-Modal"
            onClick={handleClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  onReset: PropTypes.func,
};

export default Modal;
