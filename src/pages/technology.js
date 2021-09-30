import { graphql } from 'gatsby';
import React from 'react';
import Lottie from 'react-lottie';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Article from '../components/layout/Article';
import Section from '../components/layout/Section';
import Card from '../components/layout/technology/Card';
import ExploreLinkSection from '../components/layout/technology/ExploreLinkSection';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import * as animationData from '../images/animation/technology/overview.json';

const highlights = [
  {
    title: 'Tooling',
    icon: 'tools',
    description:
      'No need to reinvent the wheel, Substrate has robust tooling for development, deployment, and debugging.',
    link: 'https://substrate-docs-staging.netlify.app/v3/tools',
  },
  {
    title: 'Light-Client-First Design',
    icon: 'light-client',
    description:
      'Browsers can interact directly with the blockchain network instead of relying on resource-heavy local node infrastructure or third party services.',
    link: '/substrate-connect',
  },
  {
    title: 'Forkless Upgrades',
    icon: 'forkless-upgrades',
    description: 'Upgrading blockchains has never been easier. With Substrate, everyone stays on the same path.',
    link: 'https://substrate-docs-staging.netlify.app/v3/runtime/upgrades',
  },
];

export default function IndexPage() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Technology" />
      <Article>
        <Section>
          <div className="grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:mr-8 order-1">
              <p className="tracking-wider lg:tracking-widest text-lg font-light mb-8 uppercase">
                Substrate Technology
              </p>
              <h1 className="font-title text-5xl md:text-6xl xl:text-7xl font-extrabold mb-8">
                Build
                <br /> beyond the
                <br /> capabilities
                <br /> of others
              </h1>
            </div>
            <div className="order-3 lg:order-2 self-end">
              <div className="w-full aspect-w-10 aspect-h-7 mb-8">
                <Lottie options={{ animationData }} isClickToPauseDisabled height="full" width="full" />
              </div>
            </div>
            <div className="order-2 lg:order-3">
              <p className="text-xl md:text-2xl xl:text-3xl font-bold">
                What if developers could build on a blockchain framework specifically optimized for their requirements
                that seamlessly evolves with their needs and without requiring forks?
              </p>
              <p className="underline-animate text-xl md:text-2xl xl:text-3xl font-bold">
                Welcome to Substrate, the only{' '}
                <Link className="text-substrateBlue" to="/technology/flexible">
                  flexible,
                </Link>{' '}
                <Link className="text-substrateBlue" to="/technology/open">
                  open,
                </Link>{' '}
                <Link className="text-substrateBlue" to="/technology/interoperable">
                  interoperable,
                </Link>{' '}
                and{' '}
                <Link className="text-substrateBlue" to="/technology/future-proof">
                  future proof
                </Link>{' '}
                blockchain framework.
              </p>
            </div>
            <div className="order-4">
              <p>
                Substrate was created by pioneers and veterans of the blockchain industry who set out to overcome the
                limitations of previous-generation networks. Through the process of building clients in the early days
                of Bitcoin and Ethereum, these developers found they were recreating much of the same functionality but
                with different limitations around scale, governance, forks, interoperability, and upgrades.
              </p>
              <p className="font-bold underline-animate underline-animate-thin">
                Substrate was born from the <Link to="/vision/substrate-and-polkadot">vision</Link> that developers
                shouldn&apos;t have to recreate fundamentals when building and optimizing a blockchain. Read below to
                learn why Substrate is the best technology to build on, now and into the future.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <ul className="grid sm:grid-cols-3 gap-16 xl:gap-24 list-none m-0">
            {highlights.map(({ title, icon, description, link }) => {
              return (
                <li key={title} className="m-0 hover:opacity-50 transition-opacity">
                  <Link to={link}>
                    <div className="w-16 h-16">
                      <Icon name={icon} className="fill-current text-substrateBlackish dark:text-white" />
                    </div>
                    <h5 className="my-4 text-xl font-bold" dangerouslySetInnerHTML={{ __html: title }}></h5>
                    <p>{description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section>
          <div className="relative md:-mt-10">
            <Icon name="diamond-green" className="hidden md:block absolute opacity-20 right-0 w-1/3" />
            <h2 className="text-4xl mb-10 md:pt-16 font-bold">Substrate is uniquely:</h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <Card page="Flexible" mode="horizontal" />
              <Card page="Open" mode="horizontal" delay={200} />
              <Card page="Interoperable" mode="horizontal" delay={400} />
              <Card page="Future Proof" mode="horizontal" delay={600} />
            </div>
          </div>
        </Section>
        <ExploreLinkSection links={['developerHub', 'vision', 'ecosystem']} />
      </Article>
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
