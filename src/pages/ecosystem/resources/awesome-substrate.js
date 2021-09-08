import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ pageContext }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout layout="sidebar">
      <SEO title="Awesome Substrate" />
      <div className="container lg:px-10 mb-10">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel="Awesome Substrate"
          hiddenCrumbs={['/', '/ecosystem/resources']}
          disableLinks={['/ecosystem/resources/awesome-substrate']}
          className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
        />
      </div>
      <div>awesome substrate</div>
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
