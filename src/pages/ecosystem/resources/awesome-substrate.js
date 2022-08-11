import { graphql } from 'gatsby';
import { Layout, Link, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

export default function AwesomeSubstrate({ data }) {
  const html = data.markdownRemark.html;

  return (
    <Layout layout="sidebar" hasArticleNav>
      <SEO title="Awesome Substrate" />
      <Section>
        <h1 id="awesome-substrate" className="text-4xl font-bold font-body mb-6">
          Awesome Substrate
        </h1>
        <p className="text-lg font-medium">An awesome list is a list of awesome things curated by the community.</p>
        <p>
          Substrate is a framework for building upgradable, modular and efficient blockchains. Substrate is an
          open-source library of Rust code that is maintained by{' '}
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
