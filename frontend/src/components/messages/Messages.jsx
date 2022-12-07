import React from 'react';
import profil from '@assets/avatar1.svg'

const Messages = () => {
    return (
        <div className='messages'>
            <div className="messagesShortsAffich">
                <h2>Messages</h2>
                <div className="userPart">
                    <img src={profil} alt='photo de profil' /><div className='profilText'>
                        <p><span>Name</span></p>
                        <p id="email">Email</p>
                    </div>
                </div>
                <div className="messages-affichage">


                </div>
            </div>
            <div className="conversationAffich"></div>
        </div>
    );
};

export default Messages;