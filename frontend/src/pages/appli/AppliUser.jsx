import React from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import avatar from "@assets/avatar1.svg";
import Completion from "@components/appli/user/Completion";

const tabCompletion = [
  { nom: "Dossier Enfant", completion: 80 },
  { nom: "Dossier Parent", completion: 50 },
  { nom: "Dossier d'inscription", completion: 30 },
];

function AppliUser() {
  return (
    <div className="appli-user">
      <main>
        <img src={avatar} alt="" />
        <h3>Ed Cannan</h3>
        <p>
          Mettez toutes les chances de votre côté Un profil complet est
          nécessaire pour un accueil en crèche !
        </p>
        <div className="container-completion">
          {tabCompletion.map((each) => (
            <Completion nom={each.nom} completion={each.completion} />
          ))}
        </div>
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliUser;
