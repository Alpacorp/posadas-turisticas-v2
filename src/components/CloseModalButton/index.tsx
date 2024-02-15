export const CloseModalButton = () => {
  return (
    <button
      className="absolute top-0 right-0 m-4 z-50"
      onClick={() => {
        setShowModal(false);
        setIdModal(0);
      }}
    >
      X
    </button>
  );
};
