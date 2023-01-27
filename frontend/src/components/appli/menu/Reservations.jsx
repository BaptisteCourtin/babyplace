import React, { useState, useEffect } from "react";
import axios from "axios";
import CardResaPlat from "@components/appli/menu/CardResaPlat";
import PropTypes from "prop-types";

function Reservations({ setCompo, familleId }) {
  const [allReservation, setAllReservation] = useState([]);

  const getAllReservation = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/getReservationPayed/${familleId}`)
      .then((res) => {
        setAllReservation(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getAllReservation();
  }, [familleId]);

  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Réservations`}
        </button>
      </div>
      <main className="reservation">
        {allReservation.map((each) => (
          <CardResaPlat each={each} />
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
