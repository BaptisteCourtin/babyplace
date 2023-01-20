import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import avatar from "@assets/avatar1.svg";
import Completion from "@components/appli/user/Completion";
import FamilleContext from "@components/context/FamilleContext";

function AppliUser() {
  const [pourcentFormParent, setPourcentFormParent] = useState(0);
  const [pourcentFormEnfant, setPourcentFormEnfant] = useState(0);
  const [truePourcentEnfant, setTruePourcentEnfant] = useState(0);
  const [pourcentFormInscription, setPourcentFormInscription] = useState(0);
  const [truePourcentInscription, setTruePourcentInscription] = useState(0);

  const { familleId } = useContext(FamilleContext);
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getPourcentForm = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/pourcent/${familleId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPourcentFormParent(res.data[0][0].pourcentFormParent);
        setPourcentFormEnfant(res.data[1]);
        // setPourcentFormInscription(res.data[2]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getPourcentForm();
  }, []);

  // --- pour avoir le vrai pourcent des enfants ---

  const getTruePourcentEnfant = () => {
    let pourcent = 0;
    let nbTime = 0;
    for (const i in pourcentFormEnfant) {
      pourcent += pourcentFormEnfant[i].pourcentFormEnfant;
      nbTime += 1;
    }
    setTruePourcentEnfant(parseInt(pourcent / nbTime));
  };

  useEffect(() => {
    getTruePourcentEnfant();
  }, [pourcentFormEnfant]);

  // const getTruePourcentInscription = () => {
  //   let pourcent = 0;
  //   let nbTime = 0;
  //   for (const i in pourcentFormInscription) {
  //     pourcent += pourcentFormInscription[i].pourcentFormInscription;
  //     nbTime += 1;
  //   }
  //   setTruePourcentInscription(parseInt(pourcent / nbTime));
  // };

  // useEffect(() => {
  //   getTruePourcentInscription();
  // }, [pourcentFormInscription]);

  // ---

  const tabCompletion = [
    {
      nom: "Dossier Enfant",
      completion: truePourcentEnfant,
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
