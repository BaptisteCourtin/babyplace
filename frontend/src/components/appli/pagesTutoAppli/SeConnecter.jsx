import React, { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_DATA = {
  email: "",
  mdp: "",
};

function SeConnecter() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <div className="applituto connexion">
      <main>
        <h3>Se connecter</h3>
        <form>
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
        <Link to="/appli/search">
          <button className="butt" type="button">
            Se connecter
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SeConnecter;
