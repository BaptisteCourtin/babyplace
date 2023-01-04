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
        <div className="features" id="about">
            <NavbarLite />
            <section id="about-us">
                <h3>A propos de nous</h3>
                <div className='descriptionContainer'>
                    <div className='descriptionTxt'><p>
                        Depuis 2022, l’agence Dave Warehouse propose ses services pour tous les projets de création de site et de référencement naturel. Implantée depuis sa créations à Nantes, Dave Warehouse peut vous accueillir pour améliorer nos échanges.</p><p> Nous vivons le mouvement perpétuel. Nous aimons l’évolution, matière à réflexion et à innovation. Nous faisons notre métier avec enthousiasme et engagement. L’adaptation est l’essence même de notre longévité. Notre adaptation est une force et une capacité à avancer ensemble, que nous mettons au service de nos clients.
                        </p></div>
                    <img src={logoDave} />
                </div>
            </section>
            <section id="profil">
                <h3>Nos Profils</h3>
                <p>Notre équipe de développeur ayant participée à ce projet.
                </p>
                <div>
                    <div className='imgAboutUsContainer'>
                        <ul>
                            <li><img src={Amelie} /><p>Amélie</p></li>
                            <li><img src={Baptiste} /><p>Baptiste</p></li>
                            <li><img src={Gui} /><p>Guillaume</p></li>
                            <li><img src={Thibaud} /><p>Thibaud</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="mentions">
                <h3>Mention légales</h3>
                <p>



                    L'agence Dave Warehouse de création de site Web, société par actions simplifiées, immatriculée au RCS Nanterre, sous le numéro 830 386 928, dont le siège social est sis à 23 ter rue de la Bièvre, 92340 Bourg-la-Reine, Numéro TVA Intracommunautaire : FR36830387908

                </p><p> Le site Babyplace est hébergé par la société OVH France, société par actions simplifiée, immatriculée au RCS Lille Métropole, sous le numéro 424 761 419.


                </p>
                <h4>Propriété Intellectuelle</h4>
                <p>

                    Le contenu de ce site est protégé par le droit d’auteur. Toute reproduction sans le consentement explicite de l’auteur est strictement interdite.

                </p>
                <h4>Responsabilité</h4>
                <p>
                    Les documents, liens et informations contenus sur le site sont présentés à titre purement informatif et ne sauraient en aucun cas engager notre responsabilité.

                </p>
                <h4 id="politique">Politique de confidentialité & données personnelles</h4>
                <p>                   Babyplace ne collecte des informations personnelles relatives à l’utilisateur (nom, adresse e-mail…), que pour le besoin exclusif de services proposés par elle-même. Les informations recueillies via le formulaire de contact font l’objet d’un traitement informatique uniquement destiné à cette prise de contact. Les destinataires des données sont uniquement les responsables du site. Aucune donnée ne sera transmise à un tiers.

                    Des cookies (fichiers texte contenant des informations, enregistrés sur votre ordinateur par votre navigateur Internet) peuvent être créés automatiquement par certains services utilisés (réseaux sociaux, statistiques, publicités) lors de la consultation du site. Ces cookies ne contiennent aucune information confidentielle. Le visiteur est libre de les supprimer manuellement ou de les bloquer automatiquement à l’aide des fonctions de son navigateur. En utilisant notre site Internet, vous consentez à la collecte et à l’utilisation de ces données.

                    Conformément à l’article 34 de la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données recueillies.</p>
            </section>
            <FooterLite />
        </div>
    );
};

export default Features;