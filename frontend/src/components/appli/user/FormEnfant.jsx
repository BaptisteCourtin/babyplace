import React, { useState } from "react";

const INITIAL_DATA = {
  nom: "",
  prenom: "",
  naissance: "",
  allergies: "",
  medecin: "",
  marcheur: "",
};

const FormEnfant = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <main className="enfant">
      <h3>Dossier Parent</h3>

      <div>
        <div className="bebe">
          <button type="button">Bébé 1</button>
          <button type="button">Bébé 2</button>
        </div>
        <form>
          <div>
            <input
              required
              type="text"
              name="nom"
              id="nom"
              placeholder="Nom"
              value={data.nom}
              onChange={(e) => updateFields({ nom: e.target.value })}
            />
            <label htmlFor="nom" />
            <p className="checkSymbol">&#x2713;</p>
          </div>

          <div>
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Prenom"
              value={data.prenom}
              onChange={(e) => updateFields({ prenom: e.target.value })}
            />
            <label htmlFor="nom" />
            <p className="checkSymbol">&#x2713;</p>
          </div>

          <div>
            <input
              required
              type="date"
              name="naissance"
              id="naissance"
              placeholder="Date de naissance"
              value={data.naissance}
              onChange={(e) => updateFields({ naissance: e.target.value })}
            />
            <label htmlFor="naissance" />
            <p className="checkSymbol">&#x2713;</p>
          </div>

          <div>
            <input
              required
              type="text"
              name="marcheur"
              id="marcheur"
              placeholder="Marcheur / Non marcheur"
              value={data.marcheur}
              onChange={(e) => updateFields({ marcheur: e.target.value })}
            />
            <label htmlFor="marcheur" />
            <p className="checkSymbol">&#x2713;</p>
          </div>

          <div>
            <input
              required
              type="text"
              name="allergies"
              id="allergies"
              placeholder="Allergies"
              value={data.allergies}
              onChange={(e) => updateFields({ allergies: e.target.value })}
            />
            <label htmlFor="allergies" />
            <p className="checkSymbol">&#x2713;</p>
          </div>

          <div>
            <input
              required
              type="text"
              name="medecin"
              id="medecin"
              placeholder="Médecin traitant"
              value={data.medecin}
              onChange={(e) => updateFields({ medecin: e.target.value })}
            />
            <label htmlFor="medecin" />
            <p className="checkSymbol">&#x2713;</p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FormEnfant;
