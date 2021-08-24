import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const interoperable = () => {
  return (
    <Layout>
      <SEO title="Interoperable" />
      <div>Interoperable</div>
    </Layout>
  );
};

export default interoperable;

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
