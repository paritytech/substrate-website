import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const flexible = () => {
  return (
    <Layout>
      <SEO title="Flexible" />
      <div>Flexible</div>
    </Layout>
  );
};

export default flexible;

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
