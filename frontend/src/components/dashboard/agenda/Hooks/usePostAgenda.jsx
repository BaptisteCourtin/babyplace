import axios from "axios";
import { toast } from "react-hot-toast";

export const usePostData = (setPlaces, date, structureId, getCalendar) => {
    const addSleepDate = async () => {
        try {
            await axios
                .post(`${import.meta.env.VITE_PATH}/calendrier/add`, {
                    date,
                    nbPlaces: -1,
                    structureId,
                })
            toast.success("Bon repos")
            getCalendar()
        } catch (err) {
            console.error(err.message)
        }
    };

    const addWorkDate = async () => {
        try {
            setPlaces(1)
            await axios
                .post(`${import.meta.env.VITE_PATH}/calendrier/add`, {
                    date,
                    nbPlaces: 1,
                    structureId,
                })
            toast.success("Travaillez bien")
            getCalendar()
        } catch (err) {
            console.error(err.message)
        }
    };

    return { addSleepDate, addWorkDate }
}