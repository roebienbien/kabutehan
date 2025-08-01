import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  url: string;
  className?: string;
	children?: React.ReactNode
};

function PrimaryLink({ url,  className, children }: Props) {
  return (
    <Link
      to={url}
      className={twMerge(
        `bg-primary text-white font-medium cursor-pointer p-2  rounded hover:bg-[#5f4b3d] ${className}`,
      )}
    >
			{children}
    </Link>
  );
}

export default PrimaryLink;
