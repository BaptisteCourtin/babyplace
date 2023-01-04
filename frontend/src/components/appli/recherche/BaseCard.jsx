import React, { useState, useEffect } from "react";
import axios from "axios";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import { Link } from "react-router-dom";
import { FiMap } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import PropTypes from "prop-types";

function BaseCard({ setCompo, Allstructure, setTri, tri }) {
  // --- position user ---
  const [ville, setVille] = useState();
  const [userPosition, setUserPosition] = useState([0, 0]);

  const getVraiPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserPosition([position.coords.latitude, position.coords.longitude]);
    });
  };
  useEffect(() => {
    getVraiPosition();
  }, []);

  const handleVille = (e) => {
    e.preventDefault();
    // api convertir adresse en position gps
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${ville}`)
      .then((res) => {
        setUserPosition(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="content">
        <div className="lieu-date">Ville - date - heure</div>

        <div className="appli-filtres">
          <div className="left-filter">
            <div className="search-filtres">
              <Link to="/appli/search/filtres">
                <span>{BiFilterAlt()}Filtres</span>
              </Link>
            </div>

            <div className="tri">
              <span>{BiFilterAlt()}Tri :</span>
              <select id="tri" onChange={(event) => setTri(event.target.value)}>
                <option value="Recent">Recent</option>
                <option value="Ancien">Ancien</option>
                <option value="Prix croissant">Prix croissant</option>
                <option value="Prix decroissant">Prix décroissant</option>
              </select>
            </div>

            <div className="vrai-localisation">
              <button
                onClick={() => {
                  getVraiPosition();
                }}
              >
                Votre position
              </button>
            </div>

            <form className="localisation">
              <label htmlFor="ville">
                <input
                  required
                  type="text"
                  name="ville"
                  id="ville"
                  placeholder="une position"
                  onChange={(event) => {
                    setVille(event.target.value);
                  }}
                />
              </label>
              <button
                className="butt-localisation"
                type="submit"
                onClick={(e) => {
                  handleVille(e);
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
          <button
            className="map-butt"
            type="button"
            onClick={() => setCompo(1)}
          >
            <FiMap />
          </button>
        </div>
      </div>

      <main>
        {Allstructure !== undefined &&
          Allstructure
            // .filter(
            //   (each) => each.includes
            //   // each.sorte d'établissement contient au moins un des critère => creche ou assistance
            // )
            .sort(function compare(a, b) {
              if (tri === "Prix croissant") {
                if (a.tarifHeure < b.tarifHeure) return -1;
                if (a.tarifHeure > b.tarifHeure) return 1;
                return 0;
              }
              if (tri === "Prix decroissant") {
                if (a.tarifHeure > b.tarifHeure) return -1;
                if (a.tarifHeure < b.tarifHeure) return 1;
                return 0;
              }
              if (tri === "Recent") {
                if (a.structureId > b.structureId) return -1;
                if (a.structureId < b.structureId) return 1;
                return 0;
              }
              if (tri === "Ancien") {
                if (a.structureId < b.structureId) return -1;
                if (a.structureId > b.structureId) return 1;
                return 0;
              }
              return 0;
              // sort par distance ???
            })
            // faire avec params depuis CarteCreche et une route en :id
            .map((each, index) => (
              <CarteCreche
                data={each}
                key={index}
                userPosition={userPosition}
              />
            ))}
      </main>
    </>
  );
}

BaseCard.propTypes = {
  setCompo: PropTypes.func.isRequired,
  Allstructure: PropTypes.array.isRequired,
};

export default BaseCard;
