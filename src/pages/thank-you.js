import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function ThankYou() {
  return (
    <Layout>
      <SEO title="Thank You" />
      <Section col={2} children2={<Icon name="placeholder" className="w-full h-auto" />}>
        <div className="h-full flex">
          <div className="self-center pr-8">
            <h1 className="mb-20 text-5xl md:text-6xl font-body font-extrabold">Thanks For Your Submission.</h1>
            <p className="underline-animate underline-animate-thin">
              For more news, follow <Link to="https://twitter.com/substrate_io">@substrate_io</Link> on Twitter.
            </p>
          </div>
        </div>
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
