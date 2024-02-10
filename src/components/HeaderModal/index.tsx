import { FC } from "react";

import { CloseIcon } from "@components/Icons";

interface HeaderModalProps {
  title: string;
  onClose: () => void;
}

export const HeaderModal: FC<HeaderModalProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center w-full px-4 py-3 bg-white-color">
      <h2 className="text-base font-quicksand">{title}</h2>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
