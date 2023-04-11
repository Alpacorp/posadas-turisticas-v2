import { FC } from "react";

import "./styles.css";

export const Card: FC = () => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(./assets/images/leona/foto_1_hacienda_la_leona.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="cardInfo">
        <div>
          <figure className="logoHouse">
            <img
              src="./assets/images/leona/logo_la_leona.png"
              alt="logo leona"
            />
          </figure>
        </div>
        <div>
          <h3>Hacienda La Leona</h3>
          <img src="./assets/images/Line_1.png" alt="divisor" />
          <div className="location">
            <figure>
              <img
                src="./assets/images/icon_gps_blanco-8_1.png"
                alt="icono gps"
              />
            </figure>
            <h4>Ubalá, Cundinamarca</h4>
          </div>
        </div>
      </div>
      <div className="cardButton">
        <button
          className="first"
          data-bs-toggle="modal"
          data-bs-target="#leona"
        >
          Información y Galería
          <img src="./assets/images/icon_clic-8_1.png" alt="icono clic" />
        </button>
      </div>
    </div>
  );
};
