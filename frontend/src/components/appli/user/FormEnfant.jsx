import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import Toggle from "../filtres/Toggle";

function FormEnfant() {
  // meme nom que bdd
  const [initialData, setInitialData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    marcheur: "",
    allergies: "",
    medecin: "",
  });

  // --- changer une donnée avec le form ---

  const handleChange = (e) => {
    const { name } = e.target;
    setInitialData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // --- prise des donnees qui sont dans la bdd ---

  const [nomsEnfants, setNomsEnfants] = useState();

  const familleId = 1;
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getNomsEnfants = () => {
    axios
      .get(`http://localhost:5000/famille/nomsEnfants/${familleId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setNomsEnfants(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getNomsEnfants();
  }, []);

  const [donneesForm, setDonneesForm] = useState();
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel
  const [enfantId, setEnfantId] = useState(1);

  // const Token =
  //   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getDonneesForm = () => {
    axios
      .get(`http://localhost:5000/famille/formEnfant/${enfantId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setDonneesForm(res.data);
        setDonneesOK(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getDonneesForm();
  }, [enfantId]);

  // --- func pour changer initial value ---

  const handleChangeInitial = (ligne) => {
    // ne marche pas pour dateNaissance
    if (donneesForm[ligne] === null) {
      setInitialData((prevState) => ({
        ...prevState,
        [ligne]: "",
      }));
    } else {
      setInitialData((prevState) => ({
        ...prevState,
        [ligne]: donneesForm[ligne],
      }));
    }
  };

  const remplirInitial = () => {
    handleChangeInitial("nom");
    handleChangeInitial("prenom");
    handleChangeInitial("dateNaissance");
    handleChangeInitial("marcheur");
    handleChangeInitial("allergies");
    handleChangeInitial("medecin");

    setFinalOK(true);
  };

  // pour avoir les data du back
  useEffect(() => {
    if (donneesOK === true) {
      remplirInitial();
    }
    setDonneesOK(false);
  }, [donneesOK]);

  // --- func pour changer la bdd ---

  const calculPourcent = () => {
    let pourcent = 0;
    for (const prop in initialData) {
      if (initialData[prop] !== "") {
        pourcent += 1;
      }
    }
    return (pourcent * 100) / 6;
  };

  const updateFormEnfant = () => {
    const pourcent = calculPourcent();
    axios.put(`http://localhost:5000/formEnfant/${enfantId}`, {
      initialData,
      pourcent,
    });
  };

  // --- ajout enfant ---

  const ajoutEnfant = () => {
    console.log("click new enfant");
    axios.post(`http://localhost:5000/famille/newEnfant`, {
      familleId,
      prenom: "nouveau enfant",
    });
  };
  // asynchronisme de l'affichage

  // --- supprimer enfant ---

  const deleteEnfant = () => {
    axios.delete(`http://localhost:5000/famille/deleteEnfant/${enfantId}`);
  };
  // asynchronisme de l'affichage

  return (
    finalOK === true &&
    nomsEnfants !== undefined && (
      <main className="enfant">
        <h3>Dossier Enfants</h3>

        <div className="kid">
          <div className="action-kid">
            <button
              className="create-kid"
              type="button"
              onClick={() => ajoutEnfant()}
            >
              Ajouter un enfant
            </button>

            <button className="delete-kid" onClick={() => deleteEnfant()}>
              Supprimer enfant
            </button>
          </div>

          <div className="all-kid">
            <Carousel
              showArrows={false}
              infiniteLoop={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch
              centerMode
              centerSlidePercentage={40}
            >
              {nomsEnfants.map((each) => (
                <div className="prenom-container">
                  <button
                    type="button"
                    onClick={() => setEnfantId(each.enfantId)}
                  >
                    {each.prenom}
                  </button>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <form>
          <label htmlFor="nom">
            <input
              required
              type="text"
              name="nom"
              id="nom"
              value={initialData.nom}
              onChange={(e) => handleChange(e)}
            />
            <p>Nom</p>
          </label>

          <label htmlFor="prenom">
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              value={initialData.prenom}
              onChange={(e) => handleChange(e)}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="dateNaissance">
            <input
              required
              type="date"
              name="dateNaissance"
              id="dateNaissance"
              value={initialData.dateNaissance}
              onChange={(e) => handleChange(e)}
            />
            <p>Date de naissance</p>
          </label>

          <Toggle
            setter={setInitialData}
            state={initialData.marcheur}
            nom="marcheur"
            p="Marcheur / Non marcheur"
          />

          <label htmlFor="allergies">
            <input
              required
              type="text"
              name="allergies"
              id="allergies"
              value={initialData.allergies}
              onChange={(e) => handleChange(e)}
            />
            <p>Allergies</p>
          </label>

          <label htmlFor="medecin">
            <input
              required
              type="text"
              name="medecin"
              id="medecin"
              value={initialData.medecin}
              onChange={(e) => handleChange(e)}
            />
            <p>Médecin traitant</p>
          </label>
        </form>
        <div className="button-bas">
          <button
            type="submit"
            className="butt"
            onClick={() => updateFormEnfant()}
          >
            Enregistrer
          </button>
        </div>
      </main>
    )
  );
}

export default FormEnfant;
