import { useState } from "react";
import axios from "axios";

const useGetFavorites = (structureId) => {
  const [fav, setFav] = useState([]);

  const getFavorites = async (source) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/favorites/${structureId}`,
        {
          id: structureId,
          cancelToken: source.token,
        }
      );
      setFav(res.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  return { fav, getFavorites };
};

export default useGetFavorites;
