import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  MdManageAccounts,
  MdNoAccounts,
  MdMarkAsUnread,
  MdLogout,
} from "react-icons/md";

function Menu({ open }) {
  return (
    <nav
      className="styledMenu"
      style={{ transform: open ? `translateX(0)` : `translateX(-100%)` }}
    >
      <li>
        <NavLink to="/admin/profils">
          <MdManageAccounts id="iconAdminNav" /> Profils à approuver
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/signalements">
          <MdNoAccounts id="iconAdminNav" /> Profils signalés
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/messages">
          <MdMarkAsUnread id="iconAdminNav" /> Messages
        </NavLink>
      </li>
      <li>
        <button onClick={() => logout()}>
          <MdLogout id="iconAdminNav" /> Déconnexion
        </button>
      </li>
    </nav>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
