import { graphql } from 'gatsby';
import React from 'react';

import FlipIcon from '../../components/default/FlipIcon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import CardsNav from '../../components/layout/technology/CardsNav';
import CaseStudyBanner from '../../components/layout/technology/CaseStudyBanner';
import ExploreLinkSection from '../../components/layout/technology/ExploreLinkSection';
import { Feature, FeatureImage } from '../../components/layout/technology/Feature';
import Hero from '../../components/layout/technology/Hero';
import HighlightBanner from '../../components/layout/technology/HighlightBanner';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import * as animation from '../../images/animation/technology/flexible-edges.json';

export default function Flexible() {
  const { siteMetadata } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Flexible" />
      <Hero page="Flexible" animationData={animation}>
        <p>
          Blockchain developers have had to make difficult tradeoffs when deciding what distributed ledger technology to
          use.
        </p>
        <p>
          This has forced them to implement workarounds, hard-forks, or simply succumb to limitations...until Substrate.
        </p>
      </Hero>
      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['flexible-base', 'intentional']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Intentional"
          linkText={
            <p className="underline-animate">
              Want to learn more? <Link to={siteMetadata.docsUrl}>Check out the overview documentation »</Link>
            </p>
          }
        >
          <p>
            Legacy blockchains are not designed with the specific intent of the applications in mind. General purpose
            blockchains require developers to work within the rigid boundaries of the design decisions made by others.
          </p>
          <Blockquote>
            <p className="mb-0">
              Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to
              work within the confines of others&apos; design decisions.
            </p>
          </Blockquote>
          <p>
            Developers can choose and even hot-swap components (pallets) such as the network stack, consensus, even the
            finality engine. Simply select from the growing list of pallets or create your own. Either way, you get to
            deploy a blockchain network purpose built for your use case, that can evolve with your changing needs.
          </p>
        </Feature>
      </Section>

      <CaseStudyBanner icon="acala-logo" link="/ecosystem/projects/case-studies/acala/">
        <p className="font-bold mb-2 text-2xl">
          Discover how Acala leverages Substrate&apos;s flexibility to enable no cost transactions and protect against
          MEV and sandwich attacks
        </p>
      </CaseStudyBanner>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['flexible-base', 'forkless']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Forkless"
          linkText={
            <p className="underline-animate">
              Perform your first forkless upgrade using{' '}
              <Link to={`${siteMetadata.docsUrl}/tutorials/v${siteMetadata.docsVersion}/forkless-upgrades/`}>
                this tutorial »
              </Link>
            </p>
          }
        >
          <p>
            Upgrading blockchain networks has been notoriously difficult. The legacy approach requires coordinating all
            node operators to deploy new code in a timely manner, which has historically led to hard forks, divided
            networks, and even split communities.
          </p>
          <Blockquote>
            <p className="mb-0">
              Substrate-based nodes take a different approach that enables automatic upgrades, no user intervention
              required. The result is blockchain networks that can be completely forkless, or simply fork less.
            </p>
          </Blockquote>
          <p>
            How can a blockchain network automatically upgrade? Substrate has a unique property where the runtime (state
            transition function) is stored within the blockchain state. This means nodes update themselves by default
            rather than through manual intervention. Hard forks only happen when node operators take explicit action.
          </p>
          <p>
            Since coordinating node operators isn&apos;t necessary, upgrades can be more frequent with less issues.
            Forkless runtime upgrades enable developers to innovate and move forward faster.
          </p>
        </Feature>
      </Section>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['flexible-base', 'fast']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Fast"
          linkText={
            <p className="underline-animate">
              Experience running a client directly in your browser with{' '}
              <Link to="/substrate-connect/">Substrate Connect » </Link>
            </p>
          }
        >
          <p>
            The speed of transactions isn’t the only metric that makes a blockchain network fast. The speed of
            development, upgrades, and user experience are also important.
          </p>
          <Blockquote>
            <p className="mb-0">
              Unlike many legacy blockchain networks, which have hard limits for transaction throughput, Substrate is
              configurable. Transaction latency can be alleviated through configurable blocktimes, flexible transaction
              queues, and/or horizontal scaling. Transaction fees are configurable even to the point of feeless
              transactions. Development is faster since developers can use the tooling they prefer and select from a
              growing list of pallets instead of building from scratch. Upgrades happen faster thanks to forkless
              runtime upgrades.
            </p>
          </Blockquote>
          <p>
            Another unique attribute of Substrate is its “light-client-first” design which can run directly in-browser
            and interact with a chain in a fully trustless way. Traditional approaches for syncing nodes require users
            to run dedicated hardware and wait a long time for their node to sync, or as a workaround, use a centralized
            service provider. Substrate light-clients sync lightning fast and drastically increase the decentralization
            of blockchain networks. Developers can relax, knowing their end users aren’t reliant on a separate node
            infrastructure susceptible to downtime or hacking.
          </p>
        </Feature>
      </Section>

      <HighlightBanner icon="flexible">
        Substrate&apos;s flexibility alleviates the tension of tradeoffs by{' '}
        <strong className="font-bold">enabling developers to create the most optimal blockchain</strong> for their
        specific needs.
      </HighlightBanner>

      <CardsNav currentPage="Flexible" />

      <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
    </Layout>
  );
}

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
