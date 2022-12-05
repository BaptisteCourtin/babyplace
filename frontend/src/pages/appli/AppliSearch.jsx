import React from "react";
import filter from "@assets/app parents/Filter.svg";
import { Link } from "react-router-dom";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import NavbarApp from "@components/appli/navbar/NavbarApp";

import imgCreche from "@assets/img-time.svg";

const creche = [
  {
    image: imgCreche,
    prix: 3.5,
    jours: [
      { jour: "Lun.14", check: true },
      { jour: "Mar.15", check: false },
      { jour: "Mer.16", check: true },
      { jour: "Jeu.17", check: true },
      { jour: "Ven.18", check: true },
      { jour: "Sam.19", check: false },
    ],
    condition: {
      verif: true,
      essai: true,
    },
  },
  {
    image: imgCreche,
    prix: 0.75,
    jours: [
      { jour: "Lun.14", check: true },
      { jour: "Mar.15", check: true },
      { jour: "Mer.16", check: false },
      { jour: "Jeu.17", check: false },
      { jour: "Ven.18", check: false },
      { jour: "Sam.19", check: true },
    ],
    condition: {
      verif: true,
      essai: false,
    },
  },
  {
    image: imgCreche,
    prix: 15,
    jours: [
      { jour: "Lun.14", check: false },
      { jour: "Mar.15", check: false },
      { jour: "Mer.16", check: true },
      { jour: "Jeu.17", check: false },
      { jour: "Ven.18", check: true },
      { jour: "Sam.19", check: true },
    ],
    condition: {
      verif: false,
      essai: false,
    },
  },
];

function AppliSearch() {
  return (
    <div className="applisearch">
      <div className="content">
        <div className="lieu-date">Ville - date - heure</div>

        <div className="appli-filtres">
          <div className="left-filter">
            <div>
              <img src={filter} alt="filter" />
              <Link to="/appli/search/filtres">Filtres</Link>
            </div>
            <div>
              <img src={filter} alt="filter" />
              <Link to="/appli/search/filtres">Trier</Link>
            </div>
          </div>
          <button type="button">
            {/* version carte en composant => soit liste soit carte (mettre les 2 en composants) */}
            <p>Carte</p>
          </button>
        </div>

        <main>
          {creche.map((each) => (
            <Link to="/appli/search/card" state={{ each }}>
              <CarteCreche
                jours={each.jours}
                prix={each.prix}
                img={each.image}
                condition={each.condition}
              />
            </Link>
          ))}
        </main>
      </div>

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
