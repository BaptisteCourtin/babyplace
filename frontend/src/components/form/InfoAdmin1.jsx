import React, { useContext } from "react";
import Proptypes from "prop-types";
import StructureContext from "@components/context/StructureContext";

function Structure1({
  typeCreche,
  nomStructure,
  telephone,
  nomNaissance,
  nomUsage,
  prenom,
  adresseStructure,
  updateFields,
}) {
  const { structure, setStructure } = useContext(StructureContext);

  return (
    <div className="page-left structure1">
      <div className="typeContainer">
        <h4>Quel type d'accueil proposez-vous ?</h4>
        <div>
          <button
            type="button"
            className={structure === "creche" ? "selected" : ""}
            onClick={() => {
              setStructure("creche");
              updateFields({ isCreche: 1 });
            }}
          >
            Crèche
          </button>
          <button
            type="button"
            className={structure === "assmat" ? "selected" : ""}
            onClick={() => {
              setStructure("assmat");
              updateFields({ isCreche: 0 });
            }}
          >
            Assistante maternelle
          </button>
        </div>
      </div>
      {structure === "creche" && (
        <div className="creche">
          <div>
            <h4>Maintenant précisons les choses...</h4>
            <div className="typeCrecheContainer">
              <button
                type="button"
                className={typeCreche === "micro creche" ? "selected" : ""}
                onClick={() => {
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
                  updateFields({ typeCreche: "creche d'entreprise" });
                }}
              >
                Crèche d'entreprise
              </button>
              <button
                type="button"
                className={typeCreche === "halte garderie" ? "selected" : ""}
                onClick={() => {
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
                  updateFields({ typeCreche: "creche associative" });
                }}
              >
                Crèche associative
              </button>
              <button
                type="button"
                className={typeCreche === "multi accueil" ? "selected" : ""}
                onClick={() => {
                  updateFields({ typeCreche: "multi accueil" });
                }}
              >
                Multi-accueil
              </button>
              <button
                type="button"
                className={typeCreche === "creche municipale" ? "selected" : ""}
                onClick={() => {
                  updateFields({ typeCreche: "creche municipale" });
                }}
              >
                Crèche municipale
              </button>
              <button
                type="button"
                className={typeCreche === "creche collective" ? "selected" : ""}
                onClick={() => {
                  updateFields({ typeCreche: "creche collective" });
                }}
              >
                Crèche collective
              </button>
              <button
                type="button"
                className={typeCreche === "creche parentale" ? "selected" : ""}
                onClick={() => {
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
              value={nomStructure || undefined}
              onChange={(e) => updateFields({ nomStructure: e.target.value })}
            />
            <label
              htmlFor="nomStrucure"
              className={
                nomStructure !== null &&
                nomStructure !== undefined &&
                nomStructure.length > 3
                  ? "labelChecked"
                  : ""
              }
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
              value={adresseStructure || undefined}
              onChange={(e) =>
                updateFields({ adresseStructure: e.target.value })
              }
            />
            <label
              htmlFor="adresseStrucure"
              className={
                adresseStructure !== null &&
                adresseStructure !== undefined &&
                adresseStructure.length > 10
                  ? "labelChecked"
                  : ""
              }
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
              value={telephone || undefined}
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
      {structure === "assmat" && (
        <div className="assmat">
          <h4>Complétez et vérifiez vos informations</h4>
          <div className="inputsContainer">
            <input
              required
              type="text"
              name="nomNaissance"
              placeholder="Nom de naissance"
              pattern=".{2,}"
              value={nomNaissance || undefined}
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
              value={nomUsage || undefined}
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
              value={prenom || undefined}
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
              value={adresseStructure || undefined}
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
              Les parents n'obtiendront l'adresse exacte qu'après avoir effectué
              la réservation
            </p>
          </div>
          <div className="inputsContainer">
            <input
              required
              type="tel"
              placeholder="0123456789"
              value={telephone || undefined}
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
              Les parents n'obtiendront ce numéro qu'après avoir effectué la
              réservation
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
Structure1.propTypes = {
  typeCreche: Proptypes.string,
  nomStructure: Proptypes.string,
  telephone: Proptypes.string,
  nomNaissance: Proptypes.string,
  nomUsage: Proptypes.string,
  prenom: Proptypes.string,
  adresseStructure: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure1;
