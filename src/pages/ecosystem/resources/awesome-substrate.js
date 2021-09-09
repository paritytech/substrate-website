import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ pageContext, data }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const html = data.markdownRemark.html;
  return (
    <Layout layout="sidebar">
      <SEO title="Awesome Substrate" />
      <div className="container hidden md:block lg:px-10 mb-10 underline-animate underline-animate-thin">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel="Awesome Substrate"
          hiddenCrumbs={['/']}
          disableLinks={['/ecosystem/resources/awesome-substrate', '/ecosystem/resources']}
          className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
        />
      </div>
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
