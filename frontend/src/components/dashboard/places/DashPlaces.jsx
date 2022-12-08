import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import PropTypes from "prop-types";
import DashCalendar from "../agenda/calendar/DashCalendar";
import axios from "axios";

function DashPlaces({ type, title, Structure_id, Indemn_repas, Tarif_heure, Tarif_horaire_spec, Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche, Heure_min, Heure_max }) {

  const minTime = Heure_min
  const minHours = Math.floor(minTime / 60)
  const minMinutes = minTime % 60

  const maxTime = Heure_max
  const maxHours = Math.floor(maxTime / 60)
  const maxMinutes = maxTime % 60

  const [toggleType, setToggleType] = useState(0);
  const [toggleDay, setToggleDay] = useState(Lundi);
  const [selected, setSelected] = useState("Lundi");

  const [indemn1, setIndemn1] = useState(5);
  const [switch1, setSwitch1] = useState(() => {
    if (indemn1) {
      return true
    } return false
  })

  const [indemn2, setIndemn2] = useState(0.5);
  const [switch2, setSwitch2] = useState(() => {
    if (indemn2) {
      return true
    } return false
  })

  const [indemn3, setIndemn3] = useState(`${Indemn_repas}`);
  const [switch3, setSwitch3] = useState(() => {
    if (indemn3) {
      return true
    } return false
  })

  const updateDay = async () => {
    const data = {
      id: Structure_id,
      day: selected,
      toggleDay: !toggleDay
    }
    data[selected] = !toggleDay;
    console.log(data);
    await axios.put(`http://localhost:5000/dashboard/${Structure_id}`, data)
  }

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
            <>
              <ul className="dashPlacesDays">
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Lundi"
                    value="Lundi"
                    onChange={() => { setSelected("Lundi"); setToggleDay(Lundi) }}
                  />
                  <label
                    htmlFor="Lundi"
                    className={selected === "Lundi" ? "selected" : ""}
                  >
                    L
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Mardi"
                    value="Mardi"
                    onChange={() => { setSelected("Mardi"); setToggleDay(Mardi) }}
                  />
                  <label
                    htmlFor="Mardi"
                    className={selected === "Mardi" ? "selected" : ""}
                  >
                    M
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Mercredi"
                    value="Mercredi"
                    onChange={() => { setSelected("Mercredi"); setToggleDay(Mercredi) }}
                  />
                  <label
                    htmlFor="Mercredi"
                    className={selected === "Mercredi" ? "selected" : ""}
                  >
                    M
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Jeudi"
                    value="Jeudi"
                    onChange={() => { setSelected("Jeudi"); setToggleDay(Jeudi) }}
                  />
                  <label
                    htmlFor="Jeudi"
                    className={selected === "Jeudi" ? "selected" : ""}
                  >
                    J
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Vendredi"
                    value="Vendredi"
                    onChange={() => { setSelected("Vendredi"); setToggleDay(Vendredi) }}
                  />
                  <label
                    htmlFor="Vendredi"
                    className={selected === "Vendredi" ? "selected" : ""}
                  >
                    V
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Samedi"
                    value="Samedi"
                    onChange={() => { setSelected("Samedi"); setToggleDay(Samedi) }}
                  />
                  <label
                    htmlFor="Samedi"
                    className={selected === "Samedi" ? "selected" : ""}
                  >
                    S
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="days"
                    id="Dimanche"
                    value="Dimanche"
                    onChange={() => { setSelected("Dimanche"); setToggleDay(Dimanche) }}
                  />
                  <label
                    htmlFor="Dimanche"
                    className={selected === "Dimanche" ? "selected" : ""}
                  >
                    D
                  </label>
                </li>
              </ul>
              {toggleDay ? (
                <>
                  <MultiRangeSlider
                    min={0}
                    max={23}
                    minValue={minHours}
                    maxValue={maxHours}
                    step={1}
                  />
                  <div className="dashRangeValues">
                    <p>
                      <img src={open} alt="" /> Ouverture : {minMinutes !== 0 ? (`${minHours} : ${minMinutes}`) : (`${minHours}H`)}
                    </p>
                    <p>
                      <img src={close} alt="" /> Fermeture : {maxMinutes !== 0 ? (`${maxHours} : ${maxMinutes}`) : (`${maxHours}H`)}
                    </p>
                  </div>
                  <button className="dashPlacesSubmit" onClick={() => { setToggleDay(!toggleDay); updateDay() }}>
                    Repos
                  </button>
                </>
              ) : (
                <button className="dashNotWorking" onClick={() => { setToggleDay(!toggleDay); updateDay() }}>Envie de travailler ?</button>
              )}
            </>
          </div>
        ) : (
          <DashCalendar />
        )}
      </section>
      <section className="dashPlacesParams">
        <div className="dashPlacesPrices">
          <h3>Vos tarifs</h3>
          <p>
            Heure <span>{Tarif_heure}€</span>
          </p>
          <p title="Entre 22h et 6h, Dimanche et jour férié">
            Heure spécifique <span>{Tarif_horaire_spec}€</span>
          </p>
          <p title="Au delà de 45h/semaine">
            Heure majorée <span>{Tarif_heure * 1.5}€</span>
          </p>
        </div>
        <div className="dashPlacesOptions">
          <h3>Vos options</h3>
          {type === 'assmat' && (
            <>
              <div className="dashSwitchContainer">
                Indemnité d'entretien
                <label htmlFor="dashSwitch1" className="dashSwitch">
                  <input type="checkbox" id="dashSwitch1" onChange={() => setSwitch1(!switch1)} defaultChecked={indemn1 !== 0 && true} />
                  <span className="dashSwitchSlider" />
                </label>
                <p className="dashOptionsPrices" style={{ display: switch1 ? "flex" : "none" }}>
                  <input type="text" value={indemn1} onChange={(e) => setIndemn1(e.target.value)} />€
                </p>
              </div>
              <div className="dashSwitchContainer">
                Indemnité kilométrique
                <label htmlFor="dashSwitch2" className="dashSwitch">
                  <input type="checkbox" id="dashSwitch2" onChange={() => setSwitch2(!switch2)} defaultChecked={indemn2 !== 0 && true} />
                  <span className="dashSwitchSlider" />
                </label>
                <p className="dashOptionsPrices" style={{ display: switch2 ? "flex" : "none" }}>
                  <input type="text" value={indemn2} onChange={(e) => setIndemn2(e.target.value)} />€
                </p>
              </div>
            </>
          )}
          <div className="dashSwitchContainer">
            Indemnité de repas
            <label htmlFor="dashSwitch3" className="dashSwitch">
              <input type="checkbox" id="dashSwitch3" onChange={() => setSwitch3(!switch3)} defaultChecked={indemn3 !== 0 && true} />
              <span className="dashSwitchSlider" />
            </label>
            <p className="dashOptionsPrices" style={{ display: switch3 ? "flex" : "none" }}>
              <input type="text" value={indemn3} onChange={(e) => setIndemn3(e.target.value)} />€
            </p>
          </div>
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
      </section >
    </div >
  );
}

export default DashPlaces;

DashPlaces.propTypes = {
  title: PropTypes.string.isRequired,
};
