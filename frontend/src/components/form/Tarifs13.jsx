import React, { useContext, useState } from "react";
import StructureContext from "@components/context/StructureContext";
import Proptypes from "prop-types";

function Structure13({
  tarifHeure,
  tarifHoraireSpec,
  indemnRepas,
  tarifAtelier,
  indemnEntretien,
  indemnKm,
  tarifHeureSup,
  updateFields,
}) {
  const { structure } = useContext(StructureContext);
  const [paje, setPaje] = useState(true);
  const [tarifEntretien, setTarifEntretien] = useState(true);
  const [tarifRepas, setTarifRepas] = useState(true);
  const [tarifKm, setTarifKm] = useState(true);
  const [tarifOption, setTarifOption] = useState(true);
  return (
    <div className="structure13 page-left">
      <div className="pageContent">
        <h4>Vos tarifs</h4>
        {structure === "creche" && (
          <div className="inputContainer">
            <h5>Votre mode de financement</h5>
            <p>
              La Caisse d'Allocations Familiales (CAF) participe au financement
              de votre mode de garde : de quel financement êtes vous
              bénéficiaire ?{" "}
            </p>
            <div className="innerContainer">
              <input
                type="checkbox"
                name="financement paje"
                checked={paje}
                onChange={() => {
                  updateFields({ financementPaje: true });
                  setPaje(true);
                }}
              />
              <label htmlFor="financement paje">
                Financement indirect via la Prestation d'Accueil du Jeune Enfant
                (PAJE)
              </label>
            </div>
            <div className="innerContainer">
              <input
                type="checkbox"
                name="financement psu"
                checked={!paje}
                onChange={() => {
                  updateFields({ financementPaje: false });
                  setPaje(false);
                }}
              />
              <label htmlFor="financement psu">
                Financement direct via la PSU (Prestation de Service Unique)
              </label>
            </div>
          </div>
        )}
        <div>
          <h5>Tarif horaire</h5>
          {!paje && (
            <p className="purpleText">
              Mise en application du barème national des participations
              familiales fixé par la CAF
            </p>
          )}
          {(paje || structure === "assmat") && (
            <div>
              <div className="inputPriceContainer">
                <p>
                  <span style={{ fontWeight: "500" }}>
                    Tarif horaire de base
                  </span>
                </p>
                <label htmlFor="tarifHeure">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="tarifHeure"
                    value={tarifHeure}
                    onChange={(e) =>
                      updateFields({ tarifHeure: e.target.value })
                    }
                  />
                  €
                </label>
              </div>
              <div className="inputPriceContainer">
                <p>
                  <span style={{ fontWeight: "500" }}>
                    Tarif heures spécifiques{" "}
                  </span>
                  <br />
                  (horaire 22h-6h, dimanche, jour férié)
                </p>
                <label htmlFor="tarifHoraireSpec">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="tarifHoraireSpec"
                    value={tarifHoraireSpec}
                    onChange={(e) =>
                      updateFields({ tarifHoraireSpec: e.target.value })
                    }
                  />
                  €
                </label>
              </div>
              {structure === "assmat" && (
                <div className="inputPriceContainer">
                  <p>
                    <span style={{ fontWeight: "500" }}>
                      Heures complémentaire majorées
                    </span>{" "}
                    <br />
                    (au delà de 45h/semaine)
                  </p>
                  <label htmlFor="tarifHeureSup">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      name="tarifHeureSup"
                      value={tarifHeureSup}
                      onChange={(e) =>
                        updateFields({ tarifHeureSup: e.target.value })
                      }
                    />
                    €
                  </label>
                </div>
              )}
            </div>
          )}
          <h5>Les services d'accueil</h5>
          <div className="with-toggle">
            {structure === "assmat" && (
              <div className="innerToggle">
                <p>
                  <span style={{ fontWeight: "500" }}>
                    Indemnité d'entretien
                  </span>{" "}
                  <br /> Frais courants
                </p>
                <div className="right-part">
                  <div>
                    <input
                      type="checkbox"
                      className="input-toggle"
                      id="tarifEntretien"
                      name="tarifEntretien"
                      checked={tarifEntretien}
                      onChange={() => setTarifEntretien(!tarifEntretien)}
                    />
                    <label htmlFor="tarifEntretien" className="toggle">
                      <span className="ball" />
                    </label>
                  </div>
                  {tarifEntretien && (
                    <div className="inputPriceContainer">
                      <label htmlFor="indemnEntretien">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="indemnEntretien"
                          value={indemnEntretien}
                          onChange={(e) =>
                            updateFields({ indemnEntretien: e.target.value })
                          }
                        />
                        €
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="innerToggle">
              <p>
                <span style={{ fontWeight: "500" }}>Indemnité de repas</span>
              </p>
              {paje || structure === "assmat" ? (
                <div className="right-part">
                  <div>
                    <input
                      type="checkbox"
                      className="input-toggle"
                      id="tarifRepas"
                      name="tarifRepas"
                      checked={tarifRepas}
                      onChange={() => setTarifRepas(!tarifRepas)}
                    />
                    <label htmlFor="tarifRepas" className="toggle">
                      <span className="ball" />
                    </label>
                  </div>
                  {tarifRepas && (
                    <div className="inputPriceContainer">
                      <label htmlFor="indemnRepas">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="indemnRepas"
                          value={indemnRepas}
                          onChange={(e) =>
                            updateFields({ indemnRepas: e.target.value })
                          }
                        />
                        €
                      </label>
                    </div>
                  )}
                </div>
              ) : (
                <p style={{ marginRight: "7vw" }}>Inclus</p>
              )}
            </div>
            {structure === "assmat" && (
              <div className="innerToggle">
                <p>
                  <span style={{ fontWeight: "500" }}>
                    Indemnité kilométrique
                  </span>{" "}
                  <br /> Lorsque vous utilisez votre véhicule
                </p>
                <div className="right-part">
                  <div>
                    <input
                      type="checkbox"
                      className="input-toggle"
                      id="tarifKm"
                      name="tarifKm"
                      checked={tarifKm}
                      onChange={() => setTarifKm(!tarifKm)}
                    />
                    <label htmlFor="tarifKm" className="toggle">
                      <span className="ball" />
                    </label>
                  </div>
                  {tarifKm && (
                    <div className="inputPriceContainer">
                      <label htmlFor="indemnKm">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="indemnKm"
                          value={indemnKm}
                          onChange={(e) =>
                            updateFields({ indemnKm: e.target.value })
                          }
                        />
                        €
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}
            {structure === "creche" && (
              <div className="innerToggle">
                <p>
                  <span style={{ fontWeight: "500" }}>
                    Tarif ateliers optionnels
                  </span>{" "}
                  <br />
                  Ex : Atelier Montessori
                </p>

                <div className="right-part">
                  <div>
                    <input
                      type="checkbox"
                      className="input-toggle"
                      id="tarifOption"
                      name="tarifOption"
                      checked={tarifOption}
                      onChange={() => setTarifOption(!tarifOption)}
                    />
                    <label htmlFor="tarifOption" className="toggle">
                      <span className="ball" />
                    </label>
                  </div>
                  {tarifOption && (
                    <div className="inputPriceContainer">
                      <label htmlFor="tarifAtelier">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="tarifAtelier"
                          value={tarifAtelier}
                          onChange={(e) =>
                            updateFields({ tarifAtelier: e.target.value })
                          }
                        />
                        €
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Structure13.propTypes = {
  tarifHeure: Proptypes.node,
  tarifHoraireSpec: Proptypes.node,
  indemnRepas: Proptypes.node,
  tarifAtelier: Proptypes.node,
  indemnEntretien: Proptypes.node,
  indemnKm: Proptypes.node,
  tarifHeureSup: Proptypes.node,
  updateFields: Proptypes.func,
};
export default Structure13;
