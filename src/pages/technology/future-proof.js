import { graphql } from 'gatsby';
import React from 'react';

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

const FutureProof = () => {
  return (
    <Layout>
      <SEO title="Future-Proof" />
      <Hero page="Future Proof">
        <p>
          Blockchain technology is evolving at a rapid pace and has spurred in innovation in other areas such Zero
          Knowledge, consensus mechanisms, cryptographic libraries and much more. It&apos;s challenging enough to keep
          up with technology let alone integrate it. Substrate enables your blockchain to assimilate new technology as
          it comes along.
        </p>
      </Hero>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <Icon name="placeholder" className="w-full h-auto" />
          </FeatureImage>
        }
      >
        <Feature
          title="Upgradeable"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            With any structure, the foundation is often the most difficult part to modify, and thus upgrade. For this
            reason Substrate&apos;s base has intentionally been built on an extremely simple and unchanging foundation
            using the widely accepted open protocol, WebAssembly.
          </p>
          <p>
            Changes occur a layer up from the foundation which not only gives developers a non-opinionated design to
            work with, it also removes legacy design decisions that would otherwise become outdated and baked into the
            foundation.
          </p>
          <Blockquote>
            <p>
              This allows Substrate to adopt new technology as it evolves because it does not require alterations to the
              foundation. Developers can stay on top of technological advancements and adopt them more quickly with
              forkless automatic upgrades!
            </p>
          </Blockquote>
        </Feature>
      </Section>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <Icon name="placeholder" className="w-full h-auto" />
          </FeatureImage>
        }
      >
        <Feature
          title="Composable"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            As a core design principle, composability enables developers to build a blockchain comprised of components
            specific to their needs on a battle-tested framework. Developers are free to choose from a numerous list of
            pallets or create their own to add the specific functionality they need. A developer may choose to have a
            pallet to enable smart contracts, or specifically not include pallets to keep their blockchain lean and
            reduce attack vectors.
          </p>
          <Blockquote>
            <p>
              Blockchains that are purpose built for their environment have key security and performance advantages over
              those that aren&apos;t.
            </p>
          </Blockquote>
          <p>
            For example, a developer may want to enable users to gain access to accounts even if they lose their private
            keys or other authentication mechanism. In this case, the developer would simply include the Recovery pallet
            which enables users to recover an account using trusted “friends”. This example shows how a developer does
            not have to build functionality on top of their blockchain, rather it is already available and deployed into
            the runtime itself.
          </p>
        </Feature>
      </Section>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <Icon name="placeholder" className="w-full h-auto" />
          </FeatureImage>
        }
      >
        <Feature
          title="Adaptable"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            An ever growing number of pallets are available, created by both Parity Technologies and the community, that
            can be combined in many combinations to fit the needs of the desired use case. From an Oracle pallet to a
            Zero-knowledge verifier pallet, even a Governance pallet, there are numerous existing pallets that can be
            integrated from the start or after the fact with forkless runtime upgrades.
          </p>
          <Blockquote>
            <p>
              As existing pallets are enhanced or new ones are created the blockchain can adapt to whatever the future
              may bring.
            </p>
          </Blockquote>
          <p>
            Consider a scenario where a small innovation is made with key recovery; a new recovery pallet could be
            created and deployed in a forkless upgrade automatically. Even with a more drastic innovation such as the
            advent of large scale quantum computing, algorithms can be swapped out for quantum resistant ones.
          </p>
          <Blockquote>
            <p>
              Substrate’s ability to adapt to new technologies as they arise gives developers an unfair advantage
              compared to alternatives.
            </p>
          </Blockquote>
        </Feature>
      </Section>

      <HighlightBanner>
        Founders and Developers can be confident that their blockchain is <strong className="font-bold">ready</strong>{' '}
        for whatever the <strong className="font-bold">future</strong> brings.
      </HighlightBanner>

      <CardsNav currentPage="Future-Proof" />

      <ExploreLinkSection />
    </Layout>
  );
};

export default FutureProof;

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