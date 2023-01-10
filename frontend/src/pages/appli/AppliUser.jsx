import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import avatar from "@assets/avatar1.svg";
import Completion from "@components/appli/user/Completion";

function AppliUser() {
  const [pourcentFormParent, setPourcentFormParent] = useState(0);
  const [pourcentFormEnfant, setPourcentFormEnfant] = useState(0);
  const [pourcentFormInscription, setPourcentFormInscription] = useState(10);

  const familleId = 1;
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getPourcentForm = () => {
    axios
      .get(`http://localhost:5000/famille/pourcent/${familleId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setPourcentFormParent(res.data.pourcentFormParent);
        setPourcentFormEnfant(res.data.pourcentFormEnfant);
        setPourcentFormInscription(res.data.pourcentFormInscription);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getPourcentForm();
  }, []);

  const tabCompletion = [
    {
      nom: "Dossier Enfant",
      completion: pourcentFormEnfant,
      quelCompo: 0,
    },
    {
      nom: "Dossier Parent",
      completion: pourcentFormParent,
      quelCompo: 1,
    },
    {
      nom: "Dossier d'inscription",
      completion: pourcentFormInscription,
      quelCompo: 2,
    },
  ];

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
