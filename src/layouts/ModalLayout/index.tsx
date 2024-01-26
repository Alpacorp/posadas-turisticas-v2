import { Context } from "@context/Context";
import { FC, useContext } from "react";

interface ModalLayoutProps {
  background: string;
  children: React.ReactNode;
  id: number;
}

export const ModalLayout: FC<ModalLayoutProps> = ({
  children,
  background,
  id,
}) => {
  const { setShowModal, showModal, setIdModal, idModal } = useContext(Context);

  return (
    // depends on the value of showModal, the modal will be shown or not and filter the data by id
    <div
      className={`${
        showModal && idModal === id ? "flex" : "hidden"
      } fixed inset-0 z-50 bg-black bg-opacity-50`}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div
          className={`flex flex-col justify-end items-center h-80 max-w-96 w-full bg-no-repeat bg-cover bg-center rounded-md shadow-md relative`}
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-linear" />
          <div className="flex justify-start items-center gap-3 z-10">
            {children}
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={() => {
            setShowModal(false);
            setIdModal(0);
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
