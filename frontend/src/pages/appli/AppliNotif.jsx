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
      <h3>Notifications</h3>
      <main>
        {tabNotif.map((each) => (
          <CardNotif texte={each.texte} />
        ))}
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliNotif;
