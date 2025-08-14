import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const P = ({ children, className }: Props) => {
  return (
    <p className={twMerge(`text-sm sm:text-base ${className}`)}>{children}</p>
  );
};

export default P;
