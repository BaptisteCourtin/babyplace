import { useState } from "react";
import axios from "axios";

const useGetAgenda = (structureId) => {
  const [calendar, setCalendar] = useState([]);
  const [horaires, setHoraires] = useState([]);

  const getCalendar = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/calendrier/${structureId}`,
        {
          id: structureId,
        }
      );
      setCalendar(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getHoraires = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/horaires/${structureId}`,
        {
          id: structureId,
        }
      );
      setHoraires(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { calendar, getCalendar, horaires, getHoraires };
};

export default useGetAgenda;
