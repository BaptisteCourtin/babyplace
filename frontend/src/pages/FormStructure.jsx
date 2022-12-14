import useMultistepForm from "@components/form/useMultistepForm";
import React, { useState, useContext } from "react";
import { StructureContext } from "@components/context/StructureContext";
import { ResaContext } from "@components/context/ResaContext";
import Structure1 from "../components/form/Structure1";
import Structure2 from "../components/form/Structure2";
import Structure3 from "../components/form/Structure3";
import Structure4 from "../components/form/Structure4";
import Structure5 from "../components/form/Structure5";
import Structure6 from "../components/form/Structure6";
import Structure7 from "../components/form/Structure7";
import Structure8 from "../components/form/Structure8";
import imgDossier from "../assets/img-dossier.svg";
import imgCopie from "../assets/landing page/image2.svg";
import selfie from "../assets/selfie.svg";
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
  photo1Src: "https://via.placeholder.com/240x160.png?text=photo+1",
  photo2Src: "https://via.placeholder.com/240x160.png?text=photo+2",
  photo3Src: "https://via.placeholder.com/240x160.png?text=photo+3",
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
  albumPhoto: false,
  photoPonnecte: false,
  resaInst: "",
};

function FormStructure() {
  const [data, setData] = useState(INITIAL_DATA);
  const [structure, setStructure] = useState("");
  const [resa, setResa] = useState("");
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
      <Structure6 />,
      <Structure7 {...data} updateFields={updateFields} />,
      <Structure8 {...data} />,
    ]);
  return (
    <StructureContext.Provider value={{ structure, setStructure }}>
      <ResaContext.Provider value={{ resa, setResa }}>
        <div className="formContainer">
          <div className="formTitleBar">
            <div className="leftPart">
              <h4>Babyplace</h4>
              <p>
                {currentStepIndex === 0
                  ? "Structure d'accueil"
                  : currentStepIndex === 1 || currentStepIndex === 2
                  ? "Photos"
                  : currentStepIndex === 3 || currentStepIndex === 4
                  ? "Présentation"
                  : currentStepIndex === 5
                  ? "Conditions d’utilisation"
                  : currentStepIndex === 6
                  ? "Règlement intérieur"
                  : ""}
              </p>
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
            <form
              className={
                currentStepIndex === 6 || currentStepIndex === 7
                  ? "pageChoixResa"
                  : "formStructure"
              }
            >
              {step}
              <div className="buttonContainer">
                {!isFirstStep && (
                  <button type="button" className="backButton" onClick={back}>
                    Précédent
                  </button>
                )}
                {resa !== "" || currentStepIndex !== 6 ? (
                  <button type="button" className="nextButton" onClick={next}>
                    {!isLastStep ? "Suivant" : "Fin"}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </form>
            {(currentStepIndex !== 6) & (currentStepIndex !== 7) ? (
              <div className="explicationsContainer">
                <div className="innerContainer">
                  {currentStepIndex === 0 ? (
                    <img
                      src={imgDossier}
                      className="illustrationSection"
                      width="60%"
                      alt="illustration dossiers"
                    />
                  ) : currentStepIndex === 1 ? (
                    <img
                      src={selfie}
                      className="illustrationSection"
                      width="60%"
                      alt="illustration selfie"
                    />
                  ) : (
                    currentStepIndex === 4 && (
                      <img
                        src={imgCopie}
                        className="illustrationSection"
                        width="80%"
                        alt="illustration impression"
                      />
                    )
                  )}

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
                  {(currentStepIndex === 3) & (structure === "assmat") ? (
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
                        mois à 12 ans. J'ai une expérience en garde d'enfants de
                        quelques années.
                      </p>
                    </div>
                  ) : (currentStepIndex === 3) & (structure === "creche") ? (
                    <div className="descExamples">
                      <div className="imgTitleContainer">
                        <img src={profilCPP} alt="profil CPP" />
                        <h5>
                          Crèche Picoti Picota <br />
                          <span>Crèche parentale</span>
                        </h5>
                      </div>
                      <p>
                        Notre structure accueille vos enfants de 3 mois à 4 ans
                        dans un cadre chaleureux, sécurisant et spécialement
                        aménagé pour le développement de chaque enfant. Nos
                        points forts : un grand local, lumineux et coloré et un
                        jardin de 50 m² environ. Avec des équipes dynamiques et
                        pleines d'idées, les activités ne manquent pas pour
                        l'éveil et l'épanouissement de vos petits bouts !
                      </p>
                    </div>
                  ) : (
                    ""
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
                  {currentStepIndex === 5 && <img src={imgDossier} />}
                </div>
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
