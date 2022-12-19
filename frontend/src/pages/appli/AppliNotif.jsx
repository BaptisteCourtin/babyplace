import React from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import CardNotif from "@components/appli/notif/CardNotif";

const tabNotif = [
  {
    texte:
      "une notif un peu longue genre voila c'est juste pour tester mais c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long",
  },
  {
    texte: "une autre notif un peu longue",
  },
  {
    texte: "une notif",
  },
];

function AppliNotif() {
  return (
    <div className="appli-notif">
      <button type="button" className="butt-top">
        Notifications
      </button>
      {tabNotif.map((each) => (
        <CardNotif texte={each.texte} />
      ))}
      <NavbarApp />
    </div>
  );
}

export default AppliNotif;
