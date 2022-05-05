import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
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
    description: 'Learn to build and deploy an ERC20 token smart contract with ink!',
    image: 'img/contracts-tutorials-2.jpeg',
    difficulty: 2,
    time: '1 Hr',
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

      <Section className="grid sm:grid-cols-2 gap-8 max-w-5xl justify-center">
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
                    {difficulty === 1 ? 'Beginner' : difficulty === 2 ? 'Intermediate' : difficulty === 3 && 'Advanced'}
                  </p>
                  <div className="flex ml-1 mt-1">
                    {[...Array(3)].map((_, idx) => (
                      <span
                        key={idx}
                        className={cx('mx-1 inline-block w-3 h-3 bg-substrateDark dark:bg-substrateGray rounded-full', {
                          'bg-opacity-50': difficulty <= idx,
                        })}
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
      </Section>

      <Section>
        <h2 className="text-4xl font-extrabold mb-8">Explore Code Samples</h2>
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
