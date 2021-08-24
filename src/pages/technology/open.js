import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const open = () => {
  return (
    <Layout>
      <SEO title="Open" />
      <div>Open</div>
    </Layout>
  );
};

export default open;

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
