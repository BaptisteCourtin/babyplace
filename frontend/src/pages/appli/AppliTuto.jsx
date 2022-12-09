import React, { useState } from "react";

import Connexion from "@components/appli/pagesTutoAppli/Connexion";
import SeConnecter from "@components/appli/pagesTutoAppli/SeConnecter";
import Bienvenue from "@components/appli/pagesTutoAppli/Bienvenue";
import Page0 from "@components/appli/pagesTutoAppli/Page0";
import Page1 from "@components/appli/pagesTutoAppli/Page1";

function Appli() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <Bienvenue setCompo={setCompo} />;
    }
    if (compo === 2) {
      return <Page0 setCompo={setCompo} />;
    }
    if (compo === 3) {
      return <Page1 setCompo={setCompo} />;
    }
    if (compo === 4) {
      return <SeConnecter setCompo={setCompo} />;
    }
    return <Connexion setCompo={setCompo} />;
  };

  return choixComposant();
}

export default Appli;
