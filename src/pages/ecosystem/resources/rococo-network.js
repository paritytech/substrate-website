import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Markdown from '../../../components/default/Markdown';
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
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 w-full">
          {illustrations.map(({ name, description }, idx) => (
            <div key={idx}>
              <div>
                <Icon className="mb-4 fill-current dark:text-white border border-[#828282] w-full h-full" name={name} />
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="underline-animate underline-animate-thin">
        <h2 className="text-2xl font-bold mb-6">{obtainingRoc.frontmatter.title}</h2>
        <p className="mb-10">
          ROC are available in the{' '}
          <a
            href="https://app.element.io/#/room/#rococo-faucet:matrix.org"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Rococo Faucet
          </a>{' '}
          channel on Matrix. To receive ROC tokens, use the command:
        </p>
        <Markdown htmlAst={obtainingRoc.htmlAst} />

        <p className="mb-6">
          Now that you have generated and registered your parachain on Rococo, you can{' '}
          <a
            href="https://github.com/paritytech/subport/issues/new?assignees=&labels=Rococo&template=rococo.yaml"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Open a Request
          </a>{' '}
          for it to be upgraded!
        </p>
        <p className="mb-10">
          If you have a parachain already on Kusama and/or Polkadot, you will be entitled for a long term lease. If this
          is the case, you need to directly{' '}
          <a
            href="https://github.com/paritytech/subport/issues/new?assignees=&labels=Rococo&template=rococo.yaml"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Open a Request
          </a>{' '}
          with the following information: paraID of your Kusama parachain, WASM and Genesis of your parachain following
          the same paraID that you have on Kusama.
        </p>

        <h2 className="text-2xl font-bold mb-6">Off-chain steps</h2>

        <h3 className="text-base font-bold mb-4">{reserveParaId.frontmatter.title}</h3>
        <Markdown htmlAst={reserveParaId.htmlAst} />

        <h3 className="text-base font-bold mb-4">{buildParachain.frontmatter.title}</h3>
        <Markdown htmlAst={buildParachain.htmlAst} />

        <h3 className="text-base font-bold mb-4">{runSyncCollator.frontmatter.title}</h3>
        <Markdown htmlAst={runSyncCollator.htmlAst} />

        <h3 className="text-base font-bold mb-4">{registerWasm.frontmatter.title}</h3>
        <Markdown htmlAst={registerWasm.htmlAst} />

        <h2 className="text-2xl font-bold mb-6">Learn more</h2>
        <h3 className="text-base mb-4">Explore additional ecosystem resources.</h3>
        <ul className="underline-animate underline-animate-thin ml-6 mb-12">
          <li>
            <Link to="https://docs.substrate.io/tutorials/v3/cumulus/start-relay/">Cumulus Tutorial</Link> — Run and
            launch your own parathread or parachain.
          </li>
          <li>
            <Link to="https://w3f.github.io/parachain-implementers-guide/">Implementer&apos;s Guide</Link> — The
            Polkadot Parachain Host Implementer&apos;s Guide.
          </li>
          <li>
            <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer">Rococo UI</Link> —
            Access the Rococo UI at Rococo Polkadot-JS Apps.
          </li>
          <li>
            <Link to="https://github.com/paritytech/subport/issues/new/choose">Rococo onboarding request issue</Link>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">Support</h2>
        <h3 className="text-base mb-4">Access technical support from across the community.</h3>
        <p className="underline-animate underline-animate-thin mb-6">
          <Link to="https://matrix.to/#/!WuksvCDImqYSxvNmua:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation">
            Parachain Technical matrix chat channel
          </Link>{' '}
          — Reach out!
        </p>
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
      htmlAst
    }
    reserveParaId: markdownRemark(frontmatter: { title: { eq: "Reserve para ID" } }) {
      frontmatter {
        title
      }
      htmlAst
    }
    buildParachain: markdownRemark(frontmatter: { title: { eq: "Build parachain using para ID" } }) {
      frontmatter {
        title
      }
      htmlAst
    }
    runSyncCollator: markdownRemark(frontmatter: { title: { eq: "Run and sync collator" } }) {
      frontmatter {
        title
      }
      htmlAst
    }
    registerWasm: markdownRemark(frontmatter: { title: { eq: "Register Wasm and chain spec" } }) {
      frontmatter {
        title
      }
      htmlAst
    }
  }
`;
