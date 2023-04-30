import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PersonnesConfiance({ setCompo, familleId }) {
  // --- get personnes confiance ---
  const [newSuppPersoConf, setNewSuppPersoConf] = useState(true);
  const [persoConf, setPersoConf] = useState([]);

  const getPersoConf = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/conf/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setPersoConf(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getPersoConf(source);
    return () => {
      source.cancel();
    };
  }, [newSuppPersoConf]);

  // --- ajout personne de confiance ---
  const [newForm, setNewForm] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const ajoutConfiance = () => {
    if (nom && prenom) {
      axios
        .post(`${import.meta.env.VITE_PATH}/famille/newConfiance`, {
          familleId,
          prenom,
          nom,
          tel,
          email,
        })
        .then(() => {
          setNewSuppPersoConf(!newSuppPersoConf);
        });
      setNewForm(false);
    }
  };

  // --- supprimer personne de confiance ---
  const deleteConfiance = (confianceId) => {
    axios
      .delete(
        `${import.meta.env.VITE_PATH}/famille/deleteConfiance/${confianceId}`
      )
      .then(() => {
        setNewSuppPersoConf(!newSuppPersoConf);
      });
  };

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
          {newForm ? (
            <div className="form-ajout-confiance">
              <button
                className="ferm"
                type="button"
                onClick={() => setNewForm(false)}
              >
                Annuler
              </button>

              <h3>
                Remplir ces informations pour ajouter une personne de confiance
              </h3>

              <form>
                <label htmlFor="nom">
                  <input
                    required
                    type="text"
                    name="nom"
                    id="nom"
                    onChange={(event) => {
                      setNom(event.target.value);
                    }}
                  />
                  <p>Nom</p>
                </label>
                <label htmlFor="prenom">
                  <input
                    required
                    type="text"
                    name="prenom"
                    id="prenom"
                    onChange={(event) => {
                      setPrenom(event.target.value);
                    }}
                  />
                  <p>Prénom</p>
                </label>
                <label htmlFor="email">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <p>E mail</p>
                </label>
                <label htmlFor="tel">
                  <input
                    required
                    type="text"
                    name="tel"
                    id="tel"
                    onChange={(event) => {
                      setTel(event.target.value);
                    }}
                  />
                  <p>Téléphone</p>
                </label>
              </form>

              <div className="button-bas">
                <button
                  className="butt grad"
                  type="submit"
                  onClick={(e) => {
                    ajoutConfiance(e);
                  }}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          ) : (
            <button
              className="create-conf"
              type="button"
              onClick={() => setNewForm(true)}
            >
              Ajouter une personne de confiance
            </button>
          )}

          {persoConf.map((each, confianceId) => (
            <div key={confianceId} className="card-confiance">
              <div className="info">
                <h3>
                  {each.prenom} {each.nom}
                </h3>
                <p>{each.email}</p>
                <p>{each.tel}</p>
              </div>
              <button
                type="button"
                className="delete-conf"
                onClick={() => deleteConfiance(each.confianceId)}
              >
                Supp
              </button>
            </div>
          ))}
        </main>
      </>
    )
  );
}

PersonnesConfiance.propTypes = {
  setCompo: PropTypes.func.isRequired,
  familleId: PropTypes.string.isRequired,
};

export default PersonnesConfiance;
