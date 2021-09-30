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
import * as animation from '../../images/animation/technology/future-proof.json';

const FutureProof = () => {
  return (
    <Layout>
      <SEO title="Future-Proof" />
      <Hero page="Future Proof" animationData={animation}>
        <p>
          Blockchain technology is evolving at a rapid pace and has spurred innovation in other areas such as zero
          knowledge, consensus mechanisms, cryptographic libraries, and much more. It&apos;s challenging enough to keep
          up with technology let alone integrate it. Substrate enables your blockchain to assimilate new technology as
          it comes along.
        </p>
      </Hero>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['future-proof-base', 'upgradable']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Upgradeable"
          linkText={
            <p className="underline-animate">
              Learn how{' '}
              <Link to="https://substrate-docs-staging.netlify.app/v3/runtime/upgrades">Substrate upgrades work »</Link>
            </p>
          }
        >
          <p>
            With any structure, the foundation is often the most difficult part to modify, and thus upgrade. For this
            reason, Substrate&apos;s base has intentionally been built on an extremely simple and unchanging foundation
            using the widely-accepted open protocol WebAssembly.
          </p>
          <p>
            Changes occur a layer up from the foundation which not only gives developers a non-opinionated design to
            work with, it also removes legacy design decisions that would otherwise become outdated and baked into the
            foundation.
          </p>
          <Blockquote>
            <p className="mb-0">
              This allows Substrate to adopt new technology as it evolves because it doesn&apos;t require alterations to
              the foundation. Developers can stay on top of technological advancements and adopt them more quickly with
              forkless automatic upgrades.
            </p>
          </Blockquote>
        </Feature>
      </Section>

      <CaseStudyBanner icon="moonbeam-logo" link="/ecosystem/projects/case-studies/moonbeam">
        Learn how Moonbeam remains a fully Ethereum-compatible smart contract parachain by continuosly adapting.
      </CaseStudyBanner>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['future-proof-base', 'composable']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Composable"
          linkText={
            <p className="underline-animate">
              Explore how <Link to="https://substrate-docs-staging.netlify.app/v3/runtime/frame">FRAME</Link> enables
              composability »
            </p>
          }
        >
          <p>
            As a core design principle, composability enables developers to build a blockchain comprised of components
            specific to their needs on a battle-tested framework. Developers are free to choose from a long list of
            pallets or create their own to add the specific functionality they need. A developer may choose to have a
            pallet that enables smart contracts, or specifically not include pallets to keep their blockchain network
            lean and reduce attack vectors.
          </p>
          <Blockquote>
            <p className="mb-0">
              Blockchains that are purpose built for their environment have key security and performance advantages over
              those that aren&apos;t.
            </p>
          </Blockquote>
          <p>
            For example, a developer may want to enable users to gain access to accounts even if they lose their private
            keys or other authentication mechanism. In this case, the developer would simply include the Recovery
            pallet, which enables users to recover an account using trusted friends. Developers don&apos;t need to build
            new functionality on top; it&apos;s already available and deployed into the runtime itself.
          </p>
        </Feature>
      </Section>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['future-proof-base', 'adaptable']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Adaptable"
          linkText={
            <p className="underline-animate">
              Adapt your runtime by adding a pallet using{' '}
              <Link to="https://substrate-docs-staging.netlify.app/tutorials/v3/add-a-pallet/">this tutorial »</Link>
            </p>
          }
        >
          <p>
            An ever-growing number of pallets are available, created by both Parity Technologies and the community.
            These can be combined in many combinations to fit the needs of the desired use case. From an Oracle pallet
            to a Zero-knowledge verifier pallet, even a Governance pallet, there are numerous existing pallets that can
            be integrated from the start or added later with forkless runtime upgrades.
          </p>
          <Blockquote>
            <p className="mb-0">
              As existing pallets are enhanced or new ones are created, Substrate-based networks can adapt to whatever
              the future may bring.
            </p>
          </Blockquote>
          <p>
            Consider a scenario where a small innovation is made with key recovery; a new recovery pallet could be
            created and deployed in a forkless upgrade automatically. Even with a more drastic innovation such as the
            advent of large-scale quantum computing, algorithms can be swapped out for quantum resistant ones.
          </p>
          <Blockquote>
            <p className="mb-0">
              Substrate’s ability to adapt to new technologies as they arise gives developers a competitive advantage
              over alternatives.
            </p>
          </Blockquote>
        </Feature>
      </Section>

      <HighlightBanner icon="future-proof">
        Founders and Developers can be confident that their blockchain is <strong className="font-bold">ready</strong>{' '}
        for whatever the <strong className="font-bold">future</strong> brings.
      </HighlightBanner>

      <CardsNav heading="Learn more about what makes Substrate's technology unique" currentPage="Future Proof" />

      <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
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
