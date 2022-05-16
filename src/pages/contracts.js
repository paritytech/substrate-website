import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Card from '../components/layout/Card';
import ExploreCommunityProjects from '../components/layout/contracts/ExploreCommunityProjects';
import TutorialCard from '../components/layout/contracts/TutorialCard';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import LineArrowButton from '../components/ui/LineArrowButton';

const tutorials = [
  {
    link: 'https://docs.substrate.io/tutorials/v3/ink-workshop/pt1/',
    title: 'Write Smart Contracts',
    description: 'Learn to build and deploy an ERC20 token smart contract with ink!',
    image: '/img/contracts-tutorials-1.jpeg',
    difficulty: 1,
    time: '1 Hr',
  },
  {
    link: 'https://docs.substrate.io/tutorials/v3/frontier/',
    title: 'Frontier Workshop',
    description: 'A workshop to configure a Substrate node to run Substrate EVM and Solidity contracts',
    image: '/img/contracts-tutorials-2.jpeg',
    difficulty: 2,
    time: '1 Hr',
  },
];

const cards = [
  {
    title: 'ERC20 Contract',
    description: 'Learn to write an ERC20 contract.',
    link: 'https://www.ink-playground.xyz/?id=73034cd9a3c0ddf6cbc7ee94380f624b',
  },
  {
    title: 'Incrementer',
    description: 'Learn to write a simple incrementer contract.',
    link: 'https://www.example.com/',
  },
  {
    title: 'DNS Contract',
    description: 'Learn to write a DNS contract.',
    link: 'https://www.ink-playground.xyz/?id=926d08d4afd109f981214cc4999ad48e',
  },
];

export default function SmartContracts() {
  return (
    <Layout>
      <SEO title="Smart Contracts" />
      <Section className="grid md:grid-cols-2 items-center">
        <div>
          <h1 className="mb-8 font-title font-extrabold text-5xl md:text-6xl">Smart Contracts</h1>
          <p className="text-base mb-6 max-w-md">
            Substrate supports both WebAssembly and Ethereum smart contracts out of the box, giving you a range of
            languages and tools to write powerful contracts.
          </p>
          <p className="text-base mb-0 max-w-md font-bold">
            Find out more about the different ways to implement smart contracts{' '}
            <span className="underline-animate underline-animate-thin">
              <Link to="https://docs.substrate.io/v3/runtime/smart-contracts/">in the docs »</Link>
            </span>
          </p>
        </div>
        <div className="hidden md:block w-full aspect-w-8 aspect-h-7 mb-8">
          <Icon name="smart-contracts" />
        </div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 auto-rows-max gap-8 justify-center md:my-40 max-w-5xl mx-auto">
          {tutorials.map((tutorial, idx) => (
            <TutorialCard key={idx} tutorial={tutorial} />
          ))}
        </div>
      </Section>

      <section className="bg-substrateGray-light dark:bg-substrateBlackish py-20 my-20 md:mb-40">
        <div className="container">
          <h2 className="text-2xl md:text-3xl text-center mb-14 max-w-xl mx-auto">
            Write, compile and deploy your contract without leaving the browser.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
            <div className="text-center mb-8" data-aos="fade-up">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="fountain-pen" className="m-3 fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">Write</h3>
              <p className="leading-relaxed mb-6 max-w-sm mx-auto">
                Open a boilerplate contract in the ink! Playground and start writing.
              </p>
              <LineArrowButton centered primary link="https://www.ink-playground.xyz/">
                Open ink! Playground
              </LineArrowButton>
            </div>
            <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="wrench" className="m-3 fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">Compile</h3>
              <p className="leading-relaxed mb-6 max-w-sm mx-auto">
                Compile your contract directly in the ink! Playground.
              </p>
              <LineArrowButton centered primary link="https://www.ink-playground.xyz/">
                Open ink! Playground
              </LineArrowButton>
            </div>
            <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="rocket" className="m-3 fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">Upload and Deploy</h3>
              <p className="leading-relaxed mb-6 max-w-sm mx-auto">
                Take your compiled contract bundle to the Contracts UI and deploy it on a local node or testnet.
              </p>
              <LineArrowButton centered primary link="https://contracts.substrate.io/">
                Open Contracts UI
              </LineArrowButton>
            </div>
          </div>
        </div>
      </section>

      <Section className="md:mb-40">
        <h2 className="text-4xl font-extrabold mb-8">Explore Code Samples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center auto-rows-fr">
          {cards.map(({ title, description, link }, idx) => (
            <Link key={idx} to={link}>
              <Card className="p-8 h-full flex flex-col justify-between max-w-md">
                <div>
                  <h4 className="text-2xl mb-6">{title}</h4>
                  <p className="mb-6">{description}</p>
                </div>
                <LineArrowButton>Open in Playground</LineArrowButton>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <ExploreCommunityProjects />
      </Section>
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
