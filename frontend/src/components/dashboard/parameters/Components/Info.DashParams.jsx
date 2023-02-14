import React from "react";
import PropTypes from "prop-types";

function InfoDashParams({
  userType,
  updateFields,
  nom,
  nomUsage,
  nomNaissance,
  prenom,
  adresse,
  telephone,
  email,
  description,
  handleSubmitInfo,
}) {
  return (
    <details className="dashParamsInfo">
      <summary>Vos infos</summary>
      <form onSubmit={(e) => handleSubmitInfo(e)}>
        <div className="dashParamsInfoList">
          {userType === "assMat" ? (
            <ul>
              <li>
                <label htmlFor="nomUsage">Nom d'usage</label>
                <input
                  type="text"
                  name="nomUsage"
                  id="nomUsage"
                  pattern=".{2,}"
                  placeholder={nomUsage}
                  onChange={(e) => updateFields({ nomUsage: e.target.value })}
                />
              </li>
              <li>
                <label htmlFor="nomNaissance">Nom de naissance</label>
                <input
                  type="text"
                  name="nomNaissance"
                  id="nomNaissance"
                  pattern=".{2,}"
                  placeholder={nomNaissance}
                  onChange={(e) =>
                    updateFields({ nomNaissance: e.target.value })
                  }
                />
              </li>
              <li>
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  pattern=".{3,}"
                  placeholder={prenom}
                  onChange={(e) => updateFields({ prenom: e.target.value })}
                />
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <label htmlFor="nomStructure">Nom</label>
                <input
                  type="text"
                  name="nomStructure"
                  id="nomStructure"
                  pattern=".{4,}"
                  placeholder={nom}
                  onChange={(e) => updateFields({ nom: e.target.value })}
                />
              </li>
            </ul>
          )}
          <ul>
            <li>
              <label htmlFor="adresse">Adresse</label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                pattern=".{10,} [0-9]{5} .{3,}"
                placeholder={adresse}
                onChange={(e) => updateFields({ adresse: e.target.value })}
              />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder={email}
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </li>
            <li>
              <label htmlFor="tel">Téléphone</label>
              <input
                type="text"
                name="tel"
                id="tel"
                pattern="[0-9]{10}"
                placeholder={telephone}
                onChange={(e) => updateFields({ telephone: e.target.value })}
              />
            </li>
          </ul>
        </div>
        <div className="dashParamsInfoText">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder={description}
            onChange={(e) => updateFields({ description: e.target.value })}
          />
        </div>
        <div className="dashParamsInfoBtn">
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </details>
  );
}

InfoDashParams.propTypes = {
  userType: PropTypes.string.isRequired,
  updateFields: PropTypes.func.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
  adresse: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmitInfo: PropTypes.func.isRequired,
};

export default InfoDashParams;
