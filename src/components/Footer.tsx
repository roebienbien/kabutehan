import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Socials = [
  {
    name: 'x',
    icon: <FaXTwitter />,
    url: 'https://www.example.com',
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    url: 'https://www.example.com',
  },
  {
    name: 'facebook',
    icon: <FaFacebookF />,
    url: 'https://www.example.com',
  },
  {
    name: 'youtube',
    icon: <FaYoutube />,
    url: 'https://www.example.com',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://www.example.com',
  },
];

type TLinks = {
  title: string;
  subLinks: {
    name: string;
    url: string;
  }[];
};

const Links: TLinks[] = [
  {
    title: 'Solutions',
    subLinks: [
      {
        name: 'Marketing',
        url: 'https://www.example.com',
      },
      {
        name: 'Analytics',
        url: 'https://www.example.com',
      },
      {
        name: 'Automation',
        url: 'https://www.example.com',
      },
      {
        name: 'Commerce',
        url: 'https://www.example.com',
      },
      {
        name: 'Insights',
        url: 'https://www.example.com',
      },
    ],
  },
  {
    title: 'Support',
    subLinks: [
      {
        name: 'Submit ticket',
        url: 'https://www.example.com',
      },
      {
        name: 'Documentation',
        url: 'https://www.example.com',
      },
      {
        name: 'Guide',
        url: 'https://www.example.com',
      },
    ],
  },
  {
    title: 'Company',
    subLinks: [
      {
        name: 'About',
        url: 'https://www.example.com',
      },
      {
        name: 'Blog',
        url: 'https://www.example.com',
      },
      {
        name: 'Jobs',
        url: 'https://www.example.com',
      },
      {
        name: 'Press',
        url: 'https://www.example.com',
      },
    ],
  },
  {
    title: 'Legal',
    subLinks: [
      {
        name: 'Terms of service',
        url: 'https://www.example.com',
      },
      {
        name: 'Privacy policy',
        url: 'https://www.example.com',
      },
      {
        name: 'License',
        url: 'https://www.example.com',
      },
      {
        name: 'Press',
        url: 'https://www.example.com',
      },
    ],
  },
];

function Footer() {
  return (
    <div className="relative grid min-h-fit grid-cols-1 items-center justify-center gap-y-10 bg-zinc-900 p-8 text-white lg:grid-cols-[1fr_1.3fr] lg:gap-x-4 lg:pt-20">
      <div className="col-span-1 flex flex-col gap-4 gap-y-8">
        <span className="text-3xl">Icon</span>
        <p className="text-lg font-medium">
          Making the world a better place through constructing elegant
          hierarchies.
        </p>
        <div className="flex gap-x-6 text-gray-300">
          {Socials.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              className="text-xl hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-2 justify-between gap-x-4 gap-y-8 lg:grid-cols-4">
          {Links.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <span className="text-lg font-medium">{item.title}</span>
              <div className="flex flex-col gap-y-4">
                {item.subLinks.map((sublink, index) => (
                  <a key={index} href={sublink.url} className="">
                    {sublink.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bottom-0 w-full px-10 py-8"> */}
      <div className="col-span-full w-full py-8 text-center lg:text-right">
        <div className="border-t border-t-gray-100 pb-4 opacity-20" />
        <span>
          @ {new Date().getFullYear()} Kabutehan. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
