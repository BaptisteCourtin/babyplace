import React from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import ProfilPlat from "@components/appli/ProfilPlat";
import CardFavPlat from "@components/appli/menu/CardFavPlat";
import imgCreche from "@assets/img-time.svg";

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

function AppliMessage() {
  return (
    <div>
      <ProfilPlat />
      <main>
        {tabFav.map((each) => (
          <CardFavPlat each={each} />
        ))}
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliMessage;
