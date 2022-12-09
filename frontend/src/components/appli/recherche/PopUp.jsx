import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconCran from "@assets/app parents/Icon cran.svg";

function PopUp() {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const profilComplet = false;

  function OnePopUp() {
    if (visiblePopUp && profilComplet) {
      return (
        <div className="pop">
          <button
            className="retour"
            type="button"
            onClick={() => setVisiblePopUp(false)}
          >
            Retour
          </button>
          <div className="paragraphe">
            <h3>Aggréments</h3>
            <ul>
              <li>Enfant handicapé</li>
              <li>Enfant de moins de 18 mois</li>
              <li>Horaires atypique</li>
              <li>Accueil de nuit</li>
            </ul>
          </div>
          <div className="paragraphe">
            <h3>Règlement Intérieur</h3>
            <p>
              La période d’adaptation est obligatoire.
              <br />
              <br />
              Les parents sont priés de respecter l’environnement, le voisinage,
              la vie privée et la famille de l’assistante maternelle.
              <br />
              <br />
              Taper ou sonner à la porte, ne pas rentrer sans y être invité et
              attendre qu’on vienne vous ouvrir.
              <br />
              <br />
              Les parents doivent me transmettent toutes les informations
              nécessaires, ainsi que les incidents éventuels survenus au
              domicile.
              <br />
              <br />
              L’enfant arrivera en état de propreté, habillé et ayant pris son
              premier repas Les bijoux seront enlevés et rendus aux parents pour
              des raisons de sécurité (étouffement, ingestion…).
              <br />
              <br />
              L’assistante maternelle est habilitée à administrer les
              médicaments uniquement sur ordonnance ou protocole.
            </p>
          </div>
          <button type="button" onClick={() => setVisiblePopUp(false)}>
            J'ai compris !
          </button>
        </div>
      );
    }
    if (visiblePopUp && !profilComplet) {
      return (
        <div className="pop">
          <button
            className="retour"
            type="button"
            onClick={() => setVisiblePopUp(false)}
          >
            Retour
          </button>
          <div className="cran">
            <img src={iconCran} alt="cran" />
            <h4>Mon dossier d'inscription</h4>
          </div>
          <p>
            Comme tout accueil en structure collective, vous devez compléter un
            dossier d’inscription comprennant :
            <br />
            <br />
            - un certificat médical d’aptitude de vie en collectivité
            <br />
            - une photocopie du carnet de vaccinations,
            <br />
            - une photocopie du livret de famille
            <br />- votre numéro d’allocataire CAF.
          </p>
          <button type="button">
            <Link to="/appli/user/completion">Compléter mon dossier</Link>
          </button>
        </div>
      );
    }
    return "";
  }

  return (
    <div className={visiblePopUp ? "pop-up-creche visible" : "pop-up-creche"}>
      <button
        type="button"
        className="butt-reserver"
        onClick={() => setVisiblePopUp(true)}
      >
        Réserver
      </button>

      {OnePopUp()}
    </div>
  );
}

export default PopUp;
