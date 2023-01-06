import React, { useState, useEffect } from "react";
import axios from "axios";

function Parents() {
  // --- les donnees qui sont dans la bdd ---
  const [DonneesForm, setDonneesForm] = useState();
  let familleId = 1;
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      .get(`http://localhost:5000/famille/formParent/${familleId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setDonneesForm(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getDonneesForm();
  }, []);

  // --- data visible --

  const INITIAL_DATA = {
    nom1: "",
    prenom1: "",
    profession1: "",
    tel1: "",
    mail1: "",
    adresse1: "",

    nom2: "",
    prenom2: "",
    profession2: "",
    tel2: "",
    mail2: "",
    adresse2: "",
  };

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // faire un get pour remplir le formulaire - mettre les données dans le initial-value
  // faire un put pour remplir la bdd quand on clique sur envoyer (rajouter envoyer *2)
  // les value en ternaire

  // --- les donnees à envoyer ---

  return (
    DonneesForm && (
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
              value={data.nom1}
              onChange={(e) => updateFields({ nom: e.target.value })}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom1">
            <input
              required
              type="text"
              name="prenom1"
              id="prenom1"
              value={data.prenom1}
              onChange={(e) => updateFields({ prenom1: e.target.value })}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="profession1">
            <input
              required
              type="text"
              name="profession1"
              id="profession1"
              value={data.profession1}
              onChange={(e) => updateFields({ profession1: e.target.value })}
            />
            <p>Profession</p>
          </label>

          <label htmlFor="tel1">
            <input
              required
              type="number"
              name="tel1"
              id="tel1"
              value={data.tel1}
              onChange={(e) => updateFields({ tel1: e.target.value })}
            />
            <p>telephone portable</p>
          </label>

          <label htmlFor="mail1">
            <input
              required
              type="email"
              name="mail1"
              id="mail1"
              value={data.mail1}
              onChange={(e) => updateFields({ mail1: e.target.value })}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="adresse1">
            <input
              required
              type="text"
              name="adresse1"
              id="adresse1"
              value={data.adresse1}
              onChange={(e) => updateFields({ adresse1: e.target.value })}
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
              value={data.nom2}
              onChange={(e) => updateFields({ nom2: e.target.value })}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom2">
            <input
              required
              type="text"
              name="prenom2"
              id="prenom2"
              value={data.prenom2}
              onChange={(e) => updateFields({ prenom2: e.target.value })}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="profession2">
            <input
              required
              type="text"
              name="profession2"
              id="profession2"
              value={data.profession2}
              onChange={(e) => updateFields({ profession2: e.target.value })}
            />
            <p>Profession</p>
          </label>

          <label htmlFor="tel2">
            <input
              required
              type="number"
              name="tel2"
              id="tel2"
              value={data.tel2}
              onChange={(e) => updateFields({ tel2: e.target.value })}
            />
            <p>telephone portable</p>
          </label>

          <label htmlFor="mail2">
            <input
              required
              type="email"
              name="mail2"
              id="mail2"
              value={data.mail2}
              onChange={(e) => updateFields({ mail2: e.target.value })}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="adresse2">
            <input
              required
              type="text"
              name="adresse2"
              id="adresse2"
              value={data.adresse2}
              onChange={(e) => updateFields({ adresse2: e.target.value })}
            />
            <p>Adresse</p>
          </label>
        </form>
      </main>
    )
  );
}

export default Parents;
