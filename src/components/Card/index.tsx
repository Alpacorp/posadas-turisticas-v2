import { FC } from "react";
import { Button } from "../Button";

import "./styles.css";

export const Card: FC = () => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(https://posadasturisticas.cundinamarca.gov.co/assets/images/leona/foto_1_hacienda_la_leona.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="card-info">
        <figure>
          <img
            src="https://posadasturisticas.cundinamarca.gov.co/assets/images/leona/logo_la_leona.png"
            alt=""
          />
        </figure>
        <div className="info-text">
          <h2>Hacienda la Leona</h2>
          <p>Ubalá, Cundinamarca</p>
        </div>
      </div>
      <Button>Información y Galería</Button>
    </div>
  );
};
