import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ pageContext, data }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const html = data.markdownRemark.html;
  return (
    <Layout layout="sidebar" pageContext={pageContext}>
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
      <Section>
        <h2 className="text-4xl font-bold mb-6">Awesome Substrate</h2>
        <p className="text-lg font-medium">An awesome list is a list of awesome things curated by the community.</p>
        <p>
          Substrate is a framework for building upgradable, modular and efficient blockchains.
          <br />
          Substrate is an open-source library of Rust code that is maintained by{' '}
          <span className="underline-animate underline-animate-thin">
            <Link to="https://parity.io/">Parity Technologies</Link>.
          </span>
        </p>
      </Section>
      <Section>
        <div
          className="markdown underline-animate underline-animate-thin"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </Section>
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
