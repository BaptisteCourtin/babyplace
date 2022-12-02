import { useState } from "react";
import Header from "@components/landing/header/Header";
import Navbar from "@components/landing/nav/Navbar";
import Footer from "@components/landing/footer/Footer";

<<<<<<< HEAD
import dossier from "@assets/img-dossier.svg";
import time from "@assets/img-time.svg";
import key from "@assets/img-key.svg";
import copie from "@assets/img-copie.svg";
import imgInfo from "@assets/landing page/image2.svg";

export default function Home() {
  const [userType, setUserType] = useState("parent");
  const [carouselFirst, setCarouselFirst] = useState(true);
=======
export default function Home() {
  const [userType, setUserType] = useState("parent");
>>>>>>> 5c20ad56654f1549e2e7626aefe8a394ffb39f89

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
                professionnelles de la petite enfance
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
              <p>Je télécharge l’app Babyplace !</p>
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
<<<<<<< HEAD
        <main className="homePro">
          <section className="homeProInfo">
            <img src={imgInfo} alt="" />
            <div>
              <h2>
                Simplifiez vous la vie en choisissant un systeme de reservation
                moderne et efficace
              </h2>
              <p>
                Gerez vos reservations directement depuis votre agenda que vous
                pouvez consulter sur votre telephone, ordinateur ou tablette
                <br />
                Soyez prevenu en temps reel des annulations vous permettant
                ainsi de remplacer les places vacantes Remplacez facilement les
                absences grace aux “waiting list” des parents
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
                    Consultez en temps reel votre agenda et modifiez le en
                    quelques cliques afin d’optimiser votre temps et votre
                    rentabilite. Accessible de puis votre Smartphone, tabelle ou
                    Telephone
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
                    Choisissez le mode de notifications afin d’etre informe au
                    plus vote des annulations et des demandes de reservation.
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
                    vous permettre de vous decouvrir par les parents de votre
                    quartier.
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
                    Les parents doivent avoir prerempliss leur liste de
                    documents pour pouvoir faire des reservations Les parents
                    peuvent vous soumettre les contrats deja valide par les
                    equipes legales de Babyplabce
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
                    <p>User 1</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis assumenda aliquam molestiae rem quia velit impedit
                      quod cum aperiam eveniet quis exercitationem architecto
                      tenetur illo, perferendis sunt ab eius dolor.
                    </p>
                  </li>
                  <li>
                    <p>User 2</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis assumenda aliquam molestiae rem quia velit impedit
                      quod cum aperiam eveniet quis exercitationem architecto
                      tenetur illo, perferendis sunt ab eius dolor.
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p>User 3</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis assumenda aliquam molestiae rem quia velit impedit
                      quod cum aperiam eveniet quis exercitationem architecto
                      tenetur illo, perferendis sunt ab eius dolor.
                    </p>
                  </li>
                  <li>
                    <p>User 4</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis assumenda aliquam molestiae rem quia velit impedit
                      quod cum aperiam eveniet quis exercitationem architecto
                      tenetur illo, perferendis sunt ab eius dolor.
                    </p>
                  </li>
                </>
              )}
            </ul>
            <button
              type="button"
              onClick={() => setCarouselFirst(!carouselFirst)}
            >
              ➜
            </button>
          </section>
        </main>
=======
        <main className="homePro" />
>>>>>>> 5c20ad56654f1549e2e7626aefe8a394ffb39f89
      )}
      <Footer userType={userType} />
    </>
  );
}
