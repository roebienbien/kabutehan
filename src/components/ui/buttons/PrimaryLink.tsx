import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = {
  to: string;
  // text: string;
  className?: string;
  children?: React.ReactNode | string;
};

function PrimaryLink({ to, className, children }: Props) {
  return (
    <Link
      to={to}
      className={twMerge(
        `bg-primary cursor-pointer rounded p-2 font-medium text-white hover:bg-[#5f4b3d] ${className}`,
      )}
    >
      {children}
    </Link>
  );
}

export default PrimaryLink;
