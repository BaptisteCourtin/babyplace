import React from "react";
import { Link, useLocation } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import Star from "@components/appli/recherche/Star";
import PopUp from "@components/appli/recherche/PopUp";

function AppliCardCreche() {
  const location = useLocation();
  const { data, dataHorairesId } = location.state;
  const {
    nom,
    nomUsage,
    nomNaissance,
    prenom,

    photoStructure2,
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

  // const [heureMax, setHeureMax] = useState(0);
  // const [heureMin, setHeureMin] = useState(0);
  // useEffect(() => {
  //   setHeureMin(Heure_min / 60);
  //   setHeureMax(Heure_max / 60);
  // }, []);

  return (
    <div className="appli-card-creche">
      <header>
        <Link to="/appli/search">{`< ${
          nom ||
          (nomUsage ? `${prenom} ${nomUsage}` : `${prenom} ${nomNaissance}`)
        }`}</Link>
      </header>

      <main>
        <div className="container-img">
          <img src={photoStructure2} alt="img creche" />
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

          <div className="dispo">
            <h3>Disponibiltés</h3>
            <BlocJour dataHorairesId={dataHorairesId} />
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
            {/* si ass mat */}
            {/* {animaux ? <p>Présence d'animaux</p> : null}
            {nonFumeur ? <p>Foyer non-fumeur</p> : null}
            {zeroPollution ? <p>0% pollution intérieure</p> : null}
            {repas ? <p>Repas maison</p> : null}
            {hygiene ? <p>produits d'hygiène fournis</p> : null} */}
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
            <PopUp data={data} dataHorairesId={dataHorairesId} />
          </div>
          <Link className="envoie-mess" to="/appli/message">
            Envoyer un Message
          </Link>
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
