import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import PropTypes from "prop-types";
import DashCalendar from "../agenda/calendar/DashCalendar";

function DashPlaces({ title, repas }) {
  const days = [
    {
      min: 8,
      max: 18,
      day: "lundi",
    },
    {
      min: 8,
      max: 20,
      day: "mardi",
    },
    {
      min: 8,
      max: 20,
      day: "mercredi",
    },
    {
      min: 8,
      max: 18,
      day: "jeudi",
    },
    {
      min: 8,
      max: 20,
      day: "vendredi",
    },
    {
      min: 14,
      max: 18,
      day: "samedi",
    },
    {
      min: 14,
      max: 18,
      day: "dimanche",
    },
  ];

  const [toggleType, setToggleType] = useState(0);
  const [toggleDay, setToggleDay] = useState("lundi");

  // const [minValue, setMinValue] = useState(8);
  // const [maxValue, setMaxValue] = useState(18);
  // const handleRangeInput = (e) => {
  //     setMinValue(e.minValue);
  //     setMaxValue(e.maxValue);
  // };

  return (
    <div className="dashPlaces">
      <section className="agendaSection">
        <h2>{title}</h2>
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
              (d) =>
                d.day === toggleDay && (
                  <>
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
                    <MultiRangeSlider
                      min={0}
                      max={23}
                      minValue={d.min}
                      maxValue={d.max}
                      step={1}
                    />
                    <div className="dashRangeValues">
                      <p>
                        <img src={open} alt="" /> Ouverture : {d.min}H
                      </p>
                      <p>
                        <img src={close} alt="" /> Fermeture : {d.max}H
                      </p>
                    </div>
                  </>
                )
            )}
            <button className="dashPlacesSubmit" type="submit">
              Modifier
            </button>
          </div>
        ) : (
          <DashCalendar />
        )}
      </section>
      <section className="dashPlacesParams">
        <div className="dashPlacesPrices">
          <h3>Vos tarifs</h3>
          <p>
            Heure <span>6€</span>
          </p>
          <p title="Entre 22h et 6h, dimanche et jour férié">
            Heure spécifique <span>10€</span>
          </p>
          <p title="Au delà de 45h/semaine">
            Heure majorée <span>7€</span>
          </p>
        </div>
        <div className="dashPlacesOptions">
          <h3>Vos options</h3>
          <p>
            Indemnité d'entretien
            <label htmlFor="dshSwitch1" className="dashSwitch">
              <input type="checkbox" id="dashSwitch1" />
              <span className="dashSwitchSlider" />
            </label>
            <span className="dashOptionsPrices">3,5€</span>
          </p>
          <p>
            Indemnité kilométrique
            <label htmlFor="dshSwitch2" className="dashSwitch">
              <input type="checkbox" id="dashSwitch2" />
              <span className="dashSwitchSlider" />
            </label>
            <span className="dashOptionsPrices">0,5€</span>
          </p>
          <p>
            Indemnité de repas
            <label htmlFor="dshSwitch3" className="dashSwitch">
              <input type="checkbox" id="dashSwitch3" />
              <span className="dashSwitchSlider" />
            </label>
            <span className="dashOptionsPrices">{repas}€</span>
          </p>
        </div>
        <ul className="dashPlacesCheckboxes">
          <li>
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">
              Je ne souhaite accueillir que des enfants déjà gardés
            </label>
          </li>
          <li>
            <input type="checkbox" id="check2" />
            <label htmlFor="check2">
              Je ne souhaite accueillir que des profils vérifiés
            </label>
          </li>
          <li>
            <input type="checkbox" id="check3" />
            <label htmlFor="check3">
              Je ne souhaite accueillir que des enfants de plus de 18 mois
            </label>
          </li>
          <li>
            <input type="checkbox" id="check4" />
            <label htmlFor="check4">
              Je ne souhaite accueillir que des enfants de moins de 18 mois
            </label>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DashPlaces;

DashPlaces.propTypes = {
  title: PropTypes.string.isRequired,
};
