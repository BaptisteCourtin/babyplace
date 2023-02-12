import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";
import { GoFile } from "react-icons/go";
import ReactModal from "react-modal";
import usePutReservations from "../Hooks/usePutReservations";

function StatusDashReservations({ r, updateStatus, getReser }) {
  const [modal, setModal] = useState(false);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const { updateDates } = usePutReservations();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const sendDates = async (e, reserId, dateStart, dateEnd) => {
    e.preventDefault();
    try {
      await updateDates(reserId, dateStart, dateEnd);
      await getReser();
      closeModal();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {r.status === "waiting" ? (
        <div className="reserChoice">
          <button
            type="button"
            onClick={
              /\d/.test(r.jour)
                ? () => updateStatus("approved", r.id)
                : () => openModal()
            }
          >
            <MdCheckCircleOutline />
            Accepter
          </button>
          <button type="button" onClick={() => updateStatus("refused", r.id)}>
            <MdOutlineCancel /> Refuser
          </button>
        </div>
      ) : r.status === "approved" || r.status === "refused" ? (
        <div className="reserModif">
          <button type="button" onClick={() => updateStatus("waiting", r.id)}>
            <GoFile />
            Modifier
          </button>
        </div>
      ) : (
        <div className="reserPayed">
          <p>Réservation déjà passée</p>
        </div>
      )}
      {modal && (
        <ReactModal
          isOpen={openModal}
          onRequestClose={closeModal}
          className="dateChoiceContainer"
        >
          <form
            className="dateChoiceInner"
            onSubmit={(e) => sendDates(e, r.id, dateStart, dateEnd)}
          >
            <h2>Choisir des dates</h2>
            <div className="dateInputContainer">
              <label htmlFor="dateStart">Date de début</label>
              <input
                type="date"
                name="dateStart"
                id="dateStart"
                min={new Date().toISOString().slice(0, -8).split("T")[0]}
                onChange={(e) => setDateStart(e.target.value)}
                required
              />
            </div>
            <div className="dateInputContainer">
              <label htmlFor="dateEnd">Date de fin</label>
              <input
                type="date"
                name="dateEnd"
                id="dateEnd"
                min={new Date().toISOString().slice(0, -8).split("T")[0]}
                onChange={(e) => setDateEnd(e.target.value)}
                required
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </ReactModal>
      )}
    </>
  );
}

StatusDashReservations.propTypes = {
  r: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired,
  getReser: PropTypes.func.isRequired,
};

export default StatusDashReservations;
