import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButton from '../../../components/ui/PrimaryButton';

export default function Newsletter() {
  return (
    <Layout layout="sidebar">
      <SEO title="Newsletter" />
      <div className="relative">
        <StaticImage
          src="../../../images/photos/ecosystem/newsletter/newsletter.jpg"
          alt="Man on computer"
          className="w-full h-auto"
        />
        <div className="bg-white dark:bg-substrateBlackish md:absolute m-8 md:p-8 mt-8 md:mt-0 rounded-md md:shadow-xl max-w-md top-1/2 left-10 md:-translate-y-1/2">
          <h2 className="text-4xl font-bold mb-4">[WIP]: Newsletter</h2>
          <p className="font-medium text-lg">
            Subscribe for the latest news, technical updates and helpful developer resources.
          </p>
          <PrimaryButton link="https://www.link.com/" fullWidth={true}>
            [WIP]
          </PrimaryButton>
        </div>
      </div>
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
