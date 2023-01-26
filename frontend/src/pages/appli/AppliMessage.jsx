import React, { useState, useEffect } from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AppliMessage() {

  const [strucData, setStrucData] = useState([]);

  const getStructureForMess = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/structure/all`)
      .then((ret) => {
        console.warn(ret.data);
        setStrucData(ret.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getStructureForMess();
  }, []);

  return (
    <div className="appli-message">
      <ProfilPlat />

      <main>
        {strucData.map((each) => (
          <NavLink to="/appli/message/room">
            <CardFavPlat each={each} />
          </NavLink>
        ))}
      </main>

      <NavbarApp />
    </div>
  );
}

export default AppliMessage;
