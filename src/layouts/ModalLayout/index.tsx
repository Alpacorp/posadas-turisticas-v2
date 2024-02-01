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
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } fixed inset-0 z-50 bg-black bg-opacity-50`}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div
          className={`flex flex-col justify-end items-center h-80 max-w-96 w-full bg-no-repeat bg-cover bg-center rounded-md shadow-md relative`}
          style={{
            backgroundImage: `url(${modalData?.background})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-linear" />
          <div className="flex justify-start items-center gap-3 z-10 text-white-color">
            <figure className="w-16 h-16">
              <img
                src={modalData?.profile}
                alt={modalData?.title}
                className="w-full h-full"
              />
            </figure>
            <h2 className="text-2xl font-quicksand">{modalData?.title}</h2>

            <figure className="w-6 h-6">
              <img
                src="/images/icon_gps_blanco.png"
                alt="Ubicación"
                className="w-full h-full"
              />
            </figure>
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
  );
});
