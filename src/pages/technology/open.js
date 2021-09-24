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
          Developers know that open-source licensing isn&apos;t enough on its own. They need customizable architecture,
          tooling to support their development, and most importantly, an open and contributing community.
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
          linkText={
            <p className="underline-animate">
              Explore the components of a{' '}
              <Link to="https://substrate.dev/docs/en/knowledgebase/getting-started/architecture">
                Substrate-based blockchain node »
              </Link>
            </p>
          }
        >
          <p>
            Substrate uses familiar open protocols such as libp2p and jsonRPC while letting the developer decide how
            much they want to customize their architecture. If a developer desires full customization, they can use
            Substrate Core to design and implement the runtime from scratch in any language that can target WebAssembly.
          </p>
          <Blockquote>
            <p className="mb-0">
              The easiest approach is to use Substrate Node; a developer can simply configure and supply a JSON file to
              launch a blockchain in minutes.
            </p>
          </Blockquote>
          <p>
            Substrate FRAME is a meet-in-the-middle approach that allows for a lot of freedom and configuration without
            requiring extensive customization. A key benefit of FRAME is the option to select from a growing library of
            pallets or custom-build their own.
          </p>
          <Blockquote>
            <p className="mb-0">
              Developers aren&apos;t locked into a particular design. This allows for the perfect balance between
              customization and ease of development.
            </p>
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
          linkText={
            <p className="underline-animate">
              Visit the tools list maintained by the{' '}
              <Link to="/ecosystem/resources/awesome-substrate">Awesome Substrate community »</Link>
            </p>
          }
        >
          <p>
            Great tooling enables faster development, deployment, and debugging. Not only does Substrate have
            comprehensive, high quality tooling, it also enables developers to use tooling developed by others, since
            everything is based on the same underlying framework. This means there&apos;s no need to reinvent the wheel
            with tooling.
          </p>
          <p>
            Tools for obtaining and analyzing data are critical, and Substrate was built with this in mind. Substrate
            exposes rich telemetry data that can be accessed in a performant, horizontally scalable and resilient way.
            This data is compatible with various tools designed to analyze and visualize the data.
          </p>
          <Blockquote>
            <p className="mb-0">
              Debugging and performance testing tools simplify development. Substrate has a suite of packages for
              building transactions and performance testing, along with a collection of debugging tools.
            </p>
          </Blockquote>
          <p>
            End-user tooling improves the experience of interacting with Substrate blockchain networks. Substrate is the
            only blockchain framework with an ultra-light client for connecting to the blockchain network directly in
            the browser without relying on third parties or running additional node infrastructure. Other end-user
            tooling includes utilities for sharding keys, faucets, wallets, and more.
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
          Substrate has a large, active, and extremely helpful builder community. Many of the pallets have been created
          by the community itself. This means developers will not only continually have more capabilities to add to
          their blockchain network, it also means they can take advantage of blockchain runtime modules and further
          innovations that have been tried and tested within the ecosytem.
        </p>
        <p className="font-bold underline-animate">
          Explore the various ways to{' '}
          <Link to="/ecosystem" className="text-substrateBlue">
            get involved with the community »
          </Link>
        </p>
      </Section>

      <HighlightBanner icon="open">
        The combination of an open-source, customizable architecture, rich tooling and a robust active community makes{' '}
        <strong className="font-bold">Substrate the most open technology for building blockchain networks.</strong>
      </HighlightBanner>

      <CardsNav heading="Learn more about what makes Substrate's technology unique" currentPage="Open" />

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
