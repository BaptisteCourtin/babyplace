import React, { useState } from "react";
import { Link } from "react-router-dom";
import Check from "@components/appli/filtres/Check";

function AppliHome() {
  const [adresse, setAdresse] = useState();
  const [occasionnel, setOccasionnel] = useState();
  const [debut, setDebut] = useState();
  const [fin, setFin] = useState();
  const [flexible, setFlexible] = useState();

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

        <Check
          setter={setFlexible}
          state={flexible}
          nom="flexible"
          p="Mes dates ou horaires sont flexibles"
        />
      </form>

      <button type="submit">
        <Link to="/appli/search">
          <p>Rechercher</p>
        </Link>
      </button>
    </div>
  );
}

export default AppliHome;
