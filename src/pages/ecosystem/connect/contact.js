import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Contact() {
  return (
    <Layout layout="sidebar">
      <SEO title="Contact" description="Get in touch!" />
      <Section>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="font-medium">Still got questions? Get in touch!</p>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-3 gap-6">
          <div className="bg-substrateGray-light dark:bg-substrateBlackish shadow-md rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">Technical Support</h5>
            <p className="max-w-sm">
              Head to Element chat and Stack Overflow for anwers to blockchain development questions.
            </p>
            <div className="grid grid-cols-2 justify-items-start">
              <Link to="https://stackoverflow.com/questions/tagged/substrate">
                <Icon name="stack-overflow-2" className="inline hover:opacity-50 transition-all" />
              </Link>
              <Link to="https://substrate.stackexchange.com">
                <Icon name="stack-exchange-2" className="inline hover:opacity-50 transition-all" />
              </Link>
            </div>
          </div>
          <div className="bg-substrateGray-light dark:bg-substrateBlackish shadow-md rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">Business Inquiries</h5>
            <p className="max-w-sm">Want to talk business? Let us know what&apos;s on your mind.</p>
            <p className="text-substrateBlue font-bold underline-animate">
              <Link to="https://www.parity.io/collaborate/">Contact Form</Link>
            </p>
          </div>
          <div className="bg-substrateGray-light dark:bg-substrateBlackish shadow-md rounded-md overflow-hidden p-8 md:mb-0 mb-8">
            <h5 className="text-xl font-extrabold mb-4">General Inquiries</h5>
            <p className="max-w-sm">Got a more general question? Send us an email.</p>
            <p className="text-substrateBlue font-bold underline-animate">
              <a href="mailto:info@parity.io">info@parity.io</a>
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h5 className="text-xl font-extrabold mb-8">More Ways To Connect</h5>
        <div className="flex gap-10 md:gap-20">
          <Link to="https://twitter.com/substrate_io">
            <Icon name="twitter2" className="hover:opacity-50 transition-all" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCSs5vZi0U7qHLkUjF3QnaWg">
            <Icon name="youtube" className="hover:opacity-50 transition-all" />
          </Link>
          <Link to="https://www.reddit.com/r/substrate/">
            <Icon name="reddit" className="hover:opacity-50 transition-all" />
          </Link>
          <Link to="https://github.com/paritytech/substrate">
            <span className="text-black dark:text-white fill-current">
              <Icon name="github" className="hover:opacity-50 transition-all" />
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
