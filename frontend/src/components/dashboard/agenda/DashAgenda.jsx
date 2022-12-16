import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DashCalendar from "./calendar/DashCalendar";
import moment from 'moment'

function DashAgenda({ token, structureId, maxPlaces }) {
  const [data, setData] = useState([]);
  const [hours, setHours] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [calendarIndex, setCalendarIndex] = useState(null);
  const [places, setPlaces] = useState(null);

  const getData = () => {
    axios
      .get("http://localhost:5000/structure", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getHours = () => {
    axios
      .get(`http://localhost:5000/horaires`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setHours(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getCalendar = () => {
    axios
      .get(`http://localhost:5000/calendrier/${structureId}`, {
        structureId,
      })
      .then((res) => {
        setCalendar(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
    getHours();
    getCalendar();
  }, []);

  const updatePlaces = async () => {
    await axios.put(
      `http://localhost:5000/calendrier/places/${calendarIndex}`,
      {
        id: calendarIndex,
        nbPlaces: places,
      }
    );
  };

  const updateStatus = async () => {
    await axios.put();
  };


  const handleClick = (e) => {
    e.preventDefault();
    updateStatus();
  };

  const [clickedDay, setClickedDay] = useState(new Date());
  const date = `${clickedDay.getFullYear()}-${
    clickedDay.getMonth() + 1
  }-${clickedDay.getDate()}`;

  const day = clickedDay.toLocaleDateString("fr-FR", { weekday: "long" });

  console.log(calendarIndex)

  return (
    <div className="dashAgenda">
      <section className="agendaSection">
        <h2>Agenda</h2>
        <DashCalendar
          {...data}
          clickedDay={clickedDay}
          setClickedDay={setClickedDay}
        />
      </section>
      <section className="agendaMessage">
        <div className="agendaPlaces">
          <h3>
            {day} {clickedDay.toLocaleDateString()}
          </h3>
          {calendar
            .filter(
              (c) =>
                c.structureId === structureId && c.date.split("T")[0] === date
            )
            .map((fc) =>
              fc.nbPlaces == -1 ? (
                <button className="agendaPlacesWork">Ouvrir</button>
              ) : (
                <>
                  <div className="agendaPlacesLeft">
                    <p>
                      Il vous reste
                      <b> {fc.nbPlaces} </b>
                      places sur
                      <b> {maxPlaces} </b>
                    </p>
                  </div>
                  <div className="agendaCalendarBtn">
                    <input
                      type="number"
                      value={places}
                      min={1}
                      max={maxPlaces}
                      placeholder={`1 à ${maxPlaces}`}
                      onChange={(e) => {
                        setPlaces(e.target.value);
                        setCalendarIndex(fc.calendrierId);
                      }}
                    />
                    <button type="button" onClick={updatePlaces}>
                      Modifier
                    </button>
                  </div>
                  <button className="agendaPlacesWork">Repos</button>
                </>
              )
            )}
        </div>
        <ul className="agendaLegend">
          <li>
            <span />
            Complet
          </li>
          <li>
            <span />
            Places restantes
          </li>
          <li>
            <span />
            Trop d'enfants
          </li>
          <li>
            <span />
            Jour off
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DashAgenda;

DashAgenda.propTypes = {
  token: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
  maxPlaces: PropTypes.number.isRequired,
};
