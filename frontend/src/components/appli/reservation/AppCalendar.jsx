import React, { useState } from "react";
import Calendar from "react-calendar";

import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import PropTypes from "prop-types";

function AppCalendar({
  // choisi par user à envoyer dans demande
  setHeureMin,
  setHeureMax,
  setJour,
  setIsOccasionnel,
  isOccasionnel,
  // suivant le jour
  setThisMinHeure,
  setThisMaxHeure,
  thisMinHeure,
  thisMaxHeure,
  dataHorairesId,
  dataCalendarId,
}) {
  // const { jourSemaine, ouvert, heureMin, heureMax} = dataHorairesId;
  // {date} = dataCalendarId;

  const value = new Date(); // date de base occas

  const chooseTheDay = (e, each) => {
    setJour(e.target.value);
    setThisMinHeure(each.heureMin);
    setThisMaxHeure(each.heureMax);
  };

  // --- version occas

  const [clickedDay, setClickedDay] = useState(new Date());
  const afficheDate = () => {
    let jour = clickedDay.toString();
    jour = jour.split(" ");
    let jourLong = `${jour[2]} ${jour[1]} ${jour[3]}`;
    setJour(jourLong);

    if (jour[0] === "Mon") {
      setThisMinHeure(dataHorairesId[0].heureMin);
      setThisMaxHeure(dataHorairesId[0].heureMax);
    } else if (jour[0] === "Tue") {
      setThisMinHeure(dataHorairesId[1].heureMin);
      setThisMaxHeure(dataHorairesId[1].heureMax);
    } else if (jour[0] === "Wed") {
      setThisMinHeure(dataHorairesId[2].heureMin);
      setThisMaxHeure(dataHorairesId[2].heureMax);
    } else if (jour[0] === "Thu") {
      setThisMinHeure(dataHorairesId[3].heureMin);
      setThisMaxHeure(dataHorairesId[3].heureMax);
    } else if (jour[0] === "Fri") {
      setThisMinHeure(dataHorairesId[4].heureMin);
      setThisMaxHeure(dataHorairesId[4].heureMax);
    } else if (jour[0] === "Sat") {
      setThisMinHeure(dataHorairesId[5].heureMin);
      setThisMaxHeure(dataHorairesId[5].heureMax);
    } else if (jour[0] === "Sun") {
      setThisMinHeure(dataHorairesId[6].heureMin);
      setThisMaxHeure(dataHorairesId[6].heureMax);
    }
    return jourLong;
  };

  // --- enlever des jours ---

  const EnleverCase = ({ date }) => {
    if (
      (date.getDay() === 1 && dataHorairesId[0].ouvert === 0) ||
      (date.getDay() === 2 && dataHorairesId[1].ouvert === 0) ||
      (date.getDay() === 3 && dataHorairesId[2].ouvert === 0) ||
      (date.getDay() === 4 && dataHorairesId[3].ouvert === 0) ||
      (date.getDay() === 5 && dataHorairesId[4].ouvert === 0) ||
      (date.getDay() === 6 && dataHorairesId[5].ouvert === 0) ||
      (date.getDay() === 0 && dataHorairesId[6].ouvert === 0)
    ) {
      return true;
    }

    if (dataCalendarId[0]) {
      let result = false;

      for (let i = 0; i < dataCalendarId.length; i++) {
        if (Date.parse(date) === Date.parse(dataCalendarId[i].date)) {
          result = true;
        }
      }
      return result;
    }
  };

  // --- classname et couleur des cases ---

  const CaseClassName = ({ date }) => {
    if (
      (date.getDay() === 1 && dataHorairesId[0].ouvert === 0) ||
      (date.getDay() === 2 && dataHorairesId[1].ouvert === 0) ||
      (date.getDay() === 3 && dataHorairesId[2].ouvert === 0) ||
      (date.getDay() === 4 && dataHorairesId[3].ouvert === 0) ||
      (date.getDay() === 5 && dataHorairesId[4].ouvert === 0) ||
      (date.getDay() === 6 && dataHorairesId[5].ouvert === 0) ||
      (date.getDay() === 0 && dataHorairesId[6].ouvert === 0)
    ) {
      return "disable-day";
    }

    if (dataCalendarId[0]) {
      let result = "";
      for (let i = 0; i < dataCalendarId.length; i++) {
        if (Date.parse(date) === Date.parse(dataCalendarId[i].date)) {
          result = "disable-day";
        }
      }
      return result;
    }
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
            {dataHorairesId.map((each) => (
              <li>
                {each.ouvert ? (
                  <>
                    <input
                      type="radio"
                      name="days"
                      id={each.jourSemaine}
                      value={each.jourSemaine}
                      onChange={(e) => chooseTheDay(e, each)}
                    />
                    <label htmlFor={each.jourSemaine}>
                      {each.jourSemaine.split("")[0]}
                    </label>
                  </>
                ) : (
                  <label>
                    <p className="nope-cross">X</p>
                  </label>
                )}
              </li>
            ))}
          </div>

          <div className="choose-hour">
            <div className="calendar-logo">
              <p>
                <img src={open} alt="open" /> Ouvre à : {thisMinHeure}H
              </p>
              <p>
                <img src={close} alt="close" /> Ferme à: {thisMaxHeure}H
              </p>
            </div>
            <div className="my-hour">
              <p>Réserver de </p>
              <div className="horaireOuvert">
                <input
                  type="time"
                  min={thisMinHeure}
                  max={thisMaxHeure}
                  onChange={(e) => {
                    setHeureMin(e.target.value);
                  }}
                ></input>
                <p>à</p>
                <input
                  type="time"
                  min={thisMinHeure}
                  max={thisMaxHeure}
                  onChange={(e) => {
                    setHeureMax(e.target.value);
                  }}
                ></input>
              </div>
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
              setClickedDay(e);
            }}
            tileDisabled={(e) => EnleverCase(e)}
            tileClassName={(e) => CaseClassName(e)}
          />

          <p>
            {`Vous avez choisi ->`} <span>{afficheDate()}</span>
          </p>

          <div className="choose-hour">
            <div className="calendar-logo">
              <p>
                <img src={open} alt="open" /> Ouvre à : {thisMinHeure}H
              </p>
              <p>
                <img src={close} alt="close" /> Ferme à: {thisMaxHeure}H
              </p>
            </div>
            <div className="my-hour">
              <p>Réserver de </p>
              <div className="horaireOuvert">
                <input
                  type="time"
                  min={thisMinHeure}
                  max={thisMaxHeure}
                  onChange={(e) => {
                    setHeureMin(e.target.value);
                  }}
                ></input>
                <p>à</p>
                <input
                  type="time"
                  min={thisMinHeure}
                  max={thisMaxHeure}
                  onChange={(e) => {
                    setHeureMax(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

AppCalendar.propTypes = {
  setHeureMin: PropTypes.func.isRequired,
  setHeureMax: PropTypes.func.isRequired,
  setJour: PropTypes.func.isRequired,
  dataHorairesId: PropTypes.array.isRequired,
};

export default AppCalendar;
