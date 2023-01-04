import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChoixDates from "@components/appli/reservation/ChoixDates";
import DemandeResa from "@components/appli/reservation/DemandeResa";
import ConfirmeResa from "@components/appli/reservation/ConfirmeResa";

function AppliReservation() {
  const location = useLocation();
  const { data, dataHorairesId } = location.state;

  const {
    nom,
    nomUsage,
    nomNaissance,
    prenom,

    photoProfil,
    photoStructure3,

    tarifHeure,
    indemnEntretien,
    indemnKm,
    indemnRepas,
  } = data;

  const [heureMin, setHeureMin] = useState(0);
  const [heureMax, setHeureMax] = useState(24);
  const [jour, setJour] = useState("Lundi");

  const [compo, setCompo] = useState(0);
  const choixComposant = () => {
    if (compo === 2) {
      return (
        <DemandeResa
          setCompo={setCompo}
          heureMin={heureMin}
          heureMax={heureMax}
          jour={jour}
          nom={nom}
          nomUsage={nomUsage}
          nomNaissance={nomNaissance}
          prenom={prenom}
          photo3={photoStructure3}
          tarifHeure={tarifHeure}
          indemnRepas={indemnRepas}
          indemnEntretien={indemnEntretien}
          indemnKm={indemnKm}
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
