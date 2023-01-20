import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";
import OneFormInscr from "./OneFormInscr";

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

  // --- prise info bdd ---

  const [donneesForm, setDonneesForm] = useState(); // pris dans bdd
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  const getDonneesForm = () => {
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

    setDonneesOK(false);
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

  // --- form parent 1 ou 2 ---

  const OneIfFormParent = (parentId, src, nameDoc) => {
    const formData = new FormData();
    formData.append("file", src.current.files[0]);
    axios
      .post(`${import.meta.env.VITE_PATH}/formInscription/docParent`, formData)
      .then((result) => {
        axios
          .put(
            `${import.meta.env.VITE_PATH
            }/formInscription/docParentChangeName/${parentId}/${nameDoc}`,
            {
              httpDoc: result.data,
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

  const OneIfFormFamille = (src, nameDoc) => {
    const formData = new FormData();
    formData.append("file", src.current.files[0]);
    axios
      .post(`${import.meta.env.VITE_PATH}/formInscription/docFamille`, formData)
      .then((result) => {
        axios
          .put(
            `${import.meta.env.VITE_PATH
            }/formInscription/docFamilleChangeName/${familleId}/${nameDoc}`,
            {
              httpDoc: result.data,
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

  const SubmitFormParent = (e, num) => {
    e.preventDefault();
    // que des if car pas obligé de tout mettre d'un coup
    // desctructure pour avoir parentId
    const { parentId } = donneesForm[num - 1];

    if (num === 1) {
      if (docJustifRevenus1Src.current !== null) {
        OneIfFormParent(parentId, docJustifRevenus1Src, "docJustifRevenus");
      }
      if (docDeclaRevenus1Src.current !== null) {
        OneIfFormParent(parentId, docDeclaRevenus1Src, "docDeclaRevenus");
      }
      if (docSituationPro1Src.current !== null) {
        OneIfFormParent(parentId, docSituationPro1Src, "docSituationPro");
      }
      if (docJustifDom1Src.current !== null) {
        OneIfFormParent(parentId, docJustifDom1Src, "docJustifDom");
      }
      if (numCaf1Src.current !== null) {
        OneIfFormParent(parentId, numCaf1Src, "numCaf");
      }
      if (numSecu1Src.current !== null) {
        OneIfFormParent(parentId, numSecu1Src, "numSecu");
      }
    } else if (num === 2) {
      if (docJustifRevenus2Src.current !== null) {
        OneIfFormParent(parentId, docJustifRevenus2Src, "docJustifRevenus");
      }
      if (docDeclaRevenus2Src.current !== null) {
        OneIfFormParent(parentId, docDeclaRevenus2Src, "docDeclaRevenus");
      }
      if (docSituationPro2Src.current !== null) {
        OneIfFormParent(parentId, docSituationPro2Src, "docSituationPro");
      }
      if (docJustifDom2Src.current !== null) {
        OneIfFormParent(parentId, docJustifDom2Src, "docJustifDom");
      }
      if (numCaf2Src.current !== null) {
        OneIfFormParent(parentId, numCaf2Src, "numCaf");
      }
      if (numSecu2Src.current !== null) {
        OneIfFormParent(parentId, numSecu2Src, "numSecu");
      }
    }
  };

  // --- form famille -> en commun ---

  const SubmitFormFamille = (e) => {
    e.preventDefault();
    if (docAssurParentSrc.current !== null) {
      OneIfFormFamille(docAssurParentSrc, "docAssurParent");
    }
    if (docRibSrc.current !== null) {
      OneIfFormFamille(docRibSrc, "docRib");
    }
    if (docAutoImageSrc.current !== null) {
      OneIfFormFamille(docAutoImageSrc, "docAutoImage");
    }
    if (docDivorceSrc.current !== null) {
      OneIfFormFamille(docDivorceSrc, "docDivorce");
    }
  };

  // --- supprimer un fichier ---

  const handleSupp = (e, who) => {
    if (who === 1 || who === 2) {
      const { parentId } = donneesForm[who - 1];
      axios.put(
        `${import.meta.env.VITE_PATH}/parent/nullOneDocForm/${parentId}`,
        {
          nomFichier: e.target.name,
        }
      );
    } else if (who === 3) {
      axios.put(
        `${import.meta.env.VITE_PATH}/famille/nullOneDocForm/${familleId}`,
        {
          nomFichier: e.target.name,
        }
      );
    }
    // getDonneesForm(); // asynchrone (1 coup)
  };

  return (
    finalOK === true && (
      <main className="inscription">
        <h3>Dossier Inscription</h3>
        <br />
        <p>N'oubliez pas d'enregistrer vos informations.</p>
        <br />
        <p>Vous verez les modifications quand vous reviendrez sur cette page</p>
        <h4>Parent 1</h4>
        <form>
          <OneFormInscr
            init={initialData.docJustifRevenus1}
            src={docJustifRevenus1Src}
            nomDoc="docJustifRevenus"
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            who={1}
          />
          <OneFormInscr
            init={initialData.docDeclaRevenus1}
            src={docDeclaRevenus1Src}
            nomDoc="docDeclaRevenus"
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            who={1}
          />
          <OneFormInscr
            init={initialData.docSituationPro1}
            src={docSituationPro1Src}
            nomDoc="docSituationPro"
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            who={1}
          />
          <OneFormInscr
            init={initialData.docJustifDom1}
            src={docJustifDom1Src}
            nomDoc="docJustifDom"
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            who={1}
          />
          <OneFormInscr
            init={initialData.numCaf1}
            src={numCaf1Src}
            nomDoc="numCaf"
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            who={1}
          />
          <OneFormInscr
            init={initialData.numSecu1}
            src={numSecu1Src}
            nomDoc="numSecu"
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            who={1}
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
            nomDoc="docJustifRevenus"
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            who={2}
          />
          <OneFormInscr
            init={initialData.docDeclaRevenus2}
            src={docDeclaRevenus2Src}
            nomDoc="docDeclaRevenus"
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            who={2}
          />
          <OneFormInscr
            init={initialData.docSituationPro2}
            src={docSituationPro2Src}
            nomDoc="docSituationPro"
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            who={2}
          />
          <OneFormInscr
            init={initialData.docJustifDom2}
            src={docJustifDom2Src}
            nomDoc="docJustifDom"
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            who={2}
          />
          <OneFormInscr
            init={initialData.numCaf2}
            src={numCaf2Src}
            nomDoc="numCaf"
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            who={2}
          />
          <OneFormInscr
            init={initialData.numSecu2}
            src={numSecu2Src}
            nomDoc="numSecu"
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            who={2}
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
            nomDoc="docAssurParent"
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            who={3}
          />
          <OneFormInscr
            init={initialData.docRib1}
            src={docRibSrc}
            nomDoc="docRib"
            handleSupp={handleSupp}
            p="RIB"
            who={3}
          />
          <OneFormInscr
            init={initialData.docAutoImage1}
            src={docAutoImageSrc}
            nomDoc="docAutoImage"
            handleSupp={handleSupp}
            p="Autoristaion photo et video"
            who={3}
          />
          <OneFormInscr
            init={initialData.docDivorce1}
            src={docDivorceSrc}
            nomDoc="docDivorce"
            handleSupp={handleSupp}
            p="Copie du jugement de divorce"
            who={3}
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
