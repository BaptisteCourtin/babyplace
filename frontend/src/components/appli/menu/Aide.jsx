import React from "react";
import unicorn from "@assets/app parents/unicorn.png";
import PropTypes from "prop-types";

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
        <br />
        <br />
        <img src={unicorn} alt="unicorn" />
      </main>
    </>
  );
}

Aide.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Aide;
