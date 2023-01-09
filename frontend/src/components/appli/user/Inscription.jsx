import React, { useState, useEffect } from "react";
import axios from "axios";

function Inscription() {
  // meme nom que bdd
  const [initialData, setInitialData] = useState({
    docJustifRevenus1: "",
    docDeclaRevenus1: "",
    docSituationPro1: "",
    docJustifDom1: "",
    numCaf1: "",
    numSecu1: "",

    docJustifRevenus2: "",
    docDeclaRevenus2: "",
    docSituationPro2: "",
    docJustifDom2: "",
    numCaf2: "",
    numSecu2: "",

    docAssurParent: "",
    docRib: "",
    docAutoImage: "",
    docDivorce: "",
  });

  // --- changer une donnée avec le form ---

  const handleChange = (e) => {
    const { name } = e.target;
    setInitialData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // --- prise des donnees qui sont dans la bdd ---

  const [donneesForm, setDonneesForm] = useState();
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  let familleId = 1;
  // const Token =
  //   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  // const getDonneesForm = () => {
  //   axios
  //     .get(`http://localhost:5000/famille/formInscription/${familleId}`, {
  //       headers: {
  //         "x-token": Token,
  //       },
  //     })
  //     .then((res) => {
  //       setDonneesForm(res.data);
  //       setDonneesOK(true);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // useEffect(() => {
  //   getDonneesForm();
  // }, []);

  // --- func pour changer initial value ---

  // const handleChangeInitial = (ligne) => {
  //   setInitialData((prevState) => ({
  //     ...prevState,
  //     [ligne]: donneesForm[ligne],
  //   }));
  // };

  const handleChangeInitial = (ligne, tab) => {
    setInitialData((prevState) => ({
      ...prevState,
      [`${ligne}${tab + 1}`]: donneesForm[tab][ligne],
    }));
  };

  const remplirInitial = () => {
    handleChangeInitial("nom", 0);
    handleChangeInitial("prenom", 0);
    handleChangeInitial("profession", 0);
    handleChangeInitial("telephone", 0);
    handleChangeInitial("email", 0);
    handleChangeInitial("adresse", 0);

    handleChangeInitial("nom", 1);
    handleChangeInitial("prenom", 1);
    handleChangeInitial("profession", 1);
    handleChangeInitial("telephone", 1);
    handleChangeInitial("email", 1);
    handleChangeInitial("adresse", 1);

    setFinalOK(true);
  };

  // pour avoir les data du back
  useEffect(() => {
    if (donneesOK === true) {
      remplirInitial();
    }
  }, [donneesOK]);

  // --- func pour changer la bdd ---

  // const calculPourcent = () => {
  //   let pourcent = 0;
  //   for (let prop in initialData) {
  //     if (initialData[prop] !== "") {
  //       console.log(`obj.${prop} = ${initialData[prop]}`);
  //       pourcent += 1;
  //     }
  //   }
  //   return (pourcent * 100) / 6;
  // };

  // const updateFormInscription = () => {
  //   let pourcent = calculPourcent();
  //   axios.put(`http://localhost:5000/formInscription/${familleId}`, {
  //     initialData,
  //     pourcent,
  //   });
  // };

  return (
    // finalOK === true &&
    <main className="enfant">
      <h3>Dossier Inscription</h3>

      {/* <div className="docInputContainer">
          <h5>
            Carte d'identité ou passeport / carte de résident ou titre de séjour
            et autorisation de travail.{" "}
          </h5>
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            id="docIdentite"
            name="docIdentite"
            ref={inputRefCni}
            accept="image/png, image/jpg, image/jpeg, .pdf"
            onChange={() => {
              updateFields({
                docIdentite: inputRefCni.current.files[0].name
                  .split(".")
                  .slice(-1)[0],
              });
            }}
          />
          <label htmlFor="docIdentite" />
          <p className="checkSymbol">&#x2713;</p>
        </div> */}

      <form>
        <label htmlFor="docJustifRevenus1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifRevenus1"
            id="docJustifRevenus1"
            value={initialData.nom}
            onChange={(e) => handleChange(e)}
            // onChange={() => {
            //   updateFields({ docIdentite: inputRefCni.current.files[0].name.split('.').slice(-1)[0] });
            // }}
          />
          <p>Justificatif de revenu (moins de 3 mois)</p>
        </label>
        <label htmlFor="docDeclaRevenus1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docDeclaRevenus1"
            id="docDeclaRevenus1"
            value={initialData.prenom}
            onChange={(e) => handleChange(e)}
          />
          <p>Déclaration de revenu (année en cours)</p>
        </label>
        <label htmlFor="docSituationPro1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docSituationPro1"
            id="docSituationPro1"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Justificatif de situation professionnel</p>
        </label>
        <label htmlFor="docJustifDom1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifDom1"
            id="docJustifDom1"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Justificatif de domicile</p>
        </label>
        <label htmlFor="numCaf1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="numCaf1"
            id="numCaf1"
            value={initialData.allergies}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro Allocataire CAF</p>
        </label>
        <label htmlFor="numSecu1">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="numSecu1"
            id="numSecu1"
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
          onClick={() => updateFormInscription()}
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
            value={initialData.nom}
            onChange={(e) => handleChange(e)}
          />
          <p>Justificatif de revenu (moins de 3 mois)</p>
        </label>
        <label htmlFor="docDeclaRevenus2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docDeclaRevenus2"
            id="docDeclaRevenus2"
            value={initialData.prenom}
            onChange={(e) => handleChange(e)}
          />
          <p>Déclaration de revenu (année en cours)</p>
        </label>
        <label htmlFor="docSituationPro2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docSituationPro2"
            id="docSituationPro2"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Justificatif de situation professionnel</p>
        </label>
        <label htmlFor="docJustifDom2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="docJustifDom2"
            id="docJustifDom2"
            value={initialData.dateNaissance}
            onChange={(e) => handleChange(e)}
          />
          <p>Justificatif de domicile</p>
        </label>
        <label htmlFor="numCaf2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name="numCaf2"
            id="numCaf2"
            value={initialData.allergies}
            onChange={(e) => handleChange(e)}
          />
          <p>Numéro Allocataire CAF</p>
        </label>
        <label htmlFor="numSecu2">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
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
          onClick={() => updateFormInscription()}
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
          onClick={() => updateFormInscription()}
        >
          Enregistrer
        </button>
      </div>
    </main>
  );
}

export default Inscription;
