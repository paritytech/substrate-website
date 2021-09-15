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
            <h2 className="text-4xl font-bold mb-6">Grants</h2>
            <p className="max-w-sm mb-8">
              In support of its mission, the Web3 Foundation grants program funds software development and research in
              the field of decentralized software protocols.
            </p>
            <SecondaryButton link="https://web3.foundation/grants/">
              <span className="mb-0 mr-2 inline">Visit Web3 Grants</span>
              <Icon name="external-link" className="inline mb-1 fill-current text-white dark:text-black" />
            </SecondaryButton>
          </div>
          <div className="mt-8 md:mt-0 fill-current text-white dark:text-black bg-black dark:bg-substrateDarkThemeLightGrey rounded-xl aspect-w-9 aspect-h-8 flex">
            <Icon name="w3f-logo" className="order-first md:order-last w-full pb-6 px-5 self-center" />
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
