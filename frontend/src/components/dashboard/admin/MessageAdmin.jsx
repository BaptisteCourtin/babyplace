import React, { useState, useEffect } from 'react';
import Nav from './Nav.admin';
import axios from 'axios';
import { AiFillCloseCircle } from "react-icons/ai";

const MessageAdmin = () => {

    const [messageAdminData, setMessageAdminData] = useState([]);

    const getAllMessage = () => {
        axios.get("http://localhost:5000/contact/message/all")
            .then((ret) => {
                console.log(ret.data);
                setMessageAdminData(ret.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const deleteMessage = (id) => {
        axios.delete(`http://localhost:5000/contact/message/all/${id}`);
    };

    useEffect(() => {
        getAllMessage();
    }, [deleteMessage])

    return (
        <div className="messageAdmin">
            <Nav />
            <div className="messageAdminList">
                <h1>Messages</h1>
                {messageAdminData &&
                    messageAdminData.map((element) => (
                        <li key={element.id}>
                            <div className="messageListAdminContainer">
                                <div className='messageListAdminHeader'>
                                    <h4>{element.prenom} {element.nom}</h4>
                                    <div className='messageListEmail'>{element.email}</div>
                                </div>
                                <div className='optionSelected'>{element.optionSelected}</div>
                                <div className='messageListAdminBody'>{element.texte}</div>
                                <button
                                    type="button"
                                    onClick={() => deleteMessage(element.id)}
                                >
                                    <AiFillCloseCircle id="messageAdminCloseBtn" />
                                </button>
                            </div>
                        </li>
                    ))}
            </div>
        </div>
    );
};

export default MessageAdmin;