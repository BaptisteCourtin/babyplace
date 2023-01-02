import React, { useState } from "react";

const INITIAL_DATA = {
  nom: "",
  prenom: "",
  naissance: "",
  allergies: "",
  medecin: "",
  marcheur: "",
};

function FormEnfant() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <main className="enfant">
      <h3>Dossier Enfants</h3>

      <div className="bebe">
        {/* caroussel ? */}
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

        <label htmlFor="naissance">
          <input
            required
            type="date"
            name="naissance"
            id="naissance"
            value={data.naissance}
            onChange={(e) => updateFields({ naissance: e.target.value })}
          />
          <p>Date de naissance</p>
        </label>

        <label htmlFor="marcheur">
          <input
            required
            type="text"
            name="marcheur"
            id="marcheur"
            value={data.marcheur}
            onChange={(e) => updateFields({ marcheur: e.target.value })}
          />
          <p>Marcheur / Non marcheur</p>
        </label>

        <label htmlFor="allergies">
          <input
            required
            type="text"
            name="allergies"
            id="allergies"
            value={data.allergies}
            onChange={(e) => updateFields({ allergies: e.target.value })}
          />
          <p>Allergies</p>
        </label>

        <label htmlFor="medecin">
          <input
            required
            type="text"
            name="medecin"
            id="medecin"
            value={data.medecin}
            onChange={(e) => updateFields({ medecin: e.target.value })}
          />
          <p>Médecin traitant</p>
        </label>
      </form>
    </main>
  );
}

export default FormEnfant;
