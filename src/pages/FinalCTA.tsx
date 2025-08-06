import PrimaryLink from '../components/ui/buttons/PrimaryLink';

export default function FinalCTA() {
  return (
    <section className="bg-primary flex min-h-[800px] items-center justify-center px-6 py-16 text-center text-white">
      <div className="">
        {/* <section className="px-6 py-16 text-center text-black"> */}
        <h2 className="text-3xl font-bold md:text-4xl xl:text-6xl">
          🌱 Join the Kabutehan Movement Today!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg md:text-xl xl:max-w-4xl xl:text-xl">
          Discover the wonders of fungi — from health, food, to farming. Whether
          you're a curious foodie, a wellness seeker, or an aspiring grower,
          there's a place for you in our community.
        </p>
        <p className="mt-4 text-lg font-semibold italic">
          Be part of the kabutihan. Be part of <span>Kabutehan</span>.
        </p>
        <div className="mt-8">
          <PrimaryLink
            to="/get-started"
            className="text-primary inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold transition hover:bg-gray-100"
            // className="hover:bg-secondary bg-primary inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition"
          >
            Get Started
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
