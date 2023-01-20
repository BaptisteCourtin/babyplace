import axios from "axios";
import { toast } from "react-hot-toast";

export const usePutReservations = (getReser) => {
  const updateStatus = async (status, reserId) => {
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/reservation/status`, {
        status,
        id: reserId,
      });
      if (status === "approved") {
        toast.success("Vous avez accepté cette demande");
      } else if (status === "refused") {
        toast.success("Vous avez refusé cette demande");
      }
      getReser();
    } catch (err) {
      console.log(err.message);
    }
  };

  return { updateStatus };
};
