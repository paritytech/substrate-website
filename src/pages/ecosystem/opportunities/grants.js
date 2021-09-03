import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Grants() {
  return (
    <Layout layout="sidebar">
      <SEO title="Grants" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-8">Grants</h2>
            <p className="max-w-sm mb-8">
              In support of our mission, the Web3 Foundation grants program funds software development and research in
              the field of decentralized software protocols.
            </p>
            <SecondaryButton link="https://web3.foundation/grants/">
              <span className="mb-0 mr-2 inline">Visit Web3 Grants</span>
              <Icon name="external-link" className="inline mb-1 fill-current text-white dark:text-black" />
            </SecondaryButton>
          </div>
          <Icon name="w3f-logo" className="order-first md:order-last rounded-xl w-full h-auto" />
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
