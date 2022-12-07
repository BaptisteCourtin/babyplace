import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState, createContext } from "react";
import Proptypes from "prop-types";
import Structure1 from "../components/form/Structure1";
import Structure2 from "../components/form/Structure2";
import Structure3 from "../components/form/Structure3";
import Structure4 from "../components/form/Structure4";
import Structure5 from "../components/form/Structure5";
import imgDossier from "../assets/img-dossier.svg";
import profilJM from "../assets/profilJM.png";
import profilCPP from "../assets/profilCPP.jpg";

const INITIAL_DATA = {
  typeStructure: "",
  typeCreche: "",
  nomStructure: "",
  telephone: "",
  nomNaissance: "",
  nomUsage: "",
  prenom: "",
  adresseStructure: "",
  imageProfilSrc: "https://via.placeholder.com/150.png?text=photo",
  photo1Src: "https://via.placeholder.com/240x135.png?text=photo+1",
  photo2Src: "https://via.placeholder.com/240x135.png?text=photo+2",
  photo3Src: "https://via.placeholder.com/240x135.png?text=photo+3",
  description: "",
  PCSC1: false,
  nesting: false,
  motessori: false,
  handi: false,
  jardin: false,
  sorties: false,
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
  album_photo: false,
  photo_connecte: false,
};
export const StructureContext = createContext("");

function FormStructure() {
  const [data, setData] = useState(INITIAL_DATA);
  const [structure, setStructure] = useState("");
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Structure1 {...data} updateFields={updateFields} />,
      <Structure2 {...data} updateFields={updateFields} />,
      <Structure3 {...data} updateFields={updateFields} />,
      <Structure4 {...data} updateFields={updateFields} />,
      <Structure5 {...data} updateFields={updateFields} />,
    ]);
  return (
    <StructureContext.Provider value={{ structure, setStructure }}>
      <div className="formStructureContainer">
        <form className="formStructure">
          <div className="pagination">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div className="buttonContainer">
            {!isFirstStep && (
              <button type="button" className="backButton" onClick={back}>
                Précédent
              </button>
            )}
            <button type="button" onClick={next}>
              {!isLastStep ? "Suivant" : "Fin"}
            </button>
          </div>
        </form>
        <div className="explicationsContainer">
          <div className="innerContainer">
            <img
              src={currentStepIndex === 0 ? imgDossier : ""}
              className="illustrationSection"
              width="50%"
              alt="illustration dossiers"
            />
            <h4>
              {currentStepIndex === 0
                ? "Choisissez votre catégorie d’annonce"
                : currentStepIndex === 1
                  ? "Veillez à ce que votre photo montre clairement votre visage"
                  : currentStepIndex === 2
                    ? "Conseils rapides pour des photos de qualité"
                    : currentStepIndex === 3
                      ? "Inspirez vous des annonces Babyplace"
                      : currentStepIndex === 4
                        ? "Valorisez votre expérience et vos services"
                        : ""}
            </h4>
            {currentStepIndex === 3 && (
              <div className="descExamples">
                <div className="imgTitleContainer">
                  <img src={profilJM} alt="profil JM" />
                  <h5>
                    Jeanne-Marie Dupont <br />
                    <span>Assistante maternelle</span>
                  </h5>
                </div>
                <p>
                  Agréée depuis 2013, je vous propose mes services pour garder
                  votre ou vos enfants à mon domicile, rez-de-chaussée avec
                  jardin, proche du tram. Je suis maman de 3 enfants et mamie de
                  5 petits enfants de 3 mois à 12 ans. J'ai une expérience en
                  garde d'enfants de quelques années.
                </p>{" "}
                <br />{" "}
                <div className="imgTitleContainer">
                  <img src={profilCPP} alt="profil CPP" />
                  <h5>
                    Crèche Picoti Picota <br />
                    <span>Crèche parentale</span>
                  </h5>
                </div>
                <p>
                  Notre structure accueille vos enfants de 3 mois à 4 ans dans
                  un cadre chaleureux, sécurisant et spécialement aménagé pour
                  le développement de chaque enfant. Nos points forts : un grand
                  local, lumineux et coloré et un jardin de 50 m² environ. Avec
                  des équipes dynamiques et pleines d'idées, les activités ne
                  manquent pas pour l'éveil et l'épanouissement de vos petits
                  bouts !{" "}
                </p>
              </div>
            )}
            <pre>
              {currentStepIndex === 0
                ? "En sélectionnant les catégories adéquates, vous aidez les parents à savoir à quoi s'attendre concernant l’accueil de leur enfant au sein de votre structure."
                : currentStepIndex === 2
                  ? "Désencombrez votre pièce. \nUtilisez la lumière naturelle du jour et évitez le flash. \nPrenez des photos en mode paysage depuis les coins des pièces. \nCentrez la prise de vue à égale distance entre le sol et le plafond. \nMettez en valeur les équipements et jeux d’éveil."
                  : currentStepIndex === 4
                    ? "Il s’agit en général des services que les parents souhaitent retrouver pour l’accueil de leurs enfants. Vous pourrez en ajouter d’autres après la publication."
                    : ""}
            </pre>
          </div>
        </div>
      </div>
    </StructureContext.Provider>
  );
}

export default FormStructure;
