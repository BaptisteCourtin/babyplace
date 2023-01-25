import React, { useContext } from "react";
import Proptypes, { bool, number, string, oneOfType } from "prop-types";
import StructureContext from "@components/context/StructureContext";

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
      <div className="colonnePage5">
        <div className="optionsLeft">
          <div className="inputsContainer">
            <h5>Formations</h5>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="psci"
                name="psci"
                checked={PCSC1}
                onChange={() => updateFields({ PCSC1: !PCSC1 })}
              />
              <label htmlFor="psci">Formation premiers secours (PSC1)</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="nesting"
                name="nesting"
                checked={nesting}
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
                checked={montessori}
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
                checked={handi}
                onChange={() => updateFields({ handi: !handi })}
              />
              <label htmlFor="handi">
                Formation accueil d’enfant handicapés
              </label>
            </div>
          </div>
          <div className="inputsContainer">
            <h5>Activités</h5>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="promenades"
                name="promenades"
                checked={promenades}
                onChange={() => updateFields({ promenades: !promenades })}
              />
              <label htmlFor="promenades">Promenades</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="jardin"
                name="jardin"
                checked={jardin}
                onChange={() => updateFields({ jardin: !jardin })}
              />
              <label htmlFor="jardin">Espace extérieur / jardin</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="sorties"
                name="sorties"
                checked={sorties}
                onChange={() => updateFields({ sorties: !sorties })}
              />
              <label htmlFor="sorties">Sorties extérieures</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="eveil"
                name="eveil"
                checked={eveil}
                onChange={() => updateFields({ eveil: !eveil })}
              />
              <label htmlFor="eveil">Activités d'éveil</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="musique"
                name="musique"
                checked={musique}
                onChange={() => updateFields({ musique: !musique })}
              />
              <label htmlFor="musique">Atelier musique</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="art"
                name="art"
                checked={art}
                onChange={() => updateFields({ art: !art })}
              />
              <label htmlFor="art">Activité artistique</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="bilingue"
                name="bilingue"
                checked={bilingue}
                onChange={() => updateFields({ bilingue: !bilingue })}
              />
              <label htmlFor="bilingue">Bilingue/internationale</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="bibli"
                name="bibli"
                checked={bibli}
                onChange={() => updateFields({ bibli: !bibli })}
              />
              <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="transport"
                name="transport"
                checked={transport}
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
                checked={albumPhoto}
                onChange={() => updateFields({ albumPhoto: !albumPhoto })}
              />
              <label htmlFor="albumPhoto">Album photo</label>
            </div>
            <div className="inputContainer">
              <input
                type="checkbox"
                id="photoConnecte"
                name="photoConnecte"
                checked={photoConnecte}
                onChange={() => updateFields({ photoConnecte: !photoConnecte })}
              />
              <label htmlFor="photoConnecte">
                Connecté (Application de contact / site web....)
              </label>
            </div>
          </div>
        </div>
        {structure === "assmat" && (
          <div className="assmatOptionsRight">
            <div className="inputsContainer">
              <h5>Expérience</h5>
              <div className="inputContainer">
                <label htmlFor="experience">Années d'expérience</label>
                <input
                  type="number"
                  min="0"
                  max="60"
                  name="experience"
                  value={experience}
                  onChange={(e) => updateFields({ experience: e.target.value })}
                />
              </div>
              <div className="inputContainer">
                <input
                  type="checkbox"
                  id="enfants"
                  name="enfants"
                  checked={enfants}
                  onChange={() => updateFields({ enfants: !enfants })}
                />
                <label htmlFor="enfants">
                  J'ai moi-même un/des enfant(s){" "}
                  <small>(peu importe leur âge)</small>
                </label>
              </div>
            </div>
            <div className="inputsContainer">
              <h5>Accueil</h5>
              <div className="inputContainer">
                <input
                  type="checkbox"
                  id="animaux"
                  name="animaux"
                  checked={animaux}
                  onChange={() => updateFields({ animaux: !animaux })}
                />
                <label htmlFor="animaux">Présence d’animaux</label>
              </div>
              <div className="inputContainer">
                <input
                  type="checkbox"
                  id="nonFumeur"
                  name="nonFumeur"
                  checked={nonFumeur}
                  onChange={() => updateFields({ nonFumeur: !nonFumeur })}
                />
                <label htmlFor="nonFumeur">Foyer non fumeur</label>
              </div>
              <div className="inputContainer">
                <input
                  type="checkbox"
                  id="zeroPollution"
                  name="zeroPollution"
                  checked={zeroPollution}
                  onChange={() =>
                    updateFields({ zeroPollution: !zeroPollution })
                  }
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
                  checked={repas}
                  onChange={() => updateFields({ repas: !repas })}
                />
                <label htmlFor="repas">Je fais les repas maison</label>
              </div>
              <div className="inputContainer">
                <input
                  type="checkbox"
                  id="hygiene"
                  name="hygiene"
                  checked={hygiene}
                  onChange={() => updateFields({ hygiene: !hygiene })}
                />
                <label htmlFor="hygiene">
                  Je fournis les produits d’hygiène{" "}
                  <small>(changes et couches)</small>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
Structure5.propTypes = {
  PCSC1: oneOfType([bool, number]),
  nesting: oneOfType([bool, number]),
  montessori: oneOfType([bool, number]),
  handi: oneOfType([bool, number]),
  enfants: oneOfType([bool, number]),
  experience: oneOfType([string, number]),
  jardin: oneOfType([bool, number]),
  sorties: oneOfType([bool, number]),
  animaux: oneOfType([bool, number]),
  nonFumeur: oneOfType([bool, number]),
  zeroPollution: oneOfType([bool, number]),
  repas: oneOfType([bool, number]),
  hygiene: oneOfType([bool, number]),
  promenades: oneOfType([bool, number]),
  eveil: oneOfType([bool, number]),
  musique: oneOfType([bool, number]),
  art: oneOfType([bool, number]),
  bilingue: oneOfType([bool, number]),
  bibli: oneOfType([bool, number]),
  transport: oneOfType([bool, number]),
  albumPhoto: oneOfType([bool, number]),
  photoConnecte: oneOfType([bool, number]),
  updateFields: Proptypes.func,
};
export default Structure5;
