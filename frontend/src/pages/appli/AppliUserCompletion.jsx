import React, { useState } from "react";
import Navbar from "@components/appli/navbar/NavbarApp";
import FormEnfant from "@components/appli/user/FormEnfant";
import Parents from "@components/appli/user/Parents";
import Inscription from "@components/appli/user/Inscription";

function AppliUserCompletion() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 0) {
      return <FormEnfant />;
    }
    if (compo === 1) {
      return <Parents />;
    }
    if (compo === 2) {
      return <Inscription />;
    }
    return <FormEnfant />;
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
}

export default AppliUserCompletion;
