import React from "react";
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
    <nav>
      <button className="dashboardBurger" onClick={() => setOpenNav(!openNav)}>
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

export default DashTopbar;
