import React from "react";
import PropTypes from "prop-types";

function ProfilDashParams({
  photoProfil,
  photoProfilRef,
  uploadDoc,
  nom,
  nomUsage,
  prenom,
  type,
}) {
  return (
    <div className="dashParamsProfilContainer">
      <div className="dashParamsProfil">
        <img src={photoProfil} alt="" />
        <input
          type="file"
          ref={photoProfilRef}
          accept="image/png, image/jpg, image/jpeg"
          onChange={() => {
            uploadDoc(
              "photoProfil",
              "photoProfilData",
              photoProfilRef,
              "structure"
            );
          }}
        />
      </div>
      <h3 className="dashParamsName">
        {nom || prenom} {nomUsage}
      </h3>
      <p className="dashParamsType">{type || "Assistante maternelle"}</p>
    </div>
  );
}

ProfilDashParams.propTypes = {
  photoProfil: PropTypes.string.isRequired,
  photoProfilRef: PropTypes.object.isRequired,
  uploadDoc: PropTypes.func.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ProfilDashParams;
