import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import FooterLite from "@components/features/components/FooterLite";
import NavbarLite from "@components/features/components/NavbarLite";
import Modal from "@components/features/components/Modal";
import { onSubmit } from "@components/features/hooks/usePostMessage";
import AideFeature from "@components/features/components/AideFeature";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [checked, setChecked] = useState(false);

  const onReset = () => {
    reset({
      prenom: "",
      nom: "",
      email: "",
      texte: "",
      optionSelected: "",
    });
  };

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

  const optionValue = [
    {
      id: 1,
      text: "besoin d'explication sur une section",
    },
    {
      id: 2,
      text: "besoin de connaître le fonctionnement du site",
    },
    {
      id: 3,
      text: "demande d'une vidéo d'explication",
    },
    {
      id: 4,
      text: "proposition de partenariat",
    },
    {
      id: 5,
      text: "toute autre question",
    },
  ];

  return (
    <div className="contact-form" id="aide">
      <NavbarLite />
      <AideFeature />
      <section id="contact">
        <h3>Contactez-nous</h3>
        <p id="question">
          Une question ? Vous souhaitez en savoir plus ? N'hésitez pas à
          utiliser le formulaire ci-dessous, nous vous répondrons dans les plus
          brefs délais.
        </p>
        <form className="formContact" onSubmit={handleSubmit(onSubmit)}>
          <div className="formContainer">
            <div className="divName">
              <label className="labelForm" htmlFor="prenom">
                Prénom <span id="obligatoire">*</span>
              </label>
              <input
                id="userName"
                type="text"
                {...register("prenom", { required: true })}
              />
            </div>
            <div className="divFirstName">
              <label className="labelForm" htmlFor="nom">
                Nom <span id="obligatoire">*</span>
              </label>
              <input
                id="userFirstName"
                type="text"
                {...register("nom", { required: true })}
              />
            </div>
            <div className="divEmail">
              <label className="labelForm" htmlFor="email">
                E-mail <span id="obligatoire">*</span>
              </label>
              <input
                id="userMail"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="divObject">
              <label className="labelForm" htmlFor="object">
                Object <span id="obligatoire">*</span>
              </label>
              <select
                className="object-select"
                {...register("optionSelected", { required: true })}
              >
                <option value=""> </option>
                {optionValue.map((opt) => {
                  return (
                    <option value={opt.text} id="optionClass">
                      {opt.text}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="divMessage">
              <label className="labelForm" htmlFor="textearea">
                Message <span id="obligatoire">*</span>
              </label>
              <textarea
                name="formulaire-message"
                id="formulaireMessage"
                {...register("texte", { required: true })}
              />
              <span id="obligatoireText">* les champs sont obligatoires</span>
            </div>
            <div className="policyTextDiv">
              <p id="policyText">
                <input
                  type="checkbox"
                  id="checkboxPolicy"
                  name="checkboxPolicy"
                  onChange={() => setChecked(!checked)}
                  required
                />{" "}
                En cliquant sur “Envoyer”, vous acceptez d'être contacté par
                l'administrateur de Babyplace ou l'agence web Dave Warehouse.
                Pour en savoir plus sur l'utilisation de vos données
                personnelles, merci de consulter la page concernant{" "}
                <HashLink to="/features#politique">
                  <span>notre politique de confidentialité</span>
                </HashLink>
                .
              </p>
            </div>
          </div>
          <button
            className="navBtnLite"
            type="submit"
            style={{
              opacity: !checked ? "0.2" : "1",
            }}
            disabled={!checked}
            onClick={openCloseModal}
          >
            Envoyer
          </button>
        </form>
      </section>
      <Modal open={isOpen} closeModal={openCloseModal} onReset={onReset} />
      <FooterLite />
    </div>
  );
};

export default Contact;
