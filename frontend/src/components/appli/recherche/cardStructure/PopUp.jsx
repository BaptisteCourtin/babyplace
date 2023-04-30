import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import FamilleContext from "@components/context/FamilleContext";
import PopUpProfilComplet from "./PopUpProfilComplet";
import PopUpProfilNonComplet from "./PopUpProfilNonComplet";

function PopUp({ data, dataHorairesId }) {
  const { familleId } = useContext(FamilleContext);

  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [profilComplet, setProfilComplet] = useState(false);

  // --- savoir si au moins 1 enfant a 100% ---
  const getNomsEnfants = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/nomsEnfants100/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        if (res.data[0] !== undefined) {
          setProfilComplet(true);
        }
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getNomsEnfants(source);
    return () => {
      source.cancel();
    };
  }, []);

  // --- choix compo ---
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
  data: PropTypes.object.isRequired,
  dataHorairesId: PropTypes.array.isRequired,
};

export default PopUp;
