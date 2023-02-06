import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from 'react-icons/ai';
import { BiMailSend } from 'react-icons/bi';


function Signalement() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userType, setUserType] = useState(null);

    const getStructure = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_PATH}/admin`);
            setData(res.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    const setUnsignaled = (structureId, email) => {
        axios.put(`${import.meta.env.VITE_PATH}/admin/unsignaled/${structureId}`);
        toast.success("L'utilisateur a bien été ré-approuvé");
        getStructure();
    };

    const setSupprim = async (structureId, email) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_PATH
                }/admin/refused/${structureId}?type=${userType}`,
                {
                    id: structureId,
                    type: userType,
                }
            );
            toast.error("L'utilisateur a bien été supprimé"), sendEmailSupprimer(email), getStructure();
        } catch (err) {
            console.error(err.message);
        }
    };

    const sendEmailVerifiedAgain = async (email) => {
        try {
            await axios.post(
                `${import.meta.env.VITE_PATH}/contact/messages/reaccept`,
                { email: email, }
            );
            toast.success("Email de confirmation a bien été envoyé");
        } catch (err) {
            console.error(err.message);
        }
    };

    const sendEmailSupprimer = async (email) => {
        try {
            await axios.post(
                `${import.meta.env.VITE_PATH
                }/contact/messages/supprimer`,
                { email: email, });
            toast.error("Email de refus a bien été envoyé");
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getStructure();
    }, [setUnsignaled]);


    return (
        <main className="signalement">
            <Nav />
            <section className="signalementSection">
                <h2>Profils à controller</h2>
                <ul>
                    {data.filter((el) => el.isSignaled == 1).map((d) => (
                        <li>
                            <div className="signalementSectionImg">
                                <img src={d?.photoProfil} />
                                {d.isCreche ? (
                                    <p>{d.nom}</p>
                                ) : (
                                    <p>
                                        {d.prenom} {d.nomUsage}
                                    </p>
                                )}
                                <span><AiFillWarning id="warning" /></span>
                            </div>
                            <div className="signalementSectionInfos">
                                <p>
                                    <span>Email</span> {d.email}
                                </p>
                                <p>
                                    <span>Adresse</span> {d.adresse}
                                </p>
                            </div>
                            <div className="signalementSectionBtn">
                                <button
                                    className="btnApprovedAgain"
                                    onClick={() => {
                                        setUnsignaled(d.structureId, d.email);
                                    }}
                                >
                                    Enlever Signalement
                                </button>
                                <button
                                    className="btnMail"
                                    onClick={() => {
                                        sendEmailVerifiedAgain(d.email);
                                    }}
                                >
                                    Contacter <BiMailSend id="iconMail" />
                                </button>
                                <button
                                    className="btnCancel"
                                    onClick={() => {
                                        setSupprim(d.structureId, d.email);
                                    }}
                                >
                                    Supprimer Profil
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main >
    );
}

export default Signalement;
