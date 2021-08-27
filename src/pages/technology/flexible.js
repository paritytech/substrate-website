import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../components/default/Icon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import CardsNav from '../../components/layout/technology/CardsNav';
import Feature from '../../components/layout/technology/Feature';
import GreenBorderCard from '../../components/layout/technology/GreenBorderCard';
import Hero from '../../components/layout/technology/Hero';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';

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

      <CardsNav page="Flexible" />

      <Section
        col={2}
        children2={
          <>
            <GreenBorderCard
              index={1}
              title="Off-Chain Worker (OCW)"
              description="for computationally intensive and even non-deterministic expensive tasks"
            />
            <GreenBorderCard
              index={2}
              title="Off-Chain Storage"
              description="enables data to be stored and access by both off-chain workers and on-chain logic without requiring consensus over the whole network"
            />
            <GreenBorderCard
              index={3}
              title="Off-Chain Indexing"
              description="stores a small amount of information on chain, such as a hash, that can be used to lookup and verify data stored off-chain independently of OCWs"
            />
          </>
        }
      >
        <Feature
          title="Forkless"
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
                  <span className="inline-block">
                    <Icon name="arrow-more" className="fill-current text-black dark:text-white" />
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
