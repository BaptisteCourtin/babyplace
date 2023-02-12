import React from "react";
import PropTypes from "prop-types";
import { FiBell } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

function DashTopbar({
  openNav,
  setOpenNav,
  toggleNotif,
  setToggleNotif,
  setToggle,
  data,
}) {
  return (
    <nav className="dashTopbar">
      <button
        type="button"
        className="dashboardBurger"
        onClick={() => setOpenNav(!openNav)}
      >
        <RxHamburgerMenu />
      </button>
      <div className="dashboardTopNav">
        <button type="button" onClick={() => setToggleNotif(!toggleNotif)}>
          <FiBell />
        </button>
        <button type="button" onClick={() => setToggle(0)}>
          <img src={data.photoProfil} />
          {data.nom || data.prenom}
        </button>
      </div>
    </nav>
  );
}

DashTopbar.propTypes = {
  openNav: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
  toggleNotif: PropTypes.bool.isRequired,
  setToggleNotif: PropTypes.func.isRequired,
  setToggle: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default DashTopbar;
