import React, { useState } from "react";
import PropTypes from "prop-types";
import PopUpProfilComplet from "./PopUpProfilComplet";
import PopUpProfilNonComplet from "./PopUpProfilNonComplet";

function PopUp({ data, dataHorairesId }) {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const profilComplet = true;

  const choixComposant = () => {
    if (visiblePopUp && profilComplet) {
      return (
        <PopUpProfilComplet
          setVisiblePopUp={setVisiblePopUp}
          data={data}
          dataHorairesId={dataHorairesId}
        />
      );
    }
    if (visiblePopUp && !profilComplet) {
      return <PopUpProfilNonComplet setVisiblePopUp={setVisiblePopUp} />;
    }
    return null;
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

PopUp.propTypes = {
  data: PropTypes.string.isRequired,
  dataHorairesId: PropTypes.string.isRequired,
};

export default PopUp;
