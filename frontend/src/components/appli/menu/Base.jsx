import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfilPlat from "@components/appli/ProfilPlat";

import { AiFillHeart, AiOutlineFile, AiFillCreditCard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiBuoy } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa";

function Base({ setCompo }) {
  return (
    <main className="menu-base">
      <ProfilPlat />

      <button type="button" onClick={() => setCompo(1)}>
        <AiFillHeart className="icon-menu" />
        Vos Favoris
      </button>
      <button type="button">
        <Link to="/appli/user/completion" state={{ quelCompo: 2 }}>
          <AiOutlineFile className="icon-menu" />
          Dossier d'inscription
        </Link>
      </button>
      <button type="button" onClick={() => setCompo(2)}>
        <BsFillPeopleFill className="icon-menu" />
        Personnes de confiance
      </button>
      <button type="button" onClick={() => setCompo(3)}>
        <AiFillCreditCard className="icon-menu" />
        Vos moyens de paiement
      </button>
      <button type="button" onClick={() => setCompo(4)}>
        <BiBuoy className="icon-menu" />
        Aide
      </button>
      <button type="button" onClick={() => setCompo(5)}>
        <FaPiggyBank className="icon-menu" />
        Réservations
      </button>
    </main>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Base;
