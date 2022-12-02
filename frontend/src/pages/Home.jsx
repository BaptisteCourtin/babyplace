import { useState } from "react";
import Header from "@components/landing/header/Header";
import Navbar from "@components/landing/nav/Navbar";

import dossier from "@assets/landing/img-dossier.svg";
import time from "@assets/landing/img-time.svg";
import key from "@assets/landing/img-key.svg";
import copie from "@assets/landing/img-copie.svg";
import Footer from "@components/landing/footer/Footer";

export default function Home() {
  const [userType, setUserType] = useState("parent");

  return (
    <>
      <Navbar userType={userType} setUserType={setUserType} />
      <Header />
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
          <div className="mainApp">
            <div className="mainAppText">
              <p>Ma place en crèche 0 papier !</p>
              <p>Je télécharge l’app Babyplace !</p>
            </div>
            <img src={copie} alt="" />
          </div>
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
        <main className="homePro" />
      )}
      <Footer />
    </>
  );
}
