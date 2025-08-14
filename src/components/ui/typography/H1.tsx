import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={twMerge(
        `text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${className}`,
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
