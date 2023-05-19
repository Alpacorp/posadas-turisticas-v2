import { FC } from "react";

import "./styles.css";

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};
