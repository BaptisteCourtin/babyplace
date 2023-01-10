import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Inscription() {
  const familleId = 1;
  const parentId = 1;

  // sert pour le updateFields
  // servira peut etre pour le get
  const [initialData, setInitialData] = useState({
    docJustifRevenus1: null,
    docDeclaRevenus1: null,
    docSituationPro1: null,
    docJustifDom1: null,
    numCaf1: null,
    numSecu1: null,

    docJustifRevenus2: null,
    docDeclaRevenus2: null,
    docSituationPro2: null,
    docJustifDom2: null,
    numCaf2: null,
    numSecu2: null,

    docAssurParent: null,
    docRib: null,
    docAutoImage: null,
    docDivorce: null,
  });

  function updateFields(fields) {
    setInitialData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // --- changer une donnée avec le form ---

  const docJustifRevenus1Src = useRef(null);
  const docDeclaRevenus1Src = useRef(null);
  const docSituationPro1Src = useRef(null);
  const docJustifDom1Src = useRef(null);

  // const docJustifRevenus2Src = useRef(null);
  // const docDeclaRevenus2Src = useRef(null);
  // const docSituationPro2Src = useRef(null);
  // const docJustifDom2Src = useRef(null);

  // const docAssurParentSrc = useRef(null);
  // const docRibSrc = useRef(null);
  // const docAutoImageSrc = useRef(null);
  // const docDivorceSrc = useRef(null);

  const SubmitFormParent = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // que des if car pas obliger de tous mettre tout de suite
    if (docJustifRevenus1Src.current !== null) {
      formData.append(
        // nom envoyer dans router
        "docJustifRevenus",
        // nom du useref
        docJustifRevenus1Src.current.files[0]
      );
    }
    if (docDeclaRevenus1Src.current !== null) {
      formData.append("docDeclaRevenus", docDeclaRevenus1Src.current.files[0]);
    }
    if (docSituationPro1Src.current !== null) {
      formData.append("docSituationPro", docSituationPro1Src.current.files[0]);
    }
    if (docJustifDom1Src.current !== null) {
      formData.append("docJustifDom", docJustifDom1Src.current.files[0]);
    }
    // ---
    // if (inputRefCni.current !== null) {
    //   formData.append("docJustifRevenus2", docJustifRevenus2.current.files[0]);
    // }
    // if (inputRefCni.current !== null) {
    //   formData.append("docDeclaRevenus2", docDeclaRevenus2.current.files[0]);
    // }
    // if (inputRefCpam.current !== null) {
    //   formData.append("docSituationPro2", docSituationPro2.current.files[0]);
    // }
    // if (inputRefDom.current !== null) {
    //   formData.append("docJustifDom2", docJustifDom2.current.files[0]);
    // }
    // // ---
    // if (inputRefCni.current !== null) {
    //   formData.append("docAssurParent", docAssurParent.current.files[0]);
    // }
    // if (inputRefCni.current !== null) {
    //   formData.append("docRib", docRib.current.files[0]);
    // }
    // if (inputRefCpam.current !== null) {
    //   formData.append("docAutoImage", docAutoImage.current.files[0]);
    // }
    // if (inputRefDom.current !== null) {
    //   formData.append("docDivorce", docDivorce.current.files[0]);
    // }

    axios
      // mettre dans la bdd
      .post("http://localhost:5000/formInscription/docParent", formData)
      .then((result) => {
        let docJustifRevenus1 = null;
        let docDeclaRevenus1 = null;
        let docSituationPro1 = null;
        let docJustifDom1 = null;
        // nom dans bdd
        if (result.data.docJustifRevenus !== undefined) {
          // nom dans la bdd
          const doc = result.data.docJustifRevenus[0].filename;
          // nom du let juste au dessus
          docJustifRevenus1 = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docDeclaRevenus !== undefined) {
          const doc = result.data.docDeclaRevenus[0].filename;
          docDeclaRevenus1 = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docSituationPro !== undefined) {
          const doc = result.data.docSituationPro[0].filename;
          docSituationPro1 = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docJustifDom !== undefined) {
          const doc = result.data.docJustifDom[0].filename;
          docJustifDom1 = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        // change le nom apres avoir mis les doc dans la bdd
        axios
          .put(
            `http://localhost:5000/formInscription/docParentChangeName/${parentId}`,
            {
              // nom des let
              docJustifRevenus1,
              docDeclaRevenus1,
              docSituationPro1,
              docJustifDom1,
            }
          )
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // multer 245

  // 565 prend le bon .pdf / .jpg

  return (
    <main className="inscription">
      <h3>Dossier Inscription</h3>

      <form>
        <label htmlFor="docJustifRevenus1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifRevenus1"
            id="docJustifRevenus1"
            ref={docJustifRevenus1Src}
            onChange={() => {
              updateFields({
                docJustifRevenus1: docJustifRevenus1Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de revenu (moins de 3 mois)</p>
        </label>

        <label htmlFor="docDeclaRevenus1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docDeclaRevenus1"
            id="docDeclaRevenus1"
            ref={docDeclaRevenus1Src}
            onChange={() => {
              updateFields({
                docDeclaRevenus1: docDeclaRevenus1Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Déclaration de revenu (année en cours)</p>
        </label>

        <label htmlFor="docSituationPro1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docSituationPro1"
            id="docSituationPro1"
            ref={docSituationPro1Src}
            onChange={() => {
              updateFields({
                docSituationPro1: docSituationPro1Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de situation professionnel</p>
        </label>

        <label htmlFor="docJustifDom1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifDom1"
            id="docJustifDom1"
            ref={docJustifDom1Src}
            onChange={() => {
              updateFields({
                docJustifDom1: docJustifDom1Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de domicile</p>
        </label>
        {/* <label htmlFor="numCaf1">
          <input
            type="text"
            name="numCaf1"
            id="numCaf1"
            value={initialData.allergies}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro Allocataire CAF</p>
        </label>
        <label htmlFor="numSecu1">
          <input
            type="text"
            name="numSecu1"
            id="numSecu1"
            value={initialData.medecin}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro de sécurité sociale</p>
        </label> */}
      </form>
      <div className="button-bas">
        <button
          type="submit"
          className="butt"
          onClick={(e) => SubmitFormParent(e)}
        >
          Enregistrer
        </button>
      </div>

      {/* --------------------------------------- */}

      {/* <form>
        <label htmlFor="docJustifRevenus2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifRevenus2"
            id="docJustifRevenus2"
            ref={docJustifRevenus2Src}
            onChange={() => {
              updateFields({
                docJustifRevenus2: docJustifRevenus2Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de revenu (moins de 3 mois)</p>
        </label>

        <label htmlFor="docDeclaRevenus2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docDeclaRevenus2"
            id="docDeclaRevenus2"
            ref={docDeclaRevenus2Src}
            onChange={() => {
              updateFields({
                docDeclaRevenus2: docDeclaRevenus2Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Déclaration de revenu (année en cours)</p>
        </label>

        <label htmlFor="docSituationPro2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docSituationPro2"
            id="docSituationPro2"
            ref={docSituationPro2Src}
            onChange={() => {
              updateFields({
                docSituationPro2: docSituationPro2Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de situation professionnel</p>
        </label>

        <label htmlFor="docJustifDom2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifDom2"
            id="docJustifDom2"
            ref={docJustifDom2Src}
            onChange={() => {
              updateFields({
                docJustifDom2: docJustifDom2Src.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <p>Justificatif de domicile</p>
        </label>
        <label htmlFor="numCaf2">
          <input
            type="text"
            name="numCaf2"
            id="numCaf2"
            value={initialData.allergies}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro Allocataire CAF</p>
        </label>
        <label htmlFor="numSecu2">
          <input
            type="text"
            name="numSecu2"
            id="numSecu2"
            value={initialData.medecin}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro de sécurité sociale</p>
        </label>
      </form> 

      <div className="button-bas">
        <button
          type="submit"
          className="butt"
          onClick={(e) => SubmitFormParent(e)}
        >
          Enregistrer
        </button>
      </div> */}

      {/* --------------------------------------- */}

      {/* <form>
        <label htmlFor="docAssurParent">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docAssurParent"
            id="docAssurParent"
            value={initialData.nom}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro de sécurité sociale</p>
        </label>

        <label htmlFor="docRib">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docRib"
            id="docRib"
            value={initialData.prenom}
            onChange={(e) => handleChange(e)}
          />
          <p>RIB</p>
        </label>

        <label htmlFor="docAutoImage">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docAutoImage"
            id="docAutoImage"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Autoristaion photo et video</p>
        </label>

        <label htmlFor="docDivorce">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docDivorce"
            id="docDivorce"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Copie du jugement de divorce</p>
        </label>
      </form>
      <div className="button-bas">
        <button
          type="submit"
          className="butt"
          onClick={(e) => SubmitFormFamille(e)}
        >
          Enregistrer
        </button>
      </div> */}
    </main>
  );
}

export default Inscription;
