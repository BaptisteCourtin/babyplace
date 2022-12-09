import React from "react";
import profil from "@assets/avatar1.svg";



const Messages = ({ donnees }) => {
    const { Nom, Email, Photo_profil } = donnees;
    console.log(Photo_profil);
    return (
        <div>
            <div>
                <div className='messages'>
                    <div className="messagesShortsAffich">
                        <h2>Messages</h2>
                        <div className="userPart">
                            <img src={Photo_profil} alt='photo de profil' id="profilImg" /><div className='profilText'>
                                <p><span>{Nom}</span></p>
                                <p id="email">{Email}</p>
                            </div>
                        </div>
                        <div className="messages-affichage">
                            <div className="salonsMessages">
                                daeeds
                            </div>
                        </div>
                    </div>
                    <div className="conversationAffich">
                        aaaaaaaaa
                    </div>
                </div>
                <div className="messages-affichage" />
            </div >
            <div className="conversationAffich" />
        </div >
    );
}

export default Messages;
