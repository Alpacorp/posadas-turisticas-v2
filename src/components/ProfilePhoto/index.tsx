import { FC } from "react";

interface ProfilePhotoProps {
  profile: string;
  title: string;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ profile, title }) => {
  return (
    <figure className="hover:scale-105 duration-100">
      <img
        src={profile}
        alt={title}
        className="w-24 h-24 aspect-video rounded-full border-2 border-white-color"
      />
    </figure>
  );
};
