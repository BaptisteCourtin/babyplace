import React from "react";

function Aide({ setCompo }) {
  return (
    <>
      <button
        type="button"
        className="butt-top"
        onClick={() => setCompo(0)}
      >{`< Aide`}</button>
      <main className="aide">
        Désolé, nous ne pouvons rien pour vous...
        <br />
        <br />
        Bonne chance
      </main>
    </>
  );
}

export default Aide;
