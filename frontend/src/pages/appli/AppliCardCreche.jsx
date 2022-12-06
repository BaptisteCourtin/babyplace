import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import imgCreche from "@assets/img-time.svg";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";

function AppliCardCreche() {
  const location = useLocation();
  const { each } = location.state;
  // each contient tous ce qu'il faut pour 1 creche

  const [prixJour, setPrixJour] = useState(0);

  useEffect(() => {
    setPrixJour(each.prix * 8);
  }, []);

  return (
    <div className="appli-card-creche">
      <header>
        <Link to="/appli/search">{`< NOM CRECHE`}</Link>
      </header>

      <main>
        <div className="container-img">
          <img src={imgCreche} alt="img creche" />
          <Star />
        </div>

        <div className="text">
          <div className="presentation">
            <h3>Présentation</h3>
            <p>
              La crèche « Picoti Picota » n’est pas qu’un lieu de garde c’est
              surtout un lieu d’échange et d’accueil des enfants et des familles
              dans une confiance réciproque où le respect, l’autonomie et la
              sécurité sont des références privilégiées dans notre projet.
            </p>
          </div>

          <div className="horaire">
            <p>Horaires : Lundi - Samedi : 9h-16h</p>
            <p>Téléphone : 05 56 56 56 56</p>
            <p> Mail : contact@contact.fr</p>
          </div>

          <h3>Disponibiltés</h3>
          <div className="disponibilite">
            {each.jours.map((each) => (
              <BlocJour jour={each.jour} check={each.check} />
            ))}
          </div>

          <div>
            <h3>Expérience</h3>
            <p>Formation 1er secours</p>
            <p>Formation Nesting</p>
            <p>Pédagogie Montessori</p>
          </div>
          <div>
            <h3>Accueil</h3>
            <p>Sorties extérieure</p>
            <p>Repas maison</p>
            <p>Foyer Non-Fumeur</p>
          </div>
          <div>
            <h3>Activité</h3>
            <p>Promenade</p>
            <p>Activité d’éveil</p>
            <p>Atelier musique</p>
          </div>

          <div className="prix-resa">
            <div className="prix">
              <p>
                <span> {each.prix}€</span> / heure *
              </p>
              <p>
                <span>{prixJour}€</span> / jour *
              </p>
            </div>
            <PopUp />
          </div>
        </div>
      </main>

      <footer>
        * En complétant mon profil, je peux obtenir une tarification
        personnalisée en fonction de mes revenus
      </footer>
    </div>
  );
}

export default AppliCardCreche;
