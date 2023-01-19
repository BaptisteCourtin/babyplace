import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import OneFormInscr from "./OneFormInscr";
import FamilleContext from "@components/context/FamilleContext";

function Inscription() {
  const { familleId } = useContext(FamilleContext);

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

  const handleSupp = (e) => {
    const { name } = e.target;
    setInitialData((prevState) => ({
      ...prevState,
      [name]: null,
    }));
  };

  // --- prise info bdd ---

  const [donneesForm, setDonneesForm] = useState(); // pris dans bdd
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  const getDonneesForm = () => {
    console.log("getForm");
    axios
      // !!! prend 2 fois les doc de famille car 2 parents et les données sont dans un tableau
      .get(`${import.meta.env.VITE_PATH}/famille/formInscription/${familleId}`)
      .then((res) => {
        setDonneesForm(res.data);
      })
      .then(() => {
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
    setDonneesOK(false);
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
      .post(`${import.meta.env.VITE_PATH}/formInscription/docParent`, formData)

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
            `${
              import.meta.env.VITE_PATH
            }/formInscription/docParentChangeName/${parentId}`,
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
      .post(`${import.meta.env.VITE_PATH}/formInscription/docFamille`, formData)

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
            `${
              import.meta.env.VITE_PATH
            }/formInscription/docFamilleChangeName/${familleId}`,
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
        <br />
        <p>N'oubliez pas d'enregistrer vos informations.</p>
        <p>❗Même quand vous supprimez un fichier.</p>
        <br />
        <p>Vous verez les modifications quand vous reviendrez sur cette page</p>
        <h4>Parent 1</h4>
        <form>
          <OneFormInscr
            init={initialData.docJustifRevenus1}
            src={docJustifRevenus1Src}
            nomDoc={"docJustifRevenus1"}
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            what={1}
          />
          <OneFormInscr
            init={initialData.docDeclaRevenus1}
            src={docDeclaRevenus1Src}
            nomDoc={"docDeclaRevenus1"}
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            what={1}
          />
          <OneFormInscr
            init={initialData.docSituationPro1}
            src={docSituationPro1Src}
            nomDoc={"docSituationPro1"}
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            what={1}
          />
          <OneFormInscr
            init={initialData.docJustifDom1}
            src={docJustifDom1Src}
            nomDoc={"docJustifDom1"}
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            what={1}
          />
          <OneFormInscr
            init={initialData.numCaf1}
            src={numCaf1Src}
            nomDoc={"numCaf1"}
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            what={1}
          />
          <OneFormInscr
            init={initialData.numSecu1}
            src={numSecu1Src}
            nomDoc={"numSecu1"}
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            what={1}
          />
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
          <OneFormInscr
            init={initialData.docJustifRevenus2}
            src={docJustifRevenus2Src}
            nomDoc={"docJustifRevenus2"}
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            what={1}
          />
          <OneFormInscr
            init={initialData.docDeclaRevenus2}
            src={docDeclaRevenus2Src}
            nomDoc={"docDeclaRevenus2"}
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            what={1}
          />
          <OneFormInscr
            init={initialData.docSituationPro2}
            src={docSituationPro2Src}
            nomDoc={"docSituationPro2"}
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            what={1}
          />
          <OneFormInscr
            init={initialData.docJustifDom2}
            src={docJustifDom2Src}
            nomDoc={"docJustifDom2"}
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            what={1}
          />
          <OneFormInscr
            init={initialData.numCaf2}
            src={numCaf2Src}
            nomDoc={"numCaf2"}
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            what={1}
          />
          <OneFormInscr
            init={initialData.numSecu2}
            src={numSecu2Src}
            nomDoc={"numSecu2"}
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            what={1}
          />
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
          <OneFormInscr
            init={initialData.docAssurParent1}
            src={docAssurParentSrc}
            nomDoc={"docAssurParent1"}
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            what={2}
          />
          <OneFormInscr
            init={initialData.docRib1}
            src={docRibSrc}
            nomDoc={"docRib1"}
            handleSupp={handleSupp}
            p="RIB"
            what={2}
          />
          <OneFormInscr
            init={initialData.docAutoImage1}
            src={docAutoImageSrc}
            nomDoc={"docAutoImage1"}
            handleSupp={handleSupp}
            p="Autoristaion photo et video"
            what={2}
          />
          <OneFormInscr
            init={initialData.docDivorce1}
            src={docDivorceSrc}
            nomDoc={"docDivorce1"}
            handleSupp={handleSupp}
            p="Copie du jugement de divorce"
            what={2}
          />
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
