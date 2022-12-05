import React from "react";

import mom1 from "@assets/mom-baby-1.svg";
import logoBlanc from "@assets/logo-blanc.svg";

const page0 = () => {
  return (
    <main className="page0">
      <img src={mom1} alt="mom-baby-1" />
      <img src={logoBlanc} alt="logo-blanc" />

      <p className="sub-title">Garde d’enfant à la demande </p>

      <p className="trouve">
        Trouver un.e professionel.le de la garde d’enfant
      </p>
    </main>
  );
};

export default page0;
