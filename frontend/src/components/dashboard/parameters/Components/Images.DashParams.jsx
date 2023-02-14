import React from "react";
import PropTypes from "prop-types";

function ImagesDashParams({
  uploadDoc,
  photoStructure1,
  photoStructure1Ref,
  photoStructure2,
  photoStructure2Ref,
  photoStructure3,
  photoStructure3Ref,
}) {
  return (
    <details className="dashParamsImages">
      <p className="dashParamsFormats">
        Cliquez sur une image pour la modifier
        <br />
        Formats acceptés: <span>jpg / jpeg / png</span>
      </p>
      <summary>Vos photos</summary>
      <ul>
        <li>
          <img src={photoStructure1} alt="" />
          <input
            type="file"
            ref={photoStructure1Ref}
            accept="image/png, image/jpg, image/jpeg"
            onChange={() => {
              uploadDoc(
                "photoStructure1",
                "photoStructure1Data",
                photoStructure1Ref,
                "structure"
              );
            }}
          />
        </li>
        <li>
          <img src={photoStructure2} alt="" />
          <input
            type="file"
            ref={photoStructure2Ref}
            accept="image/png, image/jpg, image/jpeg"
            onChange={() => {
              uploadDoc(
                "photoStructure2",
                "photoStructure2Data",
                photoStructure2Ref,
                "structure"
              );
            }}
          />
        </li>
        <li>
          <img src={photoStructure3} alt="" />
          <input
            type="file"
            ref={photoStructure3Ref}
            accept="image/png, image/jpg, image/jpeg"
            onChange={() => {
              uploadDoc(
                "photoStructure3",
                "photoStructure3Data",
                photoStructure3Ref,
                "structure"
              );
            }}
          />
        </li>
      </ul>
    </details>
  );
}

ImagesDashParams.propTypes = {
  uploadDoc: PropTypes.func.isRequired,
  photoStructure1: PropTypes.string.isRequired,
  photoStructure1Ref: PropTypes.object.isRequired,
  photoStructure2: PropTypes.string.isRequired,
  photoStructure2Ref: PropTypes.object.isRequired,
  photoStructure3: PropTypes.string.isRequired,
  photoStructure3Ref: PropTypes.object.isRequired,
};

export default ImagesDashParams;
