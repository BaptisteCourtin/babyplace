import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import DashCalendar from "@components/dashboard/agenda/calendar/DashCalendar";
import PropTypes from "prop-types";

function DashPlaces({ setHeureMin, setHeureMax, setJour, dataHorairesId }) {
  // const { jourSemaine, ouvert, heureMin, heureMax, jourId } = dataHorairesId;

  const [toggleType, setToggleType] = useState(0);
  const [toggleDay, setToggleDay] = useState("lundi");

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const handleSlider = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
    // remonte les valeurs
    setHeureMin(e.minValue);
    setHeureMax(e.maxValue);
    setJour(toggleDay);
  };

  const [clickedDay, setClickedDay] = useState(new Date());

  const afficheDate = () => {
    let jour = clickedDay.toString();
    jour = jour.split(" ");
    jour = `${jour[2]} ${jour[1]}  ${jour[3]}`;
    return jour;
  };

  const days = [
    {
      min: dataHorairesId ? dataHorairesId[0].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[0].heureMax : 18,
      day: "lundi",
    },
    {
      min: dataHorairesId ? dataHorairesId[1].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[1].heureMax : 18,
      day: "mardi",
    },
    {
      min: dataHorairesId ? dataHorairesId[2].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[2].heureMax : 18,
      day: "mercredi",
    },
    {
      min: dataHorairesId ? dataHorairesId[3].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[3].heureMax : 18,
      day: "jeudi",
    },
    {
      min: dataHorairesId ? dataHorairesId[4].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[4].heureMax : 18,
      day: "vendredi",
    },
    {
      min: dataHorairesId ? dataHorairesId[5].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[5].heureMax : 18,
      day: "samedi",
    },
    {
      min: dataHorairesId ? dataHorairesId[6].heureMin : 8,
      max: dataHorairesId ? dataHorairesId[6].heureMax : 18,
      day: "dimanche",
    },
  ];

  return (
    <div className="appli-dashPlaces">
      <div className="dashPlacesType">
        <button
          type="button"
          onClick={() => setToggleType(0)}
          className={toggleType === 0 ? "selected" : ""}
        >
          Récurrent
        </button>
        <button
          type="button"
          onClick={() => setToggleType(1)}
          className={toggleType === 1 ? "selected" : ""}
        >
          Occasionnel
        </button>
      </div>
      {toggleType === 0 ? (
        <div className="dashPlacesRange">
          {days.map(
            (each) =>
              each.day === toggleDay && (
                <>
                  {/* ternaire suivant si structure ou filtres */}
                  {dataHorairesId ? (
                    <ul className="dashPlacesDays">
                      {dataHorairesId[0].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="lundi"
                            value="lundi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="lundi"
                            className={toggleDay === "lundi" ? "selected" : ""}
                          >
                            L
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}
                      {dataHorairesId[1].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="mardi"
                            value="mardi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="mardi"
                            className={toggleDay === "mardi" ? "selected" : ""}
                          >
                            M
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}

                      {dataHorairesId[2].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="mercredi"
                            value="mercredi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="mercredi"
                            className={
                              toggleDay === "mercredi" ? "selected" : ""
                            }
                          >
                            M
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}

                      {dataHorairesId[3].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="jeudi"
                            value="jeudi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="jeudi"
                            className={toggleDay === "jeudi" ? "selected" : ""}
                          >
                            J
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}

                      {dataHorairesId[4].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="vendredi"
                            value="vendredi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="vendredi"
                            className={
                              toggleDay === "vendredi" ? "selected" : ""
                            }
                          >
                            V
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}

                      {dataHorairesId[5].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="samedi"
                            value="samedi"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="samedi"
                            className={toggleDay === "samedi" ? "selected" : ""}
                          >
                            S
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}
                      {dataHorairesId[6].ouvert ? (
                        <li>
                          <input
                            type="radio"
                            name="days"
                            id="dimanche"
                            value="dimanche"
                            onChange={(e) => setToggleDay(e.target.value)}
                          />
                          <label
                            htmlFor="dimanche"
                            className={
                              toggleDay === "dimanche" ? "selected" : ""
                            }
                          >
                            D
                          </label>
                        </li>
                      ) : (
                        <li>
                          <label>
                            <p className="nope-cross">X</p>
                          </label>
                        </li>
                      )}
                    </ul>
                  ) : (
                    <ul className="dashPlacesDays">
                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="lundi"
                          value="lundi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="lundi"
                          className={toggleDay === "lundi" ? "selected" : ""}
                        >
                          L
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="mardi"
                          value="mardi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="mardi"
                          className={toggleDay === "mardi" ? "selected" : ""}
                        >
                          M
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="mercredi"
                          value="mercredi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="mercredi"
                          className={toggleDay === "mercredi" ? "selected" : ""}
                        >
                          M
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="jeudi"
                          value="jeudi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="jeudi"
                          className={toggleDay === "jeudi" ? "selected" : ""}
                        >
                          J
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="vendredi"
                          value="vendredi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="vendredi"
                          className={toggleDay === "vendredi" ? "selected" : ""}
                        >
                          V
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="samedi"
                          value="samedi"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="samedi"
                          className={toggleDay === "samedi" ? "selected" : ""}
                        >
                          S
                        </label>
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="days"
                          id="dimanche"
                          value="dimanche"
                          onChange={(e) => setToggleDay(e.target.value)}
                        />
                        <label
                          htmlFor="dimanche"
                          className={toggleDay === "dimanche" ? "selected" : ""}
                        >
                          D
                        </label>
                      </li>
                    </ul>
                  )}

                  {/* voir pour les demi / quart d'heure */}
                  <MultiRangeSlider
                    min={dataHorairesId ? each.min.split(":")[0] : 0}
                    max={dataHorairesId ? each.max.split(":")[0] : 24}
                    minValue={
                      dataHorairesId ? each.min.split(":")[0] : each.min
                    }
                    maxValue={
                      dataHorairesId ? each.max.split(":")[0] : each.max
                    }
                    step={1}
                    onInput={(e) => {
                      handleSlider(e);
                    }}
                  />
                  <div className="dashRangeValues">
                    <p>
                      <img src={open} alt="open" /> Ouvre à : {minValue}H
                    </p>
                    <p>
                      <img src={close} alt="close" /> Ferme à: {maxValue}H
                    </p>
                  </div>
                </>
              )
          )}
        </div>
      ) : (
        <div className="appli-calendar">
          <DashCalendar setClickedDay={setClickedDay} clickedDay={clickedDay} />
          <p>
            {`Vous avez choisi ->`} <span>{afficheDate()}</span>
          </p>
        </div>
      )}
    </div>
  );
}

DashPlaces.propTypes = {
  setHeureMin: PropTypes.func.isRequired,
  setHeureMax: PropTypes.func.isRequired,
  setJour: PropTypes.func.isRequired,
  dataHorairesId: PropTypes.array.isRequired,
};

export default DashPlaces;
