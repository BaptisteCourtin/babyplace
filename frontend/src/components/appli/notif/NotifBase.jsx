import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavbarApp from "@components/appli/navbar/NavbarApp";

import CardNotif from "@components/appli/notif/CardNotif";

function NotifBase({ setCompo, allReservation, setOneReservation }) {
  // const tabNotif = [
  //   {
  //     texte:
  //       "Donnez-nous votre avis sur XXX / une notif un peu longue genre voila c'est juste pour tester mais c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long c'est quand meme long",
  //     compo: 1,
  //   },
  // ];

  return (
    <div className="notif-base">
      <h3>Notifications</h3>
      <main>
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

        {allReservation.map((each) => (
          <CardNotif
            each={each}
            setCompo={setCompo}
            setOneReservation={setOneReservation}
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
