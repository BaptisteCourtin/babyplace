import { useState } from "react";
import Header from "@components/landing/header/Header";
import Navbar from "@components/landing/nav/Navbar";
import Footer from "@components/landing/footer/Footer";

import dossier from "@assets/img-dossier.svg";
import time from "@assets/img-time.svg";
import key from "@assets/img-key.svg";
import copie from "@assets/img-copie.svg";
import imgInfo from "@assets/landing page/image2.svg";
import useLocalStorage from "../utils/useLocalStorage";

export default function Home() {
  const [carouselFirst, setCarouselFirst] = useState(true);
  const [userType, setUserType] = useLocalStorage("parent", "userType");

  return (
    <>
      <Navbar userType={userType} setUserType={setUserType} />
      <Header userType={userType} />
      {userType === "parent" ? (
        <main className="home">
          <h2>
            Simplifiez vous la vie avec Babyplace grace a notre logiciel de
            reservation en ligne
          </h2>
          <ul className="mainGrid">
            <li>
              <img src={dossier} alt="" />
              <p>
                Accédez aux disponibilités de dizaine de miliers de
                professionnels de la petite enfance
              </p>
            </li>
            <li>
              <img src={time} alt="" />
              <p>
                Réservez en ligne, prenez rdv 24h/24 et 7j/7 avec des crèches ou
                assistantes maternelles
              </p>
            </li>
            <li>
              <img src={key} alt="" />
              <p>
                Retrouvez votre historique de réservation et votre dossier
                petite enfance
              </p>
            </li>
          </ul>
          <section className="mainApp">
            <div className="mainAppText">
              <p>Ma place en crèche 0 papier !</p>
              <p>Je me connecte à Babyplace !</p>
            </div>
            <img src={copie} alt="" />
          </section>
          <ul className="mainDesc">
            <li>
              Selectionnez facilement les modes de garde grâce a notre agenda
              intelligent
            </li>
            <li>
              Choisissez vos modes de garde en fonction des commentaires et
              notes d’autres parents
            </li>
            <li>
              Utilisez le contrat modèle de BabyPlace pour assistante maternelle
              afin de vous assurer une protection maximale
            </li>
            <li>
              Soyez averti par notifications en temps réel des changements
              possibles de l’agenda des crèches ou ASM
            </li>
            <li>Annulez ou modifiez vos rendez-vous en 2 clics</li>
            <li>
              Notez et partagez vos expériences directement sur BabyPlace ce qui
              vous donne une plus grande transparence
            </li>
          </ul>
        </main>
      ) : (
        <main className="homePro">
          <section className="homeProInfo">
            <img src={imgInfo} alt="" />
            <div>
              <h2>
                Simplifiez-vous la vie en choisissant un système de réservation
                moderne et efficace.
              </h2>
              <p>
                Gérez vos réservations directement depuis votre agenda que vous
                pouvez consulter sur votre téléphone, tablette ou ordinateur
                <br />
                Soyez prévenu en temps réel des annulations vous permettant
                ainsi de remplacer les places vacantes
                <br />
                Remplacez facilement les absences grace aux “waiting list” des
                parents
              </p>
            </div>
          </section>
          <section className="homeProGrid">
            <div className="homeProGridTitle">
              <h2>
                Equipez vous du logiciel de gestion de place d’accueil de jeunes
                enfants le plus complet
              </h2>
              <p>Cliquez sur l’une de nos solutions pour en savoir plus</p>
            </div>
            <ul>
              <li>
                <img src={dossier} alt="" />
                <div>
                  <h3>Agenda en ligne</h3>
                  <p>
                    Consultez en temps réel votre agenda et modifiez-le en
                    quelques clics afin d’optimiser votre temps et votre
                    rentabilité. Accessible depuis votre smartphone, tablette ou
                    ordinateur.
                  </p>
                  <button type="button">
                    En savoir plus <span>➜</span>
                  </button>
                </div>
              </li>
              <li>
                <img src={time} alt="" />
                <div>
                  <h3>Soyez alertée</h3>
                  <p>
                    Choisissez le mode de notification afin d’être informé au
                    plus vite des annulations et des demandes de réservations.
                  </p>
                  <button type="button">
                    En savoir plus <span>➜</span>
                  </button>
                </div>
              </li>
              <li>
                <img src={copie} alt="" />
                <div>
                  <h3>Marketing de votre activité</h3>
                  <p>
                    Optimisez votre page profil pour vous rendre plus visible et
                    vous permettre de vous faire découvrir par les parents de
                    votre quartier.
                  </p>
                  <button type="button">
                    En savoir plus <span>➜</span>
                  </button>
                </div>
              </li>
              <li>
                <img src={key} alt="" />
                <div>
                  <h3>Communiquez avec les parents</h3>
                  <p>
                    Les parents doivent avoir préremplis leur liste de documents
                    pour pouvoir faire des réservations. Les parents peuvent
                    vous soumettre les contrats déjà validé par les équipes
                    légales de Babyplace.
                  </p>
                  <button type="button">
                    En savoir plus <span>➜</span>
                  </button>
                </div>
              </li>
            </ul>
          </section>
          <section className="homeProCarousel">
            <h2>Témoignages</h2>
            <ul className="homeProTestimonies">
              {carouselFirst ? (
                <>
                  <li>
                    <p>
                      <img
                        src="https://randomuser.me/api/portraits/thumb/men/73.jpg"
                        alt=""
                      />
                      Olympe
                    </p>
                    <p>
                      Site pratique et simple d'utilisation qui permet de
                      réserver rapidement et facilement une place en crèche
                    </p>
                    <span>⭐⭐⭐⭐⭐</span>
                  </li>
                  <li>
                    <p>
                      <img
                        src="https://randomuser.me/api/portraits/thumb/women/73.jpg"
                        alt=""
                      />
                      Marie-Françoise
                    </p>
                    <p>Permet une meilleure gestion de son agenda</p>
                    <span>⭐⭐⭐⭐⭐</span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p>
                      <img
                        src="https://randomuser.me/api/portraits/thumb/men/42.jpg"
                        alt=""
                      />
                      Eustache
                    </p>
                    <p>Très bien</p>
                    <span>⭐⭐⭐⭐⭐</span>
                  </li>
                  <li>
                    <p>
                      <img
                        src="https://randomuser.me/api/portraits/thumb/women/39.jpg"
                        alt=""
                      />
                      Cécille-Myrtille
                    </p>
                    <p>
                      M'a permis de trouver rapidement une place en crèche pour
                      mon enfant
                    </p>
                    <span>⭐⭐⭐⭐⭐</span>
                  </li>
                </>
              )}
            </ul>
            <button
              className="homeProCarouselBtn"
              type="button"
              onClick={() => setCarouselFirst(!carouselFirst)}
            >
              ➜
            </button>
          </section>
        </main>
      )}
      <Footer userType={userType} />
    </>
  );
}
