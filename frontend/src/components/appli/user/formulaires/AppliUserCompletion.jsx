import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@components/appli/navbar/NavbarApp";
import FormEnfant from "@components/appli/user/formulaires/FormEnfant";
import Parents from "@components/appli/user/formulaires/Parents";
import Inscription from "@components/appli/user/formulaires/Inscription";

function AppliUserCompletion() {
  const [compo, setCompo] = useState(0);

  const location = useLocation();
  const { quelCompo } = location.state;

  useEffect(() => {
    setCompo(quelCompo);
  }, [quelCompo]);

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
      <div className="container-header">
        <header>
          <button type="button" className="button-head">
            <Link to="/appli/user">{`< Retour`}</Link>
          </button>
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
      </div>

      <div className="container-main">{choixComposant()}</div>
      <Navbar />
    </div>
  );
}

export default AppliUserCompletion;
