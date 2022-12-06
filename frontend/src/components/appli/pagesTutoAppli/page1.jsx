import React from "react";

import mom2 from "@assets/app parents/mom2.png";
import logoBlanc from "@assets/logo-blanc.svg";

const page0 = () => {
  return (
    <main className="page1">
      <img src={mom2} alt="mom-baby-2" />
      <img src={logoBlanc} alt="logo-blanc" />

      <p className="sub-title">Garde d’enfant à la demande </p>

      <p className="trouve">
        Réservez une place en moins de 60 secondes et obtenez une solution de
        garde, même pour le lendemain !
      </p>
    </main>
  );
};

export default page0;
