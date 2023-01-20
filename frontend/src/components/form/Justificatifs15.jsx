import React, { useContext } from "react";
import StructureContext from "@components/context/StructureContext";
import Proptypes from "prop-types";

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
                type="text"
                name="numSecu"
                pattern="[0-9]{15}"
                value={numSecu}
                className={
                  (numSecu !== null &&
                    numSecu !== undefined && numSecu.length > 15)
                    ? "inputChecked"
                    : "input"
                }
                onChange={(e) => updateFields({ numSecu: e.target.value })}
              />
              <label
                htmlFor="numSecu"
                className={
                  (numSecu !== null &&
                    numSecu !== undefined && numSecu.length > 15)
                    ? "labelChecked"
                    : "input"
                }
              >
                N° sécurité sociale
              </label>
              {(
                numSecu !== null &&
                numSecu !== undefined && numSecu.length > 15) && <p className="checkSymbol">&#x2713;</p>}
            </div>
          ) : (
            <div className="inputContainer">
              <input
                type="text"
                name="siret"
                pattern="[0-9]{10}"
                value={siret}
                className={
                  (siret !== null &&
                    siret !== undefined && siret.length > 10)
                    ? "inputChecked"
                    : "input"
                }
                onChange={(e) => updateFields({ siret: e.target.value })}
              />
              <label
                htmlFor="siret"
                className={
                  (siret !== null &&
                    siret !== undefined && siret.length > 10)
                    ? "labelChecked"
                    : ""
                }
              >
                SIRET
              </label>
              {
                (siret !== null &&
                  siret !== undefined && siret.length > 10)
                &&
                <p className="checkSymbol">&#x2713;</p>
              }
            </div>
          )}

          <div className="inputContainer">
            <input
              type="text"
              name="numAgrement"
              pattern="[0-9]{10}"
              value={numAgrement}
              className={
                (numAgrement !== null &&
                  numAgrement !== undefined && numAgrement.length > 10)
                  ? "inputChecked"
                  : "input"
              }
              onChange={(e) => updateFields({ numAgrement: e.target.value })}
            />
            <label
              htmlFor="numAgrement"
              className={
                (numAgrement !== null &&
                  numAgrement !== undefined && numAgrement.length > 10)
                  ? "labelChecked"
                  : ""
              }
            >
              N° agrément
            </label>
            {
              (numAgrement !== null &&
                numAgrement !== undefined && numAgrement.length > 10)
              &&
              <p className="checkSymbol">&#x2713;</p>
            }
          </div>
          <div className="inputContainer">
            <input
              type="date"
              name="dateAgrement"
              value={dateAgrement}
              className={dateAgrement !== "" && dateAgrement !== null ? "inputChecked" : ""}
              onChange={(e) => { updateFields({ dateAgrement: e.target.value }) }}
            />
            <label
              htmlFor="dateAgrement"
              className={dateAgrement !== "" && dateAgrement !== null ? "labelChecked" : ""}
            >
              Date agrément
            </label>
            {dateAgrement !== "" && dateAgrement !== null && <p className="checkSymbol">&#x2713;</p>}
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
                    (assHabitNom !== null &&
                      assHabitNom !== undefined && assHabitNom.length > 4)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitNom: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNom"
                  className={(assHabitNom !== null &&
                    assHabitNom !== undefined && assHabitNom.length > 4)
                    ? "labelChecked"
                    : ""}
                >
                  Nom
                </label>
                {
                  (assHabitNom !== null &&
                    assHabitNom !== undefined && assHabitNom.length > 4)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  name="assHabitNumero"
                  pattern=".{5,}"
                  value={assHabitNumero}
                  className={
                    (assHabitNumero !== null &&
                      assHabitNumero !== undefined && assHabitNumero.length > 5)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitNumero"
                  className={(assHabitNumero !== null &&
                    assHabitNumero !== undefined && assHabitNumero.length > 5)
                    ? "labelChecked"
                    : ""}
                >
                  Numéro de police
                </label>
                {
                  (assHabitNumero !== null &&
                    assHabitNumero !== undefined && assHabitNumero.length > 5)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assHabitAdresse"
                  pattern=".{10,} [0-9]{5} .{3,}"
                  value={assHabitAdresse}
                  className={
                    (assHabitAdresse !== null &&
                      assHabitAdresse !== undefined && assHabitAdresse.length > 10)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assHabitAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assHabitAdresse"
                  className={(assHabitAdresse !== null &&
                    assHabitAdresse !== undefined && assHabitAdresse.length > 10)
                    ? "labelChecked"
                    : ""}
                >
                  Adresse
                </label>
                {
                  (assHabitAdresse !== null &&
                    assHabitAdresse !== undefined && assHabitAdresse.length > 10)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
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
                    (assAutoNom !== null &&
                      assAutoNom !== undefined && assAutoNom.length > 4)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) => updateFields({ assAutoNom: e.target.value })}
                />
                <label
                  htmlFor="assAutoNom"
                  className={(assAutoNom !== null &&
                    assAutoNom !== undefined && assAutoNom.length > 4)
                    ? "labelChecked"
                    : ""}
                >
                  Nom
                </label>
                {
                  (assAutoNom !== null &&
                    assAutoNom !== undefined && assAutoNom.length > 4)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assAutoNumero"
                  pattern=".{5,}"
                  value={assAutoNumero}
                  className={
                    (assAutoNumero !== null &&
                      assAutoNumero !== undefined && assAutoNumero.length > 5)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assAutoNumero: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoNumero"
                  className={(assAutoNumero !== null &&
                    assAutoNumero !== undefined && assAutoNumero.length > 5)
                    ? "labelChecked"
                    : ""}
                >
                  Numéro de police
                </label>
                {
                  (assAutoNumero !== null &&
                    assAutoNumero !== undefined && assAutoNumero.length > 5)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  name="assAutoAdresse"
                  pattern=".{10,} [0-9]{5} .{3,}"
                  value={assAutoAdresse}
                  className={
                    (assAutoAdresse !== null &&
                      assAutoAdresse !== undefined && assAutoAdresse.length > 10)
                      ? "inputChecked"
                      : "input"
                  }
                  onChange={(e) =>
                    updateFields({ assAutoAdresse: e.target.value })
                  }
                />
                <label
                  htmlFor="assAutoAdresse"
                  className={assAutoAdresse !== "" &&
                    assAutoAdresse !== null &&
                    assAutoAdresse !== undefined
                    ? "labelChecked"
                    : ""
                  }
                >
                  Adresse
                </label>
                {
                  (assAutoAdresse !== null &&
                    assAutoAdresse !== undefined && assAutoAdresse.length > 10)
                  &&
                  <p className="checkSymbol">&#x2713;</p>
                }
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
            type="file"
            id="docpmi"
            name="docpmi"
            ref={inputRefPmi}
            accept="image/png, image/jpg, image/jpeg, .pdf"
            onChange={() =>
              updateFields({
                docPmi: inputRefPmi.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              })
            }
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
              <input
                type="file"
                id="docIdentite"
                name="docIdentite"
                ref={inputRefCni}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() => {
                  updateFields({
                    docIdentite: inputRefCni.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  });
                }}
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Carte vitale ou attestation de sécurité sociale
                <span> (Obligatoire) </span>
              </h5>
              <input
                type="file"
                id="docVitale"
                name="docVitale"
                ref={inputRefCpam}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() =>
                  updateFields({
                    docVitale: inputRefCpam.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  })
                }
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>Justificatif de domicile</h5>
              <input
                type="file"
                id="docJustifDom"
                name="docJustifDom"
                ref={inputRefDom}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() =>
                  updateFields({
                    docJustifDom: inputRefPmi.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  })
                }
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                Justificatifs de formations (Brevet de secourisme, CAP,…) et/ou
                d'expériences (certificats de travail)
              </h5>
              <input
                type="file"
                id="docDiplome"
                name="docDiplome"
                ref={inputRefDiplome}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() =>
                  updateFields({
                    docDiplome: inputRefDiplome.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  })
                }
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>
                {" "}
                Assurance responsabilité civile <span> (Obligatoire) </span>
              </h5>
              <input
                type="file"
                id="docRespCivile"
                name="docRespCivile"
                ref={inputRefResp}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() =>
                  updateFields({
                    docRespCivile: inputRefResp.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  })
                }
              />
              <p className="checkSymbol">&#x2713;</p>
            </div>
            <div className="docInputContainer">
              <h5>Assurance auto</h5>
              <input
                type="file"
                id="docAssAuto"
                name="docAssAuto"
                ref={inputRefAuto}
                accept="image/png, image/jpg, image/jpeg, .pdf"
                onChange={() =>
                  updateFields({
                    docAssAuto: inputRefAuto.current.files[0].name
                      .split(".")
                      .slice(-1)[0],
                  })
                }
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
  inputRefPmi: Proptypes.node,
  inputRefCpam: Proptypes.node,
  inputRefCni: Proptypes.node,
  inputRefDom: Proptypes.node,
  inputRefDiplome: Proptypes.node,
  inputRefAuto: Proptypes.node,
  inputRefResp: Proptypes.node,
  updateFields: Proptypes.func,
};
export default Structure15;
