import React, { useState, useEffect } from "react";
import axios from "axios";
import CardResaPlat from "@components/appli/menu/composant/CardResaPlat";
import PropTypes from "prop-types";

function Reservations({ setCompo, familleId }) {
  // --- get all réservations payées ---
  const [allReservation, setAllReservation] = useState([]);

  const getAllReservation = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/getReservationPayed/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setAllReservation(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getAllReservation(source);
    return () => {
      source.cancel();
    };
  }, [familleId]);

  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Réservations`}
        </button>
      </div>
      <main className="reservation">
        {allReservation.map((each, index) => (
          <CardResaPlat each={each} key={index} />
        ))}
      </main>
    </>
  );
}

Reservations.propTypes = {
  setCompo: PropTypes.func.isRequired,
  familleId: PropTypes.string.isRequired,
};

export default Reservations;
