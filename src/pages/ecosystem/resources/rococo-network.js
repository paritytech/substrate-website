import { graphql } from 'gatsby';
import Prism from 'prismjs';
import React, { useEffect } from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

const illustrations = [
  {
    name: 'become-parathread',
    description: '1. Become parathread',
  },
  {
    name: 'onboarding',
    description: '2. Onboarding',
  },
  {
    name: 'upgrading',
    description: '3. Upgrading',
  },
  {
    name: 'parachain',
    description: '4. Parachain',
  },
  {
    name: 'downgrading',
    description: '5. Downgrading',
  },
  {
    name: 'parathread',
    description: '6. Parathread',
  },
];

export default function Rococo() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Layout layout="sidebar">
      <SEO title="Rococo Network" />
      <Section className="grid md:grid-cols-3 underline-animate underline-animate-thin">
        <h1 className="order-1 md:order-none md:col-start-1 md:col-span-2 text-4xl font-bold font-body mb-12">
          Rococo Network
        </h1>
        <h2 className="order-3 md:order-none md:col-start-1 md:col-span-2 text-2xl font-bold mb-6">
          Rococo, the place for parachain testing!
        </h2>
        <div className="order-4 md:order-none md:col-start-1 md:col-span-2 mr-4">
          <p>
            Rococo is a testnet built for parachains. Rococo utilizes{' '}
            <Link to="https://github.com/paritytech/cumulus">Cumulus</Link> and XCMP (Cross-Chain Message Passing) to
            send transfers and messages between parachains and the Relay Chain. Every message is sent to the Relay
            Chain, then from the Relay Chain to the desired parachain.{' '}
          </p>
          <p>
            Rococo currently runs{' '}
            <Link to="https://wiki.polkadot.network/docs/learn-common-goods#statemint">Rocmint </Link> (Statemint on
            Rococo) and Canvas as well as several community parachains. Rococo also has a working{' '}
            {`Substrate<>Substrate`} bridge to Wococo Network, and a first iteration of{' '}
            <Link to="https://github.com/paritytech/grandpa-bridge-gadget">Beefy</Link> implementation.
          </p>
        </div>
        <div className="order-2 md:order-none md:col-start-3 mb-8 w-full">
          <Icon name="rococo-logo" />
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-6">Parachain lifecycle</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {illustrations.map(({ name, description }, idx) => (
            <div key={idx}>
              <Icon className="mb-4 fill-current dark:text-white border " name={name} />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-6">Obtaining ROC</h2>
        <p className="underline-animate underline-animate-thin">
          ROC are available in the <a href="https://app.element.io/#/room/#rococo-faucet:matrix.org">Rococo Faucet</a>{' '}
          channel on Matrix. To receive ROC tokens, use the command:
        </p>
        <pre>
          <code className="language-powershell">!drip YOUR_ROCOCO_ADDRESS</code>
        </pre>
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
