import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function IndexPage() {
  return (
    <Layout mode="full">
      <SEO title="Home" />
      <div className="lg:w-1/2">
        <h1 className="text-7xl font-extrabold">_homepage</h1>
      </div>
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
