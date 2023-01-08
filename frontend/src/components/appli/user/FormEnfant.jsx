import React, { useState, useEffect } from "react";
import axios from "axios";

function FormEnfant() {
  // meme nom que bdd
  const [initialData, setInitialData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    marcheur: "",
    allergies: "",
    medecin: "",
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

  let enfantId = 1;
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      .get(`http://localhost:5000/famille/formEnfant/${enfantId}`, {
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
    // ne marche pas pour dateNaissance
    if (donneesForm[ligne] !== null) {
      setInitialData((prevState) => ({
        ...prevState,
        [ligne]: donneesForm[ligne],
      }));
    }
  };

  const remplirInitial = () => {
    handleChangeInitial("nom");
    handleChangeInitial("prenom");
    console.log(donneesForm.dateNaissance);
    handleChangeInitial("dateNaissance");
    handleChangeInitial("marcheur");
    handleChangeInitial("allergies");
    handleChangeInitial("medecin");

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
    return (pourcent * 100) / 6;
  };

  const updateFormEnfant = () => {
    let pourcent = calculPourcent();
    axios.put(`http://localhost:5000/formEnfant/${enfantId}`, {
      initialData,
      pourcent,
    });
  };

  // faire un bouton pour rajouter un enfant (+ caroussel de composant formulaire)
  // quand on clique sur le button pour ajouter un enfant => post avec rien dedans => on peut update trkl apres
  // button pour delete l'enfant
  // changer marcheur en toggle
  // faire pour que la date marche

  return (
    finalOK === true && (
      <main className="enfant">
        <h3>Dossier Enfants</h3>

        <div className="bebe">
          {/* caroussel + map ? */}
          <button type="button">Bébé 1</button>
          <button type="button">Bébé 2</button>
        </div>
        <form>
          <label htmlFor="nom">
            <input
              required
              type="text"
              name="nom"
              id="nom"
              value={initialData.nom}
              onChange={(e) => handleChange(e)}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom">
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              value={initialData.prenom}
              onChange={(e) => handleChange(e)}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="naissance">
            <input
              required
              type="date"
              name="naissance"
              id="naissance"
              value={initialData.naissance}
              onChange={(e) => handleChange(e)}
            />
            <p>Date de naissance</p>
          </label>

          <label htmlFor="marcheur">
            <input
              required
              type="text"
              name="marcheur"
              id="marcheur"
              value={initialData.marcheur}
              onChange={(e) => handleChange(e)}
            />
            <p>Marcheur / Non marcheur</p>
          </label>

          <label htmlFor="allergies">
            <input
              required
              type="text"
              name="allergies"
              id="allergies"
              value={initialData.allergies}
              onChange={(e) => handleChange(e)}
            />
            <p>Allergies</p>
          </label>

          <label htmlFor="medecin">
            <input
              required
              type="text"
              name="medecin"
              id="medecin"
              value={initialData.medecin}
              onChange={(e) => handleChange(e)}
            />
            <p>Médecin traitant</p>
          </label>
        </form>
        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={() => updateFormEnfant()}
          >
            Envoyer
          </button>
        </div>
      </main>
    )
  );
}

export default FormEnfant;
