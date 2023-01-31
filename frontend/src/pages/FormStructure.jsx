import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState, useEffect, useContext, useRef } from "react";
import Axios from "axios";
import StructureContext from "@components/context/StructureContext";
import ResaContext from "@components/context/ResaContext";
import UserEmailContext from "@components/context/UserEmailContext";
import imgTime from "@assets/img-time.svg";
import { useNavigate } from "react-router-dom";
import Structure1 from "../components/form/InfoAdmin1";
import Structure2 from "../components/form/PhotoProfil2";
import Structure3 from "../components/form/PhotosStructure3";
import Structure4 from "../components/form/Description4";
import Structure5 from "../components/form/Formation5";
import Structure6 from "../components/form/Conditions6";
import Structure7 from "../components/form/ChoixResa7";
import Structure8 from "../components/form/RecapResa8";
import Structure9 from "../components/form/Horaires9";
import Structure10 from "../components/form/Duree10";
import Structure11 from "../components/form/Calendrier11";
import Structure12 from "../components/form/NbPlaces12";
import Structure13 from "../components/form/Tarifs13";
import Structure14 from "../components/form/RecapFinal14";
import Structure15 from "../components/form/Justificatifs15";
import Structure16 from "../components/form/FinFormulaire16";
import imgDossier from "../assets/img-dossier.svg";
import imgCopie from "../assets/landing page/image2.svg";
import selfie from "../assets/selfie.svg";
import profilJM from "../assets/profilJM.png";
import profilCPP from "../assets/profilCPP.jpg";
import imgWoman from "../assets/img-woman.svg";
import logo from "../assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";

const INITIAL_DATA = {
  isCreche: null,
  typeCreche: null,
  nomStructure: null,
  telephone: null,
  nomNaissance: null,
  nomUsage: null,
  prenom: null,
  adresseStructure: null,
  imageProfilSrc: null,
  photo1Src: null,
  photo2Src: null,
  photo3Src: null,
  description: null,
  PCSC1: 0,
  nesting: 0,
  montessori: 0,
  handi: 0,
  jardin: 0,
  sorties: 0,
  experience: 0,
  enfants: 0,
  animaux: 0,
  nonFumeur: 0,
  zeroPollution: 0,
  repas: 0,
  hygiene: 0,
  promenades: 0,
  eveil: 0,
  musique: 0,
  art: 0,
  bilingue: 0,
  bibli: 0,
  transport: 0,
  albumPhoto: 0,
  photoConnecte: 0,
  resaInst: true,
  lundiOuvert: true,
  mardiOuvert: true,
  mercrediOuvert: true,
  jeudiOuvert: true,
  vendrediOuvert: true,
  samediOuvert: false,
  dimancheOuvert: false,
  lundiMin: null,
  lundiMax: null,
  mardiMin: null,
  mardiMax: null,
  mercrediMin: null,
  mercrediMax: null,
  jeudiMin: null,
  jeudiMax: null,
  vendrediMin: null,
  vendrediMax: null,
  samediMin: null,
  samediMax: null,
  dimancheMin: null,
  dimancheMax: null,
  indispo: [],
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
  numSecu: 0,
  numAgrement: 0,
  dateAgrement: null,
  docPmi: null,
  siret: 0,
  assHabitNom: null,
  assHabitNumero: null,
  assHabitAdresse: null,
  assAutoNom: null,
  assAutoNumero: null,
  assAutoAdresse: null,
  docIdentite: null,
  docVitale: null,
  docJustifDom: null,
  docDiplome: null,
  docRespCivile: null,
  docAssAuto: null,
};

