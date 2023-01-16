import React, { useState, useEffect } from "react";
import TimePicker from "react-time-picker";
import Calendar from "react-calendar";

import PropTypes from "prop-types";

function AppliPlaces({ dataDateHeure, setDataDateHeure }) {
  const value = new Date(); // date de base occas
  const [isOccasionnel, setIsOccasionnel] = useState(0);

  const ChangeDateHeure = (e, what) => {
    setDataDateHeure((prevState) => ({
      ...prevState,
      [what]: e,
    }));
  };

  // --- version occas

  const [clickedDay, setClickedDay] = useState(new Date());
  const chooseOneDay = (e) => {
    setClickedDay(e);
    let jour = e.toString().split(" ");
    jour = `${jour[2]} ${jour[1]} ${jour[3]}`;
    ChangeDateHeure(jour, "jour");
  };

  return (
    <div className="app-calendar">
      <div className="recu-occas">
        <button
          type="button"
          onClick={() => setIsOccasionnel(0)}
          className={isOccasionnel === 0 ? "selected" : ""}
        >
          Récurrent
        </button>
        <button
          type="button"
          onClick={() => setIsOccasionnel(1)}
          className={isOccasionnel === 1 ? "selected" : ""}
        >
          Occasionnel
        </button>
      </div>
      {/* ternaire suivant récurrent ou occasionnel */}
      {isOccasionnel === 0 ? (
        <div className="calendar-recur">
          <div className="container-days">
            <li>
              <input
                type="radio"
                name="jour"
                id="Lundi"
                value="Lundi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Lundi">L</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Mardi"
                value="Mardi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Mardi">M</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Mercredi"
                value="Mercredi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Mercredi">M</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Jeudi"
                value="Jeudi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Jeudi">J</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Vendredi"
                value="Vendredi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Vendredi">V</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Samedi"
                value="Samedi"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Samedi">S</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Dimanche"
                value="Dimanche"
                onChange={(e) => ChangeDateHeure(e.target.value, "jour")}
              />
              <label htmlFor="Dimanche">D</label>
            </li>
          </div>

          <div className="choose-hour">
            <p>
              {`Vous avez choisi ->`} <span>{dataDateHeure.jour}</span>
            </p>
            <p>Ouvert de </p>
            <div className="horaireOuvert">
              <TimePicker
                value={dataDateHeure.heureMin}
                clearIcon={null}
                disableClock={true}
                minTime={"00:00"}
                maxTime={"23:59"}
                onChange={(e) => {
                  ChangeDateHeure(e, "heureMin");
                }}
              />
              <p>à</p>
              <TimePicker
                value={dataDateHeure.heureMax}
                clearIcon={null}
                disableClock={true}
                minTime={"00:00"}
                maxTime={"23:59"}
                onChange={(e) => {
                  ChangeDateHeure(e, "heureMax");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        // ---------------------------
        // si toggle = 1 = occas
        // ---------------------------
        <div className="calendar-occas">
          <Calendar
            locale="fr"
            showNeighboringMonth={false}
            value={clickedDay}
            minDetail="month"
            maxDetail="month"
            minDate={value}
            onClickDay={(e) => {
              chooseOneDay(e);
            }}
          />

          <p>
            {`Vous avez choisi ->`} <span>{dataDateHeure.jour}</span>
          </p>

          <div className="choose-hour">
            <p>Réserver de </p>
            <div className="horaireOuvert">
              <TimePicker
                value={dataDateHeure.heureMin}
                clearIcon={null}
                disableClock={true}
                minTime={"00:00"}
                maxTime={"23:59"}
                onChange={(e) => {
                  ChangeDateHeure(e, "heureMin");
                }}
              />
              <p>à</p>
              <TimePicker
                value={dataDateHeure.heureMax}
                clearIcon={null}
                disableClock={true}
                minTime={"00:00"}
                maxTime={"23:59"}
                onChange={(e) => {
                  ChangeDateHeure(e, "heureMax");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

AppliPlaces.propTypes = {
  dataDateHeure: PropTypes.object.isRequired,
  setDataDateHeure: PropTypes.func.isRequired,
};

export default AppliPlaces;
