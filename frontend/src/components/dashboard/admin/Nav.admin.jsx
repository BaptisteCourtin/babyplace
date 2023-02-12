import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "@assets/logo5white.svg";
import axios from "axios";
import {
  MdManageAccounts,
  MdNoAccounts,
  MdMarkAsUnread,
  MdLogout,
} from "react-icons/md";
import BurgerMenuAdmin from "./components/BurgerMenuAdmin";

function Nav() {
  const activeClassName = "selectedAdmin";
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
    <>
      {window.innerWidth > 800 ? (
        <nav className="adminNav">
          <ul>
            <img src={logo} alt="logo" />
            <li>
              <NavLink
                to="/admin/profils"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <MdManageAccounts id="iconAdminNav" /> Profils à approuver
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/signalements"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <MdNoAccounts id="iconAdminNav" /> Profils signalés
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/messages"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <MdMarkAsUnread id="iconAdminNav" /> Messages
              </NavLink>
            </li>
            <li>
              <button onClick={() => logout()}>
                <MdLogout id="iconAdminNav" /> Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <BurgerMenuAdmin logout={logout} logo={logo} />
      )}
    </>
  );
}

export default Nav;
