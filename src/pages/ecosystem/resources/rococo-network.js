import { graphql } from 'gatsby';
import React from 'react';

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

export default function Rococo({ data }) {
  const { obtainingRoc, reserveParaId, buildParachain, runSyncCollator, registerWasm } = data;

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
              <div className="w-[300px] h-[300px]">
                <Icon className="mb-4 fill-current dark:text-white border border-[#828282] w-full h-full" name={name} />
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-6">{obtainingRoc.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: obtainingRoc.html }} className="mb-8"></div>

        <h2 className="text-2xl font-bold mb-6">Off-chain steps</h2>
        <h3 className="text-base mb-4">{reserveParaId.frontmatter.title}</h3>
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: reserveParaId.html }}></div>

        <h3 className="text-base mb-4">{buildParachain.frontmatter.title}</h3>
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: buildParachain.html }}></div>

        <h3 className="text-base mb-4">{runSyncCollator.frontmatter.title}</h3>
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: runSyncCollator.html }}></div>

        <h3 className="text-base mb-4">{registerWasm.frontmatter.title}</h3>
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: registerWasm.html }}></div>
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
    obtainingRoc: markdownRemark(frontmatter: { title: { eq: "Obtaining ROC" } }) {
      frontmatter {
        title
      }
      html
    }
    reserveParaId: markdownRemark(frontmatter: { title: { eq: "Reserve para ID" } }) {
      frontmatter {
        title
      }
      html
    }
    buildParachain: markdownRemark(frontmatter: { title: { eq: "Build parachain using para ID" } }) {
      frontmatter {
        title
      }
      html
    }
    runSyncCollator: markdownRemark(frontmatter: { title: { eq: "Run and sync collator" } }) {
      frontmatter {
        title
      }
      html
    }
    registerWasm: markdownRemark(frontmatter: { title: { eq: "Register Wasm and chain spec" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
