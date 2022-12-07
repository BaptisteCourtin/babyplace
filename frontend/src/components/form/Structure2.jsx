import React from "react";
import Proptypes from "prop-types";

function Structure2({ imageProfilSrc, updateFields }) {
  // const [imageProfilSrc, setImageProfilSrc] = useState("https://via.placeholder.com/150");
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
        // console.log(e.result);
        imageProfilSrc = el.target.result;
        updateFields({ imageProfilSrc: el.target.result });
      };

      // On lit le fichier "picture" uploadé
      reader.readAsDataURL(picture);
    }
  };
  return (
    <div className="structure2">
      <h4>Choisir une photo de profil :</h4>
      <div className="pageContent">
        <div className="imgContainer">
          <img src={imageProfilSrc} alt="prévisualisation" />
        </div>
        <div className="inputContainer">
          <label htmlFor="avatar">Formats acceptés : .jpg, .jpeg, .png</label>
          <br />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => updateImg(e)}
          />
        </div>
      </div>
    </div>
  );
}
Structure2.propTypes = {
  imageProfilSrc: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure2;
