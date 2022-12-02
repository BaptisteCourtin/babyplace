import React, { useState } from "react";
import { Link } from "react-router-dom";

function AppliHome() {
  const [adresse, setAdresse] = useState();
  const [occasionnel, setOccasionnel] = useState();
  const [debut, setDebut] = useState();
  const [fin, setFin] = useState();

  return (
    <div className="applihome">
      <h2>Garde d’enfant à la demande</h2>

      <form id="formRecherche">
        <input
          type="text"
          id="adresse"
          placeholder="Adresse"
          value={adresse}
          onChange={(event) => setAdresse(event.target.value)}
        />

        <select
          id="occasionnel"
          onChange={(event) => setOccasionnel(event.target.value)}
        >
          <option value="occasionnel">Occasionnel</option>
          <option value="recurrent">Récurrent</option>
        </select>

        <select id="debut" onChange={(event) => setDebut(event.target.value)}>
          <option value="">a</option>
        </select>

        <select id="fin" onChange={(event) => setFin(event.target.value)}>
          <option value="">b</option>
        </select>

        <div className="check">
          <input type="checkbox" />
          <label htmlFor="">Mes dates ou horaires sont flexibles</label>
        </div>

        <button type="submit">
          <Link classname="link" to="/appli/search">
            Rechercher
          </Link>
        </button>
      </form>
    </div>
  );
}

export default AppliHome;
