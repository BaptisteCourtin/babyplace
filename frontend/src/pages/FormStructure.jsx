import useMultistepForm from "@components/form/useMultistepForm";
import React from "react";
import "../components/form/formStructure.scss";

function FormStructure() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
  return (
    <div className="formStructureContainer">
      <form className="formStrucure">
        <div className="pagination">
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="buttonContainer">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {!isLastStep && (
            <button type="button" onClick={next}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormStructure;
