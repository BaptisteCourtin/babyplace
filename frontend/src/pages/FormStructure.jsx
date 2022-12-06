import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState } from "react";
import Structure1 from "../components/form/Structure1";
import Structure2 from "../components/form/Structure2";
import Structure3 from "../components/form/Structure3";
import imgDossier from "../assets/img-dossier.svg";

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
  photo1Src: "https://via.placeholder.com/200x150.png?text=photo+1",
  photo2Src: "https://via.placeholder.com/200x150.png?text=photo+2",
  photo3Src: "https://via.placeholder.com/200x150.png?text=photo+3",
};

function FormStructure() {
  const [data, setData] = useState(INITIAL_DATA);
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
    ]);
  return (
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
        <div>
          <img
            src={currentStepIndex === 0 ? imgDossier : ""}
            className="illustration section"
            width="50%"
          />
          <h4>
            {currentStepIndex === 0
              ? "Choisissez votre catégorie d’annonce"
              : currentStepIndex === 1
                ? "Veillez à ce que votre photo montre clairement votre visage"
                : currentStepIndex === 2
                  ? "Conseils rapides pour des photos de qualité"
                  : ""}
          </h4>
          <pre>
            {currentStepIndex === 0
              ? "En sélectionnant les catégories adéquates, vous aidez les parents à savoir à quoi s'attendre concernant l’accueil de leur enfant au sein de votre structure."
              : currentStepIndex === 2
                ? "Désencombrez votre pièce. \nUtilisez la lumière naturelle du jour et évitez le flash. \nPrenez des photos en mode paysage depuis les coins des pièces. \nCentrez la prise de vue à égale distance entre le sol et le plafond. \nMettez en valeur les équipements et jeux d’éveil."
                : ""}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default FormStructure;
