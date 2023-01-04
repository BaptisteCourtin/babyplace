import React from "react";
import logoWhite from "@assets/logo5white.svg";
import PropTypes from "prop-types";

import {
  MdOutlineSettings,
  MdOutlineFormatListBulleted,
  MdOutlineCalendarToday,
  MdAccessTime,
  MdOutlineMarkAsUnread,
  MdLogout,
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DashNavbar({ setToggle, structureId, setDashPage }) {
  const navigate = useNavigate();

  const logout = () => {
    axios.put(`http://localhost:5000/logout/${structureId}`, {
      id: structureId,
      token: null,
      tokenStart: null,
    });
    navigate("/");
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
          <button
            type="button"
            onClick={() => {
              setToggle(1);
              setDashPage(1);
            }}
          >
            Demandes
          </button>
        </li>
        <li>
          <MdOutlineCalendarToday />
          <button
            type="button"
            onClick={() => {
              setToggle(2);
              setDashPage(2);
            }}
          >
            Agenda
          </button>
        </li>
        <li>
          <MdAccessTime />
          <button
            type="button"
            onClick={() => {
              setToggle(3);
              setDashPage(3);
            }}
          >
            Horaires
          </button>
        </li>
        <li>
          <MdOutlineMarkAsUnread />
          <button
            type="button"
            onClick={() => {
              setToggle(4);
              setDashPage(4);
            }}
          >
            Messagerie
          </button>
        </li>
      </ul>
      <div className="dashNavParams">
        <button
          type="button"
          onClick={() => {
            setToggle(5);
            setDashPage(5);
          }}
        >
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
