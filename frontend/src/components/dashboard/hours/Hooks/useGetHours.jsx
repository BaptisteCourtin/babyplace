import { useState, useEffect } from "react";
import axios from "axios";

export const useGetHours = (structureId, userType) => {

    const [toggleDay, setToggleDay] = useState(null);
    const [selected, setSelected] = useState(null);

    const [data, setData] = useState([]);
    const [horaires, setHoraires] = useState([]);

    const [hour1, setHour1] = useState(null)
    const [hour2, setHour2] = useState(null)
    const [hour3, setHour3] = useState(null)

    const [indemn1, setIndemn1] = useState(null);
    const [switch1, setSwitch1] = useState(() => {
        if (indemn1) {
            return true;
        }
        return false;
    });

    const [indemn2, setIndemn2] = useState(null);
    const [switch2, setSwitch2] = useState(() => {
        if (indemn2) {
            return true;
        }
        return false;
    });

    const [indemn3, setIndemn3] = useState(null);
    const [switch3, setSwitch3] = useState(() => {
        if (indemn3) {
            return true;
        }
        return false;
    });

    const getData = async () => {
        try {
            const res = await axios
                .get(`${import.meta.env.VITE_PATH}/structure/type/${structureId}?type=${userType}`, {
                    id: structureId,
                    type: userType
                })
            setData(res.data[0])
            setHour1(res.data[0].tarifHeure)
            setHour2(res.data[0].tarifHoraireSpec)
            setHour3(res.data[0].tarifHeureSup)
            setIndemn1(res.data[0].indemnEntretien)
            setIndemn2(res.data[0].indemnKm)
            setIndemn3(res.data[0].indemnRepas)
        }
        catch (err) {
            console.error(err.message)
        }
    };

    const getHoraires = async () => {
        try {
            const res = await axios
                .get(`${import.meta.env.VITE_PATH}/horaires/${structureId}`, {
                    id: structureId
                })
            setHoraires(res.data);
            setToggleDay(res.data[0].ouvert);
            setSelected(res.data[0].jourSemaine);
        }
        catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getData();
        getHoraires();
    }, []);

    return { toggleDay, setToggleDay, selected, setSelected, data, horaires, hour1, setHour1, hour2, setHour2, hour3, setHour3, indemn1, setIndemn1, indemn2, setIndemn2, indemn3, setIndemn3, switch1, setSwitch1, switch2, setSwitch2, switch3, setSwitch3, getData, getHoraires }
}