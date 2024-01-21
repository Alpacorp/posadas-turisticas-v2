import { Button } from "@components/Button";
import { FC } from "react";
import iconGps from "@public/assets/images/icon_gps_blanco.png";

interface CardProps {
  background: string;
  title: string;
  location: string;
  profile: string;
}

export const Card: FC<CardProps> = ({
  background,
  title,
  location,
  profile,
}) => {
  return (
    <div
      className={`flex flex-col justify-end items-center h-80 max-w-96 w-full bg-no-repeat bg-cover bg-center rounded-md shadow-md relative`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-linear" />
      <div className="flex justify-start items-center gap-3 z-10">
        <figure className="hover:scale-105 duration-100">
          <img
            src={profile}
            alt={title}
            className="w-24 h-24 aspect-video rounded-full border-2 border-white-color"
          />
        </figure>
        <div className="flex flex-col gap-1">
          <h2 className="text-white-color text-xl font-gloria max-w-52 w-full">
            {title}
          </h2>
          <hr className="border border-white-color w-16 my-1 rounded-sm" />
          <div className="flex items-center gap-2">
            <figure>
              <img src={iconGps} alt="Ubicación" className="w-4 h-5" />
            </figure>
            <h3 className="text-white-color text-base leading-none max-w-52 w-full font-quicksand">
              {location}, Cundinamarca
            </h3>
          </div>
        </div>
      </div>
      <Button>Más Información</Button>
    </div>
  );
};
