import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import { AiFillStar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import DashNavbar from "./nav/DashNavbar";

import DashReservations from "./reservations/DashReservations";
import DashAgenda from "./agenda/DashAgenda.jsx";
import DashPlaces from "./places/DashPlaces";
import Messages from "../messages/Messages";
import axios from "axios";
import useLocalStorage from "@utils/useLocalStorage";

function Dashboard() {
  const { state } = useLocation();
  const { data, userType } = state;

  const [dashPage, setDashPage] = useLocalStorage(0, "dashPage");

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(dashPage);
  const pageShown = () => {
    if (toggle === 1) {
      return <DashReservations />;
    }
    if (toggle === 2) {
      return <DashAgenda {...data} />;
    }
    if (toggle === 3) {
      return <DashPlaces userType={userType} structureId={data.structureId} title="Horaires" />;
    }
    if (toggle === 4) {
      return <Messages {...data} />;
    }
    if (toggle === 5) {
      return navigate("/structure/inscription-form");
    }
  };

  const deleteDates = async (curDate) => {
    await axios
      .delete(`http://localhost:5000/calendrier?date=${curDate}`)
  }

  useEffect(() => {
    let curDate = new Date();
    curDate = `${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`;
    deleteDates(curDate)
  }, [])

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

  return (
    <div className="dashboard">
      <nav>
        <button type="button">
          <FiBell />
        </button>
        <button type="button" onClick={() => { setToggle(0); setDashPage(0) }}>
          <img src={data.photoProfil} />
          {data.nom || data.prenom}
        </button>
      </nav>
      <main>
        <DashNavbar {...data} setToggle={setToggle} setDashPage={setDashPage} />
        <section className="dashboardSection">
          {pageShown()}
          {toggle === 0 && (
            <div className="dashboardWelcome">
              <div className="dashboardProfile">
                <img
                  className="dashboardProfilePic"
                  src={data.photoProfil}
                  alt=""
                  width={70}
                  height={70}
                  loading="lazy"
                />
                <h2>
                  {data.nom}
                  <span>
                    {reviews}
                    <AiFillStar />
                    ({data.nbNotes})
                  </span>
                </h2>
                {userType ? (
                  <h1>
                    {data.nom}
                  </h1>
                ) : (
                  <h1>
                    {data.prenom} {data.nomUsage ?? data.nomNaissance}
                  </h1>
                )}
              </div>
              <p className="dashboardProfilePres">{data.description}</p>
              <ul className="dashboardProfilePicList">
                <li>
                  <img src={data?.photoStructure1} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={data?.photoStructure2} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={data?.photoStructure3} alt="" loading="lazy" />
                </li>
              </ul>
              <div className="dashboardProfileContact">
                <p>
                  <AiOutlinePhone />
                  {data.telephone.toString().match(/.{1,2}/g).join(" ")}
                </p>
                <p>
                  <AiOutlineMail />
                  {data.email}
                </p>
                <p />
              </div>
            </div>
          )}
        </section>
      </main>
      <footer>
        <p>2022 © Babyplace</p>
        <p>
          Crée avec <span>♥</span> Wild Code School x Babyplace
        </p>
      </footer>
    </div >
  );
}

export default Dashboard;
