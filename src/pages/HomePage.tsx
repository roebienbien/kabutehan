import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Hero from './Hero';
import Testimonials from './Testimonials';

const AlternatingSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="even:bg-gray-100">{children}</div>;
};

const HomePageItems = [Hero, FAQ, FinalCTA, Testimonials];

function HomePage() {
  return (
    <div className="grid">
      {HomePageItems.map((Item, index) => (
        <AlternatingSection key={index}>
          <Item />
        </AlternatingSection>
      ))}
    </div>
  );
}

export default HomePage;
