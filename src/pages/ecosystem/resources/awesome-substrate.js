import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ data }) {
  const html = data.markdownRemark.html;
  return (
    <Layout layout="sidebar">
      <SEO title="Awesome Substrate" />
      <div>awesome substrate</div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
    markdownRemark(fileAbsolutePath: { regex: "/awesome-substrate/index.md/" }) {
      html
    }
  }
`;
