import React, { useContext } from "react";
import imgCopie from "@assets/img-copie.svg";
import imgTime from "@assets/img-time.svg";
import imgDossier from "@assets/img-dossier.svg";
import { ResaContext } from "@components/context/ResaContext";

function Structure8({ resaInst }) {
  const { resa } = useContext(ResaContext);

  return (
    <div>
      <h4>Voici comment les parents pourront réserver chez vous</h4>
      {resa === "inst" && (
        <div className="etapesChoixResa">
          <div className="etapeContainer">
            <div className="etape1">
              <img src={imgCopie} alt="imprimante" />
              <h5>1. Les parents trouvent votre annonce</h5>
              <p>
                Toute personne qui souhaite réserver avec vous doit confirmer
                ses coordonnées, fournir des informations de paiement, et vous
                parler de l’accueil de leur enfant
              </p>
            </div>
          </div>
          <div className="etapeContainer">
            <div className="etape2">
              <img src={imgTime} />
              <h5>2. Ils effectue une réservation en ligne</h5>
              <p>
                Les parents réservent instantanément en ligne, et vous disposez
                de toutes les informations nécessaire à l’accueil de l’enfant.
              </p>
            </div>
          </div>
          <div className="etapeContainer">
            <div className="etape3">
              <img src={imgDossier} />
              <h5>3. Vous recevez un contrat accepté par les deux parties</h5>
              <p>
                Lorsque la réservation est acceptée par les deux partie, un
                contrat engageant les parents et vous-même est envoyé à chaque
                partie.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {resa === "nonInst" && (
        <div className="etapesChoixResa">
          <div className="etapeContainer">
            <div className="etape1">
              <img src={imgCopie} alt="imprimante" />
              <h5>1. Les parents trouvent votre annonce</h5>
              <p>
                Toute personne qui souhaite réserver avec vous doit confirmer
                ses coordonnées, fournir des informations de paiement, et vous
                parler de l’accueil de leur enfant
              </p>
            </div>
          </div>
          <div className="etapeContainer">
            <div className="etape2">
              <img src={imgTime} />
              <h5>2. Ils vous envoie une demande de réservation</h5>
              <p>
                Les parents vous envoie une demande de réservation, et vous
                disposez de toutes les informations pour accepter la demande.
              </p>
            </div>
          </div>
          <div className="etapeContainer">
            <div className="etape3">
              <img src={imgDossier} />
              <h5>3. Vous validez la réservation </h5>
              <p>
                Lorsque vous acceptez la réservation, une notification est
                automatiquement envoyée aux parents pour confirmer la
                réservation.{" "}
              </p>
            </div>
          </div>
          <div className="etapeContainer">
            <div className="etape4">
              <img src={imgDossier} />
              <h5>4. Vous recevez un contrat accepté par les deux parties</h5>
              <p>
                Lorsque la réservation est acceptée par les deux partie, un
                contrat engageant les parents et vous-même est envoyé à chaque
                partie.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Structure8;
