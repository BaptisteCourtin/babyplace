import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PopUpProfilComplet({ setVisiblePopUp, data, dataHorairesId }) {
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
          <li>Horaires atypiques</li>
          <li>Accueil de nuit</li>
        </ul>
      </div>
      <div className="paragraphe">
        <h3>Règlement Intérieur</h3>
        <p>
          La période d’adaptation est obligatoire.
          <br />
          <br />
          Les parents sont priés de respecter l’environnement, le voisinage, la
          vie privée et la famille de l’assistante maternelle.
          <br />
          <br />
          Taper ou sonner à la porte, ne pas rentrer sans y être invité et
          attendre qu’on vienne vous ouvrir.
          <br />
          <br />
          Les parents doivent me transmettent toutes les informations
          nécessaires, ainsi que les incidents éventuels survenus au domicile.
          <br />
          <br />
          L’enfant arrivera en état de propreté, habillé et ayant pris son
          premier repas. Les bijoux seront enlevés et rendus aux parents pour
          des raisons de sécurité (étouffement, ingestion…).
          <br />
          <br />
          L’assistante maternelle est habilitée à administrer les médicaments
          uniquement sur ordonnance ou protocole.
        </p>
      </div>
      <Link to="/appli/search/reservation" state={{ data, dataHorairesId }}>
        <button type="button" className="compris">
          J'ai compris !
        </button>
      </Link>
    </div>
  );
}

PopUpProfilComplet.propTypes = {
  setVisiblePopUp: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  dataHorairesId: PropTypes.array.isRequired,
};

export default PopUpProfilComplet;
