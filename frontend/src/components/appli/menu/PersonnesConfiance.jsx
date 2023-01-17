import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import FamilleContext from "@components/context/FamilleContext";

function PersonnesConfiance({ setCompo }) {
  const [persoConf, setPersoConf] = useState([]);
  const { familleId } = useContext(FamilleContext);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getPersoConf = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/conf/${familleId}`, {
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
