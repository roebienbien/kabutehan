import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

function PrimaryButton({ text, className }: Props) {
  return (
    <button className={twMerge(`bg-primary text-white font-medium cursor-pointer p-2  w-32  rounded hover:bg-[#5f4b3d] ${className}`)}>
    {/* <button className={twMerge(`bg-primary text-white p-2  w-32  rounded hover:bg-secondary ${className}`)}> */}
      {text}
    </button>
  );
}

export default PrimaryButton;
