import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const FutureProof = () => {
  return (
    <Layout>
      <SEO title="Future-Proof" />
      <div>Future-Proof</div>
    </Layout>
  );
};

export default FutureProof;

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
