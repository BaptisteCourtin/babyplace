import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DashCalendar from "./calendar/DashCalendar";

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

  const updatePlaces = () => {
    axios
      .put(
        `http://localhost:5000/calendrier/places/${calendarIndex}`,
        {
          id: calendarIndex,
          nbPlaces: places,
        }
      )
      .then(getCalendar())
  };

  const updateStatusClose = () => {
    axios
      .put(
        `http://localhost:5000/calendrier/places/close/${calendarIndex}`,
        {
          id: calendarIndex,
        }
      )
      .then(
        getCalendar(),
        setPlaces('')
      )
  };

  const updateStatusOpen = () => {
    axios
      .put(
        `http://localhost:5000/calendrier/places/open/${calendarIndex}`,
        {
          id: calendarIndex,
          maxPlaces: maxPlaces
        }
      )
      .then(
        getCalendar(),
        setPlaces('')
      )
  };

  const addDate = () => {
    axios
      .post(
        `http://localhost:5000/calendrier/add`,
        {
          date: date,
          nbPlaces: places,
          structureId: structureId
        }
      )
      .then(
        getCalendar()
      )
  }

  useEffect(() => {
    getData();
    getHours();
    getCalendar();
  }, []);

  let curDate = new Date()
  curDate = `${curDate.getFullYear()}-${curDate.getMonth() + 1
    }-${curDate.getDate()}`;

  const [clickedDay, setClickedDay] = useState(new Date());
  const date = `${clickedDay.getFullYear()}-${clickedDay.getMonth() + 1
    }-${clickedDay.getDate()}`;

  const day = clickedDay.toLocaleDateString("fr-FR", { weekday: "long" });

  return (
    <div className="dashAgenda">
      <section className="agendaSection">
        <h2>Agenda</h2>
        <DashCalendar
          {...data}
          dayDate={date}
          calendar={calendar}
          clickedDay={clickedDay}
          setPlaces={setPlaces}
          setClickedDay={setClickedDay}
        />
      </section>
      <section className="agendaMessage">
        <div className="agendaPlaces">
          <h3>
            {day} {clickedDay.toLocaleDateString()}
          </h3>
          {calendar.every((c) => c.structureId === structureId && c.date !== date) &&
            <>
              <button className="agendaPlacesWork" onClick={() => { setPlaces(-1); addDate(); }}>Repos</button>
              <button className="agendaPlacesWork" onClick={() => { setPlaces(1); addDate(); }}>Places restantes</button>
            </>
          }
          {calendar
            .filter(
              (c) =>
                c.structureId === structureId && c.date === date
            )
            .map((fc) =>
              fc.nbPlaces == -1 ? (
                <>
                  <p>Vous ne travaillez pas 😀</p>
                  <button className="agendaPlacesWork" onClick={() => { setCalendarIndex(fc.calendrierId); updateStatusOpen(); }}>Ouvrir</button>
                </>
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
                    <button type="button" onClick={() => { updatePlaces(); setPlaces(''); }}>
                      Modifier
                    </button>
                  </div>
                  <p className="agendaPlacesChoice"><span>ou</span></p>
                  <button className="agendaPlacesWork" onClick={() => { setCalendarIndex(fc.calendrierId); updateStatusClose(); }}>Repos</button>
                </>
              )
            )}
        </div>
        <ul className="agendaDaysFree">
          {calendar
            .filter((c) => c.structureId === structureId && c.date !== date && c.date > curDate && c.nbPlaces != -1)
            .slice(0, 2)
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((fc) => {
              return (
                <li>
                  {fc.nbPlaces < 4
                    ? (<span className="agendaAlertSign" style={{ backgroundColor: 'rgba(239, 54, 114, 0.6)' }}>!</span>)
                    : (<span className="agendaAlertSign" style={{
                      backgroundColor: 'rgba(45, 205, 122, 0.6)'
                    }}>+</span>)
                  }
                  <p>
                    Vous avez <span>{fc.nbPlaces}</span> places restantes le <span>{fc.date.split("-")[2]} / {fc.date.split("-")[1]} / {fc.date.split("-")[0]}</span>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </section >
    </div >
  );
}

export default DashAgenda;

DashAgenda.propTypes = {
  token: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
  maxPlaces: PropTypes.number.isRequired,
};
