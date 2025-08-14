import PrimaryLink from '../../components/ui/buttons/PrimaryLink';
import H2 from '../../components/ui/typography/H2';

export default function FinalCTA() {
  return (
    <section className="bg-primary flex min-h-[800px] flex-col items-center justify-center px-6 py-16 text-center text-white">
      {/* <section className="px-6 py-16 text-center text-black"> */}
      <H2 className="text-3xl font-bold md:text-4xl xl:text-6xl">
        🌱 Join the Kabutehan Movement Today!
      </H2>
      <p className="mx-auto mt-4 max-w-xl md:text-xl xl:max-w-4xl xl:text-xl">
        Discover the wonders of fungi — from health, food, to farming. Whether
        you're a curious foodie, <br className="hidden lg:block" /> a wellness
        seeker, or an aspiring grower, there's a place for you in our community.
      </p>
      <p className="mt-4 font-semibold italic lg:text-lg">
        Be part of the kabutihan. Be part of <span>Kabutehan</span>.
      </p>
      <PrimaryLink
        to="/get-started"
        className="text-primary mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold transition hover:bg-gray-100 lg:text-lg"
        // className="hover:bg-secondary bg-primary inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition"
      >
        Get Started
      </PrimaryLink>
    </section>
  );
}
