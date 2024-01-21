import { FC } from "react";

interface MainNameProps {
  title: string;
}

export const MainName: FC<MainNameProps> = ({ title }) => {
  return (
    <h2 className="text-white-color text-xl font-gloria max-w-52 w-full">
      {title}
    </h2>
  );
};
