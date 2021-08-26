import { graphql } from 'gatsby';
import React from 'react';

import Hero from '../../components/layout/technology/Hero';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const Open = () => {
  return (
    <Layout>
      <SEO title="Open" />
      <Hero page="Open">
        <p>text</p>
      </Hero>
    </Layout>
  );
};

export default Open;

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
