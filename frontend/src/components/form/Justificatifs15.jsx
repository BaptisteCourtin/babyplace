import React, { useContext, useEffect } from "react";
import StructureContext from "@components/context/StructureContext";
import Proptypes, { node, object, oneOfType } from "prop-types";
import Axios from "axios";

function Structure15({
  numSecu,
  numAgrement,
  dateAgrement,
  siret,
  assHabitNom,
  assHabitNumero,
  assHabitAdresse,
  assAutoNom,
  assAutoNumero,
  assAutoAdresse,
  inputRefPmi,
  inputRefCpam,
  inputRefCni,
  inputRefDom,
  inputRefDiplome,
  inputRefAuto,
  inputRefResp,
  updateFields,
  docPmi,
  docIdentite,
  docVitale,
  docJustifDom,
  docDiplome,
  docRespCivile,
  docAssAuto,
  structureId,
}) {
  const { structure } = useContext(StructureContext);

  // --- get les documents ---
  const getDocs = (source) => {
    Axios.get(`${import.meta.env.VITE_PATH}/docPmi?id=${structureId}`, {
      structureId,
      cancelToken: source.token,
    })
      .then((result) => {
        if (result.data[0].docPmi !== null) {
          updateFields({ docPmi: result.data[0].docPmi });
        }
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
    if (structure === "assmat") {
      Axios.get(
        `${import.meta.env.VITE_PATH}/justificatifs?id=${structureId}`,
        {
          structureId,
          cancelToken: source.token,
        }
      )
        .then((result) => {
          if (result.data[0].docIdentite !== null) {
            updateFields({ docIdentite: result.data[0].docIdentite });
          }
          if (result.data[0].docVitale !== null) {
            updateFields({ docVitale: result.data[0].docVitale });
          }
          if (result.data[0].docJustifDom !== null) {
            updateFields({ docJustifDom: result.data[0].docJustifDom });
          }
          if (result.data[0].docAssAuto !== null) {
            updateFields({ docAssAuto: result.data[0].docAssAuto });
          }
          if (result.data[0].docRespCivile !== null) {
            updateFields({ docRespCivile: result.data[0].docRespCivile });
          }
          if (result.data[0].docDiplome !== null) {
            updateFields({ docDiplome: result.data[0].docDiplome });
          }
        })
        .catch((err) => {
          if (err.code === "ERR_CANCELED") {
            console.warn("cancel request");
          } else {
            console.error(err);
          }
        });
    }
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();
    getDocs(source);
    return () => {
      source.cancel();
    };
  }, []);

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
                type="text"
                name="numSecu"
                pattern="[0-9]{15}"
                value={numSecu}
                className={
                  numSecu !== null &&
                  numSecu !== undefined &&
                  numSecu.length >= 15
                    ? "inputChecked"
                    : "input"
                }
                onChange={(e) => updateFields({ numSecu: e.target.value })}
              />
              <label
                htmlFor="numSecu"
                className={
                  numSecu !== null &&
                  numSecu !== undefined &&
                  numSecu.length >= 15
                    ? "labelChecked"
                    : "input"
                }
              >
                N° sécurité sociale
              </label>
              {numSecu !== null &&
                numSecu !== undefined &&
                numSecu.length >= 15 && <p className="checkSymbol">&#x2713;</p>}
            </div>
          ) : (
            <div className="inputContainer">
              <input
                type="text"
                name="siret"
                pattern="[0-9]{10,}"
                value={siret}
                className={
                  siret !== null && siret !== undefined && siret.length >= 10
                    ? "inputChecked"
                    : "input"
                }
                onChange={(e) => updateFields({ siret: e.target.value })}
              />
              <label
                htmlFor="siret"
                className={
                  siret !== null && siret !== undefined && siret.length >= 10
                    ? "labelChecked"
                    : ""
                }
              >
                SIRET
              </label>
              {siret !== null && siret !== undefined && siret.length >= 10 && (
                <p className="checkSymbol">&#x2713;</p>
              )}
            </div>
          )}

          <div className="inputContainer">
            <input
              type="text"
              name="numAgrement"
              pattern="[0-9]{10,}"
              value={numAgrement}
              className={
                numAgrement !== null &&
                numAgrement !== undefined &&
                numAgrement.length >= 10
                  ? "inputChecked"
                  : "input"
              }
              onChange={(e) => updateFields({ numAgrement: e.target.value })}
            />
            <label
              htmlFor="numAgrement"
              className={
                numAgrement !== null &&
                numAgrement !== undefined &&
                numAgrement.length >= 10
                  ? "labelChecked"
                  : ""
              }
            >
              N° agrément
            </label>
            {numAgrement !== null &&
              numAgrement !== undefined &&
              numAgrement.length >= 10 && (
                <p className="checkSymbol">&#x2713;</p>
              )}
          </div>
          <div className="inputContainer">
            <input
              type="date"
              name="dateAgrement"
              value={dateAgrement}
              className={
                dateAgrement !== "" && dateAgrement !== null
                  ? "inputChecked"
                  : ""
              }
              onChange={(e) => {
                updateFields({ dateAgrement: e.target.value });
              }}
            />
            <label
              htmlFor="dateAgrement"
              className={
                dateAgrement !== "" && dateAgrement !== null
                  ? "labelChecked"
                  : ""
              }
            >
              Date agrément
            </label>
            {dateAgrement !== "" && dateAgrement !== null && (
              <p className="checkSymbol">&#x2713;</p>
            )}
          </div>
        </div>
        {structure === "assmat" && (
          <>
            <h4>Assurances</h4>
            <h5>Assurance habitation</h5>
            <div className="inputsContainer">
              <div className="inputContainer">
                <input
                  type="text"
                  name="assHabitNom"
                  pattern=".{4,}"
                  value={assHabitNom}
                  className={
                    assHabitNom !== null &&
                    assHabitNom !== undefined &&
                    assHabitNom.length >= 4
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitNom: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNom"
                  className={
                    assHabitNom !== null &&
                    assHabitNom !== undefined &&
                    assHabitNom.length >= 4
                      ? "labelChecked"
                      : ""
                  }
                >
                  Nom
                </label>
                {assHabitNom !== null &&
                  assHabitNom !== undefined &&
                  assHabitNom.length >= 4 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  name="assHabitNumero"
                  pattern=".{5,}"
                  value={assHabitNumero}
                  className={
                    assHabitNumero !== null &&
                    assHabitNumero !== undefined &&
                    assHabitNumero.length >= 5
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNumero"
                  className={
                    assHabitNumero !== null &&
                    assHabitNumero !== undefined &&
                    assHabitNumero.length >= 5
                      ? "labelChecked"
                      : ""
                  }
                >
                  Numéro de police
                </label>
                {assHabitNumero !== null &&
                  assHabitNumero !== undefined &&
                  assHabitNumero.length >= 5 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assHabitAdresse"
                  pattern=".{10,} [0-9]{5} .{3,}"
                  value={assHabitAdresse}
                  className={
                    assHabitAdresse !== null &&
                    assHabitAdresse !== undefined &&
                    assHabitAdresse.length > 10
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitAdresse"
                  className={
                    assHabitAdresse !== null &&
                    assHabitAdresse !== undefined &&
                    assHabitAdresse.length > 10
                      ? "labelChecked"
                      : ""
                  }
                >
                  Adresse
                </label>
                {assHabitAdresse !== null &&
                  assHabitAdresse !== undefined &&
                  assHabitAdresse.length > 10 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
              </div>
            </div>
            <h5>Assurance auto</h5>
            <div className="inputsContainer">
              <div className="inputContainer">
                <input
                  type="text"
                  name="assAutoNom"
                  pattern=".{4,}"
                  value={assAutoNom}
                  className={
                    assAutoNom !== null &&
                    assAutoNom !== undefined &&
                    assAutoNom.length >= 4
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) => updateFields({ assAutoNom: e.target.value })}
                />
                <label
                  htmlFor="assAutoNom"
                  className={
                    assAutoNom !== null &&
                    assAutoNom !== undefined &&
                    assAutoNom.length >= 4
                      ? "labelChecked"
                      : ""
                  }
                >
                  Nom
                </label>
                {assAutoNom !== null &&
                  assAutoNom !== undefined &&
                  assAutoNom.length >= 4 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assAutoNumero"
                  pattern=".{5,}"
                  value={assAutoNumero}
                  className={
                    assAutoNumero !== null &&
                    assAutoNumero !== undefined &&
                    assAutoNumero.length >= 5
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assAutoNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoNumero"
                  className={
                    assAutoNumero !== null &&
                    assAutoNumero !== undefined &&
                    assAutoNumero.length >= 5
                      ? "labelChecked"
                      : ""
                  }
                >
                  Numéro de police
                </label>
                {assAutoNumero !== null &&
                  assAutoNumero !== undefined &&
                  assAutoNumero.length >= 5 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assAutoAdresse"
                  pattern=".{10,} [0-9]{5} .{3,}"
                  value={assAutoAdresse}
                  className={
                    assAutoAdresse !== null &&
                    assAutoAdresse !== undefined &&
                    assAutoAdresse.length > 10
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assAutoAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoAdresse"
                  className={
                    assAutoAdresse !== "" &&
                    assAutoAdresse !== null &&
                    assAutoAdresse !== undefined
                      ? "labelChecked"
                      : ""
                  }
                >
                  Adresse
                </label>
                {assAutoAdresse !== null &&
                  assAutoAdresse !== undefined &&
                  assAutoAdresse.length > 10 && (
                    <p className="checkSymbol">&#x2713;</p>
                  )}
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
          {docPmi !== null && (
            <div className="actualFile">
              <p>Fichier actuellement enregistré : </p>
              <a href={docPmi} target="_blank" rel="noopener noreferrer">
                {docPmi.split("-qws-")[1]}
              </a>
            </div>
          )}
          <input
            type="file"
            id="docpmi"
            name="file"
            ref={inputRefPmi}
            accept="image/png, image/jpg, image/jpeg, .pdf"
          />
          <p className="checkSymbol">&#x2713;</p>
        </div>
        {structure === "assmat" && (
          <>
            <div className="docInputContainer">
              <h5>
                Carte d'identité ou passeport / carte de résident ou titre de
                séjour et autorisation de travail.{" "}
              </h5>
              {docIdentite !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a
                    href={docIdentite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {docIdentite.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <input
                type="file"
                id="docIdentite"
                name="file"
                ref={inputRefCni}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Carte vitale ou attestation de sécurité sociale
                <span> (Obligatoire) </span>
              </h5>
              {docVitale !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a href={docVitale} target="_blank" rel="noopener noreferrer">
                    {docVitale.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <input
                type="file"
                id="docVitale"
                name="file"
                ref={inputRefCpam}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>Justificatif de domicile</h5>
              {docJustifDom !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a
                    href={docJustifDom}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {docJustifDom.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <input
                type="file"
                id="docJustifDom"
                name="file"
                ref={inputRefDom}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                Justificatifs de formations (Brevet de secourisme, CAP,…) et/ou
                d'expériences (certificats de travail)
              </h5>
              {docDiplome !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a
                    href={docDiplome}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {docDiplome.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <input
                type="file"
                id="docDiplome"
                name="file"
                ref={inputRefDiplome}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Assurance responsabilité civile <span> (Obligatoire) </span>
              </h5>
              {docRespCivile !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a
                    href={docRespCivile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {docRespCivile.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <input
                type="file"
                id="docRespCivile"
                name="file"
                ref={inputRefResp}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              {docAssAuto !== null && (
                <div className="actualFile">
                  <p>Fichier actuellement enregistré : </p>
                  <a
                    href={docAssAuto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {docAssAuto.split("-qws-")[1]}
                  </a>
                </div>
              )}
              <h5>Assurance auto</h5>
              <input
                type="file"
                id="docAssAuto"
                name="file"
                ref={inputRefAuto}
                accept="image/png, image/jpg, image/jpeg, .pdf"
              />
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
  siret: Proptypes.node,
  assHabitNom: Proptypes.node,
  assHabitNumero: Proptypes.node,
  assHabitAdresse: Proptypes.node,
  assAutoNom: Proptypes.node,
  assAutoNumero: Proptypes.node,
  assAutoAdresse: Proptypes.node,
  inputRefPmi: oneOfType([node, object]),
  inputRefCpam: oneOfType([node, object]),
  inputRefCni: oneOfType([node, object]),
  inputRefDom: oneOfType([node, object]),
  inputRefDiplome: oneOfType([node, object]),
  inputRefAuto: oneOfType([node, object]),
  inputRefResp: oneOfType([node, object]),
  updateFields: Proptypes.func,
  docPmi: Proptypes.node,
  docIdentite: Proptypes.node,
  docVitale: Proptypes.node,
  docJustifDom: Proptypes.node,
  docDiplome: Proptypes.node,
  docRespCivile: Proptypes.node,
  docAssAuto: Proptypes.node,
  structureId: Proptypes.node,
};
export default Structure15;
