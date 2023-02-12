import axios from "axios";
import { toast } from "react-hot-toast";

const useDeleteData = (getCalendar) => {
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

export default useDeleteData;
