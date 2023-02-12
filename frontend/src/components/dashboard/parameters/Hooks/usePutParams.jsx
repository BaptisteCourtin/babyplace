import axios from "axios";
import { toast } from "react-hot-toast";

const usePutParams = (
  structureId,
  userType,
  getData,
  infos,
  newPwd,
  cNewPwd
) => {
  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    const {
      nom,
      prenom,
      nomUsage,
      nomNaissance,
      adresse,
      email,
      telephone,
      description,
    } = infos;
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/structure/infos/${structureId}`,
        {
          table: "structure",
          id: structureId,
          adresse,
          email,
          telephone,
          description,
        }
      );
      await axios.put(
        `${import.meta.env.VITE_PATH}/structure/infos/${structureId}`,
        {
          table: userType,
          id: structureId,
          nom,
          prenom,
          nomUsage,
          nomNaissance,
        }
      );
      toast.success("Vos informations ont bien été modifiées");
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    try {
      if (newPwd && cNewPwd && newPwd === cNewPwd) {
        await axios.put(
          `${import.meta.env.VITE_PATH}/structure/password/${structureId}`,
          {
            id: structureId,
            pwd: newPwd,
          }
        );
        toast.success("Votre mot de passe a bien été modifié");
      } else {
        toast.error("Les mots de passe ne sont pas identiques");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return { handleSubmitInfo, updatePassword };
};

export default usePutParams;
