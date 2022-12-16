import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { AiFillStar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import DashNavbar from "./nav/DashNavbar";

import DashReservations from "./reservations/DashReservations";
import DashAgenda from "./agenda/DashAgenda";
import DashPlaces from "./places/DashPlaces";
import Messages from "../messages/Messages";

function Dashboard() {
  const { state } = useLocation();
  const { donnees } = state;

  const [type, setType] = useState("creche");

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(0);
  const pageShown = () => {
    if (toggle === 1) {
      return <DashReservations />;
    }
    if (toggle === 2) {
      return <DashAgenda {...donnees} />;
    }
    if (toggle === 3) {
      return <DashPlaces type={type} {...donnees} title="Horaires" />;
    }
    if (toggle === 4) {
      return navigate("/structure/inscription-form");
    }
    if (toggle === 5) {
      return <Messages {...donnees} />;
    }
  };

  const tel = `0${donnees.telephone.toString()}`;

  const reviews =
    Math.round(
      ((donnees.avisCom +
        donnees.avisHoraires +
        donnees.avisEveil +
        donnees.avisProprete +
        donnees.avisSecurite) /
        5) *
      10
    ) / 10;

  return (
    <div className="dashboard">
      <nav>
        <button type="button">
          <FiBell />
        </button>
        <button type="button" onClick={() => setToggle(0)}>
          {donnees.nom}
        </button>
      </nav>
      <main>
        <DashNavbar {...donnees} setToggle={setToggle} />
        <section className="dashboardSection">
          {pageShown()}
          {toggle === 0 && (
            <div className="dashboardWelcome">
              <div className="dashboardProfile">
                <img
                  className="dashboardProfilePic"
                  src={donnees.photoProfil}
                  alt=""
                  width={70}
                  height={70}
                  loading="lazy"
                />
                <h1>
                  {donnees.nom}
                  <span>
                    {reviews}
                    <AiFillStar />
                  </span>
                </h1>
              </div>
              <p className="dashboardProfilePres">{donnees.description}</p>
              <ul className="dashboardProfilePicList">
                <li>
                  <img src={donnees.photoStructure1} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={donnees.photoStructure2} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={donnees.photoStructure3} alt="" loading="lazy" />
                </li>
              </ul>
              <div className="dashboardProfileContact">
                <p>
                  <AiOutlinePhone />
                  {tel.match(/.{1,2}/g).join(" ")}
                </p>
                <p>
                  <AiOutlineMail />
                  {donnees.email}
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
    </div>
  );
}

export default Dashboard;
