import React from "react";
import { Link } from "react-router-dom";
import AppliPlaces from "@components/appli/filtres/AppliPlaces";
import avatar1 from "@assets/avatar1.svg";

function ChoixDates({ setCompo }) {
  return (
    <>
      <div className="button-top">
        <div className="suivant">
          <Link to="/appli/search">
            <button className="butt" type="button" onClick={() => setCompo(2)}>
              <span className="fleche">{`<`}</span>
              Annuler
              <span className="round" />
            </button>
          </Link>
        </div>
      </div>

      <main className="choix-dates">
        <div className="profil-plat">
          <div className="container-image">
            <img src={avatar1} alt="img" />
          </div>
          <div className="user-info">
            <p>Demandez une place</p>
            <h3>Creche P</h3>
          </div>
        </div>
        <AppliPlaces />
      </main>

      <div className="button-bas">
        <div className="suivant">
          <button className="butt" type="button" onClick={() => setCompo(2)}>
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChoixDates;
