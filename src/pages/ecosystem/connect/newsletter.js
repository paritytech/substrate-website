import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Newsletter, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

export default function NewsletterPage() {
  return (
    <Layout layout="sidebar">
      <SEO
        title="Newsletter"
        description="Subscribe for the latest news, technical updates and helpful developer resources."
      />
      <div className="relative -mt-12 md:mt-0">
        <StaticImage
          src="../../../images/photos/ecosystem/newsletter/newsletter.jpg"
          alt="Man on computer"
          className="w-full h-auto"
          placeholder="none"
        />
        <div className="bg-white dark:bg-transparent md:dark:bg-substrateBlackish p-4 my-6 md:my-0 md:absolute md:p-8 rounded-md md:shadow-xl max-w-lg top-1/2 left-10 md:-translate-y-1/2">
          <Newsletter layout="widget" />
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
