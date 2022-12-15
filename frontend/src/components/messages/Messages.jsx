import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Chat from "./Chat";
import axios from "axios";

const socket = io.connect("http://localhost:3001");

const Messages = ({ Nom, Email, Photo_profil, Structure_id }) => {

    const [room, setRoom] = useState("");
    const [title, setTitle] = useState("");
    const [strucData, setStrucData] = useState([]);

    const getStructureForMess = () => {
        axios.get("http://localhost:5000/structure/all")
            .then((ret) => {
                setStrucData(ret.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const joinRoom = async () => {
        console.log(room);
        await socket.emit("join_room", room);
    };

    useEffect(() => {
        getStructureForMess();
    }, [])

    return (
        <div className='messages'>
            <div className="messagesShortsAffich">
                <h2>Messagerie</h2>
                <div className="userPart">
                    <img src={Photo_profil} alt='photo de profil' id="profilImg" />
                    <div className='profilText'>
                        <p><span>{Nom}</span></p>
                        <p id="email">{Email}</p>
                    </div>
                </div>
                <div className="messages-affichage">
                    <div className="salonsMessages">
                        {strucData && strucData.filter(f => !f.Nom.includes(Nom))
                            .map((element) => (
                                <li className="contactList" key={(element.creche_id)}>
                                    <button type="button" onClick={(e) => { e.preventDefault(); setRoom(Structure_id + element.creche_id); setTitle(element.Nom) }} id="btn-affiche-con"><img src={element.Photo_profil} />{(element.Nom)}</button>
                                </li>
                            ))}

                    </div>
                </div>
            </div>
            <div className="conversationAffich">
                {room != "" ? (<Chat socket={socket} username={Nom} room={room} title={title} joinRoom={joinRoom} />) : <></>}
            </div>
        </div>


    );
}

export default Messages;
