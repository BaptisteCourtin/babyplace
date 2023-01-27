import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";

function AppliPlaces({ dataDateHeure, setDataDateHeure }) {
  const resetDateHeure = () => {
    for (const key in dataDateHeure) {
      setDataDateHeure((prevState) => ({
        ...prevState,
        [key]: "",
      }));
    }
  };

  const visuelJour = () => {
    if (typeof dataDateHeure.jour === "number") {
      const myDay = dataDateHeure.jour;

      switch (myDay) {
        case 0:
          return "Lundi";
        case 1:
          return "Mardi";
        case 2:
          return "Mercredi";
        case 3:
          return "Jeudi";
        case 4:
          return "Vendredi";
        case 5:
          return "Samedi";
        case 6:
          return "Dimanche";

        default:
          return "Lundi";
      }
    }
    return dataDateHeure.jour.split("&")[0];
  };

  const value = new Date(); // date de base occas
  const [isOccasionnel, setIsOccasionnel] = useState(0);

  const ChangeDateHeure = (e, what) => {
    setDataDateHeure((prevState) => ({
      ...prevState,
      [what]: e,
    }));
  };

  // --- version occas ---

  const [clickedDay, setClickedDay] = useState(""); // version full

  const afficheDate = () => {
    const jour = `${clickedDay.getFullYear()}-${
      clickedDay.getMonth() + 1
    }-${clickedDay.getDate()}`;

    ChangeDateHeure(jour + "&" + clickedDay.getDay(), "jour");
  };
  useEffect(() => {
    if (clickedDay !== "") afficheDate();
  }, [clickedDay]);

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
                onChange={() => ChangeDateHeure(0, "jour")}
              />
              <label htmlFor="Lundi">L</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Mardi"
                value="Mardi"
                onChange={() => ChangeDateHeure(1, "jour")}
              />
              <label htmlFor="Mardi">M</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Mercredi"
                value="Mercredi"
                onChange={() => ChangeDateHeure(2, "jour")}
              />
              <label htmlFor="Mercredi">M</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Jeudi"
                value="Jeudi"
                onChange={() => ChangeDateHeure(3, "jour")}
              />
              <label htmlFor="Jeudi">J</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Vendredi"
                value="Vendredi"
                onChange={() => ChangeDateHeure(4, "jour")}
              />
              <label htmlFor="Vendredi">V</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Samedi"
                value="Samedi"
                onChange={() => ChangeDateHeure(5, "jour")}
              />
              <label htmlFor="Samedi">S</label>
            </li>
            <li>
              <input
                type="radio"
                name="jour"
                id="Dimanche"
                value="Dimanche"
                onChange={() => ChangeDateHeure(6, "jour")}
              />
              <label htmlFor="Dimanche">D</label>
            </li>
          </div>

          <div className="choose-hour">
            {dataDateHeure.jour !== "" && (
              <div className="my-hour">
                <p>Ouvert de </p>
                <div className="horaireOuvert">
                  <input
                    type="time"
                    onChange={(e) => {
                      ChangeDateHeure(e.target.value, "heureMin");
                    }}
                  />
                  <p>à</p>
                  <input
                    type="time"
                    onChange={(e) => {
                      ChangeDateHeure(e.target.value, "heureMax");
                    }}
                  />
                </div>
              </div>
            )}
            <div className="heureActuel">
              <div className="jour">
                <p>jour actuellement choisi : </p>
                <span>{visuelJour()}</span>
              </div>
              {dataDateHeure.jour !== "" && (
                <p className="heure">
                  heures actuellement choisies : de{" "}
                  <span>{dataDateHeure.heureMin}</span> à{" "}
                  <span>{dataDateHeure.heureMax}</span>
                </p>
              )}
            </div>
            <button type="button" onClick={() => resetDateHeure()}>
              Reset
            </button>
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
          />
          <div className="choose-hour">
            {dataDateHeure.jour !== "" && (
              <div className="my-hour">
                <p>Ouvert de </p>
                <div className="horaireOuvert">
                  <input
                    type="time"
                    onChange={(e) => {
                      ChangeDateHeure(e.target.value, "heureMin");
                    }}
                  />
                  <p>à</p>
                  <input
                    type="time"
                    onChange={(e) => {
                      ChangeDateHeure(e.target.value, "heureMax");
                    }}
                  />
                </div>
              </div>
            )}
            <div className="heureActuel">
              <div className="jour">
                <p>jour actuellement choisi : </p>
                <span>{visuelJour()}</span>
              </div>
              {dataDateHeure.jour !== "" && (
                <p className="heure">
                  heures actuellement choisies : de{" "}
                  <span>{dataDateHeure.heureMin}</span> à{" "}
                  <span>{dataDateHeure.heureMax}</span>
                </p>
              )}
            </div>
            <button type="button" onClick={() => resetDateHeure()}>
              Reset
            </button>
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
