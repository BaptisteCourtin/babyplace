import React, { useState, useEffect } from "react";
import Proptypes, { string, number, node, object, oneOfType } from "prop-types";
import Axios from "axios";
import placeHolder from "@assets/placeHolder.png";

function Structure3({
  inputRef1,
  inputRef2,
  inputRef3,
  structureId,
  updateFields,
}) {
  const [image1Src, setImage1Src] = useState(placeHolder);
  const [image2Src, setImage2Src] = useState(placeHolder);
  const [image3Src, setImage3Src] = useState(placeHolder);

  const getPicture = (source) => {
    Axios.get(
      `${import.meta.env.VITE_PATH}/photosStructure?id=${structureId}`,
      {
        structureId,
        cancelToken: source.token,
      }
    )
      .then((result) => {
        if (result.data[0].photoStructure1 !== null) {
          setImage1Src(result.data[0].photoStructure1);
          updateFields({ photo1Src: result.data[0].photoStructure1 });
        }
        if (result.data[0].photoStructure2 !== null) {
          setImage2Src(result.data[0].photoStructure2);
          updateFields({ photo2Src: result.data[0].photoStructure2 });
        }
        if (result.data[0].photoStructure3 !== null) {
          setImage3Src(result.data[0].photoStructure3);
          updateFields({ photo3Src: result.data[0].photoStructure3 });
        }
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();
    getPicture(source);
    return () => {
      source.cancel();
    };
  }, []);

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
              name="file"
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
              name="file"
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
              name="file"
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
  inputRef1: oneOfType([node, object]),
  inputRef2: oneOfType([node, object]),
  inputRef3: oneOfType([node, object]),
  structureId: oneOfType([string, number]),
  updateFields: Proptypes.func,
};
export default Structure3;
