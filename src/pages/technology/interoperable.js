import { graphql } from 'gatsby';
import React from 'react';

import FlipIcon from '../../components/default/FlipIcon';
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

const Interoperable = () => {
  return (
    <Layout>
      <SEO title="Interoperable" />
      <Hero page="Interoperable" image="placeholder">
        <p>
          Developers are often forced to make tradeoffs with regards to compatibility, security, and efficiency in order
          to interact with data that exists off-chain and cross-chain. This has led to the creation of bridges, oracles,
          and otherinteroperability protocols all with their own limitations. Substrate takes a unique, multifaceted
          approach to address these tradeoffs.
        </p>
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
          learnMore="Learn more about Substrate's modularity:"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Bridges allow for interoperability between blockchains; however, they often come with the tradeoff of being
            centralized and less trustworthy or more decentralized but limited in compatibility. Substrate based
            blockchains are natively compatible with each other and can simply use a bridge pallet to enable
            interoperability between networks in a decentralized and trustless manner.
          </p>
          <Blockquote>
            <p>
              The secret sauce for native compatibility between Substrate based blockchains is XCMP (Cross-chain Message
              Passing). XCMP allows Substrate networks to communicate with each other without additional trust
              assumptions.
            </p>
          </Blockquote>
          <p>
            This allows networks to share trusted logic between chains, for example transferring tokens between
            blockchains. For Non-Substrate blockchains you are free to use bridges that are already available or even
            create your own. If your blockchain network is integrated with Polkadot for example, out of the box your
            blockchain is bridged to Bitcoin, Ethereum, Zcash, and most major blockchains.
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
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Integrating with Polkadot has advantages beyond gaining bridge access to other networks, most significantly
            in regards to security. Legacy blockchains are solely responsible for the security of their own network
            which is generally limited by the size of the network: the smaller the network the more susceptible to a
            successful attack.
          </p>
          <Blockquote>
            <p>
              Substrate blockchains are unique in that they can inherit security from other substrate based networks
              such as Polkadot. The result is quite substantial in that a small blockchain network can gain billions of
              dollars in security guarantees.
            </p>
          </Blockquote>
          <p>
            This is of course optional, enterprises often choose to begin with a standalone network with the option of
            connecting to other networks as they evolve.
          </p>
        </Feature>
      </Section>

      <CaseStudyBanner icon="astar-logo">
        See Astar&apos;s case study on enabling dApps to co-exist across blockchain networks.
      </CaseStudyBanner>

      <Section
        col={2}
        children2={
          <div className="grid auto-rows-fr md:pt-16" data-aos="fade-left">
            <InfoCard
              index={1}
              title="Off-Chain Worker (OCW)"
              description="for computationally intensive and even non-deterministic expensive tasks"
            />
            <InfoCard
              index={2}
              title="Off-Chain Storage"
              description="enables data to be stored and access by both off-chain workers and on-chain logic without requiring consensus over the whole network"
            />
            <InfoCard
              index={3}
              title="Off-Chain Indexing"
              description="stores a small amount of information on chain, such as a hash, that can be used to lookup and verify data stored off-chain independently of OCWs"
            />
          </div>
        }
      >
        <Feature
          title="Efficient"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Compute and storage come at a cost in any system, even more so with blockchains since many nodes perform the
            same computation and store many copies of data. Often the concept of &quot;gas&quot; is introduced because
            of computational resource limitations. With Substrate, gas is completely optional and the introduction of
            off-chain features greatly reduces computation and storage costs.
          </p>
          <p>
            Off-chain features run in their own execution environment outside of the Substrate runtime. This creates a
            separation of concerns ensures the block production is not impacted by long-running off-chain tasks.
          </p>
          <Blockquote>
            Although the primary benefit of off-chain features may be cost, there are many other benefits. For example,
            off-chain features can enable private data to be easily stored and retrievable off-chain to support record
            deletion and other needs of GDPR-compliant use cases and applications.
          </Blockquote>
          <p>
            With substrate you&apos;re not only free to choose your parameters such gas costs, governance, consensus,
            but you&apos;re also free to choose how your blockchain is deployed and if/how it should communicate with
            other blockchains. This means your blockchain can operate completely independently from other blockchains or
            connect to networks such as Polkadot to gain greater security while interoperating with other blockchains.
          </p>
        </Feature>
      </Section>

      <HighlightBanner icon="interoperable">
        Substrate is the antithesis of blockchain maximalism; <strong className="font-bold">interoperability</strong>{' '}
        without forgoing <strong className="font-bold">compatibility, security, </strong>
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
