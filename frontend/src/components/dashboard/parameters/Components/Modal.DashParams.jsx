import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import logo from "@assets/logo5.svg";

function ModalDashParams({
  deleteModal,
  openDeleteModal,
  closeDeleteModal,
  deleteAccount,
  setDeleteMail,
}) {
  return (
    <>
      {deleteModal && (
        <ReactModal
          isOpen={openDeleteModal}
          onRequestClose={closeDeleteModal}
          className="deleteContainer"
        >
          <button
            type="button"
            className="deleteContainerClose"
            onClick={closeDeleteModal}
          >
            X
          </button>
          <div type="button" className="deleteContainerHeader">
            <img src={logo} />
            <h2>Babyplace</h2>
          </div>
          <p className="deleteContainerText">
            Etes vous sûr de vouloir supprimer votre compte ?
            <br />
            Cette action est <span>définitive et irréversible</span>
            <br />
            Entrez votre <span>adresse email</span> afin de confirmer la
            suppression de votre compte
          </p>
          <form
            className="deleteContainerInput"
            onSubmit={(e) => deleteAccount(e)}
          >
            <input
              required
              type="email"
              name="deleteConfirm"
              id="deleteConfirm"
              placeholder="Adresse mail"
              onChange={(e) => {
                setDeleteMail(e.target.value);
              }}
            />
            <button className="deleteContainerBtn" type="submit">
              Supprimer
            </button>
          </form>
        </ReactModal>
      )}
    </>
  );
}

ModalDashParams.propTypes = {
  deleteModal: PropTypes.bool.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setDeleteMail: PropTypes.func.isRequired,
};

export default ModalDashParams;
