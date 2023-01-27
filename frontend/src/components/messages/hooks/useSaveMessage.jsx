import axios from "axios";

export const saveMessage = (messageData) => {
    const { room, author, message, date } = messageData;
    axios
        .post(`${import.meta.env.VITE_PATH}/messages/sauvegarde`, {
            room,
            author,
            message,
            date,
        })
        .then((res) => {
            console.warn(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    return { saveMessage };
};