import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState, useEffect, useContext, useRef } from "react";
import Axios from "axios";
import StructureContext from "@components/context/StructureContext";
import ResaContext from "@components/context/ResaContext";
import UserEmailContext from "@components/context/ResaContext";
import imgTime from "@assets/img-time.svg";
import Structure1 from "../components/form/Structure1";
import Structure2 from "../components/form/Structure2";
import Structure3 from "../components/form/Structure3";
import Structure4 from "../components/form/Structure4";
import Structure5 from "../components/form/Structure5";
import Structure6 from "../components/form/Structure6";
import Structure7 from "../components/form/Structure7";
import Structure8 from "../components/form/Structure8";
import Structure9 from "../components/form/Structure9";
import Structure10 from "../components/form/Structure10";
import Structure11 from "../components/form/Structure11";
import Structure12 from "../components/form/Structure12";
import Structure13 from "../components/form/Structure13";
import Structure14 from "../components/form/Structure14";
import Structure15 from "../components/form/Structure15";
import Structure16 from "../components/form/Structure16";
import imgDossier from "../assets/img-dossier.svg";
import imgCopie from "../assets/landing page/image2.svg";
import selfie from "../assets/selfie.svg";
import profilJM from "../assets/profilJM.png";
import profilCPP from "../assets/profilCPP.jpg";
import imgWoman from "../assets/img-woman.svg";

const INITIAL_DATA = {
  isCreche: "",
  typeCreche: "",
  nomStructure: "",
  telephone: "",
  nomNaissance: "",
  nomUsage: "",
  prenom: "",
  adresseStructure: "",
  imageProfilSrc: "https://via.placeholder.com/150.png?text=photo",
  photo1Src: "https://via.placeholder.com/240x160.png?text=photo+1",
  photo2Src: "https://via.placeholder.com/240x160.png?text=photo+2",
  photo3Src: "https://via.placeholder.com/240x160.png?text=photo+3",
  description: "",
  PCSC1: false,
  nesting: false,
  montessori: false,
  handi: false,
  jardin: false,
  sorties: false,
  experience: 0,
  enfants: false,
  animaux: false,
  nonFumeur: false,
  zeroPollution: false,
  repas: false,
  hygiene: false,
  promenades: false,
  eveil: false,
  musique: false,
  art: false,
  bilingue: false,
  bibli: false,
  transport: false,
  albumPhoto: false,
  photoConnecte: false,
  resaInst: "",
  lundiOuvert: true,
  mardiOuvert: true,
  mercrediOuvert: true,
  jeudiOuvert: true,
  vendrediOuvert: true,
  samediOuvert: false,
  dimancheOuvert: false,
  lundiMin: "",
  lundiMax: "",
  mardiMin: "",
  mardiMax: "",
  mercrediMin: "",
  mercrediMax: "",
  jeudiMin: "",
  jeudiMax: "",
  vendrediMin: "",
  vendrediMax: "",
  samediMin: "",
  samediMax: "",
  dimancheMin: "",
  dimancheMax: "",
  dureeMin: 1,
  dureeMax: 1,
  nbEmployes: 1,
  maxPlaces: 1,
  maxHandi: 0,
  max18Mois: 0,
  maxNuit: 0,
  financementPaje: true,
  tarifHeure: 0,
  tarifHoraireSpec: 0,
  indemnRepas: 0,
  tarifAtelier: 0,
  indemnEntretien: 0,
  indemnKm: 0,
  tarifHeureSup: 0,
  numSecu: "",
  numAgrement: "",
  dateAgrement: "",
  docPmi: "",
  siret: "",
  assHabitNom: "",
  assHabitNumero: "",
  assHabitAdresse: "",
  assAutoNom: "",
  assAutoNumero: "",
  assAutoAdresse: "",
  docIdentite: "",
  docVitale: "",
  docJustifDom: "",
  docDiplome: "",
  docRespCivile: "",
  docAssAuto: "",
};

