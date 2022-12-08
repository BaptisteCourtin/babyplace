import React from "react";
import logoWhite from "@assets/logo5white.svg";
import PropTypes from "prop-types";

import {
  MdOutlineSettings,
  MdOutlineFormatListBulleted,
  MdOutlineCalendarToday,
  MdOutlinePlace,
  MdOutlineMarkAsUnread,
} from "react-icons/md";

function DashNavbar({ setToggle }) {
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
            Message
          </button>
        </li>
      </ul>
      <button
        type="button"
        className="dashNavParams"
        onClick={() => setToggle(4)}
      >
        <MdOutlineSettings />
        Paramètres
      </button>
    </section>
  );
}

export default DashNavbar;

DashNavbar.propTypes = {
  setToggle: PropTypes.func.isRequired,
};
