import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Li = ({ children, className }: Props) => {
  return (
    <li className={twMerge(`text-sm sm:text-base ${className}`)}>{children}</li>
  );
};

export default Li;
