import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import PropTypes from "prop-types";
import axios from "axios";
import DashCalendar from "../agenda/calendar/DashCalendar";

function DashPlaces({
  type,
  title,
  token,
  structureId,
  indemnRepas,
  tarifHeure,
  tarifHoraireSpec,
}) {

  const [toggleType, setToggleType] = useState(0);
  const [toggleDay, setToggleDay] = useState(null)
  const [selected, setSelected] = useState(null);
  const [dayId, setDayId] = useState(null);

  const [indemn1, setIndemn1] = useState(5);
  const [switch1, setSwitch1] = useState(() => {
    if (indemn1) {
      return true;
    }
    return false;
  });

  const [indemn2, setIndemn2] = useState(0.5);
  const [switch2, setSwitch2] = useState(() => {
    if (indemn2) {
      return true;
    }
    return false;
  });

  const [indemn3, setIndemn3] = useState(`${indemnRepas}`);
  const [switch3, setSwitch3] = useState(() => {
    if (indemn3) {
      return true;
    }
    return false;
  });

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5000/horaires", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data);
        setToggleDay(res.data[0].ouvert)
        setSelected(res.data[0].jourSemaine)
        setDayId(res.data[0].jourId)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [clickedDay, setClickedDay] = useState(new Date());

  const updateDay = async () => {
    const dataSubmit = {
      id: structureId,
      day: selected,
      toggleDay: !toggleDay,
    };
    dataSubmit[selected] = !toggleDay;
    await axios.put(
      `http://localhost:5000/dashboard/day/${structureId}`,
      dataSubmit
    );
  };

  const updateHours = async () => {
    await axios.put(`http://localhost:5000/dashboard/hours/${structureId}`, {
      heureMin: heureMin,
      heureMax: heureMax,
      structureId: structureId,
      jourId: dayId
    });
  };

  const updateIndemnRepas = async () => {
    await axios.put(
      `http://localhost:5000/dashboard/indemnRepas/${structureId}`,
      {
        id: structureId,
        indemnRepas: indemn3,
      }
    );
  };

  // const handleInput = (e) => {
  //   setHoursOpen(e.minValue);
  //   setHoursClose(e.maxValue);
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
            <ul className="dashPlacesDays">
              {data.map(d => (
                <li>
                  <input
                    type='radio'
                    name='days'
                    id={d.jourSemaine}
                    value={d.jourSemaine}
                    onChange={() => {
                      setSelected(d.jourSemaine)
                      setToggleDay(d.ouvert)
                      setDayId(d.jourId)
                    }}
                  />
                  <label htmlFor={d.jourSemaine} className={selected === d.jourSemaine ? "selected" : ""}>
                    {d.jourSemaine.slice(0, 1)}
                  </label>
                </li>
              ))}
            </ul>
            {toggleDay ? (
              <>
                <MultiRangeSlider
                  min={0}
                  max={23}
                  minValue={data[dayId].heureMin.split(':', 1)[0]}
                  maxValue={data[dayId].heureMax.split(':', 1)[0]}
                  step={1}
                // onChange={(e) => {
                //   handleInput(e);
                //   updateHours();
                // }}
                />
                <div className="dashRangeValues">
                  <p>
                    <img src={open} alt="" /> Ouverture : {data[dayId].heureMin}H
                  </p>
                  <p>
                    <img src={close} alt="" /> Fermeture : {data[dayId].heureMax}H
                  </p>
                </div>
                <button
                  type="button"
                  className="dashPlacesSubmit"
                  onClick={() => {
                    setToggleDay(!toggleDay);
                  }}
                >
                  Repos
                </button>
              </>
            ) : (
              <button
                type="button"
                className="dashNotWorking"
                onClick={() => {
                  setToggleDay(!toggleDay);
                }}
              >
                Envie de travailler ?
              </button>
            )}
          </div>
        ) : (
          <DashCalendar clickedDay={clickedDay} setClickedDay={setClickedDay} />
        )}
      </section>
      <section className="dashPlacesParams">
        <div className="dashPlacesPrices">
          <h3>Vos tarifs</h3>
          <p>
            Heure <span>{tarifHeure}€</span>
          </p>
          <p title="Entre 22h et 6h, Dimanche et jour férié">
            Heure spécifique <span>{tarifHoraireSpec}€</span>
          </p>
          {type === "assmat" && (
            <p title="Au delà de 45h/semaine">
              Heure majorée <span>{tarifHeure * 1.5}€</span>
            </p>
          )}
        </div>
        <div className="dashPlacesOptions">
          <h3>Vos options</h3>
          {type === "assmat" && (
            <>
              <div className="dashSwitchContainer">
                Indemnité d'entretien
                <label htmlFor="dashSwitch1" className="dashSwitch">
                  <input
                    type="checkbox"
                    id="dashSwitch1"
                    onChange={() => setSwitch1(!switch1)}
                    defaultChecked={indemn1 !== 0 && true}
                  />
                  <span className="dashSwitchSlider" />
                </label>
                <p
                  className="dashOptionsPrices"
                  style={{ display: switch1 ? "flex" : "none" }}
                >
                  <input
                    type="text"
                    value={indemn1}
                    onChange={(e) => setIndemn1(e.target.value)}
                  />
                  €
                </p>
              </div>
              <div className="dashSwitchContainer">
                Indemnité kilométrique
                <label htmlFor="dashSwitch2" className="dashSwitch">
                  <input
                    type="checkbox"
                    id="dashSwitch2"
                    onChange={() => setSwitch2(!switch2)}
                    defaultChecked={indemn2 !== 0 && true}
                  />
                  <span className="dashSwitchSlider" />
                </label>
                <p
                  className="dashOptionsPrices"
                  style={{ display: switch2 ? "flex" : "none" }}
                >
                  <input
                    type="text"
                    value={indemn2}
                    onChange={(e) => setIndemn2(e.target.value)}
                  />
                  €
                </p>
              </div>
            </>
          )}
          <div className="dashSwitchContainer">
            Indemnité de repas
            <label htmlFor="dashSwitch3" className="dashSwitch">
              <input
                type="checkbox"
                id="dashSwitch3"
                onChange={() => setSwitch3(!switch3)}
                defaultChecked={indemn3 !== 0 && true}
              />
              <span className="dashSwitchSlider" />
            </label>
            <p
              className="dashOptionsPrices"
              style={{ display: switch3 ? "flex" : "none" }}
            >
              <input
                type="number"
                value={indemn3}
                onChange={(e) => {
                  setIndemn3(e.target.value);
                  updateIndemnRepas();
                }}
              />
              €
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
      </section>
    </div>
  );
}

export default DashPlaces;

DashPlaces.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
  indemnRepas: PropTypes.number.isRequired,
  Tarif_heure: PropTypes.number.isRequired,
  Tarif_horaire_spec: PropTypes.number.isRequired,
};
