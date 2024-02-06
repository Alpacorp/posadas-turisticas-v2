import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "@context/Context";

import data from "@data/data.json";
import { Description } from "@components/Description";

interface ModalData {
  id: number;
  title: string;
  background: string;
  profile: string;
  location: string;
  description?: string[] | string;
}

export const ModalLayout: FC = React.memo(() => {
  const { setShowModal, showModal, setIdModal, idModal } = useContext(Context);

  const [modalData, setModalData] = useState<ModalData | null>(null);

  useEffect(() => {
    if (showModal && idModal != null) {
      const card = data.filter((card) => card.id === idModal);
      setModalData(card[0]);
    }
  }, [showModal, idModal]);

  return (
    <>
      {showModal && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-color bg-opacity-90 z-40 overflow-auto`}
        >
          <div className="absolute flex flex-col justify-center items-center h-auto max-w-2xl w-full bg-salmon-color">
            <img
              src={modalData?.background}
              alt="test"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-start items-center gap-3 text-white-color">
              <h2 className="text-2xl font-quicksand">{modalData?.title}</h2>
              <h3 className="text-base leading-none max-w-52 w-full font-quicksand">
                {modalData?.location}, Cundinamarca
              </h3>
              <div>
                {modalData?.description && (
                  <Description
                    id={modalData.id}
                    description={modalData?.description}
                  />
                )}
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md text-white-color"
              onClick={() => {
                setShowModal(false);
                setIdModal(0);
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
});
