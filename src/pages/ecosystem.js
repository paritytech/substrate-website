import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function Home() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Ecosystem" />
      <div>ecosystem home</div>
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
