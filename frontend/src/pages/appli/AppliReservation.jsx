import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChoixDates from "@components/appli/reservation/ChoixDates";
import DemandeResa from "@components/appli/reservation/DemandeResa";
import ConfirmeResa from "@components/appli/reservation/ConfirmeResa";

function AppliReservation() {
  const location = useLocation();
  const { data } = location.state;

  const { Photo_profil, Photo_structure_3, Tarif_heure } = data;

  const [compo, setCompo] = useState(0);
  const choixComposant = () => {
    if (compo === 2) {
      return (
        <DemandeResa
          setCompo={setCompo}
          photo3={Photo_structure_3}
          tarif={Tarif_heure}
        />
      );
    }
    if (compo === 3) {
      return <ConfirmeResa photoProfil={Photo_profil} />;
    }
    return <ChoixDates setCompo={setCompo} photoProfil={Photo_profil} />;
  };

  return <div className="appli-reservation">{choixComposant()}</div>;
}

export default AppliReservation;
