import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const H2 = ({ children, className }: Props) => {
  return (
    <h2
      className={twMerge(
        `text-2xl font-semibold sm:text-[28px] md:text-3xl lg:text-[32px] xl:text-4xl ${className}`,
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
