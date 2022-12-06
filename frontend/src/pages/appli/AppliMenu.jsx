import React from "react";
import { Link } from "react-router-dom";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { BiBuoy } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa";

function AppliMenu() {
  return (
    <div className="applimenu">
      <ProfilPlat />
      <main>
        <Link to="./appli/menu/fav">
          <AiFillHeart className="icon-menu" />
          Vos Favoris
        </Link>
        <Link to="/">
          <AiOutlineFile className="icon-menu" />
          Dossier d'inscription
        </Link>
        <Link to="./appli/menu/personnesfav">
          <BsFillPeopleFill className="icon-menu" />
          Personnes de confiance
        </Link>
        <Link to="./appli/menu/paiement">
          <AiFillCreditCard className="icon-menu" />
          Vos moyens de paiement
        </Link>
        <Link to="./appli/menu/aide">
          <BiBuoy className="icon-menu" />
          Aide
        </Link>
        <Link to="./appli/menu/reservation">
          <FaPiggyBank className="icon-menu" />
          Réservations
        </Link>
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliMenu;
