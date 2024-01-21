import React, { FC } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`my-3 py-1 px-10 rounded-md border capitalize text-white-color text-base bg-gray-color hover:bg-gray-800-color hover:border transition-all hover:duration-300 hover:ease-in-out hover:-translate-y-0.5 z-10
      ${className}`}
    >
      {children}
    </button>
  );
};
