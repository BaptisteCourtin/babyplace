import React from "react";

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

export default ImagesDashParams;
