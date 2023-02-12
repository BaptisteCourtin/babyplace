import { useState } from "react";
import axios from "axios";

const useGetFavorites = (structureId) => {
  const [fav, setFav] = useState([]);

  const getFavorites = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/favorites/${structureId}`,
        {
          id: structureId,
        }
      );
      setFav(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { fav, getFavorites };
};

export default useGetFavorites;
