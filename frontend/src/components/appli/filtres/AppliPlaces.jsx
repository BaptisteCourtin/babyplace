import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import DashCalendar from "@components/dashboard/agenda/calendar/DashCalendar";

function DashPlaces() {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
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
      min: 8,
      max: 18,
      day: "lundi",
    },
    {
      min: 8,
      max: 18,
      day: "mardi",
    },
    {
      min: 8,
      max: 18,
      day: "mercredi",
    },
    {
      min: 8,
      max: 18,
      day: "jeudi",
    },
    {
      min: 8,
      max: 18,
      day: "vendredi",
    },
    {
      min: 8,
      max: 18,
      day: "samedi",
    },
    {
      min: 8,
      max: 18,
      day: "dimanche",
    },
  ];

  const [toggleType, setToggleType] = useState(0);
  const [toggleDay, setToggleDay] = useState("lundi");

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
                    onInput={(e) => {
                      handleInput(e);
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

export default DashPlaces;
