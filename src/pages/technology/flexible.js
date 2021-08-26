import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../components/default/Icon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import Feature from '../../components/layout/technology/Feature';
import GreenBorderCard from '../../components/layout/technology/GreenBorderCard';
import Hero from '../../components/layout/technology/Hero';
import VerticalCard from '../../components/layout/technology/VerticalCard';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';

const cards = [
  {
    title: 'Open',
    link: '/technology/open',
    description: `The combination of an open source, customizable architecture that enables developers to use the tooling of their choice with a robust, active community makes Substrate the most open way to build.`,
  },
  {
    title: 'Interoperable',
    link: '/technology/interoperable',
    description: `Interoperability without forgoing compatibility, security, or efficiency; learn how Substrate takes a unique, multifaceted approach to address each of these.`,
  },
  {
    title: 'Future-Proof',
    link: '/technology/future-proof',
    description: `Substrate enables developers to move faster and evolve their architecture as their needs evolve. Founders and Developers can be confident that their blockchain is ready for whatever the future brings.`,
  },
];

const greenBorderCards = [
  {
    title: 'Off-Chain Worker (OCW)',
    description: 'for computationally intensive and even non-deterministic expensive tasks',
  },
  {
    title: 'Off-Chain Storage',
    description:
      'enables data to be stored and access by both off-chain workers and on-chain logic without requiring consensus over the whole network',
  },
  {
    title: 'Off-Chain Indexing',
    description:
      'stores a small amount of information on chain, such as a hash, that can be used to lookup and verify data stored off-chain independently of OCWs ',
  },
];

const links = [
  {
    image: 'placeholder',
    title: 'Teams',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
  {
    image: 'placeholder',
    title: 'Docs',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
  {
    image: 'placeholder',
    title: 'Ecosystem',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
];

const Flexible = () => {
  return (
    <Layout>
      <SEO title="Flexible" />
      <Hero page="Flexible">
        <p>
          Blockchain developers have had to make difficult tradeoffs when deciding what distributed ledger technology to
          use.
        </p>
        <p>
          This has forced developers to implement workarounds, hard-forks, or simply succumb to limitations, until
          Substrate.
        </p>
      </Hero>
      <Section col={2} children2={<Icon name="placeholder" className="w-full h-auto" />}>
        <Feature
          title="Intentional"
          learnMore="If you want to know more about this feature"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the
            specific intent of the applications in mind. General purpose blockchains require developers to work within
            the rigid boundaries of the design decisions made by others.
          </p>
          <Blockquote>
            {`Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
            within the confines of others' design decisions.`}
          </Blockquote>
          <p>
            The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the
            specific intent of the applications in mind. General purpose blockchains require developers to work within
            the rigid boundaries of the design decisions made by others.
          </p>
        </Feature>
      </Section>
      <Section col={2} mode="reversed" children2={<Icon name="placeholder" className="w-full h-auto" />}>
        <Feature
          title="Forkless"
          learnMore="If you want to know more about this feature"
          link="/"
          linkText="Explore Architecture"
        >
          <Blockquote>
            {`Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
            within the confines of others' design decisions.`}
          </Blockquote>
        </Feature>
      </Section>

      <div className="bg-substrateGray">
        <Section>
          <div className="md:flex flex-row py-8">
            <Icon name="placeholder" className="md:self-center mb-4 md:mb-0" />
            <div className="md:mx-8">
              <h3 className="text-xl md:text-2xl font-bold">{`See how Moonbeam benefitted from Substrate's flexibility`}</h3>
              <Link to="/technology">
                <p className="font-bold border-b-2 border-black inline">Explore Case Study</p>{' '}
                <span className="fill-current border-b-0 text-black dark:text-white inline-block">
                  <Icon name="arrow-more" />
                </span>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-substrateGray-light p-8 mb-20">
        <div className="flex flex-col md:flex-row items-center lg:mx-auto max-w-7xl">
          <div className="bg-gray-200 h-40 w-40 mx-auto md:mr-10 my-8"></div>
          <div className="md:mx-8 md:w-7/12">
            <h3 className="text-xl md:text-2xl font-normal max-w-lg">
              The flexible nature of Substrate alleviates the tension of tradeoffs by{' '}
              <strong className="font-bold">enabling developers to create the most optimal blockchain</strong> for their
              specific needs.
            </h3>
          </div>
        </div>
      </div>

      <Section>
        <div className="relative">
          <div className="hidden lg:block absolute h-80 w-1/2 bg-gray-200 -right-4 z-0"></div>
          <h2 className="text-3xl md:text-4xl mb-10 py-10 relative">Learn More About Our Technology</h2>
          <div className="flex flex-col lg:flex-row z-10">
            {cards.map(({ title, link, description }, index) => (
              <VerticalCard title={title} link={link} index={index} key={index}>
                {description}
              </VerticalCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2">
          <div>Placeholder column</div>
          <div className="grid grid-cols-1" style={{ gridAutoRows: '1fr' }}>
            {greenBorderCards.map(({ title, description }, idx) => (
              <GreenBorderCard key={idx} index={idx} title={title} description={description} />
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-substrateGray pb-10 pt-20">
        <Section>
          <h4 className="text-2xl font-bold mb-16">Explore More Substrate</h4>
          <div className="sm:grid grid-cols-3 gap-6 xl:gap-24">
            {links.map(({ image, title, description, link }, index) => (
              <div key={index} className="mb-16 sm:mb-0">
                <Icon name={image} className="mb-6" />
                <h5 className="text-xl font-bold mb-6">{title}</h5>
                <p>{description}</p>
                <Link to={link}>
                  <p className="font-bold border-b-2 border-black inline">Explore</p>{' '}
                  <span className="fill-current border-b-0 text-substrateGreen dark:text-white inline-block">
                    <Icon name="arrow-more" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Flexible;

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
