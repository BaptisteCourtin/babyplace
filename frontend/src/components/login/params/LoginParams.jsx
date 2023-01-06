import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginParams() {
  const { state } = useLocation();
  const { token } = state;
  const [donnees, setDonnees] = useState({});
  const [details, setDetails] = useState([]);
  const [userType, setUserType] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/structure", {
        headers: {
          "x-token": token,
        },
      })
      setDonnees(res.data[0]);
      if (res.data[0].isCreche === 0) {
        axios.get(`http://localhost:5000/structure/details?type=assMat&id=${res.data[0].structureId}`, {
          id: res.data[0].structureId,
        })
          .then(res => {
            setDetails(res.data[0])
            console.log(res.data[0])
            setUserType('assMat')
          })
      } else {
        axios.get(`http://localhost:5000/structure/details?type=creche&id=${res.data[0].structureId}`, {
          id: res.data[0].structureId,
        })
          .then(res => {
            setDetails(res.data[0])
            setUserType('creche')
          })
      }
    }
    catch (err) {
      toast.error(err.message)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  const data = Object.assign(donnees, details)

  return (
    <section className="loginParams">
      <p>
        Bienvenue <span>{details.nom || details.prenom}</span>
      </p>
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
        state={{ data: { ...data }, userType: userType }}
      >
        Continuer
      </Link>
    </section>
  );
}

export default LoginParams;
