import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@assets/logo5white.svg";
import axios from "axios";
import { MdManageAccounts, MdNoAccounts, MdMarkAsUnread, MdLogout } from 'react-icons/md';

function Nav() {
  const structureId = 0;
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
      console.error(err.message);
    }
  };

  return (
    <nav className="adminNav">
      <ul>
        <img src={logo} alt="logo" />
        <li>
          <Link to="/admin/profils"><MdManageAccounts id="iconAdminNav" /> Profils à approuver</Link>
        </li>
        <li>
          <Link to="/admin/signalements"><MdNoAccounts id="iconAdminNav" /> Profils signalés</Link>
        </li>
        <li>
          <Link to="/admin/messages"><MdMarkAsUnread id="iconAdminNav" /> Messages</Link>
        </li>
        <li>
          <button onClick={() => logout()}><MdLogout id="iconAdminNav" /> Déconnexion</button>
        </li>
      </ul>
    </nav >
  );
}

export default Nav;
