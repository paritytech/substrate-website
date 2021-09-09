import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButton from '../components/ui/PrimaryButton';
import kusamaLogo from '../images/photos/connect/kusama-logo.png';
import polkadotLogo from '../images/photos/connect/polkadot-logo.png';

const networks = [
  {
    name: 'Polkadot',
    description:
      'Scalable sharded chain and the first protocol that provides a secure environment for cross-chain composability.',
    link: 'https://polkadot.network/',
    image: polkadotLogo,
  },
  {
    name: 'Kusama',
    description: 'A network built as a risk-taking, fast-moving ‘canary in the coal mine’ for its cousin Polkadot.',
    link: 'https://kusama.network/',
    image: kusamaLogo,
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
          <div className="lg:max-w-md self-center mb-20">
            <p className="tracking-wider lg:tracking-widest font-semibold text-xl mb-2 uppercase">Substrate</p>
            <h1 data-aos="fade-up" className="font-title text-5xl md:text-6xl xl:text-8xl font-extrabold mb-8">
              Connect
            </h1>
            <p className="mb-8 text-xl md:text-2xl xl:text-3xl font-bold">
              Connect to Polkadot, Kusama, and their parachains in the browser.
            </p>
            <PrimaryButton link="">Download Extension</PrimaryButton>
          </div>
          <StaticImage
            src="../images/photos/connect/subconillus2x.png"
            alt="Substrate Connect"
            className="w-full h-auto"
          />
        </div>
      </Section>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish pt-24 pb-5 mb-20">
        <Section>
          <h2 className="text-4xl font-bold mb-6">What is Substrate Connect?</h2>
          <p className="font-medium text-lg max-w-5xl">
            Substrate-connect offers a fast, secure, and decentralized way to interact with Polkadot, Kusama, and their
            parachains and ultimately develop better end-user experiences for Web3 apps.
          </p>
          <Link to="/technology">
            <p className="font-bold pb-1 mr-0.5 border-b-2 border-black dark:border-white inline hover:mr-2 transition-all">
              Substrate Technology
            </p>{' '}
            <span className="fill-current dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </Link>
          <div className="w-1/2 border-b border-substrateSubtleGrey mt-10 mb-16"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex mb-8">
                <span className="fill-current text-substrateBlackish dark:text-white mr-4">
                  <Icon name="light-client-based" />
                </span>
                <h6 className="text-2xl font-medium mb-0 self-center">Light Client Based</h6>
              </div>
              <p className="leading-loose max-w-md">
                Light clients help users access and interact with a blockchain without having to sync the full
                blockchain. Substrate Connect runs in the browser, locally, rather than pulling data from a full node
                somewhere else online. Light clients will be the backbone of decentralized applications.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <span className="fill-current text-substrateBlackish dark:text-white mr-4">
                  <Icon name="effortless-connectivity" />
                </span>
                <h6 className="text-2xl font-medium mb-0 self-center">Effortless Connectivity</h6>
              </div>
              <p className="leading-loose max-w-md">
                Light clients quickly, easily, and securely prove the authenticity of information because they don’t
                need to sync the entire blockchain. As such, Substrate Connect is a less resource-intensive way to
                connect to the Substrate-based blockchains.
              </p>
            </div>
          </div>
          <Link to="https://www.parity.io/blog/what-is-a-light-client/">
            <p className="font-bold pb-1 mr-0.5 border-b-2 border-black dark:border-white inline hover:mr-2 transition-all">
              What is a light client?
            </p>{' '}
            <span className="fill-current dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </Link>
        </Section>
      </div>
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:max-w-md self-center mb-20">
            <h2 className="text-4xl font-bold mb-6">The Browser Extension</h2>
            <p className="leading-loose">
              The Substrate Connect browser extension runs: <br />{' '}
              <span className="font-bold">as a browser extension </span>— multiple light clients can run simultaneously
              and continuously sync as long as the browser remains open <br />
              <span className="font-bold">on all major browsers</span> — the only browser extension that connects to all
              Substrate-powered blockchains
            </p>
            <p>Installing the browser extension is optional. Without it, the light client runs in a single tab.</p>
            <PrimaryButton link="">Download Extension</PrimaryButton>
            <Link to="https://www.parity.io/blog/what-is-a-light-client/" className="block mt-6">
              <p className="font-bold pb-1 mr-0.5 border-b-2 border-black dark:border-white inline hover:mr-2 transition-all">
                Developer Docs
              </p>{' '}
              <span className="fill-current dark:text-white inline-block">
                <Icon name="arrow-more" />
              </span>
            </Link>
          </div>
          <div>
            <StaticImage
              src="../images/photos/connect/subconnectBrowserTab2x.png"
              alt="Substrate Connect"
              className=""
            />
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-4xl font-bold mb-6">Supported Networks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {networks.map(({ name, description, link, image }, idx) => (
            <div key={idx} className="rounded-md border border-substrateSubtleGrey relative">
              <div className="bg-substrateGreen-light h-20 p-6 overflow-hidden flex">
                {image ? (
                  <img src={image} alt={name} className="m-0 p-0 self-center" />
                ) : (
                  <h4 className="font-medium text-2xl mb-0">{name}</h4>
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
                  <Link to={link} className="block mt-6">
                    <p className="font-bold pb-1 mr-0.5 border-b-2 border-black dark:border-white inline hover:mr-2 transition-all">
                      Read more
                    </p>{' '}
                    <span className="fill-current dark:text-white inline-block">
                      <Icon name="arrow-more" />
                    </span>
                  </Link>
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
