import React from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import avatar from "@assets/avatar1.svg";
import Completion from "@components/appli/user/Completion";

const tabCompletion = [
  { nom: "Dossier Enfant", completion: 80, quelCompo: 0 },
  { nom: "Dossier Parent", completion: 50, quelCompo: 1 },
  { nom: "Dossier d'inscription", completion: 30, quelCompo: 2 },
];

function AppliUser() {
  return (
    <div className="appli-user">
      <main>
        <img src={avatar} alt="avatar" />
        <h3>Ed Cannan</h3>
        <p>
          Mettez toutes les chances de votre côté Un profil complet est
          nécessaire pour un accueil en crèche !
        </p>
        <div className="container-completion">
          {tabCompletion.map((each, index) => (
            <Completion
              key={index}
              nom={each.nom}
              completion={each.completion}
              quelCompo={each.quelCompo}
            />
          ))}
        </div>
      </main>
      <NavbarApp />
    </div>
  );
}

export default AppliUser;
