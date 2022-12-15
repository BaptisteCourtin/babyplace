import React, { useState } from "react";
import ChoixDates from "@components/appli/reservation/ChoixDates";
import DemandeResa from "@components/appli/reservation/DemandeResa";
import ConfirmeResa from "@components/appli/reservation/ConfirmeResa";

function AppliReservation() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <ChoixDates setCompo={setCompo} />;
    }
    if (compo === 2) {
      return <DemandeResa setCompo={setCompo} />;
    }
    if (compo === 3) {
      return <ConfirmeResa />;
    }
    return <ChoixDates setCompo={setCompo} />;
  };

  return <div className="appli-reservation">{choixComposant()}</div>;
}

export default AppliReservation;
