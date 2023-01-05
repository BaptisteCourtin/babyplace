import React from "react";

const adresse = ({ setCompo }) => {
  return (
    <div className="filtres">
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(3)}
        >{`< Adresse`}</button>
      </header>

      <main className="adresse">Adresse</main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </div>
  );
};

export default adresse;
