import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdManageAccounts, MdNoAccounts, MdMarkAsUnread, MdLogout } from 'react-icons/md';
import { Turn as Hamburger } from 'hamburger-react';

const Menu = ({ open, setOpen }) => {

  return (
    <nav className="styledMenu" style={{ transform: (open ? `translateX(0)` : `translateX(-100%)`) }}>
      <li>
        <NavLink to="/admin/profils"><MdManageAccounts id="iconAdminNav" /> Profils à approuver</NavLink>
      </li>
      <li>
        <NavLink to="/admin/signalements" ><MdNoAccounts id="iconAdminNav" /> Profils signalés</NavLink>
      </li>
      <li>
        <NavLink to="/admin/messages"><MdMarkAsUnread id="iconAdminNav" /> Messages</NavLink>
      </li>
      <li>
        <button onClick={() => logout()}><MdLogout id="iconAdminNav" /> Déconnexion</button>
      </li>

    </nav>
  )
}

export default Menu;