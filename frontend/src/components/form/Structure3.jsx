import React, { useState } from "react";

function Structure3({ photo1Src, photo2Src, photo3Src, updateFields }) {
  // const [imageProfilSrc, setImageProfilSrc] = useState("https://via.placeholder.com/150");
  const updateImg1 = (e) => {
    // e.files contient un objet FileList
    const [picture] = e.target.files;
    // "picture" est un objet File
    if (picture) {
      // L'objet FileReader
      const reader = new FileReader();
      // L'événement déclenché lorsque la lecture est complète
      reader.onload = (e) => {
        // On change l'URL de l'image (base64)
        // console.log(e.result);
        photo1Src = e.target.result;
        updateFields({ photo1Src: e.target.result });
      };
      // On lit le fichier "picture" uploadé
      reader.readAsDataURL(picture);
    }
  };
  const updateImg2 = (e) => {
    const [picture] = e.target.files;
    if (picture) {
      const reader = new FileReader();
      reader.onload = (e) => {
        photo2Src = e.target.result;
        updateFields({ photo2Src: e.target.result });
      };
      reader.readAsDataURL(picture);
    }
  };
  const updateImg3 = (e) => {
    const [picture] = e.target.files;
    if (picture) {
      const reader = new FileReader();
      reader.onload = (e) => {
        photo3Src = e.target.result;
        updateFields({ photo3Src: e.target.result });
      };
      reader.readAsDataURL(picture);
    }
  };
  return (
    <div className="structure3">
      <h4>Égayez votre annonce avec des photos</h4>
      <p>
        Prenez des photos avec un téléphone ou un appareil photo. Téléchargez au
        moins une photo pour publier votre annonce. Vous pourrez toujours en
        ajouter d'autres ou apporter des modifications par la suite. Maximum
        trois photos, format JPEG, JPG ou PNG.
      </p>
      <div className="pageContent">
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src={photo1Src} alt="prévisualisation image" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo1"
              name="photo1"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg1(e)}
            />
          </div>
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src={photo2Src} alt="prévisualisation image" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo2"
              name="photo2"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg2(e)}
            />
          </div>
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src={photo3Src} alt="prévisualisation image" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo3"
              name="photo3"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg3(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structure3;
