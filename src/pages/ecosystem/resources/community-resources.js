import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Community Resources</h2>
            <p className="max-w-sm font-medium mb-12">
              An ever-Growing list of Educational resources provided by the Community
            </p>
            <h5 className="text-2xl font-semibold mb-6">List Of Resources</h5>
            <ul className="ml-0 list-none">
              {resources.map(({ title, provider, description, link }) => (
                <li key={title} className="mb-6 border-b border-substrateBlackish last-of-type:border-none">
                  <p className="font-semibold underline-animate underline-animate-thin mb-2 leading-relaxed">
                    <Link to={link}>{title}</Link>
                  </p>
                  <p className="font-bold mb-2">{provider}</p>
                  <p className="leading-relaxed">{description}</p>
                </li>
              ))}
            </ul>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/community-resources/community-resources.jpg"
            alt="Man on computer"
            className="overflow-hidden rounded-md w-full h-auto aspect-h-1 aspect-w-1"
          />
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
