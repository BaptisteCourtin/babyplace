import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAgenda = (structureId) => {
  const [calendar, setCalendar] = useState([]);

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

  useEffect(() => {
    getCalendar();
  }, []);

  return { calendar, getCalendar };
};
