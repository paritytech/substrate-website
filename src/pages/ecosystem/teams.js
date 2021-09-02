import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

export default function Teams() {
  return (
    <Layout layout="sidebar">
      <SEO title="Teams" />
      <div>teams</div>
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
