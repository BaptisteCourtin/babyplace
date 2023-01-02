import React, { useState } from "react";

const INITIAL_DATA = {
  nom: "",
  prenom: "",
  profession: "",
  tel: "",
  mail: "",
  adresse: "",

  nom2: "",
  prenom2: "",
  profession2: "",
  tel2: "",
  mail2: "",
  adresse2: "",
};

function Parents() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <main className="parent">
      <h3>Dossier Parents</h3>

      <div className="form-parent">
        <form>
          <h4>Parent 1</h4>
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

          <label htmlFor="profession">
            <input
              required
              type="text"
              name="profession"
              id="profession"
              value={data.profession}
              onChange={(e) => updateFields({ profession: e.target.value })}
            />
            <p>Profession</p>
          </label>

          <label htmlFor="tel">
            <input
              required
              type="number"
              name="tel"
              id="tel"
              value={data.tel}
              onChange={(e) => updateFields({ tel: e.target.value })}
            />
            <p>telephone portable</p>
          </label>

          <label htmlFor="mail">
            <input
              required
              type="email"
              name="mail"
              id="mail"
              value={data.mail}
              onChange={(e) => updateFields({ mail: e.target.value })}
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
      </div>
    </main>
  );
}

export default Parents;
