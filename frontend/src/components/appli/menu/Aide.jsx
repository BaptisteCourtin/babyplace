import React from "react";

function Aide({ setCompo }) {
  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Aide`}
        </button>
      </div>

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
