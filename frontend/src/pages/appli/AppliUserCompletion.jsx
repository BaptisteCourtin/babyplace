import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/appli/navbar/NavbarApp";
import Enfants from "@components/appli/user/enfants";
import Parents from "@components/appli/user/parents";
import Inscription from "@components/appli/user/inscription";

const AppliUserCompletion = () => {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 0) {
      return <Enfants setCompo={setCompo} />;
    }
    if (compo === 1) {
      return <Parents setCompo={setCompo} />;
    }
    if (compo === 2) {
      return <Inscription setCompo={setCompo} />;
    }
    return <Enfants setCompo={setCompo} />;
  };

  return (
    <div className="AppliUserCompletion">
      <header>
        <h3>{`< Ed Cannan`}</h3>
        <div className="container-butt">
          <button type="button" onClick={() => setCompo(0)}>
            Enfants
          </button>
          <button type="button" onClick={() => setCompo(1)}>
            Parents
          </button>
          <button type="button" onClick={() => setCompo(2)}>
            Inscriptions
          </button>
        </div>
      </header>

      {choixComposant()}

      <Navbar />
    </div>
  );
};

export default AppliUserCompletion;
