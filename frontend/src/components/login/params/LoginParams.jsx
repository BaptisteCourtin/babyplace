import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginParams() {
  const { state } = useLocation();
  const { token } = state;

  return (
    <section className="loginParams">
      <div className="loginParamsTitle">
        <h2>
          Paramétrez votre profil et gérez vos annonces pour gagner de l'argent
          !
        </h2>
        <p>
          Une fois votre profil créé et votre annonce publiée, vous pourrez la
          modifier à tout moment.
        </p>
      </div>
      <div className="loginParamsDetails">
        <details>
          <summary>Votre situation</summary>
          <Link to="/">Présentation</Link>
          <Link to="/">Conditions et réglement</Link>
          <Link to="/">Sécurité</Link>
        </details>
        <details>
          <summary>Votre lieu d'accueil</summary>
          <Link to="/">Structure d'accueil</Link>
          <Link to="/">Localisation</Link>
          <Link to="/">Photos</Link>
        </details>
        <details>
          <summary>Vos disponibilités</summary>
          <Link to="/">Calendrier, disponibilité et congés</Link>
          <Link to="/">Nombres de professionnels</Link>
          <Link to="/">Nombre de places</Link>
          <Link to="/">Paramètres de réservation</Link>
        </details>
      </div>
      <Link
        className="loginParamsBtn"
        to="/dashboard"
        state={{ token }}
      >
        Continuer
      </Link>
    </section >
  );
}

export default LoginParams;
