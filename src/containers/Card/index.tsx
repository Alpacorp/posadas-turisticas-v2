import { FC } from "react";
import iconGps from "@assets/images/icon_gps_blanco.png";
import { CardLayout } from "@layouts/CardLayout";
import { ProfilePhoto } from "@components/ProfilePhoto";
import { InnerInfoCard } from "@containers/InnerInfoCard";
import { MainName } from "@components/MainName";
import { Divisor } from "@components/Divisor";

interface CardProps {
  background: string;
  title: string;
  location: string;
  profile: string;
  id: number;
}

export const Card: FC<CardProps> = ({
  background,
  title,
  location,
  profile,
  id,
}) => {
  return (
    <CardLayout background={background} id={id}>
      <ProfilePhoto profile={profile} title={title} />
      <InnerInfoCard>
        <MainName title={title} />
        <Divisor />
        <div className="flex items-center gap-2">
          <figure>
            <img src={iconGps} alt="Ubicación" className="w-4 h-5" />
          </figure>
          <h3 className="text-white-color text-base leading-none max-w-52 w-full font-quicksand">
            {location}, Cundinamarca
          </h3>
        </div>
      </InnerInfoCard>
    </CardLayout>
  );
};
