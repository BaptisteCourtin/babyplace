import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";

function AppliCardCreche() {
  const location = useLocation();
  const { data, tabJour } = location.state;
  const {
    Photo_structure_1,
    Tarif_heure,
    Description,

    Heure_min,
    Heure_max,
    Telephone,
    Email,
    Adresse,

    PSCI,
    Nesting,
    Montessori,
    Handi,

    Jardin,

    Promenades,
    Musique,
    Art,
    Bilingue,
    Bibli,

    Album_photo,
    Photo_connecte,
  } = data;

  const [prixJour, setPrixJour] = useState(0);
  const [heureMax, setHeureMax] = useState(0);
  const [heureMin, setHeureMin] = useState(0);
  useEffect(() => {
    setPrixJour(Tarif_heure * 8);
    setHeureMin(Heure_min / 60);
    setHeureMax(Heure_max / 60);
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
            <p>
              Horaires : {heureMin}h-{heureMax}h
            </p>
            <p>Téléphone : 0{Telephone}</p>
            <p>Mail : {Email}</p>
            <p>Adresse : {Adresse}</p>
          </div>

          <h3>Disponibiltés</h3>
          <div className="disponibilite">
            {tabJour.map((jour) => (
              <BlocJour jour={jour.jour} check={jour.check} />
            ))}
          </div>

          <div>
            <h3>Expérience</h3>
            {PSCI ? <p>Formation 1er secours</p> : null}
            {Nesting ? <p>Formation Nesting</p> : null}
            {Montessori ? <p>Pédagogie Montessori</p> : null}
            {Handi ? <p>Formation handicapé</p> : null}
          </div>

          <div>
            <h3>Accueil</h3>
            {Jardin ? <p>Jardin</p> : null}
            {/* {Jardin ? <p>Présence d'animaux</p> : null}
            {Jardin ? <p>Foyer non-fumeur</p> : null}
            {Jardin ? <p>0% pollution intérieure</p> : null}
            {Jardin ? <p>Repas maison</p> : null}
            {Jardin ? <p>produits d'hygiène fournis</p> : null} */}
          </div>

          <div>
            <h3>Activité</h3>
            {Promenades ? <p>Promenades</p> : null}
            {Bibli ? <p>Bibliothèque</p> : null}
            {Art ? <p>Atelier art plastique</p> : null}
            {Bilingue ? <p>Atelier Anglais</p> : null}
            {Musique ? <p>Atelier musique</p> : null}
          </div>

          <div>
            <h3>Lien avec les parents</h3>
            {Album_photo ? <p>Album photo</p> : null}
            {Photo_connecte ? <p>Album photo connecté</p> : null}
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
