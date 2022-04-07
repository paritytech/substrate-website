import { graphql } from 'gatsby';
import React from 'react';

import Section from '../../../components/Layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Rococo() {
  return (
    <Layout layout="sidebar">
      <SEO title="Rococo Network" />
      <Section>
        <h1 className="text-4xl font-bold font-body mb-6">Rococo Network</h1>
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
