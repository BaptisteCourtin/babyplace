import { useState } from "react";
import axios from "axios";

export const useGetReservations = (structureId) => {
  const [reser, setReser] = useState([]);
  const [approvedReser, setApprovedReser] = useState([]);
  const getReser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/reservation/${structureId}`);
      setReser(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  const getApprovedReser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/reservation/approved/${structureId}`);
      setApprovedReser(res.data);
    } catch (err) {
      console.error(err.message)
    }
  }

  return { reser, getReser, approvedReser, getApprovedReser };
};
