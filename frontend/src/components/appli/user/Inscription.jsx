import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";
import OneFormInscr from "./OneFormInscr";
import { toast } from "react-hot-toast";

function Inscription() {
  const { familleId } = useContext(FamilleContext);
  const [donneesForm, setDonneesForm] = useState(); // pris dans bdd
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data

  // --- calcul % completion ---

  const calculPourcent = () => {
    if (donneesForm !== undefined) {
      let pourcent = 0;
      for (let i = 0; i < donneesForm[0].length; i++) {
        for (const prop in donneesForm[0][i]) {
          if (donneesForm[0][i][prop] !== null) {
            pourcent += 1;
          }
        }
      }
      for (const prop in donneesForm[1][0]) {
        if (donneesForm[1][0][prop] !== null) {
          pourcent += 1;
        }
      }
      // -2 car parent id
      pourcent = parseInt(((pourcent - 2) * 100) / 16, 10);
      console.log(pourcent);
      axios.put(`${import.meta.env.VITE_PATH}/pourcentFormInscr/${familleId}`, {
        pourcent,
      });
    }
  };
  useEffect(() => {
    calculPourcent();
  }, [donneesForm]);

  // --- prise info bdd ---

  const getDonneesForm = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/formInscription/${familleId}`)
      .then((res) => {
        setDonneesForm(res.data);
        console.log(res.data);
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
  // que des if car pas obligé de tout mettre d'un coup

  const OneIfFormParent = async (parentId, src, nameDoc) => {
    const formData = new FormData();
    formData.append("file", src.current.files[0]);
    await axios
      .post(`${import.meta.env.VITE_PATH}/formInscription/docParent`, formData)
      .then(async (result) => {
        await axios
          .put(
            `${
              import.meta.env.VITE_PATH
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

  const doTheIfParent = async (parentId, num) => {
    if (num === 1) {
      if (
        // premier pour savoir si input existe - deuxième pour savoir si value dans le input
        docJustifRevenus1Src.current !== null &&
        docJustifRevenus1Src.current.value !== null
      ) {
        await OneIfFormParent(
          parentId,
          docJustifRevenus1Src,
          "docJustifRevenus"
        );
      }
      if (
        docDeclaRevenus1Src.current !== null &&
        docDeclaRevenus1Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docDeclaRevenus1Src, "docDeclaRevenus");
      }
      if (
        docSituationPro1Src.current !== null &&
        docSituationPro1Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docSituationPro1Src, "docSituationPro");
      }
      if (
        docJustifDom1Src.current !== null &&
        docJustifDom1Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docJustifDom1Src, "docJustifDom");
      }
      if (numCaf1Src.current !== null && numCaf1Src.current.value !== "") {
        await OneIfFormParent(parentId, numCaf1Src, "numCaf");
      }
      if (numSecu1Src.current !== null && numSecu1Src.current.value !== "") {
        await OneIfFormParent(parentId, numSecu1Src, "numSecu");
      }
    } else if (num === 2) {
      if (
        docJustifRevenus2Src.current !== null &&
        docJustifRevenus2Src.current.value !== ""
      ) {
        await OneIfFormParent(
          parentId,
          docJustifRevenus2Src,
          "docJustifRevenus"
        );
      }
      if (
        docDeclaRevenus2Src.current !== null &&
        docDeclaRevenus2Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docDeclaRevenus2Src, "docDeclaRevenus");
      }
      if (
        docSituationPro2Src.current !== null &&
        docSituationPro2Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docSituationPro2Src, "docSituationPro");
      }
      if (
        docJustifDom2Src.current !== null &&
        docJustifDom2Src.current.value !== ""
      ) {
        await OneIfFormParent(parentId, docJustifDom2Src, "docJustifDom");
      }
      if (numCaf2Src.current !== null && numCaf2Src.current.value !== "") {
        await OneIfFormParent(parentId, numCaf2Src, "numCaf");
      }
      if (numSecu2Src.current !== null && numSecu2Src.current.value !== "") {
        await OneIfFormParent(parentId, numSecu2Src, "numSecu");
      }
    }
  };

  const SubmitFormParent = async (e, num) => {
    e.preventDefault();
    // desctructure pour avoir parentId
    const { parentId } = donneesForm[0][num - 1];
    await doTheIfParent(parentId, num);
    toast.success("C'est bon, c'est mis à jour 👌");
    getDonneesForm();
  };

  // --- form famille -> en commun ---

  const OneIfFormFamille = async (src, nameDoc) => {
    const formData = new FormData();
    formData.append("file", src.current.files[0]);
    await axios
      .post(`${import.meta.env.VITE_PATH}/formInscription/docFamille`, formData)
      .then(async (result) => {
        await axios
          .put(
            `${
              import.meta.env.VITE_PATH
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

  const doTheIfFamille = async () => {
    if (
      docAssurParentSrc.current !== null &&
      docAssurParentSrc.current.value !== ""
    ) {
      await OneIfFormFamille(docAssurParentSrc, "docAssurParent");
    }
    if (docRibSrc.current !== null && docRibSrc.current.value !== "") {
      await OneIfFormFamille(docRibSrc, "docRib");
    }
    if (
      docAutoImageSrc.current !== null &&
      docAutoImageSrc.current.value !== ""
    ) {
      await OneIfFormFamille(docAutoImageSrc, "docAutoImage");
    }
    if (docDivorceSrc.current !== null && docDivorceSrc.current.value !== "") {
      await OneIfFormFamille(docDivorceSrc, "docDivorce");
    }
  };

  const SubmitFormFamille = async (e) => {
    e.preventDefault();
    await doTheIfFamille();
    toast.success("C'est bon, c'est mis à jour 👌");
    getDonneesForm();
  };

  // --- supprimer un fichier ---

  const handleSupp = async (e, who) => {
    if (who === 1 || who === 2) {
      const { parentId } = donneesForm[0][who - 1];
      await axios.put(
        `${import.meta.env.VITE_PATH}/parent/nullOneDocForm/${parentId}`,
        {
          nomFichier: e.target.name,
        }
      );
    } else if (who === 3) {
      await axios.put(
        `${import.meta.env.VITE_PATH}/famille/nullOneDocForm/${familleId}`,
        {
          nomFichier: e.target.name,
        }
      );
    }
    console.log("supp ok");
    getDonneesForm();
  };

  return (
    donneesOK && (
      <main className="inscription">
        <h3>Dossier Inscription</h3>
        <br />
        <p>
          N'oubliez pas d'enregistrer vos informations et attendez la popup de
          succès
        </p>
        <h4>Parent 1</h4>
        <form>
          <OneFormInscr
            init={donneesForm[0][0].docJustifRevenus}
            src={docJustifRevenus1Src}
            nomDoc="docJustifRevenus"
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            who={1}
          />
          <OneFormInscr
            init={donneesForm[0][0].docDeclaRevenus}
            src={docDeclaRevenus1Src}
            nomDoc="docDeclaRevenus"
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            who={1}
          />
          <OneFormInscr
            init={donneesForm[0][0].docSituationPro}
            src={docSituationPro1Src}
            nomDoc="docSituationPro"
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            who={1}
          />
          <OneFormInscr
            init={donneesForm[0][0].docJustifDom}
            src={docJustifDom1Src}
            nomDoc="docJustifDom"
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            who={1}
          />
          <OneFormInscr
            init={donneesForm[0][0].numCaf}
            src={numCaf1Src}
            nomDoc="numCaf"
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            who={1}
          />
          <OneFormInscr
            init={donneesForm[0][0].numSecu}
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
            init={donneesForm[0][1].docJustifRevenus}
            src={docJustifRevenus2Src}
            nomDoc="docJustifRevenus"
            handleSupp={handleSupp}
            p="Justificatif de revenu (moins de 3 mois)"
            who={2}
          />
          <OneFormInscr
            init={donneesForm[0][1].docDeclaRevenus}
            src={docDeclaRevenus2Src}
            nomDoc="docDeclaRevenus"
            handleSupp={handleSupp}
            p="Déclaration de revenu (année en cours)"
            who={2}
          />
          <OneFormInscr
            init={donneesForm[0][1].docSituationPro}
            src={docSituationPro2Src}
            nomDoc="docSituationPro"
            handleSupp={handleSupp}
            p="Justificatif de situation professionnel"
            who={2}
          />
          <OneFormInscr
            init={donneesForm[0][1].docJustifDom}
            src={docJustifDom2Src}
            nomDoc="docJustifDom"
            handleSupp={handleSupp}
            p="Justificatif de domicile"
            who={2}
          />
          <OneFormInscr
            init={donneesForm[0][1].numCaf}
            src={numCaf2Src}
            nomDoc="numCaf"
            handleSupp={handleSupp}
            p="Numéro Allocataire CAF"
            who={2}
          />
          <OneFormInscr
            init={donneesForm[0][1].numSecu}
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
            init={donneesForm[1][0].docAssurParent}
            src={docAssurParentSrc}
            nomDoc="docAssurParent"
            handleSupp={handleSupp}
            p="Numéro de sécurité sociale"
            who={3}
          />
          <OneFormInscr
            init={donneesForm[1][0].docRib}
            src={docRibSrc}
            nomDoc="docRib"
            handleSupp={handleSupp}
            p="RIB"
            who={3}
          />
          <OneFormInscr
            init={donneesForm[1][0].docAutoImage}
            src={docAutoImageSrc}
            nomDoc="docAutoImage"
            handleSupp={handleSupp}
            p="Autoristaion photo et video"
            who={3}
          />
          <OneFormInscr
            init={donneesForm[1][0].docDivorce}
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
