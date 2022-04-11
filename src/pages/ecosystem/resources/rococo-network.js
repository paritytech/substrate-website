import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Rococo() {
  return (
    <Layout layout="sidebar">
      <SEO title="Rococo Network" />
      <Section className="underline-animate underline-animate-thin">
        <h1 className="text-4xl font-bold font-body mb-12">Rococo Network</h1>
        <h2 className="text-2xl font-bold mb-6">Rococo, the place for parachain testing!</h2>
        <p>
          Rococo is a testnet built for parachains. Rococo utilizes{' '}
          <Link to="https://github.com/paritytech/cumulus">Cumulus</Link> and XCMP (Cross-Chain Message Passing) to send
          transfers and messages between parachains and the Relay Chain. Every message is sent to the Relay Chain,then
          from the Relay Chain to the desired parachain.{' '}
        </p>
        <p>
          Rococo currently runs Rocmint (Statemint on Rococo) and Canvas as well as several community parachains. Rococo
          also has a working {`Substrate<>Substrate`} bridge to Wococo Network, and a first iteration of{' '}
          <Link to="https://github.com/paritytech/grandpa-bridge-gadget">Beefy</Link> implementation.
        </p>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-6">Parachain lifecycle</h2>
        <div className="flex">
          <div>
            <Icon name="become-parathread" />
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
