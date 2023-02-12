import React, { useState } from "react";
import PropTypes from "prop-types";
import Burger from "@components/dashboard/admin/components/Burger";
import Menu from "@components/dashboard/admin/components/Menu";

function BurgerMenuAdmin({ logo }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="adminNavRes">
      <ul>
        <img src={logo} alt="logo" onClick={() => setOpen(!open)} />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </ul>
    </nav>
  );
}

BurgerMenuAdmin.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default BurgerMenuAdmin;
