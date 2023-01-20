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

function DashNavbar({ toggle, setToggle, structureId }) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/logout/${structureId}`, {
        id: structureId,
        token: null,
        tokenStart: null,
      });
      navigate("/");
    } catch (err) {
      console.error(err.message)
    }
  };

  return (
    <aside className="dashNav">
      <div className="dashNavLogo">
        <img src={logoWhite} alt="" />
        <h2>
          Babyplace <span>PRO</span>
        </h2>
      </div>
      <ul className="dashNavList">
        <li className={toggle === 1 && 'selected'}>
          <MdOutlineFormatListBulleted />
          <button
            type="button"
            onClick={() => {
              setToggle(1);
            }}
          >
            Demandes
          </button>
        </li>
        <li className={toggle === 2 && 'selected'}>
          <MdOutlineCalendarToday />
          <button
            type="button"
            onClick={() => {
              setToggle(2);
            }}
          >
            Agenda
          </button>
        </li>
        <li className={toggle === 3 && 'selected'}>
          <MdAccessTime />
          <button
            type="button"
            onClick={() => {
              setToggle(3);
            }}
          >
            Horaires
          </button>
        </li>
        <li className={toggle === 4 && 'selected'}>
          <MdOutlineMarkAsUnread />
          <button
            type="button"
            onClick={() => {
              setToggle(4);
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
    </aside>
  );
}

export default DashNavbar;

DashNavbar.propTypes = {
  setToggle: PropTypes.func.isRequired,
  structureId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
};
