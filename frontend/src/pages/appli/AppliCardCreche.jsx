import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";
import { toast } from "react-hot-toast";
import { MdReportProblem } from "react-icons/md";

function AppliCardCreche() {
  const location = useLocation();
  const { data, dataHorairesId, familleId } = location.state;
  const {
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,

    photoStructure1,
    photoStructure2,
    tarifHeure,
    description,

    telephone,
    email,
    adresse,

    pcsc1,
    nesting,
    montessori,
    handi,

    jardin,
    animaux,
    nonFumeur,
    zeroPollution,
    repas,
    hygiene,

    promenades,
    musique,
    art,
    bilingue,
    bibli,

    albumPhoto,
    photoConnecte,
  } = data;

  const handleSignaler = () => {
    axios.put(`${import.meta.env.VITE_PATH}/structure/signal/${structureId}`);
    toast.success("Votre signalement à bien été transmis.");
  };

  return (
    <div className="appli-card-creche">
      <header>
        <Link to="/appli/search">{`< ${nom ||
          (nomUsage ? `${prenom} ${nomUsage}` : `${prenom} ${nomNaissance}`)
          }`}</Link>
      </header>

      <main>
        <div className="container-img">
          <img src={photoStructure2 || photoStructure1} alt="img creche" />

          {familleId && (
            <button
              type="button"
              className="report"
              onClick={() => handleSignaler()}
            >
              <MdReportProblem />
              <p>Signaler</p>
            </button>
          )}

          <Star
            com={data.avisCom}
            proprete={data.avisProprete}
            securite={data.avisSecurite}
            eveil={data.avisEveil}
            horaires={data.avisHoraires}
            nbNotes={data.nbNotes}
          />
        </div>

        <div className="text">
          <div className="presentation">
            <h3>Présentation</h3>
            <p>{description}</p>
          </div>

          <div className="horaire">
            <p>Téléphone : {telephone}</p>
            <p>Mail : {email}</p>
            <p>Adresse : {adresse}</p>
          </div>

          <div className="dispo">
            <h3>Disponibiltés</h3>
            <BlocJour dataHorairesId={dataHorairesId} />
          </div>

          <div>
            <h3>Expérience</h3>
            {pcsc1 ? <p>Formation 1er secours</p> : null}
            {nesting ? <p>Formation Nesting</p> : null}
            {montessori ? <p>Pédagogie Montessori</p> : null}
            {handi ? <p>Formation handicap</p> : null}
          </div>

          <div>
            <h3>Accueil</h3>
            {jardin ? <p>Jardin</p> : null}
            {/* si ass mat */}
            {animaux ? <p>Présence d'animaux</p> : null}
            {nonFumeur ? <p>Foyer non-fumeur</p> : null}
            {zeroPollution ? <p>0% pollution intérieure</p> : null}
            {repas ? <p>Repas maison</p> : null}
            {hygiene ? <p>Produits d'hygiène fournis</p> : null}
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
                <span>{tarifHeure * 10}€</span> / jour (10h)*
              </p>
            </div>

            {familleId && <PopUp data={data} dataHorairesId={dataHorairesId} />}
          </div>

          {familleId && (
            <Link className="envoie-mess" to="/appli/message">
              Envoyer un Message
            </Link>
          )}
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
