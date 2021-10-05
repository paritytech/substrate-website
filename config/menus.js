const DOCS_URL = 'https://substrate-docs-staging.netlify.app';

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
    url: '/vision',
    id: 'vision',
  },
  {
    url: '/ecosystem',
    id: 'ecosystem',
  },
];

/* sub menus, matching the main menu items' "id" */
const technology = [
  {
    url: '',
    id: 'technology.overview',
  },
  {
    url: '/flexible',
    id: 'technology.flexible',
  },
  {
    url: '/open',
    id: 'technology.open',
  },
  {
    url: '/interoperable',
    id: 'technology.interoperable',
  },
  {
    url: '/future-proof',
    id: 'technology.future-proof',
  },
];

const developers = [
  {
    url: DOCS_URL,
    id: 'developers.home',
    internal: true,
  },
  {
    url: DOCS_URL + '/v3/getting-started/overview',
    id: 'developers.docs',
    internal: true,
  },
  {
    url: DOCS_URL + '/how-to-guides/v3',
    id: 'developers.how-to-guides',
    internal: true,
  },
  {
    url: DOCS_URL + '/tutorials/v3',
    id: 'developers.tutorials',
    internal: true,
  },
  {
    url: DOCS_URL + '/rustdocs',
    id: 'developers.rustdocs',
    internal: true,
  },
  {
    url: DOCS_URL + '/playground',
    id: 'developers.playground',
    internal: true,
  },
];

const vision = [
  {
    url: '/substrate-and-polkadot',
    id: 'vision.substrate-and-polkadot',
  },
];

const ecosystem = [
  {
    url: '',
    id: 'ecosystem.home',
  },
  {
    url: '/projects',
    id: 'ecosystem.projects',
  },
  {
    url: '/substrate-builders-program',
    id: 'ecosystem.substrate-builders-program',
  },
  {
    url: '/opportunities',
    id: 'ecosystem.opportunities',
    child: 'opportunities',
  },
  {
    url: '/resources',
    id: 'ecosystem.resources',
    child: 'resources',
  },
  {
    url: '/connect',
    id: 'ecosystem.connect',
    child: 'connect',
  },
];

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
    url: '/jobs',
    id: 'ecosystem.opportunities.jobs',
  },
];

const resources = [
  {
    url: '/seminar',
    id: 'ecosystem.resources.seminar',
  },
  {
    url: '/awesome-substrate',
    id: 'ecosystem.resources.awesome-substrate',
  },
  {
    url: '/community-resources',
    id: 'ecosystem.resources.community-resources',
  },
];

const connect = [
  {
    url: '/contact',
    id: 'ecosystem.resources.contact',
  },
  {
    url: 'https://www.parity.io/events',
    id: 'ecosystem.resources.events',
  },
  {
    url: '/newsletter',
    id: 'ecosystem.resources.newsletter',
  },
  {
    url: 'https://www.parity.io/blog/tag/parity-substrate',
    id: 'ecosystem.resources.blog',
  },
];

const legal = [
  {
    url: 'https://www.parity.io/privacy',
    id: 'legal.privacy',
  },
  {
    url: 'https://www.parity.io/terms',
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
  technology,
  developers,
  vision,
  ecosystem,
  opportunities,
  resources,
  connect,
  extra,
  legal,
};
