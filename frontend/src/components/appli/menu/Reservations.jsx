import React from "react";
import imgCreche from "@assets/img-time.svg";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import PropTypes from "prop-types";

const tabResa = [
  {
    nom: "creche nb 1",
    image: imgCreche,
    texte:
      "lundi 9h-18h / mercredi 9h-17h / jeudi 10h-16h / lundi 9h-18h / mercredi 9h-17h / jeudi 10h-16h / lundi 9h-18h / mercredi 9h-17h / jeudi 10h-16h / lundi 9h-18h / mercredi 9h-17h / jeudi 10h-16h",
  },
  {
    nom: "creche nb 2",
    image: imgCreche,
    texte: "mardi 9h-17h / vendredi 10h-16h",
  },
  {
    nom: "creche nb 1",
    image: imgCreche,
    texte: "samedi 14h-18h",
  },
];

function Reservations({ setCompo }) {
  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Réservations`}
        </button>
      </div>
      <main className="reservation">
        {tabResa.map((each, index) => (
          <CardFavPlat each={each} key={index} />
        ))}
      </main>
    </>
  );
}

Reservations.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Reservations;
