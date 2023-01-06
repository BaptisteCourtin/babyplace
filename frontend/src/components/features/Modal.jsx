import React from 'react';
import mdameCoucou from '@assets/landing page/image2.svg'

const Modal = ({ open, closeModal }) => {
    if (!open) return null;
    return (
        <div className='modalDiv'>
            <div className="modalContainer">
                <div className="modalDivFirst">
                    <img src={mdameCoucou} id="mdameCouou" />
                </div>
                <div className="modalDivBis">
                    <h4>Merci pour votre message, nous vous repondrons dans les plus bref délais.</h4>
                    <button className="navBtnLite-Modal" onClick={closeModal}>Fermer</button>
                </div>
            </div>
        </div >
    );
};

export default Modal;