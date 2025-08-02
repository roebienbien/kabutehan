import Carousel from "../components/ui/carousel/Carousel";

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

const carouselSlides: Slide[] = [
  {
    title: "Explore Rare and Wild Fungi",
    subtitle:
      "Dive into interactive exhibits that showcase the beauty and science of mushrooms.",
    photoId: "1509470159718-4e7ad930cf7a", // Replace with your actual image path
    cta: {
      text: "Learn More",
      url: "/exhibits",
    },
    className: "scale-x-[-1]",
  },
  {
    title: "Learn the Science of Mycology",
    subtitle: "Join hands-on classes, guided tours, and expert-led lectures.",
    photoId: "1662974555158-a97c4454accf",
    cta: {
      text: "View Schedule",
      url: "/workshops",
    },
  },
  {
    title: "From Plate to Healing",
    subtitle:
      "Discover the culinary and medicinal uses of mushrooms in Filipino culture and beyond.",
    photoId: "1492574037190-8b88b600ca50",
    cta: {
      text: "See What's Inside",
      url: "/medicinal",
    },
  },
  {
    title: "Fungi for a Greener Tomorrow",
    subtitle: "Learn how mushrooms help restore ecosystems and reduce waste.",
    photoId: "1550824730-05ededc35e7a",
    cta: {
      text: "Get Involved",
      url: "/sustainability",
    },
  },
];

function Hero() {
  return (
    <div className="">
      <Carousel slides={carouselSlides} autoplayInterval={10_000} />
    </div>
  );
}

export default Hero;
