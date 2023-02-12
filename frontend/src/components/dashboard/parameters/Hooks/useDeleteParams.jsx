import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeleteParams = (email, deleteMail, structureId, userType) => {
  const navigate = useNavigate();

  const deleteAccount = async (e) => {
    e.preventDefault();
    try {
      if (deleteMail === email) {
        await axios.delete(
          `${
            import.meta.env.VITE_PATH
          }/admin/refused/${structureId}?type=${userType}`,
          {
            id: structureId,
            type: userType,
          }
        );
        toast.success("Votre compte a bien été supprimé");
        navigate("/");
      } else if (deleteMail !== email) {
        toast.error("Mauvaise adresse mail");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return { deleteAccount };
};

export default useDeleteParams;
