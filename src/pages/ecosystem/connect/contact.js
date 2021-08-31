import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Contact() {
  return (
    <Layout mode="full">
      <SEO title="Contact" />
      <Section>
        <h2 className="text-4xl font-bold my-2">Contact Us</h2>
        <p className="font-medium">Placeholder line or two of text.</p>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-3 gap-6">
          <div className="bg-substrateGray-light rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">Technical Support</h5>
            <p className="max-w-sm">
              Find answers to questions about blockchain development through Element chat and Stack Overflow.
            </p>
            <div className="grid grid-cols-2 justify-items-start">
              <Link to="https://stackoverflow.com/questions/tagged/substrate">
                <Icon name="stack-overflow-2" className="inline" />
              </Link>
              <Link to="https://matrix.to/#/#substrate-technical:matrix.org">
                <Icon name="element2" className="inline" />
              </Link>
            </div>
          </div>
          <div className="bg-substrateGray-light rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">Business Inquiries</h5>
            <p className="max-w-sm">
              Find answers to questions about blockchain development through Element chat and Stack Overflow.
            </p>
            <p className="text-substrateBlue font-bold">
              <Link to="https://www.parity.io/collaborate/">Contact Form</Link>
            </p>
          </div>
          <div className="bg-substrateGray-light rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">General Inquiries</h5>
            <p className="max-w-sm">
              Find answers to questions about blockchain development through Element chat and Stack Overflow.
            </p>
            <p className="text-substrateBlue font-bold">general@parity.io</p>
          </div>
        </div>
      </Section>
      <Section>
        <h5 className="text-xl font-extrabold mb-8">More Ways To Connect</h5>
        <div className="flex gap-10 md:gap-20">
          <Link to="https://twitter.com/substrate_io">
            <Icon name="twitter2" />
          </Link>
          <Link to="https://discord.gg/DgArePMg">
            <Icon name="discord" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCSs5vZi0U7qHLkUjF3QnaWg">
            <Icon name="youtube" />
          </Link>
          <Link to="https://www.reddit.com/r/substrate/">
            <Icon name="reddit" />
          </Link>
          <Link to="https://github.com/paritytech/substrate">
            <span>
              <Icon name="github" />
            </span>
          </Link>
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
