import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavbarApp from "@components/appli/navbar/NavbarApp";

import CardNotif from "@components/appli/notif/CardNotif";

const tabNotif = [
  {
    texte:
      "Donnez-nous votre avis sur XXX / une notif un peu longue genre voila c'est juste pour tester mais c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long",
    compo: 1,
  },
  {
    texte: "Votre demande de réservation à XXX a été rejetée",
    compo: 2,
  },
  {
    texte: "Votre demande de réservation à XXX a été acceptée",
    compo: 3,
  },
  {
    texte: "juste un test pour payer",
    compo: 4,
  },
];

function NotifBase({ setCompo }) {
  return (
    <div className="notif-base">
      <h3>Notifications</h3>
      <main>
        {/* il faut map car on ne sait pas combien de notif */}
        {/* il faut map le texte de la notif => CardNotif et quand on clique dessus ça affiche la notif */}
        {/* => passer les data dans CardNotif puis dans les notifs */}
        {/* => ??? faire un choix composant avec des data qui changent ??? */}

        <a href="https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil.html">
          <div className="card-notif">
            <p>Pensez à faire la déclaration PAJEMPLOI</p>
            <span>{`>`}</span>
          </div>
        </a>

        <Link to="/appli/message">
          <div className="card-notif">
            <p>Vous avez un message de XXX</p>
            <span>{`>`}</span>
          </div>
        </Link>

        {tabNotif.map((each) => (
          <CardNotif
            setCompo={setCompo}
            compo={each.compo}
            texte={each.texte}
          />
        ))}
      </main>
      <NavbarApp />
    </div>
  );
}

NotifBase.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default NotifBase;
