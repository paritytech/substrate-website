import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Article from '../components/layout/Article';
import Section from '../components/layout/Section';
import Card from '../components/layout/technology/Card';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

const highlights = [
  {
    title: 'Cross-Language Support with WebAssembly',
    description:
      'WebAssembly is the next web standard. Write your blockchain logic in any language that can compile to it, including C/C++, C#, Typescript, and Rust.',
  },
  {
    title: 'Light-Client Friendly',
    description:
      'Substrate comes with a light client built in from day one. Use your mobile-ready blockchain anywhere.',
  },
  {
    title: 'Forkless Upgrades',
    description: 'Upgrading blockchains has never been easier. With Substrate, everybody stays on the same path.',
  },
  {
    title: 'Built-In Coordination',
    description: 'Substrate comes with the tools to help networks decide which upgrades to implement.',
  },
  {
    title: 'Deterministic Finality',
    description:
      'Substrate’s GRANDPA algorithm reaches and finalizes consensus quickly, across networks big and small.',
  },
  {
    title: 'Seamless Integration',
    description:
      'Integrate your existing data, business logic, and other complex tasks into your blockchain with low overhead using off-chain workers.',
  },
];

const cards = [
  {
    title: 'Flexible',
    link: '/technology/flexible',
    description: `The flexible nature of Substrate alleviates the tension of tradeoffs by enabling developers to create the most optimal blockchain for their specific needs.`,
  },
  {
    title: 'Open',
    link: '/technology/open',
    description: `The combination of an open source, customizable architecture that enables developers to use the tooling of their choice with a robust, active community makes Substrate the most open way to build.`,
  },
  {
    title: 'Interoperable',
    link: '/technology/interoperable',
    description: `Interoperability without forgoing compatibility, security, or efficiency; learn how Substrate takes a unique, multifaceted approach to address each of these.`,
  },
  {
    title: 'Future-Proof',
    link: '/technology/future-proof',
    description: `Substrate enables developers to move faster and evolve their architecture as their needs evolve. Founders and Developers can be confident that their blockchain is ready for whatever the future brings.`,
  },
];

export default function IndexPage() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Technology" />
      <Article className="test">
        <Section>
          <div className="lg:grid grid-cols-2 gap-8 lg:mt-8">
            <div className="lg:mr-8">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold my-10 lg:mt-20">Substrate Technology</h1>
              <p className="text-2xl xl:text-3xl font-bold">
                What if developers could build on a blockchain framework specifically optimized for their requirements
                that seamlessly evolves with their needs and without forks?
              </p>
              <p className="text-2xl xl:text-3xl font-bold">
                Welcome to Substrate, the only{' '}
                <Link className="text-substrateBlue border-b-2 border-substrateBlue" to="/technology/flexible">
                  flexible
                </Link>
                ,{' '}
                <Link className="text-substrateBlue border-b-2 border-substrateBlue" to="/technology/open">
                  open
                </Link>
                ,{' '}
                <Link className="text-substrateBlue border-b-2 border-substrateBlue" to="/technology/interoperable">
                  interoperable
                </Link>
                , and{' '}
                <Link className="text-substrateBlue border-b-2 border-substrateBlue" to="/technology/future-proof">
                  future proof
                </Link>{' '}
                blockchain framework.
              </p>
            </div>
            <div>
              <div className="bg-gray-200 h-80 w-160 mb-6"></div>
              <p>
                Substrate was created by OGs of blockchain who set out to overcome the limitations they experienced
                building blockchains. Through the process of building clients in the early days of Bitcoin and Ethereum,
                these developers realized they were recreating much of the same functionality but with different
                limitations such as scale, governance, forks, interoperability, and upgrades.
              </p>
              <p className="font-bold">
                {`Substrate was born from the realization that developers shouldn't have to recreate fundamentals to build
                  a blockchain that alleviates their limitations. The information below will help you understand why
                  Substrate is the best technology to build on now and into the future.`}
              </p>
              <p>
                Be sure to head over to the playground to try it out for yourself and don’t be shy to ask questions in
                the super friendly community.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 xl:gap-24 list-none m-0">
            {highlights.map(({ title, description }) => {
              return (
                <li className="m-0" key={title}>
                  <div className="w-16">
                    <Icon name="placeholder" className="w-full h-auto" />
                  </div>
                  <h5 className="my-4">{title}</h5>
                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section>
          <h2 className="text-4xl mb-10">Substrate is:</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {cards.map(({ title, link, description }, index) => {
              return (
                <Card key={index} title={title} link={link} index={index}>
                  {description}
                </Card>
              );
            })}
          </div>
        </Section>
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