function FormStructure() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRefPmi = useRef(null);
  const inputRefCni = useRef(null);
  const inputRefCpam = useRef(null);
  const inputRefDom = useRef(null);
  const inputRefDiplome = useRef(null);
  const inputRefResp = useRef(null);
  const inputRefAuto = useRef(null);
  const [data, setData] = useState(INITIAL_DATA);
  const [structure, setStructure] = useState("");
  const [resaInst, setResaInst] = useState("");
  const { userEmail } = useContext(UserEmailContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showExplications, setShowExplications] = useState(
    window.innerWidth > 1000
  );
  const [closedDays, setClosedDays] = useState([]);
  const [structureId, setStructureId] = useState(null);
  const [horairesExist, setHorairesExist] = useState(null);
  const [closePage, setClosePage] = useState(false);
  const updateSize = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth < 1000) {
      setShowExplications(false);
    } else setShowExplications(true);
  };
  useEffect(() => (window.onresize = updateSize), []);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  useEffect(() => {
    Axios.get(`${import.meta.env.VITE_PATH}/isCreche?email=${userEmail}`, {
      userEmail,
    })
      .then((result) => {
        if (result.data.isCreche === 0) {
          setStructure("assmat");
        }
        if (result.data.isCreche === 1) {
          setStructure("creche");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (structure === "creche") {
      Axios.get(
        `${import.meta.env.VITE_PATH}/getCrecheInfo?email=${userEmail}`,
        { userEmail }
      )
        .then((result) => {
          setStructureId(result.data.structureId);
          setResaInst(result.data.resaInst);
          setData((prev) => {
            return {
              ...prev,
              isCreche: result.data.isCreche,
              typeCreche: result.data.type,
              financementPaje: result.data.financementPaje,
              telephone: result.data.telephone,
              nomStructure: result.data.nom,
              adresseStructure: result.data.adresse,
              description: result.data.description,
              PCSC1: result.data.pcsc1,
              nesting: result.data.nesting,
              montessori: result.data.montessori,
              handi: result.data.handi,
              jardin: result.data.jardin,
              sorties: result.data.sorties,
              promenades: result.data.promenades,
              eveil: result.data.eveil,
              musique: result.data.musique,
              art: result.data.art,
              bilingue: result.data.bilingue,
              bibli: result.data.bibli,
              transport: result.data.transport,
              albumPhoto: result.data.albumPhoto,
              photoConnecte: result.data.photoConnecte,
              resaInst: result.data.resaInst,
              dureeMin: result.data.dureeMin,
              dureeMax: result.data.dureeMax,
              nbEmployes: result.data.nbEmployes,
              maxPlaces: result.data.maxPlaces,
              maxHandi: result.data.maxHandi,
              max18Mois: result.data.max18Mois,
              maxNuit: result.data.maxNuit,
              tarifHeure: result.data.tarifHeure,
              tarifHoraireSpec: result.data.tarifHoraireSpec,
              indemnRepas: result.data.indemnRepas,
              tarifAtelier: result.data.tarifAtelier,
              siret: result.data.siret,
              numAgrement: result.data.numAgrement,
              dateAgrement: result.data.dateAgrement,
            };
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (structure === "assmat") {
      Axios.get(
        `${import.meta.env.VITE_PATH}/getAssmatInfo?email=${userEmail}`,
        { userEmail }
      )
        .then((result) => {
          setStructureId(result.data.structureId);
          if (result.data.resaInst === 1) {
            setResaInst(true);
          }
          if (result.data.resaInst === 0) {
            setResaInst(false);
          }

          setData((prev) => {
            return {
              ...prev,
              isCreche: result.data.isCreche,
              telephone: result.data.telephone,
              nomNaissance: result.data.nomNaissance,
              nomUsage: result.data.nomUsage,
              prenom: result.data.prenom,
              adresseStructure: result.data.adresse,
              description: result.data.description,
              PCSC1: result.data.pcsc1,
              nesting: result.data.nesting,
              montessori: result.data.montessori,
              handi: result.data.handi,
              jardin: result.data.jardin,
              sorties: result.data.sorties,
              experience: result.data.experience,
              enfants: result.data.enfants,
              animaux: result.data.animaux,
              nonFumeur: result.data.nonFumeur,
              zeroPollution: result.data.zeroPollution,
              repas: result.data.repas,
              hygiene: result.data.hygiene,
              promenades: result.data.promenades,
              eveil: result.data.eveil,
              musique: result.data.musique,
              art: result.data.art,
              bilingue: result.data.bilingue,
              bibli: result.data.bibli,
              transport: result.data.transport,
              albumPhoto: result.data.albumPhoto,
              photoConnecte: result.data.photoConnecte,
              resaInst: result.data.resaInst,
              dureeMin: result.data.dureeMin,
              dureeMax: result.data.dureeMax,
              maxPlaces: result.data.maxPlaces,
              maxHandi: result.data.maxHandi,
              max18Mois: result.data.max18Mois,
              maxNuit: result.data.maxNuit,
              tarifHeure: result.data.tarifHeure,
              tarifHoraireSpec: result.data.tarifHoraireSpec,
              indemnRepas: result.data.indemnRepas,
              indemnEntretien: result.data.indemnEntretien,
              indemnKm: result.data.indemnKm,
              tarifHeureSup: result.data.tarifHeureSup,
              numSecu: result.data.numSecu,
              numAgrement: result.data.numAgrement,
              dateAgrement: result.data.dateAgrement,
              assHabitNom: result.data.assHabitNom,
              assHabitNumero: result.data.assHabitNumero,
              assHabitAdresse: result.data.assHabitAdresse,
              assAutoNom: result.data.assAutoNom,
              assAutoNumero: result.data.assAutoNumero,
              assAutoAdresse: result.data.assAutoAdresse,
            };
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [structure]);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Structure1 {...data} updateFields={updateFields} />,
      <Structure2
        {...data}
        inputRef={inputRef}
        structureId={structureId}
        updateFields={updateFields}
      />,
      <Structure3
        {...data}
        inputRef1={inputRef1}
        inputRef2={inputRef2}
        inputRef3={inputRef3}
        structureId={structureId}
        updateFields={updateFields}
      />,
      <Structure4 {...data} updateFields={updateFields} />,
      <Structure5 {...data} updateFields={updateFields} />,
      <Structure6 />,
      <Structure7 {...data} updateFields={updateFields} />,
      <Structure8 {...data} />,
      <Structure9
        {...data}
        structureId={structureId}
        setData={setData}
        updateFields={updateFields}
        setHorairesExist={setHorairesExist}
      />,
      <Structure10 {...data} updateFields={updateFields} />,
      <Structure11
        {...data}
        closedDays={closedDays}
        setClosedDays={setClosedDays}
        structureId={structureId}
        setData={setData}
      />,
      <Structure12 {...data} updateFields={updateFields} />,
      <Structure13 {...data} updateFields={updateFields} />,
      <Structure14 {...data} />,
      <Structure15
        {...data}
        inputRefPmi={inputRefPmi}
        inputRefCpam={inputRefCpam}
        inputRefCni={inputRefCni}
        inputRefDom={inputRefDom}
        inputRefDiplome={inputRefDiplome}
        inputRefAuto={inputRefAuto}
        inputRefResp={inputRefResp}
        structureId={structureId}
        updateFields={updateFields}
      />,
      <Structure16 />,
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

  const logout = async () => {
    try {
      await Axios.put(`${import.meta.env.VITE_PATH}/logout/${structureId}`, {
        id: structureId,
        token: null,
        tokenStart: null,
      });
      sessionStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      typeCreche,
      nomStructure,
      telephone,
      nomNaissance,
      nomUsage,
      prenom,
      adresseStructure,
      imageProfilSrc,
      photo1Src,
      photo2Src,
      photo3Src,
      description,
      PCSC1,
      nesting,
      montessori,
      handi,
      jardin,
      sorties,
      experience,
      enfants,
      animaux,
      nonFumeur,
      zeroPollution,
      repas,
      hygiene,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      albumPhoto,
      photoConnecte,
      resaInst,
      lundiOuvert,
      mardiOuvert,
      mercrediOuvert,
      jeudiOuvert,
      vendrediOuvert,
      samediOuvert,
      dimancheOuvert,
      lundiMin,
      lundiMax,
      mardiMin,
      mardiMax,
      mercrediMin,
      mercrediMax,
      jeudiMin,
      jeudiMax,
      vendrediMin,
      vendrediMax,
      samediMin,
      samediMax,
      dimancheMin,
      dimancheMax,
      dureeMin,
      dureeMax,
      nbEmployes,
      maxPlaces,
      maxHandi,
      max18Mois,
      maxNuit,
      financementPaje,
      tarifHeure,
      tarifHoraireSpec,
      indemnRepas,
      tarifAtelier,
      indemnEntretien,
      indemnKm,
      tarifHeureSup,
      numSecu,
      numAgrement,
      dateAgrement,
      siret,
      assHabitNom,
      assHabitNumero,
      assHabitAdresse,
      assAutoNom,
      assAutoNumero,
      assAutoAdresse,
      indispo,
      docPmi,
      docIdentite,
      docVitale,
      docJustifDom,
      docDiplome,
      docRespCivile,
      docAssAuto,
    } = data;
    const email = userEmail;
    if (!isLastStep) {
      if (currentStepIndex === 0 && structure === "creche") {
        Axios.get(`${import.meta.env.VITE_PATH}/crecheExist?email=${email}`, {
          email,
        })
          .then((result) => {
            if (result.data.structureId === undefined) {
              Axios.put(`${import.meta.env.VITE_PATH}/inscriptionCreche1`, {
                typeCreche,
                nomStructure,
                adresseStructure,
                telephone,
                email,
              })
                .then(closePage ? logout() : next())
                .catch((err) => {
                  console.error(err);
                });
            } else {
              Axios.post(`${import.meta.env.VITE_PATH}/inscriptionCreche1`, {
                typeCreche,
                nomStructure,
                adresseStructure,
                telephone,
                email,
              })
                .then(closePage ? logout() : next())
                .catch((err) => {
                  console.error(err);
                });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 0 && structure === "assmat") {
        Axios.get(`${import.meta.env.VITE_PATH}/assmatExist?email=${email}`, {
          email,
        })
          .then((result) => {
            if (result.data.structureId === undefined) {
              Axios.put(`${import.meta.env.VITE_PATH}/inscriptionAssmat1`, {
                nomNaissance,
                nomUsage,
                prenom,
                adresseStructure,
                telephone,
                email,
              })
                .then(closePage ? logout() : next())
                .catch((err) => {
                  console.error(err);
                });
            } else {
              Axios.post(`${import.meta.env.VITE_PATH}/inscriptionAssmat1`, {
                nomNaissance,
                nomUsage,
                prenom,
                adresseStructure,
                telephone,
                email,
              })
                .then(closePage ? logout() : next())
                .catch((err) => {
                  console.error(err);
                });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 1) {
        const formData = new FormData();
        if (inputRef.current !== null && inputRef.current.files.length > 0) {
          formData.append("file", inputRef.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/photoProfil`, formData)
            .then((result) => {
              let photoProfil = imageProfilSrc;
              if (result.data !== undefined) {
                photoProfil = result.data;
              }
              Axios.put(`${import.meta.env.VITE_PATH}/photoProfil`, {
                photoProfil,
                email,
              })
                .then(closePage ? logout() : next())
                .catch((err) => {
                  console.error(err);
                });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          next();
        }
      } else if (currentStepIndex === 2) {
        if (inputRef.current !== null && inputRef1.current.files.length > 0) {
          const formData = new FormData();
          formData.append("file", inputRef1.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/photosStructure`, formData)
            .then((result) => {
              let photoStructure = photo1Src;
              if (result.data !== undefined) {
                const photo1 = result.data;
                photoStructure = photo1;
              }
              const column = "photoStructure1";
              Axios.put(`${import.meta.env.VITE_PATH}/photosStructure`, {
                column,
                photoStructure,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRef.current !== null && inputRef2.current.files.length > 0) {
          const formData = new FormData();
          formData.append("file", inputRef2.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/photosStructure`, formData)
            .then((result) => {
              let photoStructure = photo2Src;
              if (result.data !== undefined) {
                const photo2 = result.data;
                photoStructure = photo2;
              }
              const column = "photoStructure2";
              Axios.put(`${import.meta.env.VITE_PATH}/photosStructure`, {
                column,
                photoStructure,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRef.current !== null && inputRef3.current.files.length > 0) {
          const formData = new FormData();
          formData.append("file", inputRef3.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/photosStructure`, formData)
            .then((result) => {
              let photoStructure = photo3Src;
              if (result.data !== undefined) {
                const photo3 = result.data;
                photoStructure = photo3;
              }
              const column = "photoStructure3";
              Axios.put(`${import.meta.env.VITE_PATH}/photosStructure`, {
                column,
                photoStructure,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        closePage ? logout() : next();
      } else if (currentStepIndex === 3) {
        Axios.put(`${import.meta.env.VITE_PATH}/description`, {
          description,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 4 && structure === "creche") {
        Axios.put(`${import.meta.env.VITE_PATH}/optionsAccueilCreche`, {
          PCSC1,
          nesting,
          montessori,
          handi,
          jardin,
          sorties,
          promenades,
          eveil,
          musique,
          art,
          bilingue,
          bibli,
          transport,
          albumPhoto,
          photoConnecte,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 4 && structure === "assmat") {
        Axios.put(`${import.meta.env.VITE_PATH}/optionsAccueilAssmat`, {
          PCSC1,
          nesting,
          montessori,
          handi,
          jardin,
          sorties,
          promenades,
          eveil,
          musique,
          art,
          bilingue,
          bibli,
          transport,
          enfants,
          experience,
          animaux,
          nonFumeur,
          zeroPollution,
          repas,
          hygiene,
          albumPhoto,
          photoConnecte,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (
        currentStepIndex === 5 ||
        currentStepIndex === 7 ||
        currentStepIndex === 13
      ) {
        closePage ? logout() : next();
      } else if (currentStepIndex === 6) {
        Axios.put(`${import.meta.env.VITE_PATH}/resaInst`, {
          resaInst,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 8) {
        if (!horairesExist) {
          Axios.post(`${import.meta.env.VITE_PATH}/horaires`, {
            lundiOuvert,
            mardiOuvert,
            mercrediOuvert,
            jeudiOuvert,
            vendrediOuvert,
            samediOuvert,
            dimancheOuvert,
            lundiMin,
            lundiMax,
            mardiMin,
            mardiMax,
            mercrediMin,
            mercrediMax,
            jeudiMin,
            jeudiMax,
            vendrediMin,
            vendrediMax,
            samediMin,
            samediMax,
            dimancheMin,
            dimancheMax,
            email,
          })
            .then(closePage ? logout() : next())
            .catch((err) => {
              console.error(err);
            });
        } else {
          Axios.put(`${import.meta.env.VITE_PATH}/horaires`, {
            lundiOuvert,
            mardiOuvert,
            mercrediOuvert,
            jeudiOuvert,
            vendrediOuvert,
            samediOuvert,
            dimancheOuvert,
            lundiMin,
            lundiMax,
            mardiMin,
            mardiMax,
            mercrediMin,
            mercrediMax,
            jeudiMin,
            jeudiMax,
            vendrediMin,
            vendrediMax,
            samediMin,
            samediMax,
            dimancheMin,
            dimancheMax,
            structureId,
          })
            .then(closePage ? logout() : next())
            .catch((err) => {
              console.error(err);
            });
        }
      } else if (currentStepIndex === 9) {
        Axios.put(`${import.meta.env.VITE_PATH}/dureeAccueil`, {
          dureeMin,
          dureeMax,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 10) {
        closedDays.map((date) => {
          if (indispo.indexOf(date) === -1) {
            Axios.post(`${import.meta.env.VITE_PATH}/calendrier/add`, {
              date,
              nbPlaces: -1,
              structureId,
            }).catch((err) => {
              console.error(err);
            });
          }
        });
        indispo.map((value) => {
          if (closedDays.indexOf(value) === -1) {
            const date = value;
            Axios.delete(
              `${
                import.meta.env.VITE_PATH
              }/calendrierIndispo/?structureId=${structureId}&date=${date}`,
              [structureId, date]
            ).catch((err) => {
              console.error(err);
            });
          }
        });
        closePage ? logout() : next();
      } else if (currentStepIndex === 11 && structure === "creche") {
        Axios.put(`${import.meta.env.VITE_PATH}/agrementsCreche`, {
          nbEmployes,
          maxPlaces,
          maxHandi,
          max18Mois,
          maxNuit,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 11 && structure === "assmat") {
        Axios.put(`${import.meta.env.VITE_PATH}/agrementsAssmat`, {
          maxPlaces,
          maxHandi,
          max18Mois,
          maxNuit,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 12 && structure === "creche") {
        Axios.put(`${import.meta.env.VITE_PATH}/tarifsCreche`, {
          financementPaje,
          tarifHeure,
          tarifHoraireSpec,
          indemnRepas,
          tarifAtelier,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 12 && structure === "assmat") {
        Axios.put(`${import.meta.env.VITE_PATH}/tarifsAssmat`, {
          tarifHeure,
          tarifHoraireSpec,
          indemnRepas,
          indemnKm,
          indemnEntretien,
          tarifHeureSup,
          email,
        })
          .then(closePage ? logout() : next())
          .catch((err) => {
            console.error(err);
          });
      } else if (currentStepIndex === 14) {
        if (inputRefPmi.current !== null && inputRefPmi.current.files.length>0 ) {
          const formData = new FormData();
          formData.append("file", inputRefPmi.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/photosStructure`, formData)
            .then((result) => {
              let photoStructure = docPmi;
              if (result.data !== undefined) {
                const doc = result.data;
                photoStructure = doc;
              }
              const column = "docPmi";
              Axios.put(`${import.meta.env.VITE_PATH}/photosStructure`, {
                column,
                photoStructure,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefCni.current !== null && inputRefCni.current.files.length>0 ) {
          const formData = new FormData();
          formData.append("file", inputRefCni.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docIdentite;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docIdentite";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefCpam.current !== null && inputRefCpam.current.files.length>0) {
          const formData = new FormData();
          formData.append("file", inputRefCpam.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docVitale;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docVitale";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefDom.current !== null && inputRefDom.current.files.length>0) {
          const formData = new FormData();
          formData.append("file", inputRefDom.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docJustifDom;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docJustifDOm";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefDiplome.current !== null && inputRefDiplome.current.files.length>0) {
          const formData = new FormData();
          formData.append("file", inputRefDiplome.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docDiplome;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docDiplome";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefResp.current !== null && inputRefResp.current.files.length>0) {
          const formData = new FormData();
          formData.append("file", inputRefResp.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docRespCivile;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docRespCivile";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (inputRefAuto.current !== null && inputRefAuto.current.files.length>0) {
          const formData = new FormData();
          formData.append("file", inputRefAuto.current.files[0]);
          Axios.post(`${import.meta.env.VITE_PATH}/justificatifs`, formData)
            .then((result) => {
              let doc = docAssAuto;
              if (result.data !== undefined) {
                const docTemp = result.data;
                doc = docTemp;
              }
              const column = "docAssAuto";
              Axios.put(`${import.meta.env.VITE_PATH}/justificatifs`, {
                column,
                doc,
                email,
              }).catch((err) => {
                console.error(err);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
        if (structure === "creche") {
          Axios.put(`${import.meta.env.VITE_PATH}/verifsCreche`, {
            numAgrement,
            dateAgrement,
            siret,
            email,
          })
            .catch((err) => {
              console.error(err);
            })
            .then(closePage ? logout() : next());
        } else if (structure === "assmat") {
          Axios.put(`${import.meta.env.VITE_PATH}/verifsAssmat`, {
            numSecu,
            numAgrement,
            dateAgrement,
            assHabitNom,
            assHabitNumero,
            assHabitAdresse,
            assAutoNom,
            assAutoNumero,
            assAutoAdresse,
            email,
          })
            .catch((err) => {
              console.error(err);
            })
            .then(closePage ? logout() : next());
        }
      }
    } else logout();
  };
  return (
    <StructureContext.Provider value={{ structure, setStructure }}>
      <ResaContext.Provider value={{ resaInst, setResaInst }}>
        <form
          encType="multipart/form-data"
          className="formContainer"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="formTitleBar">
            <div className="leftPart">
              <div className="logo">
                <img src={logo} alt="logo" />
                <img src={logotxt} alt="Babyplace" />
              </div>
              <p> {pageTitle()} </p>
            </div>
            <div>
              <button type="submit" onClick={() => setClosePage(true)}>
                Enregistrer et quitter
              </button>
            </div>
          </div>
          <div className="pagination">
            <progress value={currentStepIndex} max={steps.length - 1}>
              {" "}
              {currentStepIndex + 1}
            </progress>
          </div>

          <div className="formStructureContainer">
            <div
              className={
                currentStepIndex === 6 || currentStepIndex === 7 || isLastStep
                  ? "pageChoixResa"
                  : "formStructure"
              }
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
                {resaInst !== "" || currentStepIndex !== 6 ? (
                  <button type="submit" className="nextButton">
                    {!isLastStep ? "Suivant" : "Fin"}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {currentStepIndex !== 6 &&
            currentStepIndex !== 7 &&
            currentStepIndex !== 15 ? (
              <div className="explicationsContainer">
                {screenWidth < 1000 && (
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
        </form>
      </ResaContext.Provider>
    </StructureContext.Provider>
  );
}

export default FormStructure;
