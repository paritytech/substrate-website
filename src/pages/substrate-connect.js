import { graphql } from 'gatsby';
import React from 'react';
import Lottie from 'react-lottie';

import Icon from '../components/default/Icon';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import LineArrowButton from '../components/ui/LineArrowButton';
import PrimaryButton from '../components/ui/PrimaryButton';
import * as animationData from '../images/animation/substrate-connect.json';

const networks = [
  {
    name: 'Polkadot',
    description:
      'Scalable sharded chain and the first protocol that provides a secure environment for cross-chain composability.',
    link: 'https://polkadot.network/',
    icon: 'polkadot-logo',
  },
  {
    name: 'Kusama',
    description: 'A network built as a risk-taking, fast-moving ‘canary in the coal mine’ for its cousin Polkadot.',
    link: 'https://kusama.network/',
    icon: 'kusama-logo',
  },
  {
    name: 'Westend',
    description: 'Testing environment for Polkadot and Kusama deployments and processes.',
    link: 'https://polkadot.network/tag/westend/',
  },
  {
    name: 'Rococo',
    description: 'Testnet designed for parachains and related technologies: Cumulus and HRMP.',
    link: 'https://polkadot.network/tag/rococo/',
  },
];

export default function Connect() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Connect" />
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:max-w-md self-center mb-8 md:mb-20">
            <p className="tracking-wider lg:tracking-widest font-semibold text-xl mb-2 uppercase">Substrate</p>
            <h1 data-aos="fade-up" className="font-title text-5xl md:text-6xl xl:text-8xl font-extrabold mb-8">
              Connect
            </h1>
            <p className="mb-8 text-xl md:text-2xl xl:text-3xl font-bold">
              The easiest way to connect to Polkadot, Kusama, and Substrate-based chains.
            </p>
            <PrimaryButton link="https://github.com/paritytech/substrate-connect/tree/master/projects/extension">
              Get the extension
            </PrimaryButton>
          </div>
          <div className="w-full p-8 lg:p-0 relative" style={{ paddingTop: 'calc(1630 / 1630 * 100%)' }}>
            <div className="h-auto top-0 left-0 w-full absolute">
              <Lottie options={{ animationData }} isClickToPauseDisabled={true} />
            </div>
          </div>
        </div>
      </Section>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish pt-24 pb-5 mb-20">
        <Section>
          <h2 className="text-4xl font-bold mb-6">What is Substrate Connect?</h2>
          <p className="font-medium text-lg max-w-5xl">
            A fast, secure, and decentralized way to interact with Polkadot, Kusama, and their parachains right in the
            browser, Substrate Connect helps you build better end-user experiences for Web3 apps.
          </p>
          <LineArrowButton link="/technology">Substrate Technology</LineArrowButton>
          <div className="w-full md:w-1/2 border-b border-substrateSubtleGrey dark:border-substrateDarkThemeGrey my-16"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex mb-8">
                <span className="fill-current text-substrateBlackish dark:text-white mr-4">
                  <Icon name="globe-solid" className="w-8 h-8" />
                </span>
                <h6 className="text-2xl font-medium mb-0 self-center">Light Client Based</h6>
              </div>
              <p className="max-w-md">
                Light clients allow you to interact with a blockchain in a less resource-intensive way than running a
                full node. Because they can quickly sync with a blockchain and run locally in browsers and on mobile and
                IoT devices, light clients are set to power the future of decentralized applications.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <span className="fill-current text-substrateBlackish dark:text-white mr-4">
                  <Icon name="shield-check-solid" className="w-8 h-8" />
                </span>
                <h6 className="text-2xl font-medium mb-0 self-center">Effortless Connectivity</h6>
              </div>
              <p className="max-w-md">
                Running a full node requires a lot of knowledge, effort, and resources, and connecting to remote
                third-party nodes can be insecure and unreliable. Substrate Connect is the most convenient way to
                securely and trustlessly connect your app to any Substrate-based chain.
              </p>
            </div>
          </div>
          <LineArrowButton link="https://www.parity.io/blog/what-is-a-light-client/">
            More on light clients
          </LineArrowButton>
        </Section>
      </div>
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:max-w-md self-center mb-10 lg:mb-20">
            <h2 className="text-4xl font-bold mb-6">The Browser Extension</h2>
            <p className="mb-8">
              Substrate Connect can run in the browser with each tab running a single light client, but running it as a
              browser extension will provide a smoother, faster experience. When run as a browser extension, multiple
              light clients can run simultaneously and can continuously sync as long as the browser stays open. It works
              on all major browsers and does not require a TLS certificate for connecting to nodes.
            </p>
            <PrimaryButton link="https://github.com/paritytech/substrate-connect/tree/master/projects/extension">
              Get the extension
            </PrimaryButton>
            <LineArrowButton link="https://docs.substrate.io/" className="block mt-8">
              Developer Docs
            </LineArrowButton>
          </div>
          <div className="p-0 sm:p-10 lg:p-0 xl:p-10">
            <Icon name="subconnect-browser-tab" className="w-full h-auto" />
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-4xl font-bold mb-6">Supported Networks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {networks.map(({ name, description, link, icon }, idx) => (
            <div
              key={idx}
              className="rounded-md border border-substrateSubtleGrey dark:border-substrateDarkThemeGrey dark:bg-substrateBlackish relative overflow-hidden"
            >
              <div className="bg-substrateGreen-light dark:bg-substrateGreen h-20 p-6 overflow-hidden flex">
                {icon ? (
                  <Icon name={icon} alt={name} className="m-0 mb-1 p-0 h-full self-center" />
                ) : (
                  <h4 className="font-bold text-2xl mb-0 dark:text-black">{name}</h4>
                )}
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="uppercase tracking-wider mr-2 mb-0 text-sm inline">Supported</p>
                  <div className="h-2 w-2 bg-substrateGreen inline-block rounded-full"></div>
                </div>
                <h4 className="font-medium text-2xl mb-6">{name}</h4>
                <p className="mb-16">{description}</p>
                <div className="absolute bottom-6">
                  <LineArrowButton link={link} className="block mt-6">
                    Read more
                  </LineArrowButton>
                </div>
              </div>
            </div>
          ))}
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
