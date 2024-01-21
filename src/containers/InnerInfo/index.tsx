import { FC } from "react";

interface InnerInfoProps {
  children: React.ReactNode;
}

export const InnerInfo: FC<InnerInfoProps> = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
