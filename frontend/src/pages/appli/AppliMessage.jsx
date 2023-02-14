import React, { useState, useEffect } from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AppliMessage() {
  const [strucData, setStrucData] = useState([]);

  const getStructureForMess = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/structure/all`, {
        cancelToken: source.token,
      })
      .then((ret) => {
        setStrucData(ret.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    getStructureForMess(source);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="appli-message">
      <ProfilPlat />

      <main>
        {strucData.map((each, index) => (
          <NavLink to="/appli/message/room" key={index}>
            <CardFavPlat each={each} />
          </NavLink>
        ))}
      </main>

      <NavbarApp />
    </div>
  );
}

export default AppliMessage;
