import React, { useState } from "react";
import imgCreche from "@assets/img-time.svg";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import PropTypes from "prop-types";
import Toggle from "../filtres/Toggle";

const tabFav = [
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

function Favoris({ setCompo }) {
  const [occasions, setOccasions] = useState();
  return (
    <>
      <button
        type="button"
        className="butt-top"
        onClick={() => setCompo(0)}
      >{`< Favoris`}</button>
      <main className="favoris">
        <div className="occas">
          <h4>Ne manquez plus les occasions</h4>
          <Toggle
            setter={setOccasions}
            state={occasions}
            nom="occasions"
            p="Je souhaite obtenir des notifications en cas de disponibilités des structures favorites"
          />
        </div>
        {tabFav.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
    </>
  );
}

Favoris.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Favoris;
