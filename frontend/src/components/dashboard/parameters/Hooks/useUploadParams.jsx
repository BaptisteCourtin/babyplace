import axios from "axios";
import { toast } from "react-hot-toast";

const useUploadParams = (structureId, newGetData, setNewGetData, fileName) => {
  const uploadDoc = async (value, docData, ref, table) => {
    try {
      docData = new FormData();
      docData.append("file", ref.current.files[0]);
      const res = await axios.post(
        `${import.meta.env.VITE_PATH}/uploads`,
        docData
      );
      fileName = res.data;
      await axios.put(`${import.meta.env.VITE_PATH}/dashboard/docs/`, {
        id: structureId,
        value,
        file: fileName,
        table,
      });
      toast.success("Votre profil a bien été mis à jour");
      setNewGetData(!newGetData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { uploadDoc };
};

export default useUploadParams;
