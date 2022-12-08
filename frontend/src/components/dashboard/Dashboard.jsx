import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import {
  MdOutlineSettings,
  MdOutlineFormatListBulleted,
  MdOutlineCalendarToday,
  MdOutlinePlace,
} from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import DashNavbar from "./nav/DashNavbar";

import DashReservations from "./reservations/DashReservations";
import DashAgenda from "./agenda/DashAgenda";
import DashPlaces from "./places/DashPlaces";

function Dashboard() {
  const { state } = useLocation();
  const { repas } = state;

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(0);
  const pageShown = () => {
    if (toggle === 1) {
      return <DashReservations />;
    }
    if (toggle === 2) {
      return <DashAgenda />;
    }
    if (toggle === 3) {
      return <DashPlaces repas={repas} title="Ajouter une place" />;
    }
    if (toggle === 4) {
      return navigate("/structure/inscription-form");
    }
  };

  return (
    <div className="dashboard">
      <nav>
        <button type="button">
          <FiBell />
        </button>
        <button type="button">Kévin</button>
      </nav>
      <main>
        <DashNavbar setToggle={setToggle} />
        <section className="dashboardSection">
          {pageShown()}
          {toggle === 0 && (
            <div className="dashboardWelcome">
              <h1>Bienvenue sur votre dashboard</h1>
              <ul>
                <li>
                  <h2>
                    <MdOutlineFormatListBulleted /> Demandes
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quas voluptatum nulla ducimus, asperiores odio
                    delectus.
                  </p>
                </li>
                <li>
                  <h2>
                    <MdOutlineCalendarToday /> Agenda
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quas voluptatum nulla ducimus, asperiores odio
                    delectus.
                  </p>
                </li>
                <li>
                  <h2>
                    <MdOutlinePlace /> Place
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quas voluptatum nulla ducimus, asperiores odio
                    delectus.
                  </p>
                </li>
                <li>
                  <h2>
                    <MdOutlineSettings /> Paramètres
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quas voluptatum nulla ducimus, asperiores odio
                    delectus.
                  </p>
                </li>
              </ul>
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
