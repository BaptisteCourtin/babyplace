import React, { useContext } from "react";
import ResaContext from "@components/context/ResaContext";
import Proptypes from "prop-types";

function Structure14({ maxPlaces }) {
  const { resa } = useContext(ResaContext);

  return (
    <div className="structure14 page-left">
      <div className="pageContent">
        <h4>
          Sur la base de vos paramètres, voici à quoi vous pouvez vous attendre
          :
        </h4>
        <div>
          <h5>
            Vous êtes disponible pour accueillir jusqu'à {maxPlaces} enfant(s)
            simultanément.{" "}
          </h5>
          <p>
            La famille Martin trouve votre annonce sur Babyplace, et vous trouve
            parfait.e pour accueillir leur bout de chou.{" "}
          </p>
        </div>
        <div>
          {resa === "nonInst" ? (
            <h5>
              La famille envoie un message, avec leur demande de réservation
            </h5>
          ) : (
            <h5>La famille effectue une demande de réservation</h5>
          )}
          <p>
            La famille Martin vous indique avoir récemment déménagé et avoir
            besoin en urgence d'une solution de garde pour leur petite fille de
            2 ans, Lou. <br />
            Ils ont remplis le dossier d'inscription avec toutes les
            attestations à jour (carnet de vaccination, signature reglement
            intérieur....)
          </p>
        </div>
        {resa === "nonInst" && (
          <div>
            <h5>Vous devez approuvez la demande </h5>
            <p>
              La famille Martin attend de vos nouvelles pour organiser la garde
              de leur enfant.{" "}
            </p>
          </div>
        )}
        <div>
          <h5>Accueillez la petite Lou en toute serenité </h5>
          <p>
            Le contrat de travail est automatiquement envoyé, vous n'avez plus
            qu'à signer ! <br />
            La fiche de présence est égallement automatiquement établie à la fin
            de la mission.
          </p>
        </div>
      </div>
    </div>
  );
}
Structure14.propTypes = {
  maxPlaces: Proptypes.node,
};
export default Structure14;
