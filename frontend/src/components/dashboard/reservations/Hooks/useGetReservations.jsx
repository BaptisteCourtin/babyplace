import { useState, useEffect } from "react";
import axios from "axios";

export const useGetReservations = (statusToggle) => {
    const [reser, setReser] = useState([])
    const getReser = async () => {
        try {
            const res = await axios
                .get(`${import.meta.env.VITE_PATH}/reservation`)
            setReser(res.data)
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getReser();
    }, [statusToggle]);

    return { reser, getReser }
}