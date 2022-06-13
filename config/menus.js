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
      heading: '',
      links: [
        { id: 'technology.overview', href: DOCS_URL, subText: '' },
        {
          id: 'technology.flexible',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        {
          id: 'technology.open',
          href: `/flexible`,
          subText: '',
        },
        {
          id: 'technology.interoperable',
          href: `/flexible`,
          subText: '',
        },
        {
          id: 'technology.future-proof',
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
      heading: 'Get Started',
      links: [
        { id: 'developers.blockchain-basics', href: DOCS_URL, subText: '' },
        {
          id: 'developers.substrate-architecture',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
      ],
    },
    {
      heading: 'Learn by doing',
      links: [
        {
          id: 'developers.build-a-local-blockchain',
          href: `${DOCS_URL}/tutorials/v3/create-your-first-substrate-chain/`,
          subText: '',
        },
        { id: 'developers.smart-contracts', href: '/contracts', subText: '' },
      ],
    },
    {
      heading: 'Get Technical',
      links: [
        { id: 'developers.rust-api', href: '/', subText: '' },
        { id: 'developers.polkadotjs-api', href: 'https://polkadot.js.org/docs/api/', subText: '' },
      ],
    },
    {
      heading: 'Documentation',
      links: [
        { id: 'developers.docs', href: `${DOCS_URL}/v3/getting-started/overview/`, subText: '' },
        { id: 'developers.how-to-guides', href: `${DOCS_URL}/how-to-guides/v3/`, subText: '' },
        { id: 'developers.tutorials', href: `${DOCS_URL}/tutorials/v3/`, subText: '' },
        { id: 'developers.rustdocs', href: `${DOCS_URL}/rustdocs/`, subText: '' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { id: 'developers.pallet-marketplace', href: 'https://marketplace.substrate.io', subText: '' },
        { id: 'developers.code-playground', href: `${DOCS_URL}/playground`, subText: '' },
        { id: 'developers.light-client', href: '/substrate-connect', subText: '' },
      ],
    },
    {
      heading: 'Support',
      links: [
        {
          id: 'developers.square-one',
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
      heading: 'Connect',
      links: [
        { id: 'about.connect', href: DOCS_URL, subText: '' },
        {
          id: 'about.careers',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        { id: 'about.events', href: DOCS_URL, subText: '' },
        {
          id: 'about.newsletter',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
        { id: 'about.blog', href: DOCS_URL, subText: '' },
      ],
    },
    {
      heading: 'Vision',
      links: [{ id: 'vision.substrate-and-polkadot', href: DOCS_URL, subText: '' }],
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
      heading: 'Get Started',
      links: [
        { id: 'ecosystem.get-started.home', href: DOCS_URL, subText: '' },
        {
          id: 'ecosystem.get-started.projects',
          href: `${DOCS_URL}/v3/getting-started/architecture/`,
          subText: '',
        },
      ],
    },
    {
      heading: 'Resources',
      links: [
        {
          id: 'ecosystem.resources.seminar',
          href: `${DOCS_URL}/tutorials/v3/create-your-first-substrate-chain/`,
          subText: '',
        },
        { id: 'ecosystem.resources.awesome-substrate', href: '/contracts', subText: '' },
      ],
    },
    {
      heading: 'Initiatives',
      links: [
        {
          id: 'ecosystem.initiatives.substrate-builders-program',
          href: '/',
          subText: 'Support and mentorship to take your substrate project to the next level.',
        },
        {
          id: 'ecosystem.initiatives.square-one',
          href: '/ecosystem/square-one/',
          subText: 'Find Initiatives or funding that match your current development stage.',
        },
      ],
    },
    {
      heading: 'opportunities',
      links: [
        { id: 'ecosystem.opportunities.hackathons', href: 'https://marketplace.substrate.io', subText: '' },
        { id: 'ecosystem.opportunities.grants', href: `${DOCS_URL}/playground`, subText: '' },
        { id: 'ecosystem.opportunities.jobs', href: '/substrate-connect', subText: '' },
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
