import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import FamilleContext from "@components/context/FamilleContext";
import { toast } from "react-hot-toast";
import Toggle from "../filtres/Toggle";

function FormEnfant() {
  const { familleId } = useContext(FamilleContext);

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

  // --- get noms des enfants ---
  const [newDelEnfant, setNewDelEnfant] = useState(true); // si un enfant ajouter / supprimer

  const [nomsEnfants, setNomsEnfants] = useState(); // les prenoms des enfants
  const [enfantId, setEnfantId] = useState(0); // mettre l'id du premier enfant dans le usestate

  const getNomsEnfants = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/nomsEnfants/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setNomsEnfants(res.data);
        setEnfantId(res.data[0].enfantId);
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
  }, [newDelEnfant]);

  // --- get donnees du formulaire enfant ---
  const [donneesForm, setDonneesForm] = useState(); // les donnees des form
  const [donneesOK, setDonneesOK] = useState(false); // les donnees sont prises => mis dans initial data
  const [finalOK, setFinalOK] = useState(false); // donnees mises dans initial => go visuel

  const getDonneesForm = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/formEnfant/${enfantId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setDonneesForm(res.data);
        setDonneesOK(true);
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
    getDonneesForm(source);
    return () => {
      source.cancel();
    };
  }, [enfantId, nomsEnfants]); // met le bon form

  // --- function pour changer initial value ---
  const handleChangeInitial = (ligne) => {
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

  useEffect(() => {
    if (donneesOK === true) {
      remplirInitial();
    }
    setDonneesOK(false);
  }, [donneesOK]);

  // --- put le pourcentage de complétion pour cet enfant ---
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
    axios
      .put(`${import.meta.env.VITE_PATH}/formEnfant/${enfantId}`, {
        initialData,
        pourcent,
      })
      .then(() => {
        toast.success("C'est bon, c'est mis à jour 👌");
      });
  };

  // --- ajout enfant ---
  const ajoutEnfant = () => {
    axios
      .post(`${import.meta.env.VITE_PATH}/famille/newEnfant`, {
        familleId,
      })
      .then(() => {
        setNewDelEnfant(!newDelEnfant);
      });
  };

  // --- supprimer enfant ---
  const deleteEnfant = () => {
    axios
      .delete(`${import.meta.env.VITE_PATH}/famille/deleteEnfant/${enfantId}`)
      .then(() => {
        setNewDelEnfant(!newDelEnfant);
      });
  };

  return (
    finalOK === true &&
    nomsEnfants !== undefined && (
      <main className="enfant">
        <h3>Dossier Enfants</h3>
        <br />
        <p>N'oubliez pas d'enregistrer vos informations.</p>

        <div className="kid">
          <div className="action-kid">
            <button
              className="create-kid"
              type="button"
              onClick={() => ajoutEnfant()}
            >
              Ajouter un enfant
            </button>

            <button
              type="button"
              className="delete-kid"
              onClick={() => deleteEnfant()}
            >
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
              {nomsEnfants.map((each, index) => (
                <div className="prenom-container" key={index}>
                  <button
                    type="button"
                    onClick={() => setEnfantId(each.enfantId)}
                  >
                    {each.prenom ? each.prenom : "Prenom Enfant"}
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
            <p>Prénom</p>
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
            <p>Allergies ou rien</p>
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
