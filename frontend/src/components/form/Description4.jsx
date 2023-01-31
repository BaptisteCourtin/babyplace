import React from "react";
import Proptypes from "prop-types";

function Structure4({ description, updateFields }) {
  return (
    <div className="page-left structure4">
      <h4>Présentez vous auprès des parents</h4>
      <div className="pageContent">
        <p>
          Présentez vous et décrivez votre expérience. Indiquez les activités
          d'éveil que vous proposez aux enfants, respect du rythme de l'enfant,
          activités, sorties, pédagogie... Décrivez les espaces de jeu, le lieu
          de sommeil, les équipements dont vous disposez...
        </p>
        <textarea
          id="description"
          name="description"
          value={description}
          maxLength="500"
          onChange={(e) => updateFields({ description: e.target.value })}
        />
        <legend>
          Maximum 500 caractères.{" "}
          {(description !== null && description !== undefined) && `Reste : ${500 - description.length}.`}
        </legend>
      </div>
    </div>
  );
}
Structure4.propTypes = {
  description: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure4;
