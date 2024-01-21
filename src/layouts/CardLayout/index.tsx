import { Button } from "@components/Button";
import { FC } from "react";

interface CardLayoutProps {
  background: string;
  children: React.ReactNode;
  id: number;
}

export const CardLayout: FC<CardLayoutProps> = ({
  children,
  background,
  id,
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
        {children}
      </div>
      <Button
        onClick={() => {
          console.log(id);
        }}
      >
        Más Información
      </Button>
    </div>
  );
};
