import React from "react";
import imgCreche from "@assets/img-time.svg";
import CardFavPlat from "@components/appli/menu/CardFavPlat";

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
      <button
        type="button"
        className="butt-top"
        onClick={() => setCompo(0)}
      >{`< Réservations`}</button>
      <main className="favoris">
        {tabResa.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
    </>
  );
}

export default Reservations;
