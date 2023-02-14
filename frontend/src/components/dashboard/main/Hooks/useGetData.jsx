import { useState } from "react";
import axios from "axios";

const useGetAllData = (token) => {
  const [userType, setUserType] = useState(null);
  const [donnees, setDonnees] = useState({});
  const [details, setDetails] = useState([]);
  const [notif, setNotif] = useState([]);

  const getData = async (source) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/structure`, {
        headers: {
          "x-token": token,
        },
        cancelToken: source.token,
      });
      setDonnees(res.data[0]);
      if (res?.data[0]?.isCreche === 0) {
        axios
          .get(
            `${import.meta.env.VITE_PATH}/structure/details?type=assMat&id=${
              res.data[0].structureId
            }`,
            {
              id: res.data[0].structureId,
              cancelToken: source.token,
            }
          )
          .then((res) => {
            setDetails(res.data[0]);
            setUserType("assMat");
          });
      } else {
        axios
          .get(
            `${import.meta.env.VITE_PATH}/structure/details?type=creche&id=${
              res.data[0].structureId
            }`,
            {
              id: res.data[0].structureId,
              cancelToken: source.token,
            }
          )
          .then((res) => {
            setDetails(res.data[0]);
            setUserType("creche");
          });
      }
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  const data = Object?.assign(donnees, details);

  const getNotifications = async (source) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/notifications/${data.structureId}`,
        {
          id: data.structureId,
          cancelToken: source.token,
        }
      );
      setNotif(res.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  return { getData, data, userType, donnees, details, notif, getNotifications };
};

export default useGetAllData;
