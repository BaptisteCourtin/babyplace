import React, { useContext } from "react";
import Proptypes, { bool, number, node, oneOfType } from "prop-types";
import imgCopie from "@assets/img-copie.svg";
import imgTime from "@assets/img-time.svg";
import imgDossier from "@assets/img-dossier.svg";
import ResaContext from "@components/context/ResaContext";

function Structure7({ updateFields }) {
  const { resa, setResa } = useContext(ResaContext);
  return (
    <div>
      <h4>Choisissez comment les parents pourront réserver chez vous</h4>
      <div className="etapesChoixResa">
        <div className="etape1Container">
          <div className="etape1">
            <img src={imgCopie} alt="imprimante" />
            <h5>1. Les parents trouvent votre annonce</h5>
            <p>
              Toute personne qui souhaite réserver avec vous doit confirmer ses
              coordonnées, fournir des informations de paiement, et vous parler
              de l’accueil de leur enfant
            </p>
          </div>
        </div>
        <div className="choixResaContainer">
          <button
            type="button"
            className={resa === "inst" ? "choixResa chosen" : "choixResa"}
            onClick={() => {
              setResa("inst");
              updateFields({ resaInst: true });
            }}
          >
            <div className="etapes">
              <div className="etape2">
                <img src={imgTime} alt="femme avec horloge" />
                <h5>
                  2. Vous définissez qui peut réserver instantanément par des
                  règles
                </h5>
                <p>
                  Pour réserver une date disponible sans envoyer de demande, les
                  parents doivent accepter vos règles et remplir toutes les
                  conditions que vous fixez.{" "}
                </p>
              </div>
              <div className="etape3">
                <img src={imgDossier} alt="dossiers" />
                <h5>3. Vous recevez une notification </h5>
                <p>
                  Vous recevez immédiatement un email de confirmation contenant
                  des informations comme la date et les horaires d’accueil,
                  l’âge de l’enfant, son dossier administratif. ect...
                </p>
              </div>
            </div>
            <p className="lienChoixResa">
              Je souhaite la réservation instantanée
            </p>
          </button>
          <button
            type="button"
            onClick={() => {
              setResa("nonInst");
              updateFields({ resaInst: false });
            }}
            className={resa === "nonInst" ? "choixResa chosen" : "choixResa"}
          >
            <div className=" etapes">
              <div className="etape2">
                <h5>2. Vous souhaitez examiner chaque demande</h5>
                <p>
                  Toute personne qui souhaite réserver avec vous doit confirmer
                  ses coordonnées, fournir des informations de paiement, mettre
                  à jour son dossier d’inscription et vous parler de l’accueil
                  de leur enfant
                </p>
              </div>
              <div className="etape3">
                <h5>3. Vous recevez une notification </h5>
                <p>
                  Vous recevez un email de demande de réservation, que vous
                  devez accepter, pour valider la réservation{" "}
                </p>
              </div>
            </div>
            <p className="lienChoixResa">
              Je souhaite examiner chaque demande{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
Structure7.propTypes = {
  resaInst: oneOfType([bool, number, node]),
  updateFields: Proptypes.func,
};
export default Structure7;
