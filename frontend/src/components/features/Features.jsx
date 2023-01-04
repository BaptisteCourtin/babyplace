import React from 'react';
import FooterLite from './FooterLite';
import NavbarLite from './NavbarLite';
import Gui from '@assets/features/Gui.png';
import Amelie from '@assets/features/Amelie.png';
import Baptiste from '@assets/features/Baptiste.png';
import Thibaud from '@assets/features/Thibaud.png';
import logoDave from '@assets/features/logoDave.png'


const Features = () => {
    return (
        <div className="features">
            <NavbarLite />
            <section id="about">
                <h3>A propos de nous</h3>
                <div className='descriptionContainer'>
                    <div className='descriptionTxt'><p>
                        Depuis 2022, l’agence Dave Warhouse propose ses services pour tous les projets de création de site et de référencement naturel. Implantée depuis sa créations à Nantes, Dave Warhouse peut vous accueillir pour améliorer nos échanges.</p><p> Nous vivons le mouvement perpétuel. Nous aimons l’évolution, matière à réflexion et à innovation. Nous faisons notre métier avec enthousiasme et engagement. L’adaptation est l’essence même de notre longévité. Notre adaptation est une force et une capacité à avancer ensemble, que nous mettons au service de nos clients.
                        </p></div>
                    <img src={logoDave} />
                </div>
            </section>
            <section id="profil">
                <h3>Nos Profils</h3>
                <div className='imgAboutUsContainer'>
                    <div><img src={Amelie} /><p>Amélie</p></div>
                    <div><img src={Baptiste} /><p>Baptiste</p></div>
                    <div><img src={Gui} /><p>Guillaume</p></div>
                    <div><img src={Thibaud} /><p>Thibaud</p></div>
                </div>
                <p>Voici notre équipe de développeur qui a participer à ce projet.
                </p>
            </section>
            <section id="technics">
                <h3>Nos caractéristiques</h3>
                <p>Mention légales



                    Le service GENIPACK de création de site Web et d’infogérance est proposé par la société CORE BNS, société par actions simplifiées, immatriculée au RCS Nanterre, sous le numéro 830 387 908, dont le siège social est sis à 23 ter rue de la Bièvre, 92340 Bourg-la-Reine, Numéro TVA Intracommunautaire : FR36830387908

                    Le site genipack.com (.fr) est hébergé par la société OVH France, société par actions simplifiée, immatriculée au RCS Lille Métropole, sous le numéro 424 761 419.

                    Propriété Intellectuelle

                    Le contenu de ce site est protégé par le droit d’auteur. Toute reproduction sans le consentement explicite de l’auteur est strictement interdite.

                    Responsabilité

                    Les documents, liens et informations contenus sur le site sont présentés à titre purement informatif et ne sauraient en aucun cas engager notre responsabilité.

                    Politique de confidentialité & données personnelles

                    GENIPACK ne collecte des informations personnelles relatives à l’utilisateur (nom, adresse e-mail…), que pour le besoin exclusif de services proposés par elle-même. Les informations recueillies via le formulaire de contact font l’objet d’un traitement informatique uniquement destiné à cette prise de contact. Les destinataires des données sont uniquement les responsables du site. Aucune donnée ne sera transmise à un tiers.

                    Des cookies (fichiers texte contenant des informations, enregistrés sur votre ordinateur par votre navigateur Internet) peuvent être créés automatiquement par certains services utilisés (réseaux sociaux, statistiques, publicités) lors de la consultation du site. Ces cookies ne contiennent aucune information confidentielle. Le visiteur est libre de les supprimer manuellement ou de les bloquer automatiquement à l’aide des fonctions de son navigateur. En utilisant notre site Internet, vous consentez à la collecte et à l’utilisation de ces données.

                    Conformément à l’article 34 de la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données recueillies.</p>
            </section>
            <FooterLite />
        </div>
    );
};

export default Features;