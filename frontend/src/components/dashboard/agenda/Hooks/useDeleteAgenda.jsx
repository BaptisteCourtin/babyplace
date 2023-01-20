import axios from "axios";
import { toast } from "react-hot-toast";

export const useDeleteData = (calendarIndex, getCalendar) => {
  const fullDate = async (calendarIndex) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_PATH}/calendrier/${calendarIndex}`,
        {
          id: calendarIndex,
        }
      );
      toast.success("C'est noté");
      getCalendar();
    } catch (err) {
      console.error(err.message);
    }
  };

  return { fullDate };
};
