import React, { useState } from "react";

function Structure2() {
  const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/150");
  const updateImg = (e) => {
    // e.files contient un objet FileList
    console.log(e.target.files);
    const [picture] = e.target.files;

    // "picture" est un objet File
    if (picture) {
      // L'objet FileReader
      const reader = new FileReader();

      // L'événement déclenché lorsque la lecture est complète
      reader.onload = (e) => {
        // On change l'URL de l'image (base64)
        // console.log(e.result);
        setImageSrc(e.target.result);
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
          <img src={imageSrc} alt="prévisualisation image" />
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

export default Structure2;
