import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PersonnesConfiance({ setCompo }) {
  const [persoConf, setPersoConf] = useState([]);
  const id = 1;

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getPersoConf = () => {
    axios
      .get(`http://localhost:5000/famille/conf/${id}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setPersoConf(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getPersoConf();
  }, []);

  return (
    persoConf !== undefined && (
      <>
        <div className="button-top">
          <button
            className="butt big"
            type="button"
            onClick={() => setCompo(0)}
          >
            {`< Personnes De Confiance`}
          </button>
        </div>

        <main className="perso-confiance">
          {persoConf.map((each, index) => (
            <div key={index} className="card-confiance">
              <h3>
                {each.prenom} {each.nom}
              </h3>
              <p>{each.email}</p>
              <p>{each.tel}</p>
            </div>
          ))}
        </main>

        {/* button ajout / modifier */}
      </>
    )
  );
}

PersonnesConfiance.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default PersonnesConfiance;
