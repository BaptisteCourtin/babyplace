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
  mdp2: "",
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
              value={data.nom}
              onChange={(e) => updateFields({ nom: e.target.value })}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom">
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              value={data.prenom}
              onChange={(e) => updateFields({ prenom: e.target.value })}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="email">
            <input
              required
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => updateFields({ email: e.target.value })}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="adresse">
            <input
              required
              type="text"
              name="adresse"
              id="adresse"
              value={data.adresse}
              onChange={(e) => updateFields({ adresse: e.target.value })}
            />
            <p>Adresse</p>
          </label>

          <label htmlFor="telephone">
            <input
              required
              type="text"
              name="telephone"
              id="telephone"
              value={data.telephone}
              onChange={(e) => updateFields({ telephone: e.target.value })}
            />
            <p>Telephone mobile</p>
          </label>

          <label htmlFor="mdp">
            <input
              required
              type="text"
              name="mdp"
              id="mdp"
              value={data.mdp}
              onChange={(e) => updateFields({ mdp: e.target.value })}
            />
            <p>Mot de passe</p>
          </label>

          <label htmlFor="mdp2">
            <input
              required
              type="text"
              name="mdp2"
              id="mdp2"
              value={data.mdp2}
              onChange={(e) => updateFields({ mdp2: e.target.value })}
            />
            <p>Réecrire Mot de passe</p>
          </label>
        </form>
      </main>
      <div className="button-bas">
        <button type="button" className="butt grad" onClick={() => setCompo(1)}>
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
