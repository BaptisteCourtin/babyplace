import React from "react";
import mdameCoucou from "@assets/landing page/image2.svg";

function Modal({ open, closeModal }) {
  if (!open) return null;

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="modalDiv">
      <div className="modalContainer">
        <div className="modalDivFirst">
          <img src={mdameCoucou} id="mdameCouou" />
        </div>
        <div className="modalDivBis">
          <h4>
            Merci pour votre message, nous vous repondrons dans les plus bref
            délais.
          </h4>
          <button className="navBtnLite-Modal" onClick={handleClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
