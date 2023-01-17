import React from "react";
import Proptypes from "prop-types";

function Structure3({
  photo1Src,
  photo2Src,
  photo3Src,
  inputRef1,
  inputRef2,
  inputRef3,
  updateFields,
}) {
  const updateImg1 = (e) => {
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
        photo1Src = el.target.result;
        updateFields({ photo1Src: el.target.result });
      };
      // On lit le fichier "picture" uploadé
      reader.readAsDataURL(picture);
    }
  };
  const updateImg2 = (e) => {
    const [picture] = e.target.files;
    if (picture) {
      const reader = new FileReader();
      reader.onload = (el) => {
        photo2Src = el.target.result;
        updateFields({ photo2Src: el.target.result });
      };
      reader.readAsDataURL(picture);
    }
  };
  const updateImg3 = (e) => {
    const [picture] = e.target.files;
    if (picture) {
      const reader = new FileReader();
      reader.onload = (el) => {
        photo3Src = el.target.result;
        updateFields({ photo3Src: el.target.result });
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
            <img src={photo1Src} alt="prévisualisation" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo1"
              name="photo1"
              ref={inputRef1}
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg1(e)}
            />
          </div>
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src={photo2Src} alt="prévisualisation" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo2"
              name="photo2"
              ref={inputRef2}
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg2(e)}
            />
          </div>
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src={photo3Src} alt="prévisualisation" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo3"
              name="photo3"
              ref={inputRef3}
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => updateImg3(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Structure3.propTypes = {
  photo1Src: Proptypes.string,
  photo2Src: Proptypes.string,
  photo3Src: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure3;
