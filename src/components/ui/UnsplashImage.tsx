// components/UnsplashImage.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

type UnsplashImageProps = {
  photoId: string;
  alt?: string;
  className?: string;
};

export const getResponsiveUnsplashImage = (photoId: string) => {
  const base = `https://images.unsplash.com/photo-${photoId}`;
  return {
    src: `${base}?w=800&q=60&auto=format&fit=crop`,
    srcSet: `
      ${base}?w=480&q=40&auto=format&fit=crop 480w,
      ${base}?w=768&q=50&auto=format&fit=crop 768w,
      ${base}?w=1024&q=60&auto=format&fit=crop 1024w,
      ${base}?w=1600&q=70&auto=format&fit=crop 1600w
    `,
    sizes: `
      (max-width: 480px) 480px,
      (max-width: 768px) 768px,
      (max-width: 1024px) 1024px,
      100vw
    `,
  };
};

const UnsplashImage: React.FC<UnsplashImageProps> = ({
  photoId,
  alt = "",
  className = "",
}) => {
  const { src, srcSet, sizes } = getResponsiveUnsplashImage(photoId);

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={twMerge(`w-full h-full object-cover ${className}`)}
      loading="lazy"
    />
  );
};

export default UnsplashImage;
