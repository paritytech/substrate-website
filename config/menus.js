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
        { id: 'technology.overview', url: '', subText: '' },
        {
          id: 'technology.flexible',
          url: `/technology/flexible/`,
          subText: '',
        },
        {
          id: 'technology.open',
          url: `/technology/open/`,
          subText: '',
        },
        {
          id: 'technology.interoperable',
          url: '/technology/interoperable/',
          subText: '',
        },
        {
          id: 'technology.future-proof',
          url: `/technology/future-proof/`,
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
        { id: 'developers.blockchain-basics', url: DOCS_URL, subText: '' },
        {
          id: 'developers.substrate-architecture',
          url: `${DOCS_URL}v3/getting-started/architecture/`,
          subText: '',
        },
      ],
    },
    {
      heading: 'Learn by doing',
      links: [
        {
          id: 'developers.build-a-blockchain',
          url: `${DOCS_URL}tutorials/v3/create-your-first-substrate-chain/`,
          subText: '',
        },
        { id: 'developers.smart-contracts', url: '/smart-contracts/', subText: '' },
      ],
    },
    {
      heading: 'Get Technical',
      links: [
        { id: 'developers.rust-api', url: '/', subText: '' },
        { id: 'developers.polkadotjs-api', url: 'https://polkadot.js.org/docs/api/', subText: '' },
      ],
    },
    {
      heading: 'Documentation',
      links: [
        { id: 'developers.docs', url: `${DOCS_URL}v3/getting-started/overview/`, subText: '' },
        { id: 'developers.how-to-guides', url: `${DOCS_URL}how-to-guides/v3/`, subText: '' },
        { id: 'developers.tutorials', url: `${DOCS_URL}tutorials/v3/`, subText: '' },
        { id: 'developers.rustdocs', url: `${DOCS_URL}rustdocs/`, subText: '' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { id: 'developers.pallet-marketplace', url: 'https://marketplace.substrate.io', subText: '' },
        { id: 'developers.code-playground', url: `${DOCS_URL}playground`, subText: '' },
        { id: 'developers.light-client', url: '/substrate-connect', subText: '' },
      ],
    },
    {
      heading: 'Support',
      links: [
        {
          id: 'developers.square-one',
          url: '/ecosystem/square-one/',
          subText: 'Find Initiatives or funding that match your current development stage.',
        },
      ],
    },
  ],
};

const about = {
  title: 'About Us',
  subtitle: 'The Road to Substrate.',
  menu: [
    {
      heading: 'Connect',
      links: [
        { id: 'about.contact', url: '/about/connect/contact/', subText: '' },
        {
          id: 'about.careers',
          url: CAREERS_URL,
          subText: '',
        },
        { id: 'about.events', url: 'https://www.parity.io/events/', subText: '' },
        {
          id: 'about.newsletter',
          url: `/about/connect/newsletter/`,
          subText: '',
        },
        { id: 'about.blog', url: 'https://www.parity.io/blog/tag/parity-substrate', subText: '' },
      ],
    },
    {
      heading: 'Vision',
      links: [{ id: 'vision.substrate-and-polkadot', url: '/vision/substrate-and-polkadot/', subText: '' }],
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
        { id: 'ecosystem.get-started.home', url: '/ecosystem/', subText: '' },
        {
          id: 'ecosystem.get-started.projects',
          url: `/ecosystem/projects/`,
          subText: '',
        },
      ],
    },
    {
      heading: 'Resources',
      links: [
        {
          id: 'ecosystem.resources.seminar',
          url: `/ecosystem/resources/seminar/`,
          subText: '',
        },
        {
          id: 'ecosystem.resources.awesome-substrate',
          url: 'https://github.com/substrate-developer-hub/awesome-substrate/blob/master/README.md',
          subText: '',
        },
      ],
    },
    {
      heading: 'Initiatives',
      links: [
        {
          id: 'ecosystem.initiatives.substrate-builders-program',
          url: '/ecosystem/substrate-builders-program/',
          subText: 'Support and mentorship to take your substrate project to the next level.',
        },
        {
          id: 'ecosystem.initiatives.square-one',
          url: '/ecosystem/square-one/',
          subText: 'Find Initiatives or funding that match your current development stage.',
        },
      ],
    },
    {
      heading: 'opportunities',
      links: [
        { id: 'ecosystem.opportunities.hackathons', url: '/ecosystem/opportunities/hackathons/', subText: '' },
        { id: 'ecosystem.opportunities.grants', url: `/ecosystem/opportunities/grants/`, subText: '' },
        { id: 'ecosystem.opportunities.jobs', url: 'https://careers.substrate.io/jobs', subText: '' },
      ],
    },
  ],
};

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

module.exports = {
  main,
  footerMain,
  technology,
  developers,
  about,
  ecosystem,
  legal,
};
