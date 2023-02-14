import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const useGetAllMessages = () => {
  const [messageAdminData, setMessageAdminData] = useState([]);

  const getAllMessages = async (source) => {
    try {
      const ret = await axios.get(
        `${import.meta.env.VITE_PATH}/contact/message/all`,
        {
          cancelToken: source.token,
        }
      );
      setMessageAdminData(ret.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
        toast.error(err.message);
      }
    }
  };
  return { getAllMessages, messageAdminData };
};

export default useGetAllMessages;
