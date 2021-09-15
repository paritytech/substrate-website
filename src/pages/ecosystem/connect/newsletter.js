import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Link } from '../../../components/default/Link';
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
          <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
          <p className="font-medium text-lg">
            Subscribe for technical updates
            <br /> and helpful developer resources.
          </p>
          <input
            placeholder="Type your Email Address"
            className="border-black border rounded-md p-3 text-center w-full mb-4"
          />
          <PrimaryButton link="https://www.link.com/" fullWidth={true}>
            Subscribe
          </PrimaryButton>
          <p className="text-xs mt-3 mb-0 underline-animate underline-animate-thin">
            To see how we use your information please see our{' '}
            <Link className="text-substrateBlue" to="/">
              privacy policy.
            </Link>
          </p>
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
