import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";

import NotifBase from "@components/appli/notif/NotifBase";
import NotifNote from "@components/appli/notif/NotifNote";
import NotifRejetee from "@components/appli/notif/NotifRejetee";
import NotifAcceptee from "@components/appli/notif/NotifAcceptee";
import NotifPaye from "@components/appli/notif/NotifPaye";

function AppliNotif() {
  const { familleId } = useContext(FamilleContext);

  // --- photo famille ---

  const [photoFamille, setPhotoFamille] = useState();

  const getFamilleInfo = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/info/${familleId}`)
      .then((res) => {
        setPhotoFamille(res.data[1][0].photoProfilFamille);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getFamilleInfo();
  }, [familleId]);

  // --- get reservation refused ET approved ---

  const [allReservation, setAllReservation] = useState([]);

  const getAllReservation = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/reservationAR/${familleId}`)
      .then((res) => {
        setAllReservation(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getAllReservation();
  }, [familleId]);

  // ---

  const [compo, setCompo] = useState(0);
  const [oneReservation, setOneReservation] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return (
        <NotifNote
          setCompo={setCompo}
          photoFamille={photoFamille}
          oneReservation={oneReservation}
        />
      );
    }
    if (compo === 2) {
      return (
        <NotifRejetee
          setCompo={setCompo}
          photoFamille={photoFamille}
          oneReservation={oneReservation}
        />
      );
    }
    if (compo === 3) {
      return (
        <NotifAcceptee
          setCompo={setCompo}
          photoFamille={photoFamille}
          oneReservation={oneReservation}
        />
      );
    }
    if (compo === 4) {
      return <NotifPaye setCompo={setCompo} oneReservation={oneReservation} />;
    }
    return (
      <NotifBase
        setCompo={setCompo}
        allReservation={allReservation}
        setOneReservation={setOneReservation}
      />
    );
  };

  return familleId && <div className="appli-notif">{choixComposant()}</div>;
}

export default AppliNotif;
