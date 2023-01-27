import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const useGetAllMessages = () => {
    const [messageAdminData, setMessageAdminData] = useState([]);
    const getAllMessages = async () => {
        try {
            const ret = await axios.get(`${import.meta.env.VITE_PATH}/contact/message/all`);
            setMessageAdminData(ret.data);
        } catch (err) {
            toast.error(err.message);
        };
    };
    return { getAllMessages, messageAdminData };
};