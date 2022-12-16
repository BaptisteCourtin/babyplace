import React from "react";
import Proptypes from "prop-types";

function Structure10({ dureeMin, dureeMax, updateFields }) {
  return (
    <div className="structure10 page-left">
      <h4>Quelle durée d'accueil voulez-vous autoriser ?</h4>
      <div className="pageContent">
        <div className="inputContainer">
          <label htmlFor="dureeMin">Durée minimale : </label>
          <input
            type="number"
            min="1"
            max="24"
            name="dureeMin"
            value={dureeMin}
            onChange={(e) => updateFields({ dureeMin: e.target.value })}
          />
          <p> heure(s)</p>
        </div>
        <div className="inputContainer">
          <label htmlFor="dureeMax">Durée maximale :</label>
          <input
            type="number"
            name="dureeMax"
            min={dureeMin}
            value={dureeMax}
            max="24"
            onChange={(e) => updateFields({ dureeMax: e.target.value })}
          />
          <p> heure(s)</p>
        </div>
      </div>
    </div>
  );
}
Structure10.propTypes = {
  dureeMin: Proptypes.string,
  dureeMax: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure10;
