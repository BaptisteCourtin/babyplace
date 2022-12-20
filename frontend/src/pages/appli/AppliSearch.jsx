import React, { useState } from "react";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import BaseCard from "@components/appli/recherche/BaseCard";
import BaseMap from "@components/appli/recherche/BaseMap";

function AppliSearch() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <BaseMap setCompo={setCompo} />;
    }
    return <BaseCard setCompo={setCompo} />;
  };

  return (
    <div className="applisearch">
      {choixComposant()}

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
