import React, { useState } from "react";
import PropTypes from "prop-types";

const INITIAL_DATA = {
  nom: "",
  prenom: "",
  prenomEnfant: "",
  email: "",
  adresse: "",
  telephone: "",
  mdp: "",
};

function Connexion({ setCompo }) {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <div className="applituto connexion">
      <main>
        <button
          type="button"
          className="se-connecter"
          onClick={() => setCompo(4)}
        >
          Se connecter
        </button>
        <h3>Création de compte</h3>

        <form>
          <label htmlFor="nom">
            <input
              required
              type="text"
              name="nom"
              id="nom"
              placeholder="Nom"
              value={data.nom}
              onChange={(e) => updateFields({ nom: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="prenom">
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Prenom"
              value={data.prenom}
              onChange={(e) => updateFields({ prenom: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="prenomEnfant">
            <input
              required
              type="text"
              name="prenomEnfant"
              id="prenomEnfant"
              placeholder="Prenom de l'enfant"
              value={data.prenomEnfant}
              onChange={(e) => updateFields({ prenomEnfant: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="email">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => updateFields({ email: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="adresse">
            <input
              required
              type="text"
              name="adresse"
              id="adresse"
              placeholder="Adresse"
              value={data.adresse}
              onChange={(e) => updateFields({ adresse: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="telephone">
            <input
              required
              type="text"
              name="telephone"
              id="telephone"
              placeholder="Telephone mobile"
              value={data.telephone}
              onChange={(e) => updateFields({ telephone: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="mdp">
            <input
              required
              type="text"
              name="mdp"
              id="mdp"
              placeholder="Mot de passe"
              value={data.mdp}
              onChange={(e) => updateFields({ mdp: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>
        </form>
      </main>
      <div className="button-bas">
        <button type="button" className="butt" onClick={() => setCompo(1)}>
          Créer un compte
        </button>
      </div>
    </div>
  );
}

Connexion.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Connexion;
