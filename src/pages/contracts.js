import { graphql } from 'gatsby';
import React from 'react';

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
          <p className="text-base mb-6 max-w-sm">
            Substrate supports both WebAssembly and Ethereum smart contracts out of the box, giving you a range of
            languages and tools to write powerful contracts.
          </p>
          <Link to="#tutorials">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
        <div>Illustration</div>
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
