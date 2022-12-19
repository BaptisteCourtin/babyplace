import React from "react";
import imgCreche from "@assets/img-time.svg";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import PropTypes from "prop-types";

const tabResa = [
  {
    nom: "creche nb 1",
    note: 4.8,
    image: imgCreche,
    texte: "description 1 c'est un peu long afin d'overflow",
  },
  {
    nom: "creche nb 2",
    note: 2,
    image: imgCreche,
    texte: "description 2",
  },
  {
    nom: "creche nb 3",
    note: 3.5,
    image: imgCreche,
    texte: "",
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
      <main className="favoris">
        {tabResa.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
    </>
  );
}

Reservations.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Reservations;
