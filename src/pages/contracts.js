import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButton from '../components/ui/PrimaryButton';

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
      <Section className="grid md:grid-cols-2 gap-8">
        <div className="bg-substrateGray-light dark:bg-substrateBlackish rounded-md overflow-hidden">
          <div className="overflow-hidden">
            <StaticImage
              src="../images/jpg/contracts-tutorials-1.jpeg"
              alt="Tutorial illustration"
              className="overflow-hidden hover:scale-110 transition-transform"
            />
          </div>
          <div className="p-4">
            <h4 className="text-2xl mb-6">Write Smart Contracts</h4>
            <p className="text-base mb-6">Learn to build and deploy an ERC20 token smart contract with ink!</p>
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-sm uppercase tracking-wider">Beginner</p>
                <div className="flex ml-1 mt-1">
                  <span className="mx-1 inline-block w-3 h-3 bg-substrateDark dark:bg-substrateGray rounded-full"></span>
                  <span className="mx-1 inline-block w-3 h-3 bg-substrateDark bg-opacity-10 dark:bg-substrateGray dark:bg-opacity-50 rounded-full"></span>
                  <span className="mx-1 inline-block w-3 h-3 bg-substrateDark bg-opacity-10 dark:bg-substrateGray dark:bg-opacity-50 rounded-full"></span>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="time" />
                <span>1 Hr</span>
              </div>
            </div>
          </div>
        </div>
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
