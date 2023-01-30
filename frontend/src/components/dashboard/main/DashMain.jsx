import React, { useState, useEffect } from "react";
import { Chart } from "../reservations/Components/Chart.DashReser";
import { FaRegCalendarCheck, FaRegClock, FaPercent, FaBabyCarriage } from 'react-icons/fa';
import { AiFillStar } from "react-icons/ai";
import { useFormatDay } from "../agenda/Hooks/useFormatDay";
import { useGetAgenda } from "../agenda/Hooks/useGetAgenda";

function DashMain({ data, fav, horaires, reser, approvedReser }) {

  const [filteredHoraires, setFilteredHoraires] = useState([])
  const { curDate } = useFormatDay();
  const { calendar } = useGetAgenda(data.structureId)

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

  const reviews =
    Math.round(
      ((data.avisCom +
        data.avisHoraires +
        data.avisEveil +
        data.avisProprete +
        data.avisSecurite) /
        5) *
      10
    ) / 10;

  useEffect(() => {
    openDays()
  }, [])

  return (
    <main className="dashMain">
      <section className="dashTop">
        <ul>
          <li
            style={{
              border: (() => {
                if (approvedReser.length >= 50) {
                  return "1px solid #2dcd7a";
                }
                if (approvedReser.length >= 20) {
                  return "1px solid #FFA84C";
                }
                if (approvedReser.length >= 0) {
                  return "1px solid #EF3672";
                }
              })()
            }}
          >
            <FaRegCalendarCheck />
            <div className="dashListSubgrid">
              <p>Demandes acceptées</p>
              <h3>{approvedReser.length} / {reser.length}</h3>
            </div>
            <p className="dashListSubText">Semaine {weekNumber}</p>
          </li>
          <li
            style={{
              border: (() => {
                if (calcHours() >= 30) {
                  return "1px solid #2dcd7a";
                }
                if (calcHours() < 30) {
                  return "1px solid #7e72f2";
                }
              })()
            }}
          >
            <FaRegClock />
            <div className="dashListSubgrid">
              <p>Heures hebdomadaires</p>
              <h3>{calcHours()}H</h3>
            </div>
            <p className="dashListSubText">sur {filteredHoraires.length} jours</p>
          </li>
          <li
            style={{
              border: (() => {
                if (percentComplete === 100) {
                  return "1px solid #2dcd7a";
                }
                if (percentComplete >= 50) {
                  return "1px solid #7e72f2";
                }
                if (percentComplete >= 0) {
                  return "1px solid #EF3672";
                }
              })()
            }}
          >
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
          <li
            style={{
              border: (() => {
                if (data.maxPlaces > 0) {
                  return "1px solid #7e72f2";
                }
                if (data.maxPlaces === 0) {
                  return "1px solid #EF3672";
                }
              })()
            }}
          >
            <FaBabyCarriage />
            <div className="dashListSubgrid">
              <p>Nombre de places</p>
              <h3>{data.maxPlaces}</h3>
            </div>
            <p className="dashListSubText">
              {calendar.map(c => (c.date === curDate && c.nbPlaces != -1) ? (
                `Il vous reste ${c.nbPlaces} places`
              ) : (c.date === curDate && c.nbPlaces == -1) ? (
                "Vous êtes au repos"
              ) : (c.date !== curDate) && (
                "Vous êtes complet"
              ))}
            </p>
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
              <p className="dashMainInfoName">{data.prenom}</p>
              <p className="dashMainInfoName">{data.nomUsage}</p>
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
            <p>{reviews}<AiFillStar /> <span>({data.nbNotes})</span></p>
            <p>
              {data.isCreche ? (
                'Crèche'
              ) : (
                'Assistante maternelle'
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashMain;
