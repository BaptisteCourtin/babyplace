import React from 'react';
import FooterLite from './FooterLite';
import NavbarLite from './NavbarLite';
import { HashLink } from 'react-router-hash-link';

const Contact = () => {
    return (
        <div className='contact-form' id='aide'>
            <NavbarLite />

            <section className="aide">
                <h3>Aide</h3>
                <p>Besoin d'aide n'hésitez pas à utiliser notre formulaire de contact ci-dessous, pour poser vos questions.
                    Nous vous repondrons dans les plus bref délai.</p>
            </section>

            <section id="contact">
                <h3>Contactez-Nous</h3>
                <form className='formContact'>
                    <div className="formContainer">
                        <div className='divName'>
                            <label className='labelForm' for="nom">Nom</label>

                            <input id="userName" type="text" name="nom"
                                required />
                        </div>
                        <div className='divFirstName'>
                            <label className='labelForm' for="prenom">Prénom</label>
                            <input id="userFirstName" type="text" name="prenom"
                                required />
                        </div>
                        <div className='divEmail'>
                            <label className='labelForm' for="email">E-mail</label>
                            <input id="userMail" type="email" name="email"
                                required />
                        </div>
                        <div className='divMessage'>
                            <label className="labelForm" for="textearea">Message</label>

                            <textarea name="formulaire-message" id="formulaireMessage" required></textarea>
                        </div>

                        <div className='policyTextDiv'>
                            <p id="policyText"><input type="checkbox" /> En cliquant sur “Envoyer” vous acceptez d'être contactés par l'agence web Dave Warehouse. Pour en savoir plus sur l'utilisation de vos données
                                personnelles, merci de consulter la page concernant <HashLink to="/features#politique"><span>notre politique de confidentialité</span></HashLink>.</p>
                        </div>

                    </div>

                    <button className='navBtnLite'>Envoyer</button>

                </form>

            </section>
            <FooterLite />
        </div>
    );
};

export default Contact;