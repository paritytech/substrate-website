import { graphql } from 'gatsby';
import React from 'react';

import Hero from '../../components/layout/technology/Hero';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const Interoperable = () => {
  return (
    <Layout>
      <SEO title="Interoperable" />
      <Hero page="Interoperable">
        <p>text</p>
      </Hero>
    </Layout>
  );
};

export default Interoperable;

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
