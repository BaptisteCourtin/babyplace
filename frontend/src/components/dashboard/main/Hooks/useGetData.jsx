import { useState } from "react";
import axios from "axios";

export const useGetAllData = (token) => {
  const [userType, setUserType] = useState(null);
  const [donnees, setDonnees] = useState({});
  const [details, setDetails] = useState([]);
  const [notif, setNotif] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/structure`, {
        headers: {
          "x-token": token,
        },
      });
      setDonnees(res.data[0]);
      if (res.data[0].isCreche === 0) {
        axios
          .get(
            `${import.meta.env.VITE_PATH}/structure/details?type=assMat&id=${
              res.data[0].structureId
            }`,
            {
              id: res.data[0].structureId,
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
            }
          )
          .then((res) => {
            setDetails(res.data[0]);
            setUserType("creche");
          });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const data = Object.assign(donnees, details);

  const getNotifications = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PATH}/notifications/${data.structureId}`,
        {
          id: data.structureId,
        }
      );
      setNotif(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { getData, data, userType, donnees, details, notif, getNotifications };
};
