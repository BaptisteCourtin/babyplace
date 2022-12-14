import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";

function AppliCardCreche() {
  const location = useLocation();
  const { data, tabJour } = location.state;
  const { Photo_structure_1, Tarif_heure, Description, Telephone, Email } =
    data;

  const [prixJour, setPrixJour] = useState(0);

  useEffect(() => {
    setPrixJour(Tarif_heure * 8);
  }, []);

  return (
    <div className="appli-card-creche">
      <header>
        <Link to="/appli/search">{`< NOM CRECHE`}</Link>
      </header>

      <main>
        <div className="container-img">
          <img src={Photo_structure_1} alt="img creche" />
          <Star
            com={data.Avis_com}
            proprete={data.Avis_proprete}
            securite={data.Avis_securite}
            eveil={data.Avis_eveil}
            horaires={data.Avis_horaires}
          />
        </div>

        <div className="text">
          <div className="presentation">
            <h3>Présentation</h3>
            <p>{Description}</p>
          </div>

          <div className="horaire">
            <p>Horaires : Lundi - Samedi : 9h-16h</p>
            <p>Téléphone : 0{Telephone}</p>
            <p> Mail : {Email}</p>
          </div>

          <h3>Disponibiltés</h3>
          <div className="disponibilite">
            {tabJour.map((jour) => (
              <BlocJour jour={jour.jour} check={jour.check} />
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
                <span> {Tarif_heure}€</span> / heure *
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
