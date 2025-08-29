import { FaCheck } from 'react-icons/fa6';
import PrimaryLink from '../../components/ui/buttons/PrimaryLink';
import H3 from '../../components/ui/typography/H3';
import P from '../../components/ui/typography/P';

type TPricePlans = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  features: string[];
  url: string;
  popular?: boolean;
};

export const pricePlans: TPricePlans[] = [
  {
    id: 'button',
    title: 'Button',
    subtitle: 'basic',
    description:
      'A quick taste of the Kabutehan - perfect for curious first-timers',
    price: 599,
    features: ['Guided farm tour', 'Free mushroom tea', 'Photo spots access'],
    url: '/button',
  },
  {
    id: 'portobello',
    title: 'Portobello',
    subtitle: 'standard',
    description:
      'Hands-on experiece for visitors who want to learn and try mushroom farming',
    price: 799,
    features: [
      'Everything in Button',
      'Hands-on inoculation activty',
      'Free mushroom kit',
    ],
    url: '/portobello',
    popular: true,
  },
  {
    id: 'shiitake',
    title: 'Shiitake',
    subtitle: 'premium',
    description:
      'Full farm-to-table adventure with an immersive fungi experience',
    price: 999,
    features: [
      'Everything in Portobello',
      'Private group tour',
      'Special culinary tasting',
    ],
    url: '/shiitake',
  },
];

function PricePlan() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="p-20">
        <H3 className="mb-4 text-center">Price Plan</H3>
        <div className="grid grid-cols-3 items-stretch gap-10">
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col items-center gap-y-4 overflow-clip rounded-2xl border-[1.5px] p-8 ${plan.popular ? 'border-primary' : 'border-gray-400'}`}
            >
              {/* {plan.popular && ( */}
              {/*   <div className="absolute -top-3 rounded bg-blue-200 p-2 text-blue-700"> */}
              {/*     Most Popular */}
              {/*   </div> */}
              {/* )} */}
              {plan.popular && (
                <div className="absolute top-6 right-[-40px] rotate-45 bg-blue-600 px-10 py-2 text-center text-sm font-semibold text-white shadow-md">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col justify-center gap-y-1 text-center">
                <div className="text-2xl font-bold">{plan.title}</div>
                <div className="text-lg text-gray-500 capitalize">
                  {plan.subtitle}
                </div>
              </div>
              <P className="text-center">{plan.description}</P>
              <div className="text-5xl font-bold">₱{plan.price}</div>
              <div className="flex flex-col gap-y-4">
                {plan.features.map((feat) => (
                  <div className="flex items-center gap-x-2">
                    <FaCheck className="fill-primary" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <PrimaryLink to={'/book'} className="flex w-full justify-center">
                Book now
              </PrimaryLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricePlan;
