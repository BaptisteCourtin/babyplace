import React, { useState, useEffect } from "react";
import axios from "axios";

function Parents() {
  // meme nom que bdd
  const [initialData, setInitialData] = useState({
    nom1: "",
    prenom1: "",
    profession1: "",
    telephone1: "",
    email1: "",
    adresse1: "",

    nom2: "",
    prenom2: "",
    profession2: "",
    telephone2: "",
    email2: "",
    adresse2: "",
  });

  // --- changer une donnée avec le form ---

  const handleChange = (e) => {
    const { name } = e.target;
    setInitialData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // --- les donnees qui sont dans la bdd ---

  const [donneesForm, setDonneesForm] = useState();
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  let parentId = 1;
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      .get(`http://localhost:5000/famille/formParent/${parentId}`, {
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

  const handleChangeInitial = (ligne) => {
    // console.log("ligne :" + ligne); // ok
    // console.log("donnesForm 3 :" + donneesForm.nom1);
    // console.log("donnesForm 4 :" + donneesForm[ligne]);

    setInitialData((prevState) => ({
      ...prevState,
      [ligne]: donneesForm[ligne],
    }));
  };

  const remplirInitial = () => {
    // console.log("donnesForm 2 :" + donneesForm.nom1);

    handleChangeInitial("nom1");
    handleChangeInitial("prenom1");
    handleChangeInitial("profession1");
    handleChangeInitial("telephone1");
    handleChangeInitial("email1");
    handleChangeInitial("adresse1");

    handleChangeInitial("nom2");
    handleChangeInitial("prenom2");
    handleChangeInitial("profession2");
    handleChangeInitial("telephone2");
    handleChangeInitial("email2");
    handleChangeInitial("adresse2");

    setFinalOK(true);
  };

  // pour avoir les data du back
  useEffect(() => {
    if (donneesOK === true) {
      remplirInitial();
    }
  }, [donneesOK]);

  // --- func pour changer la bdd ---

  const calculPourcent = () => {
    let pourcent = 0;
    for (let prop in initialData) {
      if (initialData[prop] !== "") {
        console.log(`obj.${prop} = ${initialData[prop]}`);
        pourcent += 1;
      }
    }
    return (pourcent * 100) / 12;
  };

  const updateFormParent = () => {
    let pourcent = calculPourcent();
    axios.put(`http://localhost:5000/formParent/${parentId}`, {
      initialData,
      pourcent,
    });
  };

  // ajouter le poucentage de completion dans la bdd à partir d'ici pour la page user
  // => obliger de prendre les infos à partir des pages de form

  return (
    finalOK === true && (
      <main className="parent">
        <h3>Dossier Parents</h3>

        <form>
          <h4>Parent 1</h4>
          <label htmlFor="nom">
            <input
              required
              type="text"
              name="nom1"
              id="nom1"
              value={initialData.nom1}
              onChange={(e) => handleChange(e)}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom1">
            <input
              required
              type="text"
              name="prenom1"
              id="prenom1"
              value={initialData.prenom1}
              onChange={(e) => handleChange(e)}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="profession1">
            <input
              required
              type="text"
              name="profession1"
              id="profession1"
              value={initialData.profession1}
              onChange={(e) => handleChange(e)}
            />
            <p>Profession</p>
          </label>

          <label htmlFor="telephone1">
            <input
              required
              type="number"
              name="telephone1"
              id="telephone1"
              value={initialData.telephone1}
              onChange={(e) => handleChange(e)}
            />
            <p>telephone portable</p>
          </label>

          <label htmlFor="email1">
            <input
              required
              type="email"
              name="email1"
              id="email1"
              value={initialData.email1}
              onChange={(e) => handleChange(e)}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="adresse1">
            <input
              required
              type="text"
              name="adresse1"
              id="adresse1"
              value={initialData.adresse1}
              onChange={(e) => handleChange(e)}
            />
            <p>Adresse</p>
          </label>
        </form>

        <form>
          <h4>Parent 2</h4>
          <label htmlFor="nom2">
            <input
              required
              type="text"
              name="nom2"
              id="nom2"
              value={initialData.nom2}
              onChange={(e) => handleChange(e)}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom2">
            <input
              required
              type="text"
              name="prenom2"
              id="prenom2"
              value={initialData.prenom2}
              onChange={(e) => handleChange(e)}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="profession2">
            <input
              required
              type="text"
              name="profession2"
              id="profession2"
              value={initialData.profession2}
              onChange={(e) => handleChange(e)}
            />
            <p>Profession</p>
          </label>

          <label htmlFor="telephone2">
            <input
              required
              type="number"
              name="telephone2"
              id="telephone2"
              value={initialData.telephone2}
              onChange={(e) => handleChange(e)}
            />
            <p>telephone portable</p>
          </label>

          <label htmlFor="email2">
            <input
              required
              type="email"
              name="email2"
              id="email2"
              value={initialData.email2}
              onChange={(e) => handleChange(e)}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="adresse2">
            <input
              required
              type="text"
              name="adresse2"
              id="adresse2"
              value={initialData.adresse2}
              onChange={(e) => handleChange(e)}
            />
            <p>Adresse</p>
          </label>
        </form>

        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={() => updateFormParent()}
          >
            Enregistrer
          </button>
        </div>
      </main>
    )
  );
}

export default Parents;
