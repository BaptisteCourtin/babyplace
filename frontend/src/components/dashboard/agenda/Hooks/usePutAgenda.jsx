import axios from "axios";
import { toast } from "react-hot-toast";

const usePutData = (calendarIndex, getCalendar, getHoraires, setPlaces) => {
  const updatePlaces = async (places) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/calendrier/places/${calendarIndex}`,
        {
          id: calendarIndex,
          nbPlaces: places,
        }
      );
      toast.success("Vos places ont bien été modifiées");
      getCalendar();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateStatusClose = async (calendarIndex) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/calendrier/places/close/${calendarIndex}`,
        {
          id: calendarIndex,
        }
      );
      toast.success("Bon repos");
      getCalendar();
      setPlaces("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateStatusOpen = async (calendarIndex) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/calendrier/places/open/${calendarIndex}`,
        {
          id: calendarIndex,
          places: 1,
        }
      );
      toast.success("Travaillez bien");
      getCalendar();
      setPlaces("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateClose = async (dayId) => {
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/horaires/close/${dayId}`, {
        id: dayId,
      });
      toast.success("Bon repos");
      getHoraires();
    } catch (err) {
      console.error(err.message);
    }
  };

  return { updatePlaces, updateStatusClose, updateStatusOpen, updateClose };
};

export default usePutData;
