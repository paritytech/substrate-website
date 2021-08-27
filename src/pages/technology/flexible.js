import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../components/default/Icon';
import Section from '../../components/layout/Section';
import CardsNav from '../../components/layout/technology/CardsNav';
import CaseStudyBanner from '../../components/layout/technology/CaseStudyBanner';
import ExploreLinkSection from '../../components/layout/technology/ExploreLinkSection';
import Feature from '../../components/layout/technology/Feature';
import Hero from '../../components/layout/technology/Hero';
import HighlightBanner from '../../components/layout/technology/HighlightBanner';
import GreenBorderCard from '../../components/layout/technology/InfoCard';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';

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

      <CaseStudyBanner link="/technology">
        <span>See how Moonbeam benefitted from Substrate&apos;s flexibility</span>
      </CaseStudyBanner>

      <HighlightBanner>
        The flexible nature of Substrate alleviates the tension of tradeoffs by{' '}
        <strong className="font-bold">enabling developers to create the most optimal blockchain</strong> for their
        specific needs.
      </HighlightBanner>

      <CardsNav currentPage="Flexible" />

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

      <ExploreLinkSection />
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
