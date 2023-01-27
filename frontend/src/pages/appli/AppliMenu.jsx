import React, { useState, useContext } from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import FamilleContext from "@components/context/FamilleContext";

import Base from "@components/appli/menu/Base";
import Favoris from "@components/appli/menu/Favoris";
import Personnesconfiance from "@components/appli/menu/PersonnesConfiance";
import MoyensPaiement from "@components/appli/menu/MoyensPaiement";
import Aide from "@components/appli/menu/Aide";
import Réservations from "@components/appli/menu/Reservations";

function AppliMenu() {
  const { familleId } = useContext(FamilleContext);

  const [compo, setCompo] = useState(0);
  const choixComposant = () => {
    if (compo === 1) {
      return <Favoris setCompo={setCompo} familleId={familleId} />;
    }
    if (compo === 2) {
      return <Personnesconfiance setCompo={setCompo} familleId={familleId} />;
    }
    if (compo === 3) {
      return <MoyensPaiement setCompo={setCompo} />;
    }
    if (compo === 4) {
      return <Aide setCompo={setCompo} />;
    }
    if (compo === 5) {
      return <Réservations setCompo={setCompo} familleId={familleId} />;
    }
    return <Base setCompo={setCompo} familleId={familleId} />;
  };

  return (
    <div className="applimenu">
      {choixComposant()}

      <NavbarApp setCompo={setCompo} />
    </div>
  );
}

export default AppliMenu;
