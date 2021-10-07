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
import InfoCard from '../../components/layout/technology/InfoCard';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import * as animation from '../../images/animation/technology/interoperable.json';

const Interoperable = () => {
  const { siteMetadata } = useSiteMetadata();
  return (
    <Layout>
      <SEO title="Interoperable" />
      <Hero page="Interoperable" animationData={animation}>
        <p>
          Developers are often forced to make tradeoffs between compatibility, security, and efficiency to interact with
          data that exists off-chain and cross-chain. This has led to the creation of bridges, oracles, and other
          interoperability protocols, all with their own limitations.
        </p>
        <p>Substrate takes a unique, multifaceted approach to address these tradeoffs.</p>
      </Hero>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['interoperable-base', 'compatible']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Compatible"
          linkText={
            <p className="underline-animate">
              Learn more about{' '}
              <Link to="https://wiki.polkadot.network/docs/learn-crosschain">Cross-Chain Message Passing (XCMP) </Link>{' '}
              across parachains »
            </p>
          }
        >
          <p>
            Substrate-based blockchain networks have the choice of either operating as a solo chain, a solo chain with a
            bridge, or to integrate as a parachain. Integrating as a parachain enables independent Substrate-based
            blockchains to gain interoperability with the other independent blockchains. The secret sauce of parachain
            interoperability lies in XCMP (Cross-Chain Message Passing). XCMP enables parachains to share trusted logic,
            for example, transferring tokens between networks, without any additional trust assumptions!
          </p>
          <p>
            Blockchain networks that are not parachains, such as Ethereum, are accessible through parachain bridges. By
            becoming a parachain on networks such as Polkadot or Kusama, your Substrate-based blockchain also gains
            interoperability with major blockchains such as Bitcoin and Ethereum while gaining pooled security.
          </p>
        </Feature>
      </Section>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['interoperable-base', 'secure']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Secure"
          linkText={
            <p className="underline-animate">
              Learn more about{' '}
              <Link to="https://wiki.polkadot.network/docs/learn-security">shared security using Polkadot »</Link>
            </p>
          }
        >
          <p>
            Integrating with Polkadot has advantages beyond gaining bridge access to other networks, most significantly
            in terms of security. Legacy blockchains are solely responsible for the security of their own network. This
            is generally limited by the size of the network: the smaller the network the more susceptible it is to a
            successful attack.
          </p>
          <Blockquote>
            <p className="mb-0">
              Substrate chains can inherit security from Substrate-based relay chains like Polkadot or Kusama. As a
              result, even a small blockchain network can gain billions of dollars in security guarantees.
            </p>
          </Blockquote>
          <p>
            Integrating with Polkadot or other blockchain networks is of course optional. Enterprises often choose to
            begin with a standalone network with the option of connecting to other networks as they evolve.
          </p>
        </Feature>
      </Section>

      <CaseStudyBanner icon="astar-logo" link="/ecosystem/projects/case-studies/astar">
        See Astar&apos;s case study on enabling dApps to co-exist across blockchain networks.
      </CaseStudyBanner>

      <Section
        col={2}
        children2={
          <div className="overflow-x-hidden">
            <div className="grid auto-rows-fr md:pt-16" data-aos="fade-left">
              <InfoCard
                index={1}
                title="Off-Chain Worker (OCW)"
                description="For computationally intensive and even non-deterministic expensive tasks"
              />
              <InfoCard
                index={2}
                title="Off-Chain Storage"
                description="Enables data to be stored and accessed by both off-chain workers and on-chain logic without requiring consensus over the whole network"
              />
              <InfoCard
                index={3}
                title="Off-Chain Indexing"
                description="Stores a small amount of information on chain, such as a hash, that can be used to look up and verify data stored off-chain independently of OCWs"
              />
            </div>
          </div>
        }
      >
        <Feature
          title="Efficient"
          linkText={
            <p className="underline-animate">
              Read more about{' '}
              <Link to={`${siteMetadata.docsUrl}/v${siteMetadata.docsVersion}/concepts/off-chain-features`}>
                off-chain features
              </Link>{' '}
              in the documentation »
            </p>
          }
        >
          <p>
            Compute and storage come at a cost in any system, even more so with blockchain networks since many nodes
            perform the same computation and store many copies of the data. Often the concept of &quot;gas&quot; is
            introduced because of computational resource limitations. Because of Substrate’s modularity, gas is
            completely optional, and the introduction of off-chain features greatly reduces computation and storage
            costs.
          </p>
          <p>
            Off-chain features run in their own execution environment outside of the Substrate runtime. This creates a
            separation of concerns and ensures block production is not impacted by long-running off-chain tasks.
          </p>
          <Blockquote>
            <p className="mb-0">
              Although the primary benefit of off-chain features may be cost, there are many other benefits. For
              example, off-chain features can enable private data to be easily stored and retrievable off-chain to
              support record deletion and other needs of GDPR-compliant use cases and applications.
            </p>
          </Blockquote>
          <p>
            With Substrate you&apos;re not only free to choose your parameters such gas costs, governance, and
            consensus, you&apos;re also free to choose how your blockchain is deployed and if/how it should communicate
            with other networks. This means your chain can operate completely independently or connect to networks such
            as Polkadot to gain greater security and interoperability.
          </p>
        </Feature>
      </Section>

      <HighlightBanner icon="interoperable">
        Substrate is the antithesis of blockchain network maximalism, offering{' '}
        <strong className="font-bold">interoperability</strong> without forgoing{' '}
        <strong className="font-bold">compatibility, security, </strong>
        or <strong className="font-bold">efficiency</strong>.
      </HighlightBanner>

      <CardsNav currentPage="Interoperable" />

      <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
    </Layout>
  );
};

export default Interoperable;

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
