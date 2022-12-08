import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Bienvenue({ setCompo }) {
  return (
    <main className="bienvenue">
      bienvenue
      <div className="button">
        <Link to="/appli/search">
          <button className="butt" type="button">
            Passer
          </button>
        </Link>
        <div className="suivant">
          <button className="butt" type="button" onClick={() => setCompo(2)}>
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </div>
      </div>
    </main>
  );
}

Bienvenue.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Bienvenue;
