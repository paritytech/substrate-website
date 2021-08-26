import { graphql } from 'gatsby';
import React from 'react';

import Hero from '../../components/layout/technology/Hero';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const FutureProof = () => {
  return (
    <Layout>
      <SEO title="Future-Proof" />
      <Hero page="Future Proof">
        <p>text</p>
      </Hero>
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
