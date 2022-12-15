import React, { useState } from "react";
import PopUpProfilComplet from "./PopUpProfilComplet";
import PopUpProfilNonComplet from "./PopUpProfilNonComplet";

function PopUp() {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const profilComplet = true;

  const choixComposant = () => {
    if (visiblePopUp && profilComplet) {
      return <PopUpProfilComplet setVisiblePopUp={setVisiblePopUp} />;
    }
    if (visiblePopUp && !profilComplet) {
      return <PopUpProfilNonComplet setVisiblePopUp={setVisiblePopUp} />;
    }
  };

  return (
    <div className={visiblePopUp ? "pop-up-creche visible" : "pop-up-creche"}>
      <button
        type="button"
        className="butt-reserver"
        onClick={() => setVisiblePopUp(true)}
      >
        Réserver
      </button>

      {choixComposant()}
    </div>
  );
}

export default PopUp;
