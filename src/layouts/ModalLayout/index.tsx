import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "@context/Context";

import data from "@data/data.json";
import { Description } from "@components/Description";

import "../../index.css";

interface ModalData {
  id: number;
  title: string;
  location: string;
  background: string;
  profile: string;
  description?: string[] | string;
  youtube?: string;
  cellphone1?: string;
  cellphone2?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  whatsapp?: string;
  website?: string;
  maps?: string;
}

export const ModalLayout: FC = React.memo(() => {
  const { setShowModal, showModal, setIdModal, idModal } = useContext(Context);

  const [modalData, setModalData] = useState<ModalData>({
    id: 0,
    title: "",
    location: "",
    background: "",
    profile: "",
  });

  const {
    id,
    title,
    location,
    background,
    profile,
    description,
    youtube,
    cellphone1,
    cellphone2,
    email,
    instagram,
    facebook,
    tiktok,
    whatsapp,
    website,
    maps,
  } = modalData;

  useEffect(() => {
    if (showModal && idModal != null) {
      const card = data.filter((card) => card.id === idModal);
      setModalData(card[0]);
    }

    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal, idModal]);

  return (
    <>
      {showModal && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-color bg-opacity-90 z-40 overflow-y-auto overflow-x-auto`}
        >
          <div className="relative flex flex-col justify-center items-center h-auto max-w-3xl w-full bg-salmon-color overflow-y-auto m-auto">
            <button
              className="absolute top-0 right-0 m-4 z-50"
              onClick={() => {
                setShowModal(false);
                setIdModal(0);
              }}
            >
              X
            </button>
            <h2 className="text-2xl font-quicksand">{title}</h2>
            <h3 className="text-base leading-none max-w-52 w-full font-quicksand">
              {location}, Cundinamarca
            </h3>
            <div
              className="w-full bg-no-repeat bg-cover bg-center shadow-md relative"
              style={{
                backgroundImage: `url(${background})`,
                backgroundPositionY: "35%",
                backgroundPositionX: "center",
              }}
            >
              <img src={profile} alt="test" width={96} height={96} />
            </div>
            <div className="flex flex-col justify-start items-center gap-3 text-white-color">
              <div>
                {description && (
                  <Description id={modalData.id} description={description} />
                )}
              </div>
            </div>
            <div>
              <h3>Reservas - Contacto</h3>
              <div>
                <div>
                  <p>icono telefono</p>
                  <a href={`tel:+57${cellphone1}`}>{cellphone1}</a>
                  <a href={`tel:+57${cellphone2}`}>{cellphone2}</a>
                </div>
                <div>
                  <a href={`https://wa.me/57${whatsapp}`}>icono WhatsApp</a>
                </div>
                <div>
                  <p>icono email</p>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div>
                  <a href={`${instagram}`}>icono Instagram</a>
                </div>
                <div>
                  <a href={`${facebook}`}>icono Facebook</a>
                </div>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={youtube}
                    title={`Video ${title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div>
                  <a href={`${tiktok}`}>icono TikTok</a>
                </div>
                <div>
                  <a href={`${website}`}>{website}</a>
                </div>
                <div>
                  <a href={`${maps}`}>icono Maps</a>
                </div>
                <div>
                  <iframe
                    src={maps}
                    width="600"
                    title={`Ubicación ${title}`}
                    height="150"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
      )}
    </>
  );
});
