import React, { useState } from "react";
import madamcoucou from "@assets/img-woman.svg";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-hot-toast";

function ResponseModalAdmin({
  openRes,
  closeRes,
  selectedMail,
  selectedNom,
  selectedPrenom,
  selectedOption,
  selectedMessage,
}) {
  if (!openRes) return null;

  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  const sendRespons = async (e) => {
    e.preventDefault();
    const datas = {
      objet,
      message,
      selectedMail,
      selectedNom,
      selectedPrenom,
      selectedOption,
      selectedMessage,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_PATH}/contact/messages/repondre`,
        datas
      );
      setMessage("");
      setObjet("");
      closeMod();
      console.warn(res.data);
      toast.success("Votre mail a bien été envoyé !");
    } catch (err) {
      console.error(err.response);
      toast.error(err.message);
    }
  };

  const closeMod = () => {
    closeRes(!openRes);
  };

  return (
    <div className="responseModalAdmin">
      <div className="responseModalContainer">
        <div className="responseModalBody">
          <div className="leftBodyContainer">
            <img
              src={madamcoucou}
              alt="dessin d'une femme avec son ordinateur"
              width="85%"
              height="85%"
            />
          </div>
          <div className="rightBodyContainer">
            <div className="rightBodyHeader">
              <h4>
                Répondre à <span>{selectedMail}</span>
              </h4>
            </div>
            <div className="formContainer">
              <form className="formContact" onSubmit={sendRespons}>
                <div className="formObjetDiv">
                  <label className="labelFormObjet" htmlFor="objet">
                    Objet<span id="obligatoire">*</span>
                  </label>

                  <input
                    id="objet"
                    type="text"
                    value={objet}
                    onChange={(e) => setObjet(e.target.value)}
                    required
                  />
                </div>
                <div className="formMessageDiv">
                  <label className="labelFormMessage" htmlFor="message">
                    Message<span id="obligatoire">*</span>
                  </label>

                  <textarea
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <span id="obligatoireText">* les champs sont obligatoires</span>
                <div className="modalAdminBtns">
                  <button type="submit" id="btnDelete" onClick={closeMod}>
                    retour
                  </button>
                  <button id="btnRepondre" type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ResponseModalAdmin.propTypes = {
  openRes: PropTypes.bool,
  closeRes: PropTypes.func,
  selectedMail: PropTypes.string,
  selectedNom: PropTypes.string,
  selectedPrenom: PropTypes.string,
  selectedOption: PropTypes.string,
  selectedMessage: PropTypes.string,
};

export default ResponseModalAdmin;
