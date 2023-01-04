import React from 'react';
import FooterLite from './FooterLite';
import NavbarLite from './NavbarLite';
import { HashLink } from 'react-router-hash-link';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <NavbarLite />
            <section id="contact-us">
                <h3>Contactez-Nous</h3>
                <form className='formContact'>
                    <div className="formContainer">
                        <div className='divName'>
                            <label className='labelForm' for="nom">Nom</label>

                            <input id="userName" type="text" name="nom"
                                required></input>
                        </div>
                        <div className='divFirstName'>
                            <label className='labelForm' for="prenom">Prénom</label>
                            <input id="userFirstName" type="text" name="prenom"
                                required></input>
                        </div>
                        <div className='divEmail'>
                            <label className='labelForm' for="email">E-mail</label>
                            <input id="userMail" type="email" name="email"
                                required></input>
                        </div>
                        <div className='divMessage'>
                            <label className="labelForm" for="textearea">Message</label>

                            <textarea name="formulaire-message" id="formulaireMessage" required></textarea>
                        </div>

                        <div className='policyTextDiv'>
                            <p id="policyText"><input type="checkbox"></input> En cliquant sur “Envoyer” vous acceptez d'être contactés par l'agence web Dave Warehouse. Pour en savoir plus sur l'utilisation de vos données
                                personnelles, merci de consulter la page concernant <HashLink to="/features#politique"><span>notre politique de confidentialité</span></HashLink>.</p>
                        </div>

                    </div>

                </form>

            </section>
            <section id="aide">


            </section>
            <FooterLite />
        </div>
    );
};

export default Contact;