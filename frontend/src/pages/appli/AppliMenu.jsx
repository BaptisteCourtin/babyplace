import React from "react";
import { Link } from "react-router-dom";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";

function AppliMenu() {
  return (
    <div className="applimenu">
      <ProfilPlat />
      <main>
        <Link to="./appli/menu/fav">
          <img src="" alt="fav" />
          Vos Favoris
        </Link>
        <Link to="/">
          <img src="" alt="dossier" />
          Dossier d'inscription
        </Link>
        <Link to="./appli/menu/personnesfav">
          <img src="" alt="personnes" />
          Personnes de confiance
        </Link>
        <Link to="./appli/menu/paiement">
          <img src="" alt="cb" />
          Vos moyens de paiement
        </Link>
        <Link to="./appli/menu/aide">
          <img src="" alt="aide" />
          Aide
        </Link>
        <Link to="./appli/menu/reservation">
          <img src="" alt="cochon" />
          Réservations
        </Link>
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliMenu;
