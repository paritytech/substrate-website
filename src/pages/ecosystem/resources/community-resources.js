import { graphql } from 'gatsby';
import React from 'react';

import resources from '../../../../data/resources.json';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function CommunityResources() {
  return (
    <Layout layout="sidebar">
      <SEO title="Community Resources" />
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Community Resources</h2>
          <p className="font-medium mb-12">An ever-growing list of educational resources provided by the community.</p>
          <h5 className="text-2xl font-semibold mb-6">List Of Resources</h5>
          <ul className="ml-0 list-none">
            {resources.map(({ title, provider, description, link, note }) => (
              <li key={title} className="mb-6 border-b border-substrateBlackish last-of-type:border-none">
                <p className="font-semibold underline-animate underline-animate-thin mb-2 leading-relaxed">
                  <Link to={link}>{title}</Link>
                </p>
                <p className="font-bold mb-2">{provider}</p>
                <p className="leading-relaxed">{description}</p>
                {note && <p>{note}</p>}
              </li>
            ))}
          </ul>
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
