/* the main menu, ids of items must match
   the submenu's key of this js object */
const main = [
  {
    url: '/',
    id: 'home',
  },
  {
    url: '/learn',
    id: 'learn',
  },
  {
    url: '/build',
    id: 'build',
  },
  {
    url: '/network',
    id: 'network',
  },
  {
    url: '/community',
    id: 'community',
  },
];

/* sub menus, matching the main menu items' "id" */
const learn = [
  {
    url: '/why-polkadot',
    id: 'learn.why',
  },
  {
    url: '/how-it-works',
    id: 'learn.how',
  },
];

const build = [
  {
    url: '/tutorial',
    id: 'build.tutorial',
  },
  {
    url: '/getting-started',
    id: 'build.getting-started',
  },
];

const legal = [
  {
    url: 'https://web3.foundation',
    id: 'legal.web3',
  },
  {
    url: '/impressum',
    id: 'legal.impressum',
  },
  {
    url: '/disclaimer',
    id: 'legal.disclaimer',
  },
  {
    url: '/privacy',
    id: 'legal.privacy',
  },
  {
    url: '/cookies',
    id: 'legal.cookies',
  },
];

const extra = [
  {
    url: '/blog',
    id: 'extra.blog',
  },
  {
    url: '/papers',
    id: 'extra.papers',
  },
  {
    url: '/wiki',
    id: 'extra.wiki',
  },
  {
    url: '/support',
    id: 'extra.support',
  },
];

module.exports = {
  main,
  learn,
  build,
  extra,
  legal,
};
