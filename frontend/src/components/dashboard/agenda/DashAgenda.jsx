import axios from "axios";
import React, { useEffect, useState } from "react";
import DashCalendar from "./calendar/DashCalendar";

function DashAgenda({ Token, Structure_id, Max_places, Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche }) {

  const places1 = Math.floor(Math.random() * Max_places / 2);
  const places2 = Math.floor(Math.random() * Max_places / 2);
  const places3 = Math.floor(Math.random() * Max_places / 2);

  const [data, setData] = useState({});
  const [places, setPlaces] = useState('');

  const getData = () => {
    axios.get("http://localhost:5000/structure", {
      headers: {
        "x-token": Token,
      }
    })
      .then((ret) => {
        setData(ret.data[0]);
        setPlaces(data.Nb_places)
      })
      .catch((err) => {
        console.error(err);
      })
  };

  useEffect(() => {
    getData();
  }, [data.Nb_places])

  const curDate = new Date()
  const day = curDate.getDate()
  const month = curDate.getMonth() + 1

  const updatePlaces = async () => {
    await axios.put(`http://localhost:5000/dashboard/places/${Structure_id}`, {
      id: Structure_id,
      places: places
    })
  }

  const [clickedDay, setClickedDay] = useState(new Date())

  return (
    <div className="dashAgenda">
      <section className="agendaSection">
        <h2>Agenda</h2>
        <DashCalendar {...data} clickedDay={clickedDay} setClickedDay={setClickedDay} />
        <div className="agendaCalendarBtn">
          <input type="number" value={places} max={Max_places} onChange={(e) => setPlaces(e.target.value)} />
          <button type="button" onClick={updatePlaces}>Modifier</button>
        </div>
      </section>
      <section className="agendaMessage">
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
        <ul className="agendaMessageList">
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places1 === 0) {
                    return "#EF3672";
                  }
                  if (places1 > 0 && places1 <= 2) {
                    return "#FFA84C";
                  }
                  if (places1 > 2) {
                    return "#2dcd7a";
                  }
                })(),
              }}
            >
              {places1 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places1} places</span> disponibles le {day + 2} / {month}
            </p>
          </li>
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places2 === 0) {
                    return "#EF3672";
                  }
                  if (places2 > 0 && places2 <= 2) {
                    return "#FFA84C";
                  }
                  if (places2 > 2) {
                    return "#2dcd7a";
                  }
                })(),
              }}
            >
              {places2 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places2} places</span> disponibles le {day + 5} / {month}
            </p>
          </li>
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places3 === 0) {
                    return "#EF3672";
                  }
                  if (places3 > 0 && places3 <= 2) {
                    return "#FFA84C";
                  }
                  if (places3 > 2) {
                    return "#2dcd7a";
                  }
                })(),
              }}
            >
              {places3 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places3} places</span> disponibles le {day + 3} / {month}
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DashAgenda;
