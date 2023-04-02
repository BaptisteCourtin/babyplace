import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import FamilleContext from "@components/context/FamilleContext";

import { BsFillGridFill, BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

function Navbar({ setCompo }) {
  const { familleId } = useContext(FamilleContext);

  return (
    familleId && (
      <div className="container-navbar-app">
        <div className="navbar">
          <NavLink to="/appli/menu">
            <BsFillGridFill className="img-nav" onClick={() => setCompo(0)} />
          </NavLink>
          <NavLink to="/appli/search">
            <BsSearch className="img-nav" />
          </NavLink>
          <NavLink to="/appli/user">
            <AiOutlineUser className="img-nav" />
          </NavLink>
          <NavLink to="/appli/notif">
            <AiOutlineBell className="img-nav" />
          </NavLink>
          <NavLink to="/appli/message">
            <BiMessageDetail className="img-nav" />
          </NavLink>
        </div>
      </div>
    )
  );
}

Navbar.propTypes = {
  setCompo: PropTypes.func,
};

export default Navbar;
