import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Card from '../components/layout/Card';
import ExploreCommunityProjects from '../components/layout/contracts/ExploreCommunityProjects';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import LineArrowButton from '../components/ui/LineArrowButton';
import PrimaryButton from '../components/ui/PrimaryButton';

const tutorials = [
  {
    title: 'Write Smart Contracts',
    description: 'Learn to build and deploy an ERC20 token smart contract with ink!',
    image: '/img/contracts-tutorials-1.jpeg',
    difficulty: 1,
    time: '1 Hr',
  },
  {
    title: 'Frontier Workshop',
    description: 'A workshop to configure a Substrate node to run Substrate EVM and Solidity contracts',
    image: 'img/contracts-tutorials-2.jpeg',
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
      <Section className="grid grid-cols-2">
        <div>
          <h1 className="mb-8 font-title font-extrabold text-5xl md:text-6xl">Smart Contracts</h1>
          <p className="text-base mb-6 max-w-md">
            Substrate supports both WebAssembly and Ethereum smart contracts out of the box, giving you a range of
            languages and tools to write powerful contracts.
          </p>
          <Link to="#tutorials">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
        <div>Illustration</div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 gap-8 justify-center md:my-36 max-w-5xl mx-auto">
          {tutorials.map(({ title, description, image, difficulty, time }, idx) => (
            <div
              key={idx}
              className="bg-substrateGray-light dark:bg-substrateBlackish rounded-md max-w-md overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="overflow-hidden w-full h-24 md:h-60 object-cover hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-4">
                <h4 className="text-2xl mb-6">{title}</h4>
                <p className="text-base mb-6">{description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <p className="mb-0 text-sm uppercase tracking-wider">
                      {difficulty === 1
                        ? 'Beginner'
                        : difficulty === 2
                        ? 'Intermediate'
                        : difficulty === 3 && 'Advanced'}
                    </p>
                    <div className="flex ml-1 mt-1">
                      {[...Array(3)].map((_, idx) => (
                        <span
                          key={idx}
                          className={cx(
                            'mx-1 inline-block w-3 h-3 bg-substrateDark dark:bg-substrateGray rounded-full',
                            {
                              'bg-opacity-10 dark:bg-opacity-20': difficulty <= idx,
                            }
                          )}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="time" />
                    <span>{time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="md:mb-36">
        <h2 className="text-4xl font-extrabold mb-8">Explore Code Samples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center auto-rows-fr">
          {cards.map(({ title, description, link }, idx) => (
            <Link key={idx} to={link}>
              <Card className="p-8 h-full flex flex-col justify-between max-w-md">
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                <LineArrowButton>Open in Playground</LineArrowButton>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-extrabold mb-8">Explore Community Projects</h2>
        <p className="text-base mb-6">Browse through different networks, tooling and further resources.</p>
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
