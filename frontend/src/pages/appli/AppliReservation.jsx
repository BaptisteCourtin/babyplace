import React, { useState } from "react";
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
    photoStructure3,

    tarifHeure,
    indemnEntretien,
    indemnKm,
    indemnRepas,
  } = data;

  const [heureMin, setHeureMin] = useState("24:00");
  const [heureMax, setHeureMax] = useState("00:00");
  const [jour, setJour] = useState("Lundi");
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
      />
    );
  };

  return <div className="appli-reservation">{choixComposant()}</div>;
}

export default AppliReservation;
