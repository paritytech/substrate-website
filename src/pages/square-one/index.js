import { graphql } from 'gatsby';
import React from 'react';
import Lottie from 'react-lottie';

import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import PrimaryButtonLink from '../../components/ui/PrimaryButtonLink';
import * as animationData from '../../images/animation/square-one.json';

export default function SquareOne() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Square One" />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-16">
          <div className="hidden lg:block lg:col-span-6 lg:col-start-6">
            <div className="w-full aspect-w-10 aspect-h-7 mb-8">
              <Lottie options={{ loop: false, animationData }} isClickToPauseDisabled height="full" width="full" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold">Square One</h1>
            <h3 className="mb-6 text-2xl md:text-3xl font-medium lg:pr-4">
              Welcome to your ecosystem engineering guide
            </h3>
            <p className="mb-8 md:text-lg font-medium leading-relaxed">
              Now that you’re ready to build with Substrate, where do you start? The ecosystem represents a blank canvas
              for your blockchain development, complete with all the tools and community knowledge necessary to help any
              project thrive.
            </p>
            <p className="mb-8 md:text-lg font-medium leading-relaxed">
              This is why we created Square One — to act as a guide to the wealth of resources available to Substrate
              builders and the wider community.
            </p>
            <PrimaryButtonLink link="/ecosystem/projects/">Get in touch</PrimaryButtonLink>
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
