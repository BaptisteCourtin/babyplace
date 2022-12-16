import React from "react";
import logoWhite from "@assets/logo5white.svg";
import PropTypes from "prop-types";

import {
  MdOutlineSettings,
  MdOutlineFormatListBulleted,
  MdOutlineCalendarToday,
  MdOutlinePlace,
  MdOutlineMarkAsUnread,
  MdLogout,
} from "react-icons/md";
import axios from "axios";

function DashNavbar({ setToggle, token, structureId }) {
  const logout = () => {
    axios.put(`http://localhost:5000/logout/${structureId}`, {
      id: structureId,
      token: token,
    });
  };

  return (
    <section className="dashNav">
      <div className="dashNavLogo">
        <img src={logoWhite} alt="" />
        <h2>
          Babyplace <span>PRO</span>
        </h2>
      </div>
      <ul className="dashNavList">
        <li>
          <MdOutlineFormatListBulleted />
          <button type="button" onClick={() => setToggle(1)}>
            Demandes
          </button>
        </li>
        <li>
          <MdOutlineCalendarToday />
          <button type="button" onClick={() => setToggle(2)}>
            Agenda
          </button>
        </li>
        <li>
          <MdOutlinePlace />
          <button type="button" onClick={() => setToggle(3)}>
            Place
          </button>
        </li>
        <li>
          <MdOutlineMarkAsUnread />
          <button type="button" onClick={() => setToggle(5)}>
            Messages
          </button>
        </li>
      </ul>
      <div className="dashNavParams">
        <button type="button" onClick={() => setToggle(4)}>
          <MdOutlineSettings />
          Paramètres
        </button>
        <button onClick={() => logout()}>
          <MdLogout />
          Déconnexion
        </button>
      </div>
    </section>
  );
}

export default DashNavbar;

DashNavbar.propTypes = {
  setToggle: PropTypes.func.isRequired,
  structureId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
};
