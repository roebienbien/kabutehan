import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

function SecondaryButton({ text, className }: Props) {
  return (
    <button
      className={twMerge(
        `border-primary border text-primary w-32  cursor-pointer rounded font-medium hover:bg-gray-200 ${className}`,
      )}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
