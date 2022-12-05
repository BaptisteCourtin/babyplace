import React, { useState } from "react";
import Check from "./Check";

function Services() {
  // --- experience
  const [pcsc, setPcsc] = useState(false);
  // const [nesting, setNesting] = useState(false);
  // const [montessori, setMontessori] = uMeState(false);
  // const [formationHanficape, setFormationHanficape] = useState(false);
  // const [niveauDiplome, setNiveauDiplome] = useState(false);
  // const [anneeExperience, setAnneeExperience] = useState(false);
  // // ---sorties
  // const [jardin, setJardin] = useState(false);
  // const [sorties, setSorties] = useState(false);
  // // --- ateliers
  // const [arts, setArts] = useState(false);
  // const [musique, setMusique] = useState(false);
  // const [bilingue, setBilingue] = useState(false);
  // // --- environnements
  // const [enfants, setEnfants] = useState(false);
  // const [animaux, setAnimaux] = useState(false);
  // const [fumeur, setFumeur] = useState(false);
  // const [pollution, setPollution] = useState(false);
  // // --- equipements fournis
  // const [changes, setChanges] = useState(false);
  // const [repas, setRepas] = useState(false);
  // // --- acccessibilité
  // const [permis, setPermis] = useState(false);
  // const [motorise, setMotorise] = useState(false);
  // // --- lien
  // const [album, setAlbum] = useState(false);
  // const [connecte, setConnecte] = useState(false);

  return (
    <main className="services">
      <h4>Expérience et Formations</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <p>BAC</p>
      <p>ANNEES</p>
      <h4>Sorties</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <h4>Ateliers</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <h4>Environnement</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <h4>Equipements fournis</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <h4>Accessibilité</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <h4>Lien avec les parents</h4>
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
      <Check
        setter={setPcsc}
        state={pcsc}
        nom="pcsc"
        p="Formation premier secours (PCSC1)"
      />
    </main>
  );
}

export default Services;
