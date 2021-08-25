import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../components/default/Icon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const features = [
  {
    title: 'Intentional',
    paragraphOne:
      'The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the specific intent of the applications in mind. General purpose blockchains require developers to work within the rigid boundaries of the design decisions made by others.',
    aside: `Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
    within the confines of others' design decisions.`,
    paragraphTwo:
      'Developers can choose, and even hot-swap, components (pallets) such as the network stack, consensus, even the finality engine. Simply select from the growing list of pallets or create your own. Either way, you get to deploy a blockchain purpose built for your use case and even evolve your blockchain as your needs evolve.',
    learnMore: 'If you want to know more about this feature',
    linkText: 'Explore Architecture',
    link: '/technology',
    image: 'placeholder',
  },
  {
    title: 'Forkless',
    paragraphOne:
      'Upgrading blockchain networks has been notoriously difficult. The legacy approach requires coordinating all node operators to deploy new code in a timely manner which can cause hard forks, a divided network and even community.',
    aside:
      'Substrate based nodes take a different approach which enables automatic upgrades, no user intervention required. The result is blockchain networks can be completely forkless or simply fork less.',
    paragraphTwo:
      'This may seem too good to be true, how can a blockchain automatically upgrade? Substrate has a unique property where the runtime (state transition function) is compiled into the blockchain itself. This means nodes update themselves by default rather than through manual intervention. Hard forks only happen when node operators take explicit action. Since coordinating node operators is not necessary, upgrades can be more frequent with less issues. Forkless runtime upgrades enable developers to innovate and move forward faster.',
    learnMore: 'Learn more about Substrate’s modularity:',
    linkText: 'Documentation: Upgrades',
    link: '/technology',
    image: 'placeholder',
  },
  {
    title: 'Fast',
    paragraphOne:
      'The speed of transactions isn’t the only metric that makes a blockchain fast. The speed of development, upgrades, and node syncing are. ',
    aside:
      'Unlike many legacy blockchains, which have hard limits for transaction through put, Substrate is configurable. Transaction limits can be lifted through configurable block times, flexible transaction queues, and/or horizontal scaling. If your application is limited by gas you can even choose to have gas-less transactions. Development is faster since developers can use the tooling they prefer and select from many different pallets instead of building from scratch. Upgrades happen faster thanks for forkless runtime upgrades and Node-syncing not only happens faster but also is more secure and reliable due to Substrate’s  "light-client first" design.',
    paragraphTwo:
      'Traditional approaches for syncing nodes require users to run dedicated hardware and wait a long period of time for their node to sync, or as a workaround, use a centralized service provider. With Substrate, users can run a client directly in their browser and interact with a chain in a fully trustless way!  Developers can have peace knowing their end users aren’t reliant on separate node infrastructure that is susceptible to downtime or hacking.',
    learnMore: 'Interested in modularity of Substrate?',
    linkText: 'Explore Architecture',
    link: '/technology',
    image: 'placeholder',
  },
];

const flexible = () => {
  return (
    <Layout>
      <SEO title="Flexible" />
      {features.map(({ title, paragraphOne, paragraphTwo, aside, learnMore, linkText, link, image }, idx) => (
        <Section key={idx}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <aside className="border-substrateGreen border-l-8 pl-6 font-bold mb-6">{aside}</aside>
          <p>{paragraphTwo}</p>
          <h5 className="font-bold text-xl">{learnMore}</h5>
          <Link to={link}>{linkText}</Link>
          <Icon name={image} />
        </Section>
      ))}
    </Layout>
  );
};

export default flexible;

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
