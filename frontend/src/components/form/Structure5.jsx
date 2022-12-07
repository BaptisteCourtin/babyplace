import React, { useContext } from "react";
import Proptypes from "prop-types";
import { StructureContext } from "@pages/FormStructure";

function Structure5({
  PCSC1,
  nesting,
  montessori,
  handi,
  experience,
  enfants,
  jardin,
  sorties,
  animaux,
  nonFumeur,
  zeroPollution,
  repas,
  hygiene,
  promenades,
  eveil,
  musique,
  art,
  bilingue,
  bibli,
  transport,
  albumPhoto,
  photoConnecte,
  updateFields,
}) {
  const { structure } = useContext(StructureContext);

  return (
    <div className="structure5">
      <h4>Les petits plus de votre accueil</h4>
      <div className="inputsContainer">
        <h5>Expérience et Formations</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="psci"
            name="psci"
            onChange={() => updateFields({ PCSC1: !PCSC1 })}
          />
          <label htmlFor="psci">Formation premiers secours (PCSC1)</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="nesting"
            name="nesting"
            onChange={() => updateFields({ nesting: !nesting })}
          />
          <label htmlFor="nesting">
            Formation Nesting (pollution intérieure)
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="montessori"
            name="montessori"
            onChange={() => updateFields({ montessori: !montessori })}
          />
          <label htmlFor="montessori">
            Pedagogie Montessori / Pikler Loczy
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="handi"
            name="handi"
            onChange={() => updateFields({ handi: !handi })}
          />
          <label htmlFor="handi">Formation accueil d’enfant handicapés</label>
        </div>
        {structure === "assmat" && (
          <div className="inputContainer">
            <select
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => updateFields({ experience: e.target.value })}
            >
              <option>...</option>
              <option> Moins d'1 an</option>
              <option> 1 - 2 ans</option>
              <option> 3 - 5 ans</option>
              <option> 5 - 10 ans</option>
              <option> Plus de 10 ans</option>
            </select>
            <label htmlFor="handi">Années d'expérience</label>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="enfants"
                name="enfants"
                onChange={() => updateFields({ enfants: !enfants })}
              />
              <label htmlFor="enfants">
                J'ai moi-même un/des enfant(s){" "}
                <small>(peu importe leur âge)</small>
              </label>
            </div>
          </div>
        )}
      </div>
      {structure === "assmat" && (
        <div className="inputsContainer">
          <h5>Accueil</h5>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="jardin"
              name="jardin"
              onChange={() => updateFields({ jardin: !jardin })}
            />
            <label htmlFor="jardin">Espace extérieur / jardin</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="sorties"
              name="sorties"
              onChange={() => updateFields({ sorties: !sorties })}
            />
            <label htmlFor="sorties">Sorties extérieures</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="animaux"
              name="animaux"
              onChange={() => updateFields({ animaux: !animaux })}
            />
            <label htmlFor="animaux">Présence d’animaux</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="nonFumeur"
              name="nonFumeur"
              onChange={() => updateFields({ nonFumeur: !nonFumeur })}
            />
            <label htmlFor="nonFumeur">Foyer non fumeur</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="zeroPollution"
              name="zeroPollution"
              onChange={() => updateFields({ zeroPollution: !zeroPollution })}
            />
            <label htmlFor="zeroPollution">
              0% pollution intérieure{" "}
              <small>
                (articles de puériculture, jouets, cosmétiques, produits de
                décoration, d’entretien avec label écocert...)
              </small>
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="repas"
              name="repas"
              onChange={() => updateFields({ repas: !repas })}
            />
            <label htmlFor="repas">Je fais les repas maison</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="hygiene"
              name="hygiene"
              onChange={() => updateFields({ hygiene: !hygiene })}
            />
            <label htmlFor="hygiene">
              Je fournis les produits d’hygiène{" "}
              <small>(changes et couches)</small>
            </label>
          </div>
        </div>
      )}
      <div className="inputsContainer">
        <h5>Activités</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="promenades"
            name="promenades"
            onChange={() => updateFields({ promenades: !promenades })}
          />
          <label htmlFor="promenades">Promenades</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="eveil"
            name="eveil"
            onChange={() => updateFields({ eveil: !eveil })}
          />
          <label htmlFor="eveil">Activités d'éveil</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="musique"
            name="musique"
            onChange={() => updateFields({ musique: !musique })}
          />
          <label htmlFor="musique">Atelier musique</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="art"
            name="art"
            onChange={() => updateFields({ art: !art })}
          />
          <label htmlFor="art">Activité artistique</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="bilingue"
            name="bilingue"
            onChange={() => updateFields({ bilingue: !bilingue })}
          />
          <label htmlFor="bilingue">Bilingue/internationale</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="bibli"
            name="bibli"
            onChange={() => updateFields({ bibli: !bibli })}
          />
          <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="transport"
            name="transport"
            onChange={() => updateFields({ transport: !transport })}
          />
          <label htmlFor="transport">Transport d'enfant</label>
        </div>
      </div>
      <div className="inputsContainer">
        <h5>Lien avec les parents</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="albumPhoto"
            name="albumPhoto"
            onChange={() => updateFields({ albumPhoto: !albumPhoto })}
          />
          <label htmlFor="albumPhoto">Album photo</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="photoConnecte"
            name="photoConnecte"
            onChange={() => updateFields({ photoConnecte: !photoConnecte })}
          />
          <label htmlFor="photoConnecte">
            Connecté (Application de contact / site web....)
          </label>
        </div>
      </div>
    </div>
  );
}
Structure5.propTypes = {
  PCSC1: Proptypes.bool,
  nesting: Proptypes.bool,
  montessori: Proptypes.bool,
  handi: Proptypes.bool,
  experience: Proptypes.string,
  enfants: Proptypes.bool,
  jardin: Proptypes.bool,
  sorties: Proptypes.bool,
  animaux: Proptypes.bool,
  nonFumeur: Proptypes.bool,
  zeroPollution: Proptypes.bool,
  repas: Proptypes.bool,
  hygiene: Proptypes.bool,
  promenades: Proptypes.bool,
  eveil: Proptypes.bool,
  musique: Proptypes.bool,
  art: Proptypes.bool,
  bilingue: Proptypes.bool,
  bibli: Proptypes.bool,
  transport: Proptypes.bool,
  albumPhoto: Proptypes.bool,
  photoConnecte: Proptypes.bool,
  updateFields: Proptypes.func,
};
export default Structure5;
