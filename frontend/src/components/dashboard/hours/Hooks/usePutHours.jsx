import axios from "axios";
import { toast } from "react-hot-toast";

export const usePutHours = (structureId, userType, getData, getHoraires, horairesId, toggleDay, setToggleDay) => {

  const updateTarif = async (tarif, value) => {
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/dashboard/tarif/${structureId}`, {
        id: structureId,
        tarif: tarif,
        tarifValue: value,
        table: userType === 'assMat' && tarif === 'tarifHeureSup' ? 'assMat' : 'structure'
      })
      toast.success("Vos tarifs ont bien été modifiés")
      getData()
    }
    catch (err) {
      console.error(err.message)
    }
  };

  const updateIndemn = async (indemn, value) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/dashboard/indemn/${structureId}`,
        {
          id: structureId,
          indemn,
          indemnValue: value,
          table:
            userType === "assMat" && indemn !== "indemnRepas"
              ? "assMat"
              : "structure",
        }
      );
      toast.success("Vos indemnités ont bien été modifiées");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateOptions = async (options, value) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/dashboard/options/${structureId}`,
        {
          id: structureId,
          optionsValue: value,
          options,
        }
      );
      toast.success("Vos options ont bien été modifiées");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateHours = async (value, type, state) => {
    try {
      type(value)
      await axios.put(`${import.meta.env.VITE_PATH}/dashboard/hours/${horairesId}`, {
        id: horairesId,
        value: value,
        state: state,
      })
      toast.success("Vos horaires ont bien été modifiés", {
        id: 'horaires',
        duration: 2000
      })
      getHoraires()
    } catch (err) {
      console.error(err.message)
    }
  }

  const updateDay = async (value) => {
    setToggleDay(!toggleDay);
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/horaires/day/${horairesId}`, {
        id: horairesId,
        value: value,
      });
      toast.success("Vos préférences ont bien été modifiées");
      getHoraires();
    } catch (err) {
      console.error(err.message);
    }
  };

  return { updateIndemn, updateOptions, updateTarif, updateHours, updateDay };
};
