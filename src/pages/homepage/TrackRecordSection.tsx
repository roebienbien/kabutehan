const trackRecord = [
  {
    title: 'Launched Grow Kits',
    count: '100',
    description:
      'Empowered households and schools to cultivate mushrooms with easy-to-use kits.',
  },
  {
    title: 'Partnered with Local Farms',
    count: '5',
    description:
      'Built strong relationships with community farms to grow and distribute organic mushrooms.',
  },
  {
    title: 'Trained Individuals',
    count: '300',
    description:
      'Conducted workshops and webinars on mushroom cultivation and sustainable practices.',
  },
  {
    title: 'Featured Local Exhibits',
    count: '3',
    description:
      "Showcased Kabutehan's innovations in local sustainability and agri-tech events.",
  },
];

const TrackRecordSection = () => {
  return (
    <section className="min-h-dynamic-height flex items-center justify-center md:min-h-[800px]">
      <div className="flex flex-col items-center gap-y-4 px-8 py-8 md:gap-y-8 lg:gap-y-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:gap-y-4">
          <div className="text-primary font-bold lg:text-xl">
            Our track record
          </div>
          <div className="text-lg font-bold md:text-2xl lg:text-4xl">
            Trusted by the thousands of creators wordwide
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-20 lg:gap-x-40 lg:gap-y-10">
          {trackRecord.map((item, index) => (
            <div
              className="border-primary/40 flex flex-col border-l p-4"
              key={index}
            >
              <div className="text-primary text-lg font-bold lg:text-5xl">
                {item.count}
              </div>
              <h3 className="text-sm lg:text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
