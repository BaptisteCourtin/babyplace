import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";
import Axios from "axios";

function Structure3({
  inputRef1,
  inputRef2,
  inputRef3,
  structureId,
  updateFields,
}) {
  const [image1Src, setImage1Src] = useState(
    "https://via.placeholder.com/240x160.png?text=photo+1"
  );
  const [image2Src, setImage2Src] = useState(
    "https://via.placeholder.com/240x160.png?text=photo+2"
  );
  const [image3Src, setImage3Src] = useState(
    "https://via.placeholder.com/240x160.png?text=photo+3"
  );
  const getPicture = () => {
    Axios.get(
      `${import.meta.env.VITE_PATH}/photosStructure?id=${structureId}`,
      [structureId]
    )
      .then((result) => {
        console.log(result.data[0])
        if (result.data[0].photoStructure1 !== null) {
          setImage1Src(
            `${import.meta.env.VITE_PATH}${result.data[0].photoStructure1}`
          );
          updateFields({ photo1Src: result.data[0].photoStructure1 });
        }
        if (result.data[0].photoStructure2 !== null) {
          setImage2Src(
            `${import.meta.env.VITE_PATH}${result.data[0].photoStructure2}`
          );
          updateFields({ photo2Src: result.data[0].photoStructure2 });
        }
        if (result.data[0].photoStructure3 !== null) {
          setImage3Src(
            `${import.meta.env.VITE_PATH}${result.data[0].photoStructure3}`
          );
          updateFields({ photo3Src: result.data[0].photoStructure3 });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        setImage1Src(el.target.result);
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
        setImage2Src(el.target.result);
      };
      reader.readAsDataURL(picture);
    }
  };
  const updateImg3 = (e) => {
    const [picture] = e.target.files;
    if (picture) {
      const reader = new FileReader();
      reader.onload = (el) => {
        setImage3Src(el.target.result);
      };
      reader.readAsDataURL(picture);
    }
  };

  useEffect(() => {
    getPicture();
  }, []);
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
            <img src={image1Src} alt="prévisualisation" />
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
            <img src={image2Src} alt="prévisualisation" />
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
            <img src={image3Src} alt="prévisualisation" />
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
  inputRef1: Proptypes.node,
  inputRef2: Proptypes.node,
  inputRef3: Proptypes.node,
  structureId: Proptypes.string,
  updateFields: Proptypes.func,
};
export default Structure3;
