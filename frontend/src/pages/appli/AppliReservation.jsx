import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChoixDates from "@components/appli/reservation/ChoixDates";
import DemandeResa from "@components/appli/reservation/DemandeResa";
import ConfirmeResa from "@components/appli/reservation/ConfirmeResa";

function AppliReservation() {
  const location = useLocation();
  const { data } = location.state;

  const { photoProfil, photoStructure3, tarifHeure } = data;

  const [compo, setCompo] = useState(0);
  const choixComposant = () => {
    if (compo === 2) {
      return (
        <DemandeResa
          setCompo={setCompo}
          photo3={photoStructure3}
          tarif={tarifHeure}
        />
      );
    }
    if (compo === 3) {
      return <ConfirmeResa photoProfil={photoProfil} />;
    }
    return <ChoixDates setCompo={setCompo} photoProfil={photoProfil} />;
  };

  return <div className="appli-reservation">{choixComposant()}</div>;
}

export default AppliReservation;
