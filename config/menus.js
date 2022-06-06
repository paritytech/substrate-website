const DOCS_URL = process.env.GATSBY_DOCS_URL;
const CAREERS_URL = process.env.GATSBY_CAREERS_URL;

/* the main menu, ids of items must match
   the submenu's key of this js object */
const main = [
  {
    url: '/technology',
    id: 'technology',
  },
  {
    url: '/developers',
    id: 'developers',
  },
  {
    url: '/about',
    id: 'about',
  },
  {
    url: '/ecosystem',
    id: 'ecosystem',
  },
];

const footerMain = [
  {
    url: '/technology',
    id: 'technology',
  },
  {
    url: DOCS_URL,
    id: 'developers',
  },
  {
    url: '/vision/substrate-and-polkadot',
    id: 'vision',
  },
  {
    url: '/ecosystem',
    id: 'ecosystem',
  },
];

/* sub menus, matching the main menu items' "id" */
const technology = {
  title: 'Build beyond',
  subtitle: 'All Substrate chains are seamlessly compatible with Polkadot.',
  menu: [
    {
      id: 'technology.overview',
      heading: '',
      links: [
        { text: 'overview', href: DOCS_URL, subText: '' },
        {
          text: 'flexible',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        {
          text: 'open',
          href: `/flexible`,
          subText: '',
        },
        {
          text: 'interoperable',
          href: `/flexible`,
          subText: '',
        },
        {
          text: 'future-proof',
          href: `/flexible`,
          subText: '',
        },
      ],
    },
  ],
};

const developers = {
  title: 'Learn substrate',
  subtitle: 'Go from blockchain newbie to Substrate expert.',
  menu: [
    {
      id: 'developers.started',
      heading: 'Get Started',
      links: [
        { text: 'blockchain basics', href: DOCS_URL, subText: '' },
        {
          text: 'substrate architecture',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
      ],
    },
    {
      id: 'developers.learn',
      heading: 'Learn by doing',
      links: [
        {
          text: 'Build a local blockchain',
          href: `${DOCS_URL}/tutorials/v3/create-your-first-substrate-chain/`,
          subText: '',
        },
        { text: 'Smart contracts', href: '/contracts', subText: '' },
      ],
    },
    {
      id: 'developers.technical',
      heading: 'Get Technical',
      links: [
        { text: 'Rust API', href: '/', subText: '' },
        { text: 'PolkadotJS API', href: 'https://polkadot.js.org/docs/api/', subText: '' },
      ],
    },
    {
      id: 'developers.docs',
      heading: 'Documentation',
      links: [
        { text: 'Docs', href: `${DOCS_URL}/v3/getting-started/overview/`, subText: '' },
        { text: 'How to guides', href: `${DOCS_URL}/how-to-guides/v3/`, subText: '' },
        { text: 'Tutorials', href: `${DOCS_URL}/tutorials/v3/`, subText: '' },
        { text: 'Rust Docs', href: `${DOCS_URL}/rustdocs/`, subText: '' },
      ],
    },
    {
      id: 'developers.resources',
      heading: 'Resources',
      links: [
        { text: 'Pallet marketplace', href: 'https://marketplace.substrate.io', subText: '' },
        { text: 'Code playground', href: `${DOCS_URL}/playground`, subText: '' },
        { text: 'Light client', href: '/substrate-connect', subText: '' },
      ],
    },
    {
      id: 'developers.support',
      heading: 'Support',
      links: [
        {
          text: 'Square one',
          href: '/ecosystem/square-one/',
          subText: 'Find Initiatives or funding that match your current development stage.',
        },
      ],
    },
  ],
};

const vision = [
  {
    url: '/substrate-and-polkadot',
    id: 'vision.substrate-and-polkadot',
  },
];

const about = {
  title: 'About Us',
  subtitle: 'The Road to Substrate.',
  menu: [
    {
      id: 'developers.started',
      heading: 'Connect',
      links: [
        { text: 'contact', href: DOCS_URL, subText: '' },
        {
          text: 'careers',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        { text: 'events', href: DOCS_URL, subText: '' },
        {
          text: 'newsletter',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        { text: 'blog', href: DOCS_URL, subText: '' },
      ],
    },
    {
      id: 'developers.started',
      heading: 'Vision',
      links: [{ text: 'substrate and polkadot', href: DOCS_URL, subText: '' }],
    },
  ],
};

const ecosystem = {
  title: 'helpful ecosystem',
  subtitle: 'Connect with the right people, opportunties and resources.',
  gridArea: `'grid-item-0 grid-item-1 grid-item-2'
             'grid-item-3 grid-item-1 grid-item-2'`,
  menu: [
    {
      id: 'ecosystem.started',
      heading: 'Get Started',
      links: [
        { text: 'ecosystem home', href: DOCS_URL, subText: '' },
        {
          text: 'explore projects',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
      ],
    },
    {
      id: 'ecosystem.learn',
      heading: 'Resources',
      links: [
        {
          text: 'Seminars',
          href: `${DOCS_URL}/tutorials/v3/create-your-first-substrate-chain/`,
          subText: '',
        },
        { text: 'Awesome substrate', href: '/contracts', subText: '' },
      ],
    },
    {
      id: 'ecosystem.technical',
      heading: 'Initiatives',
      links: [
        {
          text: 'Builders program',
          href: '/',
          subText: 'Support and mentorship to take your substrate project to the next level.',
        },
        {
          text: 'Square one',
          href: '/ecosystem/square-one/',
          subText: 'Find Initiatives or funding that match your current development stage.',
        },
      ],
    },
    {
      id: 'ecosystem.resources',
      heading: 'opportunities',
      links: [
        { text: 'hackathons', href: 'https://marketplace.substrate.io', subText: '' },
        { text: 'grants', href: `${DOCS_URL}/playground`, subText: '' },
        { text: 'jobs', href: '/substrate-connect', subText: '' },
      ],
    },
  ],
};

const opportunities = [
  {
    url: '/hackathons',
    id: 'ecosystem.opportunities.hackathons',
  },
  {
    url: '/grants',
    id: 'ecosystem.opportunities.grants',
  },
  {
    url: CAREERS_URL,
    id: 'ecosystem.opportunities.careers',
  },
];

const resources = [
  {
    url: '/seminar',
    id: 'ecosystem.resources.seminar',
  },
  {
    url: '/past-seminars',
    id: 'ecosystem.resources.past-seminars',
  },
  {
    url: 'https://github.com/substrate-developer-hub/awesome-substrate/blob/master/README.md',
    id: 'ecosystem.resources.awesome-substrate',
  },
];

const connect = [
  {
    url: '/contact',
    id: 'ecosystem.resources.contact',
  },
  {
    url: 'https://www.parity.io/events/',
    id: 'ecosystem.resources.events',
  },
  {
    url: '/newsletter',
    id: 'ecosystem.resources.newsletter',
  },
  {
    url: 'https://www.parity.io/blog/tag/parity-substrate/',
    id: 'ecosystem.resources.blog',
  },
];

const legal = [
  {
    url: 'https://www.parity.io/privacy/',
    id: 'legal.privacy',
  },
  {
    url: 'https://www.parity.io/terms/',
    id: 'legal.terms',
  },
];

const extra = [
  {
    url: '/substrate-connect',
    id: 'extra.substrate-connect',
  },
];

module.exports = {
  main,
  footerMain,
  technology,
  developers,
  vision,
  about,
  ecosystem,
  opportunities,
  resources,
  connect,
  extra,
  legal,
};
