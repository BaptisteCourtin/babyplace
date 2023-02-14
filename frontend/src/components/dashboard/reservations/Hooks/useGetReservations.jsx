import { useState } from "react";
import axios from "axios";

const useGetReservations = (structureId) => {
  const [reser, setReser] = useState([]);
  const [approvedReser, setApprovedReser] = useState([]);

  const getReser = async (source) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/reservation/${structureId}`,
        {
          cancelToken: source.token,
        }
      );
      setReser(res.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  const getApprovedReser = async (source) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/reservation/approved/${structureId}`,
        {
          cancelToken: source.token,
        }
      );
      setApprovedReser(res.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  return { reser, getReser, approvedReser, getApprovedReser };
};

export default useGetReservations;
