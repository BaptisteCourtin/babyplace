import axios from "axios"

export const useDeleteData = (getNotifications) => {
  const deleteNotification = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_PATH}/notifications/${id}`, {
        id,
      });
      getNotifications();
    } catch (err) {
      toast.error("Could not delete the notification");
    }
  };

  const deleteDates = async () => {
    await axios.delete(`${import.meta.env.VITE_PATH}/calendrier`);
  };

  return { deleteNotification, deleteDates };
};
