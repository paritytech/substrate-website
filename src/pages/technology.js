import { graphql } from 'gatsby';
import React from 'react';

import Gif from '../components/default/Gif';
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
    icon: 'wa-logo',
    description:
      'WebAssembly is the next web standard. Write your blockchain logic in any language that can compile to it, including C/C++, C#, Typescript, and Rust.',
  },
  {
    title: 'Light-Client <br/>Friendly',
    icon: 'light-client',
    description:
      'Substrate comes with a light client built in from day one. Use your mobile-ready blockchain anywhere.',
  },
  {
    title: 'Forkless <br/>Upgrades',
    icon: 'forkless',
    description: 'Upgrading blockchains has never been easier. With Substrate, everybody stays on the same path.',
  },
];

export default function IndexPage() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Technology" />
      <Article>
        <Section>
          <div className="lg:grid grid-cols-2 gap-8">
            <div className="lg:mr-8">
              <h1
                data-aos="fade-up"
                className="font-title text-5xl md:text-6xl xl:text-8xl font-extrabold my-10 lg:mt-20"
              >
                Substrate Technology
              </h1>
              <p className="text-xl md:text-2xl xl:text-3xl font-bold">
                What if developers could build on a blockchain framework specifically optimized for their requirements
                that seamlessly evolves with their needs and without forks?
              </p>
              <p className="underline-animate text-xl md:text-2xl xl:text-3xl font-bold">
                Welcome to Substrate, the only{' '}
                <Link className="text-substrateBlue" to="/technology/flexible">
                  flexible
                </Link>
                ,{' '}
                <Link className="text-substrateBlue" to="/technology/open">
                  open
                </Link>
                ,{' '}
                <Link className="text-substrateBlue" to="/technology/interoperable">
                  interoperable
                </Link>
                , and{' '}
                <Link className="text-substrateBlue" to="/technology/future-proof">
                  future proof
                </Link>{' '}
                blockchain framework.
              </p>
            </div>
            <div>
              <Gif name="heroTechnology" alt="Substrate Hero Image" />
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
          <ul className="grid sm:grid-cols-3 gap-16 xl:gap-24 list-none m-0">
            {highlights.map(({ title, icon, description }) => {
              return (
                <li key={title} className="m-0">
                  <Link to="/technology">
                    <div className="w-16 h-16">
                      <Icon name={icon} className="" />
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
          <h2 className="text-4xl mb-10 font-bold">Substrate is:</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card page="Flexible" mode="horizontal" image="heroFlexible" />
            <Card page="Open" mode="horizontal" delay={200} image="heroOpen" />
            <Card page="Interoperable" mode="horizontal" delay={400} image="heroFlexible" />
            <Card page="Future-Proof" mode="horizontal" delay={600} image="heroFutureProof" />
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
