import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import { Code } from '../../components/default/Code';
import Icon from '../../components/default/Icon';
import { Link } from '../../components/default/Link';
import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

const illustrations = [
  {
    name: 'become-parathread',
    description: 'Become parathread',
  },
  {
    name: 'onboarding',
    description: 'Onboarding',
  },
  {
    name: 'upgrading',
    description: 'Upgrading',
  },
  {
    name: 'parachain',
    description: 'Parachain',
  },
  {
    name: 'downgrading',
    description: 'Downgrading',
  },
  {
    name: 'parathread',
    description: 'Parathread',
  },
];

export default function Rococo({ data }) {
  const { obtainingRoc, reserveParaId, buildParachain, runSyncCollator, registerWasm } = data;

  return (
    <Layout>
      <SEO title="Rococo Network" />

      <Section className="mb-36 xl:my-36 grid md:grid-cols-2 underline-animate underline-animate-thin">
        <h1 className="order-1 md:order-none md:col-start-1 font-title font-extrabold text-5xl md:text-6xl mb-12">
          Rococo Network
        </h1>
        <h2 className="order-3 md:order-none md:col-start-1 text-2xl font-bold mb-6">
          Rococo, the place for parachain testing!
        </h2>
        <div className="order-4 md:order-none md:col-start-1 md:mr-8">
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
        <div className="flex md:justify-center md:self-center order-2 md:order-none md:row-start-1 md:row-span-4 md:col-start-2 mb-8 w-full">
          <div className="max-w-sm xl:max-w-md w-full">
            <Icon name="rococo-logo" />
          </div>
        </div>
      </Section>

      <Section className="pb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16">Parachain lifecycle</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 w-full ml-0">
          {illustrations.map(({ name, description }, idx) => (
            <li key={idx} className="list-none max-w-sm" data-aos="fade-up" data-aos-delay={100 + idx * 150}>
              <div>
                <Icon
                  className="mb-4 bg-substrateGray-light dark:bg-substrateBlackish fill-current dark:text-white rounded-md w-full h-full"
                  name={name}
                />
              </div>
              <div
                className={cx('mb-2 mr-2 w-10 h-10 inline-flex justify-center rounded-full', {
                  'bg-polkaPink': description === 'Parachain',
                  'bg-black dark:bg-substrateBlackish': description !== 'Parachain',
                })}
              >
                <span className="mb-0 mt-1 text-2xl font-bold text-white">{idx + 1}</span>
              </div>
              <h4 className="inline text-lg font-bold mb-4">{description}</h4>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pb-10 max-w-4xl underline-animate underline-animate-thin">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">{obtainingRoc.frontmatter.title}</h2>
        <p className="mb-6">
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
        <Code html={obtainingRoc.html} />

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
      </Section>

      <Section className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Off-chain steps</h2>

        <h3 className="text-base font-bold mb-4">{reserveParaId.frontmatter.title}</h3>
        <Code html={reserveParaId.html} />

        <h3 className="text-base font-bold mb-4">{buildParachain.frontmatter.title}</h3>
        <Code html={buildParachain.html} />

        <h3 className="text-base font-bold mb-4">{runSyncCollator.frontmatter.title}</h3>
        <Code html={runSyncCollator.html} />

        <h3 className="text-base font-bold mb-4">{registerWasm.frontmatter.title}</h3>
        <Code html={registerWasm.html} />
      </Section>

      <div className="bg-substrateGray-light dark:bg-substrateGray-darkest pb-10 pt-20">
        <Section className="max-w-4xl underline-animate underline-animate-thin">
          <h2 className="text-2xl font-bold mb-6">Learn more</h2>
          <h3 className="text-base mb-4">Explore additional ecosystem resources.</h3>
          <ul className="ml-6 mb-12">
            <li>
              <Link to="https://docs.substrate.io/tutorials/connect-other-chains/">Connect other chains tutorials</Link>{' '}
              — Learn how to connect your chain to others
            </li>
            <li>
              <Link to="https://w3f.github.io/parachain-implementers-guide/">Implementer&apos;s Guide</Link> — The
              Polkadot Parachain Host Implementer&apos;s Guide.
            </li>
            <li>
              <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer">Rococo UI</Link>{' '}
              — Access the Rococo UI at Rococo Polkadot-JS Apps.
            </li>
            <li>
              <Link to="https://github.com/paritytech/subport/issues/new/choose">Rococo onboarding request issue</Link>{' '}
              — Submit your issue related to your slot request on Rococo
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Support</h2>
          <h3 className="text-base mb-4">Access technical support from across the community.</h3>
          <p className="mb-6">
            <Link to="https://matrix.to/#/!WuksvCDImqYSxvNmua:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation">
              Parachain Technical matrix chat channel
            </Link>{' '}
            — Reach out!
          </p>
        </Section>
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
