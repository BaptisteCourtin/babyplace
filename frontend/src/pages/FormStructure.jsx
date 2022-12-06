import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState } from "react";
import Structure1 from "../components/form/Structure1";
import Structure2 from "../components/form/Structure2";
import imgDossier from "../assets/img-dossier.svg";

const INITIAL_DATA = {
  nomStructure: "",
  telephone: "",
  nomNaissance: "",
  nomUsage: "",
  prenom: "",
  adresseStructure: "",
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
      <Structure2 />,
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
            <button type="button" onClick={back}>
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
              : "Veillez à ce que votre photo montre clairement votre visage"}
          </h4>
          <p>
            {currentStepIndex === 0
              ? "En sélectionnant les catégories adéquates, vous aidez les parents à savoir à quoi s'attendre concernant l’accueil de leur enfant au sein de votre structure."
              : ""}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormStructure;
