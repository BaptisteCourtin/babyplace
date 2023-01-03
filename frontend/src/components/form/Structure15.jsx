import React, { useContext } from "react";
import StructureContext from "@components/context/StructureContext";
import Proptypes from "prop-types";

function Structure15({
  numSecu,
  numAgrement,
  dateAgrement,
  docPmi,
  siret,
  assHabitNom,
  assHabitNumero,
  assHabitAdresse,
  assAutoNom,
  assAutoNumero,
  assAutoAdresse,
  docIdentite,
  docVitale,
  docJustifDom,
  docDiplome,
  docRespCivile,
  docAssAuto,
  updateFields,
}) {
  const { structure } = useContext(StructureContext);

  return (
    <div className="structure15 page-left">
      <div className="pageContent">
        <h4>Vérifications</h4>
        <p>
          Nous avons besoin d'effectuer quelques vérifications avant validation
          définitive de votre compte
        </p>
        <div className="inputsContainer">
          {structure === "assmat" ? (
            <div className="inputContainer">
              <input
                required
                type="text"
                name="numSecu"
                pattern="[0-9]{15}"
                value={numSecu}
                onChange={(e) => updateFields({ numSecu: e.target.value })}
              />
              <label
                htmlFor="numSecu"
                className={numSecu !== "" ? "labelChecked" : ""}
              >
                N° sécurité sociale
              </label>
              <p className="checkSymbol">&#x2713;</p>
            </div>
          ) : (
            <div className="inputContainer">
              <input
                required
                type="text"
                name="siret"
                pattern="[0-9]{15}"
                value={siret}
                onChange={(e) => updateFields({ siret: e.target.value })}
              />
              <label
                htmlFor="siret"
                className={siret !== "" ? "labelChecked" : ""}
              >
                SIRET
              </label>
              <p className="checkSymbol">&#x2713;</p>
            </div>
          )}

          <div className="inputContainer">
            <input
              required
              type="text"
              name="numAgrement"
              pattern="[0-9]{15}"
              value={numAgrement}
              onChange={(e) => updateFields({ numAgrement: e.target.value })}
            />
            <label
              htmlFor="numAgrement"
              className={numAgrement !== "" ? "labelChecked" : ""}
            >
              N° agrément
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
          <div className="inputContainer">
            <input
              required
              type="date"
              name="dateAgrement"
              value={dateAgrement}
              onChange={(e) => updateFields({ dateAgrement: e.target.value })}
            />
            <label
              htmlFor="dateAgrement"
              className={dateAgrement !== "" ? "labelChecked" : ""}
            >
              Date agrément
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
        </div>
        {structure === "assmat" && (
          <>
            <h4>Assurances</h4>
            <h5>Assurance habitation</h5>
            <div className="inputsContainer">
              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assHabitNom"
                  pattern=".{4,}"
                  value={assHabitNom}
                  onChange={(e) =>
                    updateFields({ assHabitNom: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNom"
                  className={assHabitNom !== "" ? "labelChecked" : ""}
                >
                  Nom
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>

              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assHabitNumero"
                  pattern=".{5,}"
                  value={assHabitNumero}
                  onChange={(e) =>
                    updateFields({ assHabitNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNumero"
                  className={assHabitNumero !== "" ? "labelChecked" : ""}
                >
                  Numéro de police
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>
              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assHabitAdresse"
                  pattern=".{15}"
                  value={assHabitAdresse}
                  onChange={(e) =>
                    updateFields({ assHabitAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitAdresse"
                  className={assHabitAdresse !== "" ? "labelChecked" : ""}
                >
                  Adresse
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>
            </div>
            <h5>Assurance auto</h5>
            <div className="inputsContainer">
              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assAutoNom"
                  pattern=".{4,}"
                  value={assAutoNom}
                  onChange={(e) => updateFields({ assAutoNom: e.target.value })}
                />
                <label
                  htmlFor="assAutoNom"
                  className={assAutoNom !== "" ? "labelChecked" : ""}
                >
                  Nom
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>
              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assAutoNumero"
                  pattern=".{5,}"
                  value={assAutoNumero}
                  onChange={(e) =>
                    updateFields({ assAutoNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoNumero"
                  className={assAutoNumero !== "" ? "labelChecked" : ""}
                >
                  Numéro de police
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>
              <div className="inputContainer">
                <input
                  required
                  type="text"
                  name="assAutoAdresse"
                  pattern=".{15}"
                  value={assAutoAdresse}
                  onChange={(e) =>
                    updateFields({ assAutoAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoAdresse"
                  className={assAutoAdresse !== "" ? "labelChecked" : ""}
                >
                  Adresse
                </label>
                <p className="checkSymbol">&#x2713;</p>
              </div>
            </div>{" "}
          </>
        )}
        <h4>Justificatifs</h4>
        <p>Formats acceptés : .pdf, .jpg, .jpeg, .png</p>
        <div className="docInputContainer">
          <h5>
            {" "}
            Copie de l'autorisation administrative d'exercice (PMI)
            <span> (Obligatoire) </span>
          </h5>
          <input
            required
            type="file"
            id="docPmi"
            name="docPmi"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            onChange={(e) => updateFields({ docPmi: e.target.files[0] })}
          />
          <label htmlFor="docPmi" />
          <p className="checkSymbol">&#x2713;</p>
        </div>
        {structure === "assmat" && (
          <>
            <div className="docInputContainer">
              <h5>
                Carte d'identité ou passeport / carte de résident ou titre de
                séjour et autorisation de travail.{" "}
              </h5>
              <input
                required
                type="file"
                id="docIdentite"
                name="docIdentite"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) => {
                  updateFields({ docIdentite: e.target.files[0] });
                }}
              />
              <label htmlFor="docIdentite" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Carte vitale ou attestation de sécurité sociale
                <span> (Obligatoire) </span>
              </h5>
              <input
                required
                type="file"
                id="docVitale"
                name="docVitale"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) => updateFields({ docVitale: e.target.files[0] })}
              />
              <label htmlFor="docVitale" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>Justificatif de domicile</h5>
              <input
                required
                type="file"
                id="docJustifDom"
                name="docJustifDom"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) =>
                  updateFields({ docJustifDom: e.target.files[0] })
                }
              />
              <label htmlFor="docJustifDom" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                Justificatifs de formations (Brevet de secourisme, CAP,…) et/ou
                d'expériences (certificats de travail)
              </h5>
              <input
                required
                type="file"
                id="docDiplome"
                name="docDiplome"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) =>
                  updateFields({ docDiplome: e.target.files[0] })
                }
              />
              <label htmlFor="docDiplome" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Assurance responsabilité civile <span> (Obligatoire) </span>
              </h5>
              <input
                required
                type="file"
                id="docRespCivile"
                name="docRespCivile"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) =>
                  updateFields({ docRespCivile: e.target.files[0] })
                }
              />
              <label htmlFor="docRespCivile" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>Assurance auto</h5>
              <input
                required
                type="file"
                id="docAssAuto"
                name="docAssAuto"
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={(e) =>
                  updateFields({ docAssAuto: e.target.files[0] })
                }
              />
              <label htmlFor="docAssAuto" />
              <p className="checkSymbol">&#x2713;</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
Structure15.propTypes = {
  numSecu: Proptypes.node,
  numAgrement: Proptypes.node,
  dateAgrement: Proptypes.node,
  docPmi: Proptypes.node,
  siret: Proptypes.node,
  assHabitNom: Proptypes.node,
  assHabitNumero: Proptypes.node,
  assHabitAdresse: Proptypes.node,
  assAutoNom: Proptypes.node,
  assAutoNumero: Proptypes.node,
  assAutoAdresse: Proptypes.node,
  docIdentite: Proptypes.node,
  docVitale: Proptypes.node,
  docJustifDom: Proptypes.node,
  docDiplome: Proptypes.node,
  docRespCivile: Proptypes.node,
  docAssAuto: Proptypes.node,
  updateFields: Proptypes.func,
};
export default Structure15;
