import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import filter from "@assets/app parents/Filter.svg";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import axios from "axios";

function AppliSearch() {
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
    <div className="applisearch">
      <div className="content">
        <div className="lieu-date">Ville - date - heure</div>

        <div className="appli-filtres">
          <div className="left-filter">
            <div>
              <Link to="/appli/search/filtres">
                <img src={filter} alt="filter" />
                Filtres
              </Link>
            </div>
            <div className="tri">
              <img src={filter} alt="filter" />
              <span>Tri :</span>
              <select id="tri" onChange={(event) => setTri(event.target.value)}>
                <option value="Recent">Recent</option>
                <option value="Ancien">Ancien</option>
                <option value="Prix croissant">Prix croissant</option>
                <option value="Prix decroissant">Prix décroissant</option>
              </select>
            </div>
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
      </div>

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
