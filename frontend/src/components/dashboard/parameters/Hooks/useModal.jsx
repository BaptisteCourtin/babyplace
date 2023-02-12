const useModal = (setDeleteModal) => {
  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  return { openDeleteModal, closeDeleteModal };
};

export default useModal;
