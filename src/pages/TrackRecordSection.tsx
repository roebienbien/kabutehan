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
    <section className="min-h-dynamic-height">
      <div className="flex flex-col gap-y-4 px-8 py-8">
        <div className="flex flex-col gap-y-4">
          <div className="">Our track record</div>
          <div className="text-2xl">
            Truted by the thousands of creators wordwide
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2">
          {trackRecord.map((item, index) => (
            <div
              className="border-primary flex flex-col border-l-[3px] p-4"
              key={index}
            >
              <div className="text-3xl">{item.count}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
