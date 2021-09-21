import { graphql } from 'gatsby';
import React from 'react';

import Gif from '../../components/default/Gif';
import Icon from '../../components/default/Icon';
import Section from '../../components/layout/Section';
import CardsNav from '../../components/layout/technology/CardsNav';
import ExploreLinkSection from '../../components/layout/technology/ExploreLinkSection';
import { Feature, FeatureImage } from '../../components/layout/technology/Feature';
import Hero from '../../components/layout/technology/Hero';
import HighlightBanner from '../../components/layout/technology/HighlightBanner';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';

const Flexible = () => {
  return (
    <Layout>
      <SEO title="Flexible" />
      <Hero page="Flexible" image="heroFlexible">
        <p>
          Blockchain developers have had to make difficult tradeoffs when deciding what distributed ledger technology to
          use.
        </p>
        <p>
          This has forced developers to implement workarounds, hard-forks, or simply succumb to limitations, until
          Substrate.
        </p>
      </Hero>
      <Section
        col={2}
        children2={
          <FeatureImage>
            <Gif name="intentional" className="w-full h-auto" />
          </FeatureImage>
        }
      >
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
            <p>
              {`Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
            within the confines of others' design decisions.`}
            </p>
          </Blockquote>
          <p>
            Developers can choose, and even hot-swap, components (pallets) such as the network stack, consensus, even
            the finality engine. Simply select from the growing list of pallets or create your own. Either way, you get
            to deploy a blockchain purpose built for your use case and even evolve your blockchain as your needs evolve.
          </p>
        </Feature>
      </Section>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            {/* <Gif name="forkless" className="w-full h-auto" /> */}
            <div className="relative w-full">
              <div className="absolute w-96 h-96">
                <Icon name="diamond-yellow" className="w-96 h-96" />
              </div>
              <div data-aos="fade-in" data-aos-delay="700" className="bg-white absolute w-96 h-96">
                <Icon name="diamond-purple" className="w-96 h-96" />
              </div>
            </div>
          </FeatureImage>
        }
      >
        <Feature
          title="Forkless"
          learnMore="Learn more about Substrate's modularity:"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Upgrading blockchain networks has been notoriously difficult. The legacy approach requires coordinating all
            node operators to deploy new code in a timely manner which can cause hard forks, a divided network and even
            community.
          </p>
          <Blockquote>
            <p>
              Substrate based nodes take a different approach which enables automatic upgrades, no user intervention
              required. The result is blockchain networks can be completely forkless or simply fork less.
            </p>
          </Blockquote>
          <p>
            This may seem too good to be true, how can a blockchain automatically upgrade? Substrate has a unique
            property where the runtime (state transition function) is compiled into the blockchain itself. This means
            nodes update themselves by default rather than through manual intervention. Hard forks only happen when node
            operators take explicit action.
          </p>
          <p>
            Since coordinating node operators is not necessary, upgrades can be more frequent with less issues. Forkless
            runtime upgrades enable developers to innovate and move forward faster.
          </p>
        </Feature>
      </Section>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <Gif name="fast" className="w-full h-auto" />
          </FeatureImage>
        }
      >
        <Feature
          title="Fast"
          learnMore="Learn more about Substrate's modularity:"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            The speed of transactions isn’t the only metric that makes a blockchain fast. The speed of development,
            upgrades, and node syncing are.
          </p>
          <Blockquote>
            <p>
              Unlike many legacy blockchains, which have hard limits for transaction through put, Substrate is
              configurable. Transaction limits can be lifted through configurable block times, flexible transaction
              queues, and/or horizontal scaling. If your application is limited by gas you can even choose to have
              gas-less transactions.
            </p>
            <p>
              Development is faster since developers can use the tooling they prefer and select from many different
              pallets instead of building from scratch. Upgrades happen faster thanks for forkless runtime upgrades and
              Node-syncing not only happens faster but also is more secure and reliable due to Substrate’s
              &quot;light-client first&quot; design.
            </p>
          </Blockquote>
          <p>
            Traditional approaches for syncing nodes require users to run dedicated hardware and wait a long period of
            time for their node to sync, or as a workaround, use a centralized service provider. With Substrate, users
            can run a client directly in their browser and interact with a chain in a fully trustless way! Developers
            can have peace knowing their end users aren’t reliant on separate node infrastructure that is susceptible to
            downtime or hacking.
          </p>
        </Feature>
      </Section>

      <HighlightBanner>
        The flexible nature of Substrate alleviates the tension of tradeoffs by{' '}
        <strong className="font-bold">enabling developers to create the most optimal blockchain</strong> for their
        specific needs.
      </HighlightBanner>

      <CardsNav currentPage="Flexible" />

      <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
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
