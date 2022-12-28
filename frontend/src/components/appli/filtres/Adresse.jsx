import React from "react";

const adresse = ({ setCompo }) => {
  return (
    <>
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(0)}
        >{`< Adresse`}</button>
        <button type="button">RESET</button>
      </header>

      <main className="adresse">Adresse</main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </>
  );
};

export default adresse;
