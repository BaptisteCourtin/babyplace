import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Inscription() {
  const familleId = 1;

  // sert pour le updateFields et le get
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

    docAssurParent1: null,
    docRib1: null,
    docAutoImage1: null,
    docDivorce1: null,
  });

  // --- prise info bdd ---

  const [donneesForm, setDonneesForm] = useState(); // pris dans bdd
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      // !!! prend 2 fois les doc de famille car 2 parents et les données sont dans un tableau
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

  // met le back dans initial
  const handleChangeInitial = (ligne, tab) => {
    setInitialData((prevState) => ({
      ...prevState,
      [`${ligne}${tab + 1}`]: donneesForm[tab][ligne],
    }));
  };

  const remplirInitial = () => {
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
  const numCaf1Src = useRef(null);
  const numSecu1Src = useRef(null);

  const docJustifRevenus2Src = useRef(null);
  const docDeclaRevenus2Src = useRef(null);
  const docSituationPro2Src = useRef(null);
  const docJustifDom2Src = useRef(null);
  const numCaf2Src = useRef(null);
  const numSecu2Src = useRef(null);

  const docAssurParentSrc = useRef(null);
  const docRibSrc = useRef(null);
  const docAutoImageSrc = useRef(null);
  const docDivorceSrc = useRef(null);

  const SubmitFormParent = (e, num) => {
    e.preventDefault();
    // desctructure pour avoir parentId
    const { parentId } = donneesForm[num - 1];
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
      if (numCaf1Src.current !== null) {
        formData.append("numCaf", numCaf1Src.current.files[0]);
      }
      if (numSecu1Src.current !== null) {
        formData.append("numSecu", numSecu1Src.current.files[0]);
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
      if (numCaf2Src.current !== null) {
        formData.append("numCaf", numCaf2Src.current.files[0]);
      }
      if (numSecu2Src.current !== null) {
        formData.append("numSecu", numSecu2Src.current.files[0]);
      }
    }

    axios
      // mise dans uploads // formData contient les noms des fichiers des Src
      .post("http://localhost:5000/formInscription/docParent", formData)

      // mise dans bdd
      // mettre seulement ce qui n'est pas déjà dans la bdd
      .then((result) => {
        let docJustifRevenus = null;
        let docDeclaRevenus = null;
        let docSituationPro = null;
        let docJustifDom = null;
        let numCaf = null;
        let numSecu = null;

        if (num === 1) {
          docJustifRevenus = result.data.docJustifRevenus
            ? result.data.docJustifRevenus[0].filename
            : initialData.docJustifRevenus1;

          docDeclaRevenus = result.data.docDeclaRevenus
            ? result.data.docDeclaRevenus[0].filename
            : initialData.docDeclaRevenus1;

          docSituationPro = result.data.docSituationPro
            ? result.data.docSituationPro[0].filename
            : initialData.docSituationPro1;

          docJustifDom = result.data.docJustifDom
            ? result.data.docJustifDom[0].filename
            : initialData.docJustifDom1;

          numCaf = result.data.numCaf
            ? result.data.numCaf[0].filename
            : initialData.numCaf1;

          numSecu = result.data.numSecu
            ? result.data.numSecu[0].filename
            : initialData.numSecu1;
        } else if (num === 2) {
          docJustifRevenus = result.data.docJustifRevenus
            ? result.data.docJustifRevenus[0].filename
            : initialData.docJustifRevenus2;

          docDeclaRevenus = result.data.docDeclaRevenus
            ? result.data.docDeclaRevenus[0].filename
            : initialData.docDeclaRevenus2;

          docSituationPro = result.data.docSituationPro
            ? result.data.docSituationPro[0].filename
            : initialData.docSituationPro2;

          docJustifDom = result.data.docJustifDom
            ? result.data.docJustifDom[0].filename
            : initialData.docJustifDom2;

          numCaf = result.data.numCaf
            ? result.data.numCaf[0].filename
            : initialData.numCaf2;

          numSecu = result.data.numSecu
            ? result.data.numSecu[0].filename
            : initialData.numSecu2;
        }

        axios
          .put(
            `http://localhost:5000/formInscription/docParentChangeName/${parentId}`,
            {
              // nom des let
              docJustifRevenus,
              docDeclaRevenus,
              docSituationPro,
              docJustifDom,
              numCaf,
              numSecu,
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

    // mise dans uploads
    axios
      .post("http://localhost:5000/formInscription/docFamille", formData)

      // mise dans bdd
      // mettre seulement ce qui n'est pas déjà dans la bdd

      .then((result) => {
        const docAssurParent = result.data.docAssurParent
          ? result.data.docAssurParent[0].filename
          : initialData.docAssurParent1;

        const docRib = result.data.docRib
          ? result.data.docRib[0].filename
          : initialData.docRib1;

        const docAutoImage = result.data.docAutoImage
          ? result.data.docAutoImage[0].filename
          : initialData.docAutoImage1;

        const docDivorce = result.data.docDivorce
          ? result.data.docDivorce[0].filename
          : initialData.docDivorce1;

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

  // ??? essayer de faire un map ???
  return (
    finalOK === true && (
      <main className="inscription">
        <h3>Dossier Inscription</h3>
        <h4>Parent 1</h4>
        <form>
          <div className="champ">
            <p>Justificatif de revenu (moins de 3 mois)</p>
            {initialData.docJustifRevenus1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docJustifRevenus1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docJustifRevenus1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docJustifRevenus1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docJustifRevenus1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docJustifRevenus1"
                  id="docJustifRevenus1"
                  ref={docJustifRevenus1Src}
                />
              </label>
            )}
          </div>

          <div className="champ">
            <p>Déclaration de revenu (année en cours)</p>
            {initialData.docDeclaRevenus1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docDeclaRevenus1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docDeclaRevenus1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docJustifRevenus1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docDeclaRevenus1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docDeclaRevenus1"
                  id="docDeclaRevenus1"
                  ref={docDeclaRevenus1Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Justificatif de situation professionnel</p>
            {initialData.docSituationPro1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docSituationPro1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docSituationPro1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docSituationPro1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docSituationPro1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docSituationPro1"
                  id="docSituationPro1"
                  ref={docSituationPro1Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Justificatif de domicile</p>
            {initialData.docJustifDom1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docJustifDom1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docJustifDom1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docJustifDom1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docJustifDom1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docJustifDom1"
                  id="docJustifDom1"
                  ref={docJustifDom1Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Numéro Allocataire CAF</p>
            {initialData.numCaf1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.numCaf1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.numCaf1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.numCaf1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="numCaf1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="numCaf1"
                  id="numCaf1"
                  ref={numCaf1Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Numéro de sécurité sociale</p>
            {initialData.numSecu1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.numSecu1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.numSecu1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.numSecu1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="numSecu1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="numSecu1"
                  id="numSecu1"
                  ref={numSecu1Src}
                />
              </label>
            )}
          </div>
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
        <h4>Parent 2</h4>
        <form>
          <div className="champ">
            <p>Justificatif de revenu (moins de 3 mois)</p>
            {initialData.docJustifRevenus2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docJustifRevenus2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docJustifRevenus2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docJustifRevenus2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docJustifRevenus2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docJustifRevenus2"
                  id="docJustifRevenus2"
                  ref={docJustifRevenus2Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Déclaration de revenu (année en cours)</p>
            {initialData.docDeclaRevenus2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docDeclaRevenus2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docDeclaRevenus2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docDeclaRevenus2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docDeclaRevenus2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docDeclaRevenus2"
                  id="docDeclaRevenus2"
                  ref={docDeclaRevenus2Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Justificatif de situation professionnel</p>
            {initialData.docSituationPro2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docSituationPro2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docSituationPro2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docSituationPro2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docSituationPro2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docSituationPro2"
                  id="docSituationPro2"
                  ref={docSituationPro2Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Justificatif de domicile</p>
            {initialData.docJustifDom2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docJustifDom2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docJustifDom2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docJustifDom2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docJustifDom2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docJustifDom2"
                  id="docJustifDom2"
                  ref={docJustifDom2Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Numéro Allocataire CAF</p>
            {initialData.numCaf2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.numCaf2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.numCaf2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.numCaf2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="numCaf2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="numCaf2"
                  id="numCaf2"
                  ref={numCaf2Src}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Numéro de sécurité sociale</p>
            {initialData.numSecu2 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.numSecu2 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.numSecu2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.numSecu2.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="numSecu2">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="numSecu2"
                  id="numSecu2"
                  ref={numSecu2Src}
                />
              </label>
            )}
          </div>
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
        <h4>Fichiers Communs</h4>
        <form>
          <div className="champ">
            <p>Numéro de sécurité sociale</p>
            {initialData.docAssurParent1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docAssurParent1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docAssurParent1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docAssurParent1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docAssurParent">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docAssurParent"
                  id="docAssurParent"
                  ref={docAssurParentSrc}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>RIB</p>
            {initialData.docRib1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docRib1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docRib1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docRib1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docRib">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docRib"
                  id="docRib"
                  ref={docRibSrc}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Autoristaion photo et video</p>
            {initialData.docAutoImage1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docAutoImage1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docAutoImage1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docAutoImage1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docAutoImage">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docAutoImage"
                  id="docAutoImage"
                  ref={docAutoImageSrc}
                />
              </label>
            )}
          </div>
          <div className="champ">
            <p>Copie du jugement de divorce</p>
            {initialData.docDivorce1 !== null ? (
              <div className="with-init">
                <button
                  type="button"
                  onClick={() => (initialData.docDivorce1 = null)}
                >
                  Supp
                </button>

                <a
                  href={`http://localhost:5000/uploads/formInscriptionParents/${initialData.docDivorce1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initialData.docDivorce1.split("-qws-")[1]}
                </a>
              </div>
            ) : (
              <label htmlFor="docDivorce">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, .pdf"
                  name="docDivorce"
                  id="docDivorce"
                  ref={docDivorceSrc}
                />
              </label>
            )}
          </div>
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
