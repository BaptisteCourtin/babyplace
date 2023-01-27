import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const useGetMessagesFromRoom = (room) => {
    const [messageListData, setMessageListData] = useState([]);
    const getMessagesFromRoom = async () => {
        try {
            const result = await axios.get(
                `${import.meta.env.VITE_PATH}/messages/recup/${room}`,
                {
                    headers: {
                        room,
                    },
                }
            );
            setMessageListData(result.data);
        } catch (err) {
            toast.error(err.message);
        };
    };
    return { getMessagesFromRoom, messageListData };
};
