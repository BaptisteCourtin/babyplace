import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Inscription() {
  const familleId = 1;

  // sert pour le updateFields
  // servira peut etre pour le get
  const [initialData, setInitialData] = useState({
    docJustifRevenus1: null,
    docDeclaRevenus1: null,
    docSituationPro1: null,
    docJustifDom1: null,
    numCaf1: "",
    numSecu1: "",

    docJustifRevenus2: null,
    docDeclaRevenus2: null,
    docSituationPro2: null,
    docJustifDom2: null,
    numCaf2: "",
    numSecu2: "",

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

  // --- prise info bdd ---

  const [donneesForm, setDonneesForm] = useState();
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      .get(`http://localhost:5000/famille/formInscription/${familleId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setDonneesForm(res.data);
        setDonneesOK(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getDonneesForm();
  }, []);

  // --- func pour changer initial value ---

  const handleChangeInitial = (ligne, tab) => {
    setInitialData((prevState) => ({
      ...prevState,
      [`${ligne}${tab + 1}`]: donneesForm[tab][ligne],
    }));
  };

  const remplirInitial = () => {
    console.log(donneesForm);

    handleChangeInitial("docJustifRevenus", 0);
    handleChangeInitial("docDeclaRevenus", 0);
    handleChangeInitial("docSituationPro", 0);
    handleChangeInitial("docJustifDom", 0);
    handleChangeInitial("numCaf", 0);
    handleChangeInitial("numSecu", 0);

    handleChangeInitial("docJustifRevenus", 1);
    handleChangeInitial("docDeclaRevenus", 1);
    handleChangeInitial("docSituationPro", 1);
    handleChangeInitial("docJustifDom", 1);
    handleChangeInitial("numCaf", 1);
    handleChangeInitial("numSecu", 1);

    handleChangeInitial("docAssurParent", 0);
    handleChangeInitial("docRib", 0);
    handleChangeInitial("docAutoImage", 0);
    handleChangeInitial("docDivorce", 0);

    setFinalOK(true);
  };

  // pour avoir les data du back
  useEffect(() => {
    if (donneesOK === true) {
      remplirInitial();
    }
  }, [donneesOK]);

  // --- changer une donnée avec le form ---

  const docJustifRevenus1Src = useRef(null);
  const docDeclaRevenus1Src = useRef(null);
  const docSituationPro1Src = useRef(null);
  const docJustifDom1Src = useRef(null);

  const docJustifRevenus2Src = useRef(null);
  const docDeclaRevenus2Src = useRef(null);
  const docSituationPro2Src = useRef(null);
  const docJustifDom2Src = useRef(null);

  const docAssurParentSrc = useRef(null);
  const docRibSrc = useRef(null);
  const docAutoImageSrc = useRef(null);
  const docDivorceSrc = useRef(null);

  const SubmitFormParent = (e, num) => {
    e.preventDefault();
    // desctructure pour avoir parentId
    const { parentId } = donneesForm[num - 1];
    console.log(parentId);
    const formData = new FormData();

    // que des if car pas obliger de tous mettre tout de suite

    if (num === 1) {
      if (docJustifRevenus1Src.current !== null) {
        formData.append(
          // nom envoyer dans router
          "docJustifRevenus",
          // nom du useref
          docJustifRevenus1Src.current.files[0]
        );
      }
      if (docDeclaRevenus1Src.current !== null) {
        formData.append(
          "docDeclaRevenus",
          docDeclaRevenus1Src.current.files[0]
        );
      }
      if (docSituationPro1Src.current !== null) {
        formData.append(
          "docSituationPro",
          docSituationPro1Src.current.files[0]
        );
      }
      if (docJustifDom1Src.current !== null) {
        formData.append("docJustifDom", docJustifDom1Src.current.files[0]);
      }
    } else if (num === 2) {
      if (docJustifRevenus2Src.current !== null) {
        formData.append(
          "docJustifRevenus",
          docJustifRevenus2Src.current.files[0]
        );
      }
      if (docDeclaRevenus2Src.current !== null) {
        formData.append(
          "docDeclaRevenus",
          docDeclaRevenus2Src.current.files[0]
        );
      }
      if (docSituationPro2Src.current !== null) {
        formData.append(
          "docSituationPro",
          docSituationPro2Src.current.files[0]
        );
      }
      if (docJustifDom2Src.current !== null) {
        formData.append("docJustifDom", docJustifDom2Src.current.files[0]);
      }
    }

    axios
      // mise dans uploads
      .post("http://localhost:5000/formInscription/docParent", formData)
      .then((result) => {
        let docJustifRevenus = null;
        let docDeclaRevenus = null;
        let docSituationPro = null;
        let docJustifDom = null;
        // nom dans la bdd
        if (result.data.docJustifRevenus !== undefined) {
          // nom dans la bdd
          const doc = result.data.docJustifRevenus[0].filename;
          // nom du let juste au dessus
          docJustifRevenus = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docDeclaRevenus !== undefined) {
          const doc = result.data.docDeclaRevenus[0].filename;
          docDeclaRevenus = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docSituationPro !== undefined) {
          const doc = result.data.docSituationPro[0].filename;
          docSituationPro = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }
        if (result.data.docJustifDom !== undefined) {
          const doc = result.data.docJustifDom[0].filename;
          docJustifDom = `http://localhost:5000/uploads/formInscriptionParents/${doc}`;
        }

        // change nom des fichiers + mise dans bdd
        if (num === 1) {
          axios
            .put(
              `http://localhost:5000/formInscription/docParentChangeName/${parentId}`,
              {
                // nom des let
                docJustifRevenus,
                docDeclaRevenus,
                docSituationPro,
                docJustifDom,
                // nom initial data
                numCaf: initialData.numCaf1,
                numSecu: initialData.numSecu1,
              }
            )
            .catch((err) => {
              console.error(err);
            });
        }
        if (num === 2) {
          axios
            .put(
              `http://localhost:5000/formInscription/docParentChangeName/${parentId}`,
              {
                // nom des let
                docJustifRevenus,
                docDeclaRevenus,
                docSituationPro,
                docJustifDom,
                // nom initial data
                numCaf: initialData.numCaf2,
                numSecu: initialData.numSecu2,
              }
            )
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const SubmitFormFamille = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // que des if car pas obliger de tous mettre tout de suite
    if (docAssurParentSrc.current !== null) {
      formData.append("docAssurParent", docAssurParentSrc.current.files[0]);
    }
    if (docRibSrc.current !== null) {
      formData.append("docRib", docRibSrc.current.files[0]);
    }
    if (docAutoImageSrc.current !== null) {
      formData.append("docAutoImage", docAutoImageSrc.current.files[0]);
    }
    if (docDivorceSrc.current !== null) {
      formData.append("docDivorce", docDivorceSrc.current.files[0]);
    }

    axios
      // mise dans uploads
      .post("http://localhost:5000/formInscription/docFamille", formData)
      .then((result) => {
        let docAssurParent = null;
        let docRib = null;
        let docAutoImage = null;
        let docDivorce = null;
        // nom dans bdd
        if (result.data.docAssurParent !== undefined) {
          // nom dans la bdd
          const doc = result.data.docAssurParent[0].filename;
          // nom du let juste au dessus
          docAssurParent = `http://localhost:5000/uploads/formInscriptionFamille/${doc}`;
        }
        if (result.data.docRib !== undefined) {
          const doc = result.data.docRib[0].filename;
          docRib = `http://localhost:5000/uploads/formInscriptionFamille/${doc}`;
        }
        if (result.data.docAutoImage !== undefined) {
          const doc = result.data.docAutoImage[0].filename;
          docAutoImage = `http://localhost:5000/uploads/formInscriptionFamille/${doc}`;
        }
        if (result.data.docDivorce !== undefined) {
          const doc = result.data.docDivorce[0].filename;
          docDivorce = `http://localhost:5000/uploads/formInscriptionFamille/${doc}`;
        }
        // change nom des fichiers + mise dans bdd
        axios
          .put(
            `http://localhost:5000/formInscription/docFamilleChangeName/${familleId}`,
            {
              // nom des let
              docAssurParent,
              docRib,
              docAutoImage,
              docDivorce,
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

  return (
    finalOK === true && (
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
          <label htmlFor="numCaf1">
            <input
              required
              type="number"
              name="numCaf1"
              id="numCaf1"
              value={initialData.numCaf1}
              onChange={(e) => updateFields({ numCaf1: e.target.value })}
            />
            <p>Numéro Allocataire CAF</p>
          </label>
          <label htmlFor="numSecu1">
            <input
              required
              type="number"
              name="numSecu1"
              id="numSecu1"
              value={initialData.numSecu1}
              onChange={(e) => updateFields({ numSecu1: e.target.value })}
            />
            <p>Numéro de sécurité sociale</p>
          </label>
        </form>
        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={(e) => SubmitFormParent(e, 1)}
          >
            Enregistrer
          </button>
        </div>
        {/* --------------------------------------- */}
        <form>
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
              required
              type="text"
              name="numCaf2"
              id="numCaf2"
              value={initialData.numCaf2}
              onChange={(e) => handleChange(e)}
            />
            <p>Numéro Allocataire CAF</p>
          </label>
          <label htmlFor="numSecu2">
            <input
              required
              type="text"
              name="numSecu2"
              id="numSecu2"
              value={initialData.numSecu2}
              onChange={(e) => handleChange(e)}
            />
            <p>Numéro de sécurité sociale</p>
          </label>
        </form>
        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={(e) => SubmitFormParent(e, 2)}
          >
            Enregistrer
          </button>
        </div>
        {/* --------------------------------------- */}

        <form>
          <label htmlFor="docAssurParent">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, .pdf"
              name="docAssurParent"
              id="docAssurParent"
              ref={docAssurParentSrc}
              onChange={() => {
                updateFields({
                  docAssurParent: docAssurParentSrc.current.files[0].name
                    .split(".")
                    .slice(-1)[0],
                });
              }}
            />
            <p>Numéro de sécurité sociale</p>
          </label>

          <label htmlFor="docRib">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, .pdf"
              name="docRib"
              id="docRib"
              ref={docRibSrc}
              onChange={() => {
                updateFields({
                  docRib: docRibSrc.current.files[0].name
                    .split(".")
                    .slice(-1)[0],
                });
              }}
            />
            <p>RIB</p>
          </label>

          <label htmlFor="docAutoImage">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, .pdf"
              name="docAutoImage"
              id="docAutoImage"
              ref={docAutoImageSrc}
              onChange={() => {
                updateFields({
                  docAutoImage: docAutoImageSrc.current.files[0].name
                    .split(".")
                    .slice(-1)[0],
                });
              }}
            />
            <p>Autoristaion photo et video</p>
          </label>

          <label htmlFor="docDivorce">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, .pdf"
              name="docDivorce"
              id="docDivorce"
              ref={docDivorceSrc}
              onChange={() => {
                updateFields({
                  docDivorce: docDivorceSrc.current.files[0].name
                    .split(".")
                    .slice(-1)[0],
                });
              }}
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
        </div>
      </main>
    )
  );
}

export default Inscription;
