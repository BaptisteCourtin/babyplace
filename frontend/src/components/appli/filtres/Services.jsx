import React, { useState } from "react";
import Check from "./Check";

function Services({ setCompo }) {
  // --- experience
  const [pcsc, setPcsc] = useState(false);
  const [nesting, setNesting] = useState(false);
  const [montessori, setMontessori] = useState(false);
  const [formationHandicape, setFormationHandicape] = useState(false);
  const [anneeExperience, setAnneeExperience] = useState("");
  // ---sorties
  const [jardin, setJardin] = useState(false);
  const [sorties, setSorties] = useState(false);
  // --- ateliers
  const [arts, setArts] = useState(false);
  const [musique, setMusique] = useState(false);
  const [bilingue, setBilingue] = useState(false);
  // --- environnements
  const [animaux, setAnimaux] = useState(false);
  const [fumeur, setFumeur] = useState(false);
  const [pollution, setPollution] = useState(false);
  // --- equipements fournis
  const [changes, setChanges] = useState(false);
  const [repas, setRepas] = useState(false);
  // --- acccessibilité
  const [permis, setPermis] = useState(false);
  const [motorise, setMotorise] = useState(false);
  // --- lien
  const [album, setAlbum] = useState(false);
  const [connecte, setConnecte] = useState(false);

  return (
    <>
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(0)}
        >{`< Services`}</button>
        <button type="button">RESET</button>
      </header>

      <main className="services">
        <h4>Expérience et Formations</h4>
        <Check
          setter={setPcsc}
          state={pcsc}
          nom="pcsc"
          p="Formation premier secours (PCSC1)"
        />
        <Check
          setter={setNesting}
          state={nesting}
          nom="nesting"
          p="Formation Nesting (pollution intérieure)"
        />
        <Check
          setter={setMontessori}
          state={montessori}
          nom="montessori"
          p="Pedagogie Montessori / Pikler Loczy"
        />
        <Check
          setter={setFormationHandicape}
          state={formationHandicape}
          nom="formationHandicape"
          p="Formation accueil d'enfant handicapés"
        />
        <select
          id="anneeExperience"
          onChange={(event) => setAnneeExperience(event.target.value)}
        >
          <option value="moins de 1 an">moins de 1 an</option>
          <option value="1 - 2 ans">1 - 2 ans</option>
          <option value="3 - 5 ans">3 - 5 ans</option>
          <option value="5 - 10 ans">5 - 10 ans</option>
          <option value="plus de 10 ans"> + 10 ans</option>
        </select>
        <p>ANNEES</p>
        <h4>Sorties</h4>
        <Check
          setter={setJardin}
          state={jardin}
          nom="jadin"
          p="Espaces extérieur / jardin"
        />
        <Check
          setter={setSorties}
          state={sorties}
          nom="sorties"
          p="Sorties extérieures"
        />
        <h4>Ateliers</h4>
        <Check setter={setArts} state={arts} nom="arts" p="Arts plastiques" />
        <Check
          setter={setMusique}
          state={musique}
          nom="musique"
          p="Atelier musique"
        />
        <Check
          setter={setBilingue}
          state={bilingue}
          nom="bilingue"
          p="Bilingue / internationale"
        />
        <h4>Environnement</h4>
        <Check
          setter={setAnimaux}
          state={animaux}
          nom="animaux"
          p="Animaux domestiques"
        />
        <Check setter={setFumeur} state={fumeur} nom="fumeur" p="Non-fumeur" />
        <Check
          setter={setPollution}
          state={pollution}
          nom="pollution"
          p="0% pollution intérieur"
        />
        <h4>Equipements fournis</h4>
        <Check
          setter={setChanges}
          state={changes}
          nom="changes"
          p="Changes et couches"
        />
        <Check setter={setRepas} state={repas} nom="repas" p="Repas / Laits" />
        <h4>Accessibilité</h4>
        <Check
          setter={setPermis}
          state={permis}
          nom="permis"
          p="Permis de conduire"
        />
        <Check
          setter={setMotorise}
          state={motorise}
          nom="motorise"
          p="Motorisé"
        />
        <h4>Lien avec les parents</h4>
        <Check setter={setAlbum} state={album} nom="album" p="Album photo" />
        <Check
          setter={setConnecte}
          state={connecte}
          nom="connecte"
          p="Connecté (Application de contact / site web)"
        />
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </>
  );
}

export default Services;
