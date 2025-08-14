const Reviews = [
  {
    name: 'Jake R.',
    title: 'CEO of Fungi',
    company: 'Summit Seekers',
    review:
      'I’ve tried other hiking platforms, but this one is by far the most user-friendly. The alternating backgrounds really help separate content nicely.',
    icon: '🥾',
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Aira T.',
    title: 'CEO of Mushroom',
    company: 'Trail Trotters',
    review:
      'As someone new to hiking, I appreciated how everything was laid out clearly—from trail details to the booking process. Love the earthy color scheme too!',
    icon: '🌿',
    profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
    className: 'border-t border-gray-300 border-l-0 lg:border-l lg:border-t-0 ',
  },
];

const Testimonials = () => {
  return (
    <section className="grid h-screen items-center justify-center px-4">
      <div className="grid w-full max-w-6xl items-center justify-center gap-y-10 lg:grid-cols-2">
        {Reviews.map((review, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-8 p-4 px-10 sm:text-xl ${review.className}`}
          >
            <div>{review.icon}</div>
            <p>{review.review}</p>
            <div className="flex items-center gap-x-4">
              <img
                src={review.profilePicture}
                className="h-16 w-auto rounded-full"
              />
              <div>
                <div>{review.title}</div>
                <div>{review.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
