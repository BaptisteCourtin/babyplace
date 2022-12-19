import React from "react";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import imgCreche from "@assets/img-time.svg";

const tabFav = [
  {
    nom: "personne nb 1",
    image: imgCreche,
    texte: "messages envoyés à personne 1 et c'est trooooooooop looooong",
  },
  {
    nom: "personne nb 2",
    image: imgCreche,
    texte: "messages envoyés à personne 2",
  },
  {
    nom: "personne nb 3",
    image: imgCreche,
    texte: "mess",
  },
];

function PersonnesConfiance({ setCompo }) {
  return (
    <>
      <button
        type="button"
        className="butt-top"
        onClick={() => setCompo(0)}
      >{`< Personnes De Confiance`}</button>
      <main className="perso-confiance">
        {tabFav.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
    </>
  );
}

export default PersonnesConfiance;
