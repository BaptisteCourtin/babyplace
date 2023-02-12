import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-hot-toast";
import { activitiesArray } from "@utils/activitiesArray";
import Agenda from "./Components/DashPlaces.Agenda";

function DashPlaces({ userType, structureId }) {
  const [toggleDay, setToggleDay] = useState(null);
  const [selected, setSelected] = useState(null);
  const [dayId, setDayId] = useState(1);

  const [data, setData] = useState([]);
  const [horaires, setHoraires] = useState([]);

  const [hour1, setHour1] = useState(null);
  const [hour2, setHour2] = useState(null);
  const [hour3, setHour3] = useState(null);

  const [indemn1, setIndemn1] = useState(null);
  const [switch1, setSwitch1] = useState(() => {
    if (indemn1) {
      return true;
    }
    return false;
  });

  const [indemn2, setIndemn2] = useState(null);
  const [switch2, setSwitch2] = useState(() => {
    if (indemn2) {
      return true;
    }
    return false;
  });

  const [indemn3, setIndemn3] = useState(null);
  const [switch3, setSwitch3] = useState(() => {
    if (indemn3) {
      return true;
    }
    return false;
  });

  const getData = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_PATH
        }/structure/type/${structureId}?type=${userType}`,
        {
          id: structureId,
          type: userType,
        }
      );
      setData(res.data[0]);
      setHour1(res.data[0].tarifHeure);
      setHour2(res.data[0].tarifHoraireSpec);
      setHour3(res.data[0].tarifHeureSup);
      setIndemn1(res.data[0].indemnEntretien);
      setIndemn2(res.data[0].indemnKm);
      setIndemn3(res.data[0].indemnRepas);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getHoraires = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/horaires/${structureId}`,
        {
          id: structureId,
        }
      );
      setHoraires(res.data);
      setToggleDay(res.data[0].ouvert);
      setSelected(res.data[0].jourSemaine);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
    getHoraires();
  }, []);

  const updateTarif = async (tarif, value) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/dashboard/tarif/${structureId}`,
        {
          id: structureId,
          tarif,
          tarifValue: value,
          table:
            userType === "assMat" && tarif === "tarifHeureSup"
              ? "assMat"
              : "structure",
        }
      );
      toast.success("Vos tarifs ont bien été modifiés");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateIndemn = async (indemn, value) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/dashboard/indemn/${structureId}`,
        {
          id: structureId,
          indemn,
          indemnValue: value,
          table:
            userType === "assMat" && indemn !== "indemnRepas"
              ? "assMat"
              : "structure",
        }
      );
      toast.success("Vos indemnités ont bien été modifiées");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateOptions = async (options, value) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/dashboard/options/${structureId}`,
        {
          id: structureId,
          optionsValue: value,
          options,
        }
      );
      toast.success("Vos options ont bien été modifiées");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="dashPlaces">
      <Agenda
        structureId={structureId}
        horaires={horaires}
        getHoraires={getHoraires}
        toggleDay={toggleDay}
        setToggleDay={setToggleDay}
        selected={selected}
        setSelected={setSelected}
        dayId={dayId}
        setDayId={setDayId}
      />
      <section className="dashPlacesParams">
        <details>
          <summary>Vos tarifs</summary>
          <div className="dashPlacesPrices">
            <div className="dashOptionsPrices">
              <p>Heure</p>
              <input
                type="number"
                name="tarifHeureSup"
                id="tarifHeureSup"
                value={hour1}
                step={0.5}
                onChange={(e) => {
                  setHour1(e.target.value);
                  updateTarif("tarifHeure", e.target.value);
                }}
              />
              €
            </div>
            <div className="dashOptionsPrices">
              <p title="Entre 22h et 6h, dimanches et jours fériés">
                Heure spécifique
              </p>
              <input
                type="number"
                name="tarifHeureSup"
                id="tarifHeureSup"
                value={hour2}
                step={0.5}
                onChange={(e) => {
                  setHour2(e.target.value);
                  updateTarif("tarifHoraireSpec", e.target.value);
                }}
              />
              €
            </div>
            {userType === "assMat" && (
              <div className="dashOptionsPrices">
                <p title="Au delà de 45h/semaine">Heure majorée</p>
                <input
                  type="number"
                  name="tarifHeureSup"
                  id="tarifHeureSup"
                  value={hour3}
                  step={0.5}
                  onChange={(e) => {
                    setHour3(e.target.value);
                    updateTarif("tarifHeureSup", e.target.value);
                  }}
                />
                €
              </div>
            )}
          </div>
        </details>
        <details>
          <summary>Vos options</summary>
          <div className="dashPlacesOptions">
            {userType === "assMat" && (
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
                    style={{ display: switch1 ? "none" : "flex" }}
                  >
                    <input
                      type="number"
                      min={1}
                      value={indemn1}
                      step={0.5}
                      onChange={(e) => {
                        setIndemn1(e.target.value);
                        updateIndemn("indemnEntretien", e.target.value);
                      }}
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
                    style={{ display: switch2 ? "none" : "flex" }}
                  >
                    <input
                      type="number"
                      min={1}
                      value={indemn2}
                      step={0.5}
                      onChange={(e) => {
                        setIndemn2(e.target.value);
                        updateIndemn("indemnKm", e.target.value);
                      }}
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
                style={{ display: switch3 ? "none" : "flex" }}
              >
                <input
                  type="number"
                  min={1}
                  value={indemn3}
                  step={0.5}
                  onChange={(e) => {
                    setIndemn3(e.target.value);
                    updateIndemn("indemnRepas", e.target.value);
                  }}
                />
                €
              </p>
            </div>
          </div>
        </details>
        <details>
          <summary>Vos activités</summary>
          <ul className="dashPlacesCheckboxes">
            {activitiesArray.map((a) => (
              <li>
                <input
                  type="checkbox"
                  id={a.id}
                  defaultChecked={data[a.name]}
                  onChange={() => {
                    updateOptions(a.name, data[a.name]);
                  }}
                />
                <label htmlFor={a.id}>{a.content}</label>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}

export default DashPlaces;

DashPlaces.propTypes = {
  userType: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
};
