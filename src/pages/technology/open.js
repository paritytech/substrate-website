import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const Open = () => {
  return (
    <Layout>
      <SEO title="Open" />
      <div>Open</div>
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
