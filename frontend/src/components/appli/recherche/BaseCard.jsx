import React, { useState, useEffect } from "react";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import { Link } from "react-router-dom";
import { FiMap } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";

import axios from "axios";

function BaseCard({ setCompo }) {
  const [tri, setTri] = useState("Recent");
  const [structure, setStructure] = useState([]);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getStructure = () => {
    axios
      .get("http://localhost:5000/structure/allapp", {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setStructure(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getStructure();
  }, []);
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
          </div>
          <button className="map" type="button" onClick={() => setCompo(1)}>
            <FiMap />
          </button>
        </div>
      </div>

      <main>
        {structure.length !== 0 &&
          structure
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
            })
            // faire avec params depuis CarteCreche et une route en :id
            .map((each) => <CarteCreche data={each} />)}
      </main>
    </>
  );
}

export default BaseCard;
