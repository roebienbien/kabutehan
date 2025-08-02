import FAQ from "./FAQ";
import Hero from "./Hero";

function HomePage() {
  return (
    <div className="min-h-screen grid">
				<Hero />
				<FAQ />
    </div>
  );
}

export default HomePage;
