import React, { useState, useEffect } from "react";
import axios from "axios";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import { FiMap } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import PropTypes from "prop-types";

function BaseCard({
  setCompo,
  Allstructure,
  familleLiked,
  familleId,
  setChangeLike,
  changeLike,
  // filtres
  dataBasique,
  dataDateHeure,
  dataServices,
  dataAggrements,
}) {
  const [tri, setTri] = useState("Recent");

  // --- position user ---
  const [ville, setVille] = useState();
  const [userPosition, setUserPosition] = useState([47.2135655, -1.5496263]);

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
            <button className="search-filtres" onClick={() => setCompo(3)}>
              <span>{BiFilterAlt()}Filtres</span>
            </button>

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
            onClick={() => setCompo(2)}
          >
            <FiMap />
          </button>
        </div>
      </div>

      {/* filtrer selon heure - date */}
      <main>
        {Allstructure !== undefined &&
          familleLiked !== undefined &&
          Allstructure
            // each = les données d'une creche
            // dataXXX = les données des filtres

            // creche, assmat ou les 2
            .filter(
              (each) =>
                dataBasique.isCreche === each.isCreche ||
                dataBasique.isCreche === 2
            )

            //   const [dataDateHeure, setDataDateHeure] = useState({
            //   heureMin: "00:00",
            //   heureMax: "23:59",
            //   jour: "",
            // });
            // .filter((each) => dataDateHeure.heureMin === each.heureMin)

            // false = tout le monde = pas de filtre
            // true = filtrer pour avoir seulement ceux qui l'ont
            .filter(
              (each) =>
                (dataServices.pcsc1 === false ||
                  dataServices.pcsc1 == each.pcsc1) &&
                (dataServices.handi === false ||
                  dataServices.handi == each.handi) &&
                (dataServices.bilingue === false ||
                  dataServices.bilingue == each.bilingue) &&
                (dataServices.jardin === false ||
                  dataServices.jardin == each.jardin) &&
                // si ass mat
                (each.isCreche === 0
                  ? (dataServices.animaux === false ||
                      dataServices.animaux == each.animaux) &&
                    (dataServices.nonFumeur === false ||
                      dataServices.nonFumeur == each.nonFumeur) &&
                    (dataServices.zeroPollution === false ||
                      dataServices.zeroPollution == each.zeroPollution) &&
                    (dataServices.hygiene === false ||
                      dataServices.hygiene == each.hygiene) &&
                    (dataServices.repas === false ||
                      dataServices.repas == each.repas)
                  : true)
            )
            .filter(
              (each) =>
                (dataAggrements.handi === false || each.maxHandi > 0) &&
                (dataAggrements.mois === false || each.max18Mois > 0) &&
                (dataAggrements.nuit === false || each.maxNuit > 0)
            )

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
            .map(
              (each, index) =>
                familleLiked !== undefined && (
                  <CarteCreche
                    data={each}
                    key={index}
                    userPosition={userPosition}
                    familleLiked={familleLiked}
                    familleId={familleId}
                    setChangeLike={setChangeLike}
                    changeLike={changeLike}
                  />
                )
            )}
      </main>
      <NavbarApp />
    </>
  );
}

BaseCard.propTypes = {
  setCompo: PropTypes.func.isRequired,
  Allstructure: PropTypes.array.isRequired,
  familleLiked: PropTypes.array.isRequired,
  familleId: PropTypes.string.isRequired,
  setChangeLike: PropTypes.func.isRequired,
  changeLike: PropTypes.bool.isRequired,

  dataBasique: PropTypes.object.isRequired,
  dataDateHeure: PropTypes.object.isRequired,
  dataServices: PropTypes.object.isRequired,
  dataAggrements: PropTypes.object.isRequired,
};

export default BaseCard;
