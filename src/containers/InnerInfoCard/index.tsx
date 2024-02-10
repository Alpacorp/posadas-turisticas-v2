import { FC } from "react";

interface InnerInfoCardProps {
  children: React.ReactNode;
}

export const InnerInfoCard: FC<InnerInfoCardProps> = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
