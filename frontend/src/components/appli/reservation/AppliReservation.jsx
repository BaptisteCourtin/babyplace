import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ChoixDates from "@components/appli/reservation/ChoixDates";
import DemandeResa from "@components/appli/reservation/DemandeResa";
import ConfirmeResa from "@components/appli/reservation/ConfirmeResa";

function AppliReservation() {
  const location = useLocation();
  const { data, dataHorairesId } = location.state;
  const {
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,

    photoProfil,
    photoStructure1,
    photoStructure2,
    photoStructure3,

    tarifHeure,
    indemnEntretien,
    indemnKm,
    indemnRepas,
  } = data;

  // --- get calendar par structureId ---
  const [dataCalendarId, setDataCalendarId] = useState([]);

  const getCalendar = (source) => {
    axios
      .get(
        `${import.meta.env.VITE_PATH}/calendrier/whereMoins/${structureId}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setDataCalendarId(res.data);
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
    getCalendar(source);
    return () => {
      source.cancel();
    };
  }, []);

  // --- info à passer + choix compo ---
  const [heureMin, setHeureMin] = useState("");
  const [heureMax, setHeureMax] = useState("");
  const [jour, setJour] = useState("");
  const [isOccasionnel, setIsOccasionnel] = useState(0);

  const [compo, setCompo] = useState(0);
  const choixComposant = () => {
    if (compo === 2) {
      return (
        <DemandeResa
          setCompo={setCompo}
          heureMin={heureMin}
          heureMax={heureMax}
          jour={jour}
          isOccasionnel={isOccasionnel}
          nom={nom}
          nomUsage={nomUsage}
          nomNaissance={nomNaissance}
          prenom={prenom}
          photo1={photoStructure1}
          photo2={photoStructure2}
          photo3={photoStructure3}
          tarifHeure={tarifHeure}
          indemnRepas={indemnRepas}
          indemnEntretien={indemnEntretien}
          indemnKm={indemnKm}
          structureId={structureId}
        />
      );
    }
    if (compo === 3) {
      return (
        <ConfirmeResa
          heureMin={heureMin}
          heureMax={heureMax}
          jour={jour}
          nom={nom}
          nomUsage={nomUsage}
          nomNaissance={nomNaissance}
          prenom={prenom}
          photoProfil={photoProfil}
        />
      );
    }
    return (
      <ChoixDates
        setCompo={setCompo}
        heureMax={heureMax}
        heureMin={heureMin}
        jour={jour}
        setIsOccasionnel={setIsOccasionnel}
        isOccasionnel={isOccasionnel}
        setHeureMin={setHeureMin}
        setHeureMax={setHeureMax}
        setJour={setJour}
        nom={nom}
        nomUsage={nomUsage}
        nomNaissance={nomNaissance}
        prenom={prenom}
        photoProfil={photoProfil}
        dataHorairesId={dataHorairesId}
        dataCalendarId={dataCalendarId}
      />
    );
  };

  return <div className="appli-reservation">{choixComposant()}</div>;
}

export default AppliReservation;
