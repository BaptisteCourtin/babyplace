import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";
import { toast } from "react-hot-toast";

function Parents() {
  const { familleId } = useContext(FamilleContext);

  // meme nom que bdd
  const [initialData, setInitialData] = useState({
    nom1: null,
    prenom1: null,
    profession1: null,
    telephone1: null,
    email1: null,
    adresse1: null,

    nom2: null,
    prenom2: null,
    profession2: null,
    telephone2: null,
    email2: null,
    adresse2: null,
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

  const getDonneesForm = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/formParent/${familleId}`)
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

  const calculPourcent = () => {
    let pourcent = 0;
    for (const prop in initialData) {
      if (initialData[prop] !== null) {
        pourcent += 1;
      }
    }
    return parseInt((pourcent * 100) / 12, 10);
    // !!! pour 2 parents !!!
  };

  const updateFormParent = (place) => {
    const { parentId } = donneesForm[place - 1];
    const pourcent = calculPourcent();
    axios
      .put(`${import.meta.env.VITE_PATH}/formParent/${parentId}`, {
        nom: initialData[`nom${place}`],
        prenom: initialData[`prenom${place}`],
        profession: initialData[`profession${place}`],
        telephone: initialData[`telephone${place}`],
        email: initialData[`email${place}`],
        adresse: initialData[`adresse${place}`],

        pourcent,
      })
      .then(() => {
        toast.success("C'est bon, c'est mis à jour 👌");
      });
  };

  return (
    finalOK === true && (
      <main className="parent">
        <h3>Dossier Parents</h3>
        <br />
        <p>N'oubliez pas d'enregistrer vos informations.</p>

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

        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={() => updateFormParent(1)}
          >
            Enregistrer
          </button>
        </div>

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
            onClick={() => updateFormParent(2)}
          >
            Enregistrer
          </button>
        </div>
      </main>
    )
  );
}

export default Parents;
