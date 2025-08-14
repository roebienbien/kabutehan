import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const H3 = ({ children, className }: Props) => {
  return (
    <h3
      className={twMerge(
        `text-xl font-semibold sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-3xl ${className}`,
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
