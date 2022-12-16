import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";

function AppliCardCreche() {
  const location = useLocation();
  const { data, tabJour } = location.state;
  const {
    photoStructure1,
    tarifHeure,
    description,

    // Heure_min,
    // Heure_max,
    telephone,
    email,
    adresse,

    pcsc1,
    nesting,
    montessori,
    handi,

    jardin,

    promenades,
    musique,
    art,
    bilingue,
    bibli,

    albumPhoto,
    photoConnecte,
  } = data;

  // const [heureMax, setHeureMax] = useState(0);
  // const [heureMin, setHeureMin] = useState(0);
  // useEffect(() => {
  //   setHeureMin(Heure_min / 60);
  //   setHeureMax(Heure_max / 60);
  // }, []);

  return (
    <div className="appli-card-creche">
      <header>
        <Link to="/appli/search">{`< NOM CRECHE`}</Link>
      </header>

      <main>
        <div className="container-img">
          <img src={photoStructure1} alt="img creche" />
          <Star
            com={data.avisCom}
            proprete={data.avisProprete}
            securite={data.avisSecurite}
            eveil={data.avisEveil}
            horaires={data.avisHoraires}
          />
        </div>

        <div className="text">
          <div className="presentation">
            <h3>Présentation</h3>
            <p>{description}</p>
          </div>

          <div className="horaire">
            {/* <p>
              Horaires : {heureMin}h-{heureMax}h
            </p> */}
            <p>Téléphone : 0{telephone}</p>
            <p>Mail : {email}</p>
            <p>Adresse : {adresse}</p>
          </div>

          <h3>Disponibiltés</h3>
          <div className="disponibilite">
            {tabJour.map((jour) => (
              <BlocJour jour={jour.jour} check={jour.check} />
            ))}
          </div>

          <div>
            <h3>Expérience</h3>
            {pcsc1 ? <p>Formation 1er secours</p> : null}
            {nesting ? <p>Formation Nesting</p> : null}
            {montessori ? <p>Pédagogie Montessori</p> : null}
            {handi ? <p>Formation handicapé</p> : null}
          </div>

          <div>
            <h3>Accueil</h3>
            {jardin ? <p>Jardin</p> : null}
            {/* {Jardin ? <p>Présence d'animaux</p> : null}
            {Jardin ? <p>Foyer non-fumeur</p> : null}
            {Jardin ? <p>0% pollution intérieure</p> : null}
            {Jardin ? <p>Repas maison</p> : null}
            {Jardin ? <p>produits d'hygiène fournis</p> : null} */}
          </div>

          <div>
            <h3>Activité</h3>
            {promenades ? <p>Promenades</p> : null}
            {bibli ? <p>Bibliothèque</p> : null}
            {art ? <p>Atelier art plastique</p> : null}
            {bilingue ? <p>Atelier Anglais</p> : null}
            {musique ? <p>Atelier musique</p> : null}
          </div>

          <div>
            <h3>Lien avec les parents</h3>
            {albumPhoto ? <p>Album photo</p> : null}
            {photoConnecte ? <p>Album photo connecté</p> : null}
          </div>

          <div className="prix-resa">
            <div className="prix">
              <p>
                <span> {tarifHeure}€</span> / heure *
              </p>
              <p>
                <span>{tarifHeure * 8}€</span> / jour *
              </p>
            </div>
            <PopUp data={data} />
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
