import React from "react";
import PropTypes from "prop-types";

import NavbarApp from "@components/appli/navbar/NavbarApp";
import CardNotif from "@components/appli/notif/CardNotif";

// voir page AppliNotif
function NotifBase({ setCompo, allReservation, setOneReservation }) {
  return (
    <div className="notif-base">
      <h3>Notifications</h3>
      <main>
        <a
          href="https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil.html"
          target="_blank"
        >
          <div className="card-notif">
            <p>Pensez à faire la déclaration PAJEMPLOI</p>
            <span>{`>`}</span>
          </div>
        </a>

        {allReservation.map((each, index) => (
          <CardNotif
            key={index}
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
  allReservation: PropTypes.array,
  setOneReservation: PropTypes.func.isRequired,
};

export default NotifBase;
