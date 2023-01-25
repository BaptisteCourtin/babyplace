import React, { useState, useEffect } from "react";
import Proptypes, { string, number, node, object, oneOfType } from "prop-types";
import Axios from "axios";

function Structure2({ inputRef, structureId, updateFields }) {
  const [imageSrc, setImageSrc] = useState(
    "https://via.placeholder.com/150.png?text=photo"
  );
  const getPicture = () => {
    Axios.get(`${import.meta.env.VITE_PATH}/photoProfil?id=${structureId}`, [
      structureId,
    ])
      .then((result) => {
        if (result.data.length > 0) {
          setImageSrc(result.data[0].photoProfil);
          updateFields({ imageProfilSrc: result.data[0].photoProfil });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateImg = (e) => {
    // e.files contient un objet FileList
    const [picture] = e.target.files;

    // "picture" est un objet File
    if (picture) {
      // L'objet FileReader
      const reader = new FileReader();

      // L'événement déclenché lorsque la lecture est complète
      reader.onload = (el) => {
        // On change l'URL de l'image (base64)
        setImageSrc(el.target.result);
      };

      // On lit le fichier "picture" uploadé
      reader.readAsDataURL(picture);
    }
  };
  useEffect(() => {
    getPicture();
  }, []);
  return (
    <div className="structure2">
      <h4>Choisir une photo de profil :</h4>
      <div className="pageContent">
        <div className="imgContainer">
          <img src={imageSrc} alt="prévisualisation" />
        </div>
        <div className="inputContainer">
          <label htmlFor="file">Formats acceptés : .jpg, .jpeg, .png</label>
          <br />
          <input
            type="file"
            name="file"
            ref={inputRef}
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => updateImg(e)}
          />
        </div>
      </div>
    </div>
  );
}
Structure2.propTypes = {
  inputRef: oneOfType([node, object]),
  structureId: oneOfType([string, number]),
  updateFields: Proptypes.func,
};
export default Structure2;
