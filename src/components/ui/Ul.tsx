import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Ul = ({ children, className }: Props) => {
  return <ul className={twMerge(`flex gap-x-2 ${className}`)}>{children}</ul>;
};

export default Ul;
