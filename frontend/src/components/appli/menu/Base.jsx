import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ProfilPlat from "@components/appli/ProfilPlat";

import { AiFillHeart, AiOutlineFile, AiFillCreditCard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiBuoy } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function Base({ setCompo, familleId, setFamilleId }) {
  const navigate = useNavigate();

  // --- deconnection et retour à la page / ---
  const handleDeco = () => {
    axios
      .put(`${import.meta.env.VITE_PATH}/famille/deconnexion/${familleId}`)
      .then(() => {
        sessionStorage.clear();
        setFamilleId(null);
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
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
      <div className="button-bas">
        <button
          type="button"
          className="butt grad"
          onClick={() => handleDeco()}
        >
          <MdLogout />
          Déconnexion
        </button>
      </div>
    </>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
  familleId: PropTypes.string.isRequired,
  setFamilleId: PropTypes.func.isRequired,
};

export default Base;
