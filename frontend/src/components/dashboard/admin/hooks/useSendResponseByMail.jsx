import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const useSendResponseByMail = (datas) => {
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const sendRespons = async () => {
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_PATH}/contact/messages/repondre`,
                datas
            );
            setMessage("");
            setObjet("");
            closeMod();
            console.warn(res.data);
            toast.success("Votre mail a bien été envoyé !");
        } catch (err) {
            console.error(err.response);
            toast.error(err.message);
        }
    };
    return { sendRespons, message, objet }
};