import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
	url: string
  className?: string;
	children?: React.ReactNode
};

function SecondaryLink({ url, className, children }: Props) {
  return (
    <Link
			to={url}
      className={twMerge(
        `border-primary border text-primary w-32  cursor-pointer rounded font-medium hover:bg-gray-200 ${className}`,
      )}
    >
			{children}
    </Link>
  );
}

export default SecondaryLink;
