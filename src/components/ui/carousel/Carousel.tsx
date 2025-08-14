import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import UnsplashImage from '../UnsplashImage';
import PrimaryLink from '../buttons/PrimaryLink';
import { FaArrowRight } from 'react-icons/fa6';

type Slide = {
  title: string;
  subtitle: string;
  photoId: string;
  cta: {
    text: string;
    url: string;
  };
  className?: string;
};

type Props = {
  slides: Slide[];
  autoplayInterval?: number;
  pauseOnHover?: boolean;
};

const PhotoCarousel: React.FC<Props> = ({
  slides,
  autoplayInterval = 6_000,
  pauseOnHover = false,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect(); // initial

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(autoplay); //cleanup on unmount
  }, [emblaApi, autoplayInterval, pauseOnHover, isHovered]);

  return (
    <div
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      className="relative"
    >
      {/* Carousel Track */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[80dvh] min-w-full">
              {/* <div */}
              {/*   key={index} */}
              {/*   className="relative h-[80dvh] min-w-full flex-shrink-0" */}
              {/* > */}
              <UnsplashImage
                photoId={slide.photoId}
                alt="slide.jpeg"
                className={`h-full w-full object-cover ${slide.className}`}
              />

              {/* Card */}
              <div className="absolute inset-0 flex items-center justify-center px-4 md:justify-start md:px-16">
                <div className="flex w-full max-w-[300px] flex-col gap-y-2 rounded bg-white px-6 py-10 text-black sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 lg:text-lg">{slide.subtitle}</p>
                  <PrimaryLink
                    className="mt-6 inline-flex w-fit items-center gap-2 px-6 py-4 lg:text-xl"
                    to={slide.cta.url}
                  >
                    {slide.cta.text} <FaArrowRight />
                  </PrimaryLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-4 w-4 cursor-pointer rounded-full border border-white transition-colors ${
              index === selectedIndex ? 'bg-white' : 'hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
