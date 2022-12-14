import React, { useState, useEffect } from "react";
import filter from "@assets/app parents/Filter.svg";
import { Link } from "react-router-dom";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import axios from "axios";

function AppliSearch() {
  const [tri, setTri] = useState("Recent");
  const [data, setData] = useState([]);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getData = () => {
    axios
      .get("http://localhost:5000/structure/all", {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
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
          {data.length !== 0 &&
            data
              .sort(function compare(a, b) {
                if (tri === "Prix croissant") {
                  if (a.Tarif_heure < b.Tarif_heure) return -1;
                  if (a.Tarif_heure > b.Tarif_heure) return 1;
                  return 0;
                }
                if (tri === "Prix decroissant") {
                  if (a.Tarif_heure > b.Tarif_heure) return -1;
                  if (a.Tarif_heure < b.Tarif_heure) return 1;
                  return 0;
                }
                return 0;
              })
              .map((each) => <CarteCreche data={each} />)}
        </main>
      </div>

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
