import { graphql } from 'gatsby';
import React from 'react';

import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ data }) {
  const html = data.markdownRemark.html;
  return (
    <Layout layout="sidebar">
      <SEO title="Awesome Substrate" />
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
