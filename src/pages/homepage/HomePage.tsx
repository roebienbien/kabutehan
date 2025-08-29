import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Hero from './Hero';
import MedicinalFungi from './MedicinalFungi';
import PricePlan from './PricePlan';
import Testimonials from './Testimonials';
import TrackRecordSection from './TrackRecordSection';

const AlternatingSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="even:bg-gray-100">{children}</div>;
};

const HomePageItems = [
  Hero,
  FAQ,
  MedicinalFungi,
  PricePlan,
  Testimonials,
  TrackRecordSection,
  FinalCTA,
];

function HomePage() {
  return (
    <div>
      {HomePageItems.map((Item, index) => (
        <AlternatingSection key={index}>
          <Item />
        </AlternatingSection>
      ))}
    </div>
  );
}

export default HomePage;
