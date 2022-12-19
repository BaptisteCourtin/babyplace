import React from "react";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import imgCreche from "@assets/img-time.svg";
import PropTypes from "prop-types";

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
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Personnes De Confiance`}
        </button>
      </div>
      <main className="perso-confiance">
        {tabFav.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
    </>
  );
}

PersonnesConfiance.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default PersonnesConfiance;
