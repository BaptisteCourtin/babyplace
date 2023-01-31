import React from "react";
import { HashLink } from "react-router-hash-link";
import FooterLite from "./components/FooterLite";
import NavbarLite from "./components/NavbarLite";

function Faq(props) {
  return (
    <div className="faq" id="faq">
      <NavbarLite />
      <section id="faq-form">
        <h3>FAQ</h3>
        <div className="questionContainer">
          <ul>
            <li>
              <HashLink smooth to="/faq#1">
                Qui édite le site Babyplace ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#2">
                Quel est le but de Babyplace ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#3">
                Je suis tombé sur une page d'erreur 404, que faire ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#4">
                Comment poser des questions à l'équipe de Babyplace ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#5">
                Babyplace est-il déclaré à la CNIL ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#6">
                Est-il possible de mettre en place des partenariats ?
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#7">
                Est-il possible de diffuser ses publicités sur Babyplace ?
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="questionReponseContainer">
          <h4 id="1">Qui édite le site Babyplace ?</h4>
          <p>
            Babyplace est édité par la société DaveWarehouse, agence web basée à
            Nantes. L'intégralité du contenu présent sur le site, ainsi que la
            promotion du site, est effectuée par DaveWarehouse. Pour plus de
            détails, consultez la page de{" "}
            <HashLink to="/features#mentions">mentions légales</HashLink>.
          </p>
          <h4 id="2">Quel est le but de Babyplace ?</h4>
          <p>
            Babyplace a pour objectif d'être le premier portail français autour
            de la garde des jeunes enfants. Le site propose de nombreux
            services, aux particuliers comme aux professionnels, liés à
            l'accueil de la petite enfance en France.
          </p>
          <h4 id="3">Je suis tombé sur une page d'erreur 404, que faire ?</h4>
          <p>
            Nous vous invitons à nous signaler le problème via le{" "}
            <HashLink to="/contact#contact">formulaire de contact</HashLink>, en
            nous indiquant l'adresse de la page d'erreur, située en haut de
            votre navigateur et qui commence par «babyplace.fr». Veuillez aussi
            nous indiquer la page où se trouvait le lien qui vous a mené à la
            page d'erreur. Ces signalements nous permettront d'améliorer
            Babyplace.
          </p>
          <h4 id="4">Comment poser des questions à l'équipe de Babyplace ?</h4>
          <p>
            Le <HashLink to="/contact#contact">formulaire de contact</HashLink>{" "}
            vous permet de contacter notre équipe en quelques clics, mais vous
            pouvez aussi poser vos questions via Twitter, en indiquant notre
            compte (@babyplace) dans votre message.
          </p>
          <h4 id="5">Babyplace est-il déclaré à la CNIL ?</h4>
          <p>
            Le site est déclaré à la CNIL (Commission nationale de
            l'informatique et des libertés) sous le numéro 1561979.
          </p>
          <h4 id="6">Est-il possible de mettre en place des partenariats ?</h4>
          <p>
            Nous sommes ouverts à de nombreuses formes de partenariats, à
            condition que l'internaute soit respecté. Le{" "}
            <HashLink to="/contact#contact">formulaire de contact</HashLink>{" "}
            vous permet de nous décrire le partenariat que vous recherchez.
          </p>
          <h4 id="7">
            Est-il possible de diffuser ses publicités sur Babyplace ?
          </h4>
          <p>
            Nous avons prévu plusieurs espaces permettant de diffuser ses
            publicités sur les pages de notre site, pour connaitre les formats
            possibles et les tarifs, utilisez le{" "}
            <HashLink to="/contact#contact">formulaire de contact</HashLink>.
          </p>
        </div>
      </section>
      <FooterLite />
    </div>
  );
}

export default Faq;
