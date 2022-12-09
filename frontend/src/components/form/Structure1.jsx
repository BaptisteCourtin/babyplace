import React, { useContext, useState } from "react";
import Proptypes from "prop-types";
import { StructureContext } from "@components/context/StructureContext";

function Structure1({
  typeStructure,
  nomStructure,
  telephone,
  nomNaissance,
  nomUsage,
  prenom,
  adresseStructure,
  updateFields,
}) {
  const { structure, setStructure } = useContext(StructureContext);
  const [typeCreche, setTypeCreche] = useState("");
  return (
    <div className="page-left">
      <div className="typeContainer">
        <h4>Quel type d’accueil proposez-vous ?</h4>
        <div>
          <button
            type="button"
            className={structure === "creche" ? "selected" : ""}
            onClick={() => {
              setStructure("creche");
              updateFields({ typeStructure: "creche" });
            }}
          >
            Crèche
          </button>
          <button
            type="button"
            className={structure === "assmat" ? "selected" : ""}
            onClick={() => {
              setStructure("assmat");
              updateFields({ typeStructure: "assmat" });
            }}
          >
            Assistante maternelle
          </button>
        </div>
      </div>
      {typeStructure === "creche" && (
        <div className="creche">
          <div>
            <h4>Maintenant précisons les choses...</h4>
            <div className="typeCrecheContainer">
              <button
                type="button"
                className={typeCreche === "micro creche" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("micro creche");
                  updateFields({ typeCreche: "micro creche" });
                }}
              >
                Micro-crèche
              </button>
              <button
                type="button"
                className={
                  typeCreche === "creche d'entreprise" ? "selected" : ""
                }
                onClick={() => {
                  setTypeCreche("creche d'entreprise");
                  updateFields({ typeCreche: "creche d'entreprise" });
                }}
              >
                Crèche d'entreprise
              </button>
              <button
                type="button"
                className={typeCreche === "halte garderie" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("halte garderie");
                  updateFields({ typeCreche: "halte garderie" });
                }}
              >
                Halte garderie
              </button>
              <button
                type="button"
                className={
                  typeCreche === "creche associative" ? "selected" : ""
                }
                onClick={() => {
                  setTypeCreche("creche associative");
                  updateFields({ typeCreche: "creche associative" });
                }}
              >
                Crèche associative
              </button>
              <button
                type="button"
                className={typeCreche === "multi accueil" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("multi accueil");
                  updateFields({ typeCreche: "multi accueil" });
                }}
              >
                Multi-accueil
              </button>
              <button
                type="button"
                className={typeCreche === "creche municipale" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("creche municipale");
                  updateFields({ typeCreche: "creche municipale" });
                }}
              >
                Crèche municipale
              </button>
              <button
                type="button"
                className={typeCreche === "creche collective" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("creche collective");
                  updateFields({ typeCreche: "creche collective" });
                }}
              >
                Crèche collective
              </button>
              <button
                type="button"
                className={typeCreche === "creche parentale" ? "selected" : ""}
                onClick={() => {
                  setTypeCreche("creche parentale");
                  updateFields({ typeCreche: "creche parentale" });
                }}
              >
                Crèche parentale
              </button>
            </div>
          </div>
          <h4>Complétez et vérifiez vos informations</h4>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="nomStructure"
              placeholder="Nom de votre établissement"
              pattern=".{4,}"
              value={nomStructure}
              onChange={(e) => updateFields({ nomStructure: e.target.value })}
            />
            <label
              htmlFor="nomStrucure"
              className={nomStructure !== "" ? "labelChecked" : ""}
            >
              Nom
            </label>
            <p className="checkSymbol">&#x2713;</p>
            <p>Ce nom sera celui qui s’affichera en titre de votre annonce</p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="adresseStructure"
              placeholder="N°, rue, CP, ville"
              pattern=".{10,} [0-9]{5} .{3,}"
              value={adresseStructure}
              onChange={(e) =>
                updateFields({ adresseStructure: e.target.value })
              }
            />
            <label
              htmlFor="adresseStrucure"
              className={adresseStructure !== "" ? "labelChecked" : ""}
            >
              Adresse
            </label>
            <p className="checkSymbol">&#x2713;</p>
            <p>
              Les parents n’obtiendront l’adresse exacte qu’après avoir effectué
              la réservation
            </p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="tel"
              placeholder="0123456789"
              pattern="[0-9]{10}"
              value={telephone}
              onChange={(e) => updateFields({ telephone: e.target.value })}
            />
            <label
              htmlFor="phone"
              className={telephone !== "" ? "labelChecked" : ""}
            >
              Numéro de téléphone
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
        </div>
      )}
      {typeStructure === "assmat" && (
        <div className="assmat">
          <h4>Complétez et vérifiez vos informations</h4>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="nomNaissance"
              placeholder="Nom de naissance"
              pattern=".{2,}"
              value={nomNaissance}
              onChange={(e) => updateFields({ nomNaissance: e.target.value })}
            />
            <label
              htmlFor="nomNaissance"
              className={nomNaissance !== "" ? "labelChecked" : ""}
            >
              Nom de naissance
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="nomUsage"
              placeholder="Nom d'usage"
              value={nomUsage}
              onChange={(e) => updateFields({ nomUsage: e.target.value })}
            />
            <label
              htmlFor="nomUsage"
              className={nomUsage !== "" ? "labelChecked" : ""}
            >
              Nom d'usage
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="prenom"
              placeholder="Prénom"
              pattern=".{3,}"
              value={prenom}
              onChange={(e) => updateFields({ prenom: e.target.value })}
            />
            <label
              htmlFor="prenom"
              className={prenom !== "" ? "labelChecked" : ""}
            >
              Prénom
            </label>
            <p className="checkSymbol">&#x2713;</p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="adresseStructure"
              pattern=".{10,} [0-9]{5} .{3,}"
              placeholder="N°, rue, CP, ville"
              value={adresseStructure}
              onChange={(e) =>
                updateFields({ adresseStructure: e.target.value })
              }
            />
            <label
              htmlFor="adresseStrucure"
              className={adresseStructure !== "" ? "labelChecked" : ""}
            >
              Adresse
            </label>
            <p className="checkSymbol">&#x2713;</p>
            <p>
              Les parents n’obtiendront l’adresse exacte qu’après avoir effectué
              la réservation
            </p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="tel"
              placeholder="0123456789"
              value={telephone}
              pattern="[0-9]{10}"
              onChange={(e) => updateFields({ telephone: e.target.value })}
            />
            <label
              htmlFor="phone"
              className={telephone !== "" ? "labelChecked" : ""}
            >
              Numéro de téléphone
            </label>
            <p className="checkSymbol">&#x2713;</p>
            <p>
              Les parents n’obtiendront ce numéro qu’après avoir effectué la
              réservation
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
Structure1.propTypes = {
  typeStructure: Proptypes.string,
  nomStructure: Proptypes.string,
  telephone: Proptypes.string,
  nomNaissance: Proptypes.string,
  nomUsage: Proptypes.string,
  prenom: Proptypes.string,
  adresseStructure: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure1;