function FormStructure() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [data, setData] = useState(INITIAL_DATA);
  const [structure, setStructure] = useState("");
  const [resa, setResa] = useState("");
  const { userEmail } = useContext(UserEmailContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showExplications, setShowExplications] = useState(true);
  const updateSize = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth < 1200) {
      setShowExplications(false);
    } else setShowExplications(true);
  };
  useEffect(() => (window.onresize = updateSize), []);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Structure1 {...data} updateFields={updateFields} />,
      <Structure2 {...data} inputRef={inputRef} updateFields={updateFields} />,
      <Structure3 {...data} inputRef1={inputRef1} inputRef2={inputRef2} inputRef3={inputRef3} updateFields={updateFields} />,
      <Structure4 {...data} updateFields={updateFields} />,
      <Structure5 {...data} updateFields={updateFields} />,
      <Structure6 />,
      <Structure7 {...data} updateFields={updateFields} />,
      <Structure8 {...data} />,
      <Structure9 {...data} updateFields={updateFields} />,
      <Structure10 {...data} updateFields={updateFields} />,
      <Structure11 {...data} />,
      <Structure12 {...data} updateFields={updateFields} />,
      <Structure13 {...data} updateFields={updateFields} />,
      <Structure14 {...data} />,
      <Structure15 {...data} updateFields={updateFields} />,
      <Structure16 {...data} />,
    ]);

  const pageTitle = () => {
    switch (currentStepIndex) {
      case 0:
        return "Structure d'accueil";
      case 1:
      case 2:
        return "Photos";
      case 3:
      case 4:
        return "Présentation";
      case 5:
        return "Conditions d'utilisation";
      case 6:
      case 7:
        return "Paramètres de réservation";
      case 8:
        return "Horaires d'ouverture";
      case 9:
        return "Durée d'accueil";
      case 10:
        return "Calendrier et disponibilités";
      case 11:
        return "Nombre de places et agréments";
      case 12:
        return "Tarifs";
      case 13:
        return "Récapitulatif";
      case 14:
        return "Vérifications";
      case 15:
        return "Félicitations !";
      default:
        return "";
    }
  };

  const imgExplication = () => {
    switch (currentStepIndex) {
      case 0:
      case 5:
      case 14:
        return (
          <img
            src={imgDossier}
            className="illustrationSection"
            width="60%"
            alt="illustration dossiers"
          />
        );
      case 1:
        return (
          <img
            src={selfie}
            className="illustrationSection"
            width="60%"
            alt="illustration selfie"
          />
        );
      case 4:
        return (
          <img
            src={imgCopie}
            className="illustrationSection"
            width="80%"
            alt="illustration impression"
          />
        );
      case 9:
      case 12:
      case 13:
        return (
          <img
            src={imgWoman}
            className="illustrationSection"
            width="80%"
            alt="illustration femme horloge"
          />
        );
      case 8:
      case 11:
        return (
          <img
            src={imgTime}
            className="illustrationSection"
            width="80%"
            alt="illustration impression"
          />
        );
      default:
        return "";
    }
  };
  const explicationTitle = () => {
    switch (currentStepIndex) {
      case 0:
        return "Choisissez votre catégorie d'annonce";
      case 1:
        return "Veillez à ce que votre photo montre clairement votre visage";
      case 2:
        return "Conseils rapides pour des photos de qualité";
      case 3:
        return "Inspirez vous des annonces Babyplace";
      case 4:
        return "Valorisez votre expérience et vos services";
      case 12:
        return "Commencez avec un prix plus bas pour attirer les réservations";
      case 14:
        return "Rassurez les parents !";
      default:
        return "";
    }
  };
  const explicationText = () => {
    switch (currentStepIndex) {
      case 0:
        return "En sélectionnant les catégories adéquates, vous aidez les parents à savoir à quoi s'attendre concernant l'accueil de leur enfant au sein de votre structure.";
      case 2:
        return "Désencombrez votre pièce. \nUtilisez la lumière naturelle du jour et évitez le flash. \nPrenez des photos en mode paysage depuis les coins des pièces. \nCentrez la prise de vue à égale distance entre le sol et le plafond. \nMettez en valeur les équipements et jeux d'éveil.";
      case 4:
        return "Il s'agit en général des services que les parents souhaitent retrouver pour l'accueil de leurs enfants. Vous pourrez en ajouter d'autres après la publication.";
      case 8:
        return "Renseignez ici les horaires d'accueil habituels, ces horaires seront renseignés sur votre fiche de présentation. Cela ne concerne pas vos disponibilités et vos plages de réservation.";
      case 9:
        return "Autorisez les séjours de courte ou longue durée";
      case 10:
        return "Toutes les dates à venir sont disponibles, à moins de les bloquer ou de demander un préavis de réservation.";
      case 11:
        return "Indiquez le nombre de places dont vous disposez au total, vous indiquerez les places actuellement disponibles ultérieurement";
      case 12:
        return "Les nouveaux professionnels inscrits sur Babyplace commencent avec un prix plus bas pour attirer leurs premières réservations. Ils ont ainsi plus d'avis de la part de parents, ce qui leur permet de gagner en crédibilité.";
      case 14:
        return "Un profil avec 100% des documents nécessaires trouve des enfants a garder 4 fois plus vite qu'une assistante maternelle dont le profil n'est pas complet";
      default:
        return "";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { isCreche, typeCreche, nomStructure, telephone, nomNaissance, nomUsage, prenom, adresseStructure, description, PCSC1, nesting, montessori, handi, jardin, sorties, experience, enfants, animaux, nonFumeur, zeroPollution, repas, hygiene, promenades, eveil, musique, art, bilingue, bibli, transport, albumPhoto, photoConnecte, resaInst, lundiOuvert, mardiOuvert, mercrediOuvert, jeudiOuvert, vendrediOuvert, samediOuvert, dimancheOuvert, lundiMin, lundiMax, mardiMin, mardiMax, mercrediMin, mercrediMax, jeudiMin, jeudiMax, vendrediMin, vendrediMax, samediMin, samediMax, dimancheMin, dimancheMax, dureeMin, dureeMax, nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, financementPaje, tarifHeure, tarifHoraireSpec, indemnRepas, tarifAtelier, indemnEntretien, indemnKm, tarifHeureSup, numSecu, numAgrement, dateAgrement, docPmi, siret, assHabitNom, assHabitNumero, assHabitAdresse, assAutoNom, assAutoNumero, assAutoAdresse, docIdentite, docVitale, docJustifDom, docDiplome, docRespCivile, docAssAuto } = data;
    const email = userEmail;
    if (!isLastStep) {
      if (currentStepIndex === 0 && structure === "creche") {
        Axios.put("http://localhost:5000/inscriptionCreche1", {
          isCreche, typeCreche, nomStructure, adresseStructure, telephone, email
        })
          .then(next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 0 && structure === "assmat") {
        Axios.put("http://localhost:5000/inscriptionAssmat1", {
          isCreche, nomNaissance, nomUsage, prenom, adresseStructure, telephone, email
        })
          .then(next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 1) {
        const formData = new FormData();
        formData.append("avatar", inputRef.current.files[0]);
        Axios.post("http://localhost:5000/photoProfil", formData)
          .then((result) => {
            const photoProfil = `@backend/public/uploads/avatar/${result.data}`;
            Axios.put("http://localhost:5000/photoProfil", {
              photoProfil, email
            })
              .then(next())
              .catch((err) => {
                console.error(err);
              })
          }
          )
          .catch((err) => {
            console.error(err);
          });
      }
      else if (currentStepIndex === 2) {
        console.log(inputRef2.current, inputRef3.current)
        const formData = new FormData();
        formData.append("photo1", inputRef1.current.files[0]);
        Axios.post("http://localhost:5000/photosStructure1", formData)
          .then((result) => {
            const photoStructure1 = `@backend/public/uploads/photosStructure/${result.data}`;
            Axios.put("http://localhost:5000/photosStructure1", {
              photoStructure1, email
            })
              .then(() => {
                if (inputRef2.current.file) {
                  const formData1 = new FormData();
                  formData1.append("photo2", inputRef2.current.files[0]);
                  Axios.post("http://localhost:5000/photosStructure", formData1)
                    .then((result) => {
                      const photoStructure1 = `@backend/public/uploads/photosStructure/${result.data}`;
                      Axios.put("http://localhost:5000/photosStructure2", {
                        photoStructure1, email
                      })
                    })
                }
              }).then(() => {
                if (inputRef3.current.file) {
                  const formData2 = new FormData();
                  formData2.append("photo3", inputRef3.current.files[0]);
                  Axios.post("http://localhost:5000/photosStructure2", formData2)
                    .then((result) => {
                      const photoStructure3 = `@backend/public/uploads/photosStructure/${result.data}`;
                      Axios.put("http://localhost:5000/photosStructure3", {
                        photoStructure3, email
                      })
                    })
                }
              }).then(next())
              .catch((err) => {
                console.error(err);
              })
          }
          )
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 3) {
        Axios.put("http://localhost:5000/description", {
          description, email
        })
          .then(next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 4 && structure === "creche") {
        Axios.put("http://localhost:5000/optionsAccueilCreche", {
          PCSC1, nesting, montessori, handi, jardin, sorties, promenades, eveil, musique, art, bilingue, bibli, transport, albumPhoto, photoConnecte, email
        })
          .then(next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 4 && structure === "assmat") {
        Axios.put("http://localhost:5000/optionsAccueilAssmat", {
          PCSC1, nesting, montessori, handi, jardin, sorties, promenades, eveil, musique, art, bilingue, bibli, transport, enfants, experience, animaux, nonFumeur, zeroPollution, repas, hygiene, albumPhoto, photoConnecte, email
        })
          .then(next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 5) {
        next()
      }
    }
  }
  return (
    <StructureContext.Provider value={{ structure, setStructure }}>
      <ResaContext.Provider value={{ resa, setResa }}>
        <div className="formContainer">
          <div className="formTitleBar">
            <div className="leftPart">
              <h4>Babyplace</h4>
              <p> {pageTitle()} </p>
            </div>
            <div>
              <p>Enregistrer et quitter</p>
            </div>
          </div>
          <div className="pagination">
            <progress value={currentStepIndex} max={steps.length - 1}>
              {" "}
              {currentStepIndex + 1}
            </progress>
          </div>

          <div className="formStructureContainer">
            <form encType="multipart/form-data"
              className={
                currentStepIndex === 6 || currentStepIndex === 7 || isLastStep
                  ? "pageChoixResa"
                  : "formStructure"
              }
              onSubmit={(e) => onSubmit(e)}
            >
              {step}
              <div className="buttonContainer">
                {!isFirstStep ? (
                  <button type="button" className="backButton" onClick={back}>
                    Précédent
                  </button>
                ) : (
                  <div> </div>
                )}
                {resa !== "" || currentStepIndex !== 6 ? (
                  <button type="submit" className="nextButton">
                    {!isLastStep ? "Suivant" : "Fin"}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </form>
            {currentStepIndex !== 6 &&
              currentStepIndex !== 7 &&
              currentStepIndex !== 15 ? (
              <div className="explicationsContainer">
                {screenWidth < 1200 && (
                  <button
                    type="button"
                    className="backButton"
                    onClick={() => setShowExplications(!showExplications)}
                  >
                    {!showExplications ? "Besoin d'aide ?" : "Fermer"}
                  </button>
                )}
                {showExplications && (
                  <div className="innerContainer">
                    {imgExplication()}
                    <h4> {explicationTitle()} </h4>
                    {currentStepIndex === 3 && structure === "assmat" ? (
                      <div className="descExamples">
                        <div className="imgTitleContainer">
                          <img src={profilJM} alt="profil JM" />
                          <h5>
                            Jeanne-Marie Dupont <br />
                            <span>Assistante maternelle</span>
                          </h5>
                        </div>
                        <p>
                          Agréée depuis 2013, je vous propose mes services pour
                          garder votre ou vos enfants à mon domicile,
                          rez-de-chaussée avec jardin, proche du tram. Je suis
                          maman de 3 enfants et mamie de 5 petits enfants de 3
                          mois à 12 ans. J'ai une expérience en garde d'enfants
                          de quelques années.
                        </p>
                      </div>
                    ) : currentStepIndex === 3 && structure === "creche" ? (
                      <div className="descExamples">
                        <div className="imgTitleContainer">
                          <img src={profilCPP} alt="profil CPP" />
                          <h5>
                            Crèche Picoti Picota <br />
                            <span>Crèche parentale</span>
                          </h5>
                        </div>
                        <p>
                          Notre structure accueille vos enfants de 3 mois à 4
                          ans dans un cadre chaleureux, sécurisant et
                          spécialement aménagé pour le développement de chaque
                          enfant. Nos points forts : un grand local, lumineux et
                          coloré et un jardin de 50 m² environ. Avec des équipes
                          dynamiques et pleines d'idées, les activités ne
                          manquent pas pour l'éveil et l'épanouissement de vos
                          petits bouts !
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {currentStepIndex === 10 && (
                      <div>
                        <p>
                          <span className="dispo">1</span>Disponible à la
                          réservation
                        </p>{" "}
                        <p>
                          <span className="indispo">1</span>Bloqué
                        </p>
                      </div>
                    )}
                    <pre>{explicationText()}</pre>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </ResaContext.Provider>
    </StructureContext.Provider>
  );
}

export default FormStructure;
