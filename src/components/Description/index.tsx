import { FC } from "react";

interface DescriptionProps {
  description: string[] | string;
  id: number;
}

export const Description: FC<DescriptionProps> = ({ description, id }) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <div className="flex flex-col gap-3 text-white-color">
      {paragraphs.map((paragraph, index) => (
        <p key={id} className="text-base font-quicksand">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
