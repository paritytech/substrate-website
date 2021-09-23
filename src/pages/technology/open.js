import { graphql } from 'gatsby';
import React from 'react';

import FlipIcon from '../../components/default/FlipIcon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import CardsNav from '../../components/layout/technology/CardsNav';
import ExploreLinkSection from '../../components/layout/technology/ExploreLinkSection';
import { Feature, FeatureImage } from '../../components/layout/technology/Feature';
import Hero from '../../components/layout/technology/Hero';
import HighlightBanner from '../../components/layout/technology/HighlightBanner';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';
import * as animation from '../../images/animation/technology/open.json';

const Open = () => {
  return (
    <Layout>
      <SEO title="Open" />
      <Hero page="Open" animationData={animation}>
        <p>
          Developers know that open source licensing isn&apos;t enough on its own. They need an architecture that is
          open to customization, tooling they they are accustomed to, and most importantly an open and contributing
          community.
        </p>
      </Hero>
      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['open-base', 'architecture']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Architecture"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Substrate uses familiar open protocols such as libp2p and jsonRPC while letting the developer decide how
            much they want to customize their architecture. If a developer desires full customization, they can use
            Substrate Core to design and implement the runtime from scratch in any language that can target WebAssembly.
          </p>
          <Blockquote>
            <p className="mb-0">
              The easiest approach is to use Substrate Node which, a developer can simply configure and supply a JSON
              file to launch a blockchain in minutes.
            </p>
          </Blockquote>
          <p>
            Substrate FRAME is a meet in the middle approach that allows for a lot of freedom and configuration without
            requiring extensive customization. A key benefit with FRAME is the option to select from a growing library
            of pallets or even create custom pallets.
          </p>
          <Blockquote>
            Developers are not locked into a particular design which allows for the right balance of customization
            verses ease of development.
          </Blockquote>
        </Feature>
      </Section>

      <Section
        mode="reversed"
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['open-base', 'tooling']} />
          </FeatureImage>
        }
      >
        <Feature
          title="Tooling"
          learnMore="Interested in the modularity of Substrate?"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            Legacy blockchains often restrict developers to new or custom tools, which can be frustrating and
            inefficient. Substrate on the other hand lets developers use their preferred software development tools. A
            key design decision for substrate was to use WebAssembly, a software format that works widely across the
            web.
          </p>
          <Blockquote>
            <p className="mb-0">
              This allows developers to write blockchain logic in any language that can compile to WebAssembly,
              including C/C++, C#, Typescript, and Rust all while using their preferred software development tools.
            </p>
          </Blockquote>
          <p>
            It is worth noting that, as one of the longest standing players in the space, Parity has acquired deep
            technological leadership and has become an influential Rust development house that operates with the most
            Rust engineers in the world. Because of this, we attract world class talent who come to work with others at
            the forefront of blockchain.
          </p>
        </Feature>
      </Section>

      <Section
        col={2}
        children2={
          <FeatureImage>
            <FlipIcon icons={['open-base', 'community']} />
          </FeatureImage>
        }
      >
        <h2 className="text-4xl font-bold">Community</h2>
        <p>
          The community building with substrate is large, active, and extremely helpful. In fact, many of the pallets
          have been created by the community. This means developers will not only have a continually have more
          capabilities they can add to their blockchain, it also means developers can take advantage of blockchain
          runtime modules that have been hardened and tested by the community.
        </p>
        <p className="font-bold underline-animate">
          To see what the community is up to check out the{' '}
          <Link to="/" className="text-substrateBlue">
            Substrate Community page.{' '}
          </Link>
        </p>
      </Section>

      <HighlightBanner icon="open">
        The combination of an open source, customizable architecture that enables developers to{' '}
        <strong className="font-bold"> use the tooling of their choice </strong>
        with a robust active community makes{' '}
        <strong className="font-bold">Substrate the most open technology for building blockchains.</strong>
      </HighlightBanner>

      <CardsNav currentPage="Open" />

      <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
    </Layout>
  );
};

export default Open;

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
