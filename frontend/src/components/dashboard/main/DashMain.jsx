import React, { useState } from "react";
import { Chart } from "../reservations/Components/Chart.DashReser";
import { FaRegCalendarCheck, FaRegClock, FaPercent } from 'react-icons/fa';
import { useEffect } from "react";

function DashMain({ data, fav, horaires, approvedReser }) {

  const [filteredHoraires, setFilteredHoraires] = useState([])

  const calcHours = () => {
    let tmpHours = 0;
    for (let i = 0; i < horaires.length; i++) {
      tmpHours += ((~~horaires?.[i]?.heureMax?.split(':')[0] ?? 0) - (~~horaires?.[i]?.heureMin?.split(':')[0] ?? 0))
    }
    return tmpHours
  }

  let percentComplete = (
    (
      Object.values(data).length - Object.values(data).filter(el =>
        el === null).length
    ) /
    Object.values(data).length * 100
  ).toFixed(0);

  let currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

  let weekNumber = Math.ceil(days / 7);


  const openDays = () => {
    setFilteredHoraires(
      horaires.filter(h =>
        h.ouvert
      )
    )
  }

  console.log(data)

  useEffect(() => {
    openDays()
  }, [])

  return (
    <main className="dashMain">
      <section className="dashTop">
        <ul>
          <li>
            <FaRegCalendarCheck />
            <div className="dashListSubgrid">
              <p>Demandes acceptées</p>
              <h3>{approvedReser.length}</h3>
            </div>
            <p className="dashListSubText">Semaine {weekNumber}</p>
          </li>
          <li>
            <FaRegClock />
            <div className="dashListSubgrid">
              <p>Heures hebdomadaires</p>
              <h3>{calcHours()}</h3>
            </div>
            <p className="dashListSubText">sur {filteredHoraires.length} jours</p>
          </li>
          <li>
            <FaPercent />
            <div className="dashListSubgrid">
              <p>Complétion du profil</p>
              <h3>{percentComplete}%</h3>
            </div>
            <p className="dashListSubText">
              {percentComplete < 100 ? (
                'Finissez-le'
              ) : (
                'Bravo'
              )}
            </p>
          </li>
          <li>
            <p></p>
            <h3></h3>
          </li>
        </ul>
      </section>
      <section className="dashBottom">
        <div className="dashMainInfo">
          <img src={data.photoProfil} alt="" />
          {data.isCreche ? (
            <p className="dashMainInfoName">{data.nom}</p>
          ) : (
            <>
              <p className="dashMainInfoName">{data.nomUsage}</p>
              <p className="dashMainInfoName">{data.prenom}</p>
            </>
          )}
          <p>{data.email}</p>
          <p>{data.telephone}</p>
        </div>
        <div className="dashFav">
          <h3>Favoris de</h3>
          <ul>
            {fav.map(f =>
              <li>
                <p className="dashFavText dashFavName">{f.prenom} {f.nom}</p>
                <p>{f.email}</p>
                <p className="dashFavText">{f.profession}</p>
              </li>
            )}
          </ul>
        </div>
        <div className="dashChart">
          <Chart {...data} />
          <div className="dashChartBottom">
            <p>Hello</p>
            <p>Hello</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashMain;
