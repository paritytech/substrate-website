import { graphql } from 'gatsby';
import React from 'react';

import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function ThankYou() {
  return (
    <Layout>
      <SEO title="Thank You" />
      <Section>
        <h1 className="mb-20 mt-20 md:mt-52 text-4xl sm:text-5xl md:text-6xl font-body font-extrabold">
          Thanks For Your Submission.
        </h1>
        <p className="underline-animate underline-animate-thin">
          For more news, follow <Link to="https://twitter.com/substrate_io">@substrate_io</Link> on Twitter.
        </p>
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
  }
`;
