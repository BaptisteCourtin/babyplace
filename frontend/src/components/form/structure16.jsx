import React from 'react';
import imgWoman from "@assets/img-time.svg";

const Structure16 = () => {
    return (
        <div className="structure16">
            <div className="pageContent">
                <h4>Hourra !</h4>
                <p>Nous avons bien pris en compte tous les éléments pour paramétrer votre profil Babyplace. </p>
                <p> Il ne reste plus qu'une dernière étape de sécurité à franchir !</p>
                <p>Nous avons besoin d'effectuer une dernière vérification avant validation définitive de votre compte sous 48h (jours ouvrés).</p>
                <img src={imgWoman} alt="femme horloge" />
            </div>
        </div>
    );
};

export default Structure16;