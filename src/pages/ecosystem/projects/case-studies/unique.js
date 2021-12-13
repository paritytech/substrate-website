import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Icon from '../../../../components/default/Icon';
import { Link } from '../../../../components/default/Link';
import ArticleCols from '../../../../components/layout/ArticleCols';
import Blockqoute from '../../../../components/layout/ecosystem/case-studies/Blockqoute';
import CaseStudyBreadcrumb from '../../../../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';
import Layout from '../../../../components/site/Layout';
import SEO from '../../../../components/site/SEO';

const Types = ({ types }) => (
  <div>
    {types
      .filter(e => e != 'All Teams')
      .map((e, i) => {
        const lastIndex = types.filter(e => e != 'All Teams').length - 1;
        return (
          <span key={i}>
            {e}
            {lastIndex != i && `, `}
          </span>
        );
      })}
  </div>
);

const Categories = ({ categories }) => (
  <div>
    {categories
      .filter(e => e != 'All')
      .map((e, i) => {
        const lastIndex = categories.filter(e => e != 'All').length - 1;
        return (
          <span key={i}>
            {e}
            {lastIndex != i && `, `}
          </span>
        );
      })}
  </div>
);

export default function UniqueCaseStudy({ data }) {
  const uniqueData = teamsData.teams.find(team => team.name === 'Unique Network');
  const logo = getImage(data.logo);
  return (
    <Layout>
      <SEO title="Unique Network Case Study" />
      <ArticleCols>
        <CaseStudyBreadcrumb title={'Unique Network Case Study'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={uniqueData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{uniqueData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">An NFT chain for the Polkadot and Kusama ecosystems </div>
        <div className="my-10">
          <div className="mb-3">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={uniqueData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={uniqueData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{uniqueData.tag}</p>
          </div>
        </div>
        <Blockqoute
          text="“Flexibility is the strongest side of Substrate - it allows unmatched customization that is needed to handle non-fungible asset classes on-chain. We used it to create the next generation NFT chain, capable of supporting innovative use cases and liberating NFTs from the collectables.”"
          name="Greg Zaytsev and Alexander Mitrovich, Founders, Unique Network"
          image={data.avatar}
        />
        <p>
          Unique Network is a Substrate-based NFT chain for the Polkadot and Kusama ecosystems. It provides all basic
          NFT functionality provided by other blockchains – minting, transferring, or burning NFTs, along with the basic
          tools needed – a wallet, minting solution, gallery and a marketplace as a white-label suite, ready to use.
          Demonstrating the power and flexibility of Substrate, Unique Network offers advanced functionality such as
          flexible economic models, scheduling, and refungibility – all in an interoperable environment with EVM and
          Solidity. Unique Network is built to enable the next generation of NFT use cases.
        </p>
        <div className="flex items-center mt-10 mb-6 ">
          <Icon name="knight" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges is the project focusing and what problems is it trying to solve?</h4>
        <p>
          <i>Rigid economic model challenge: </i>Other blockchains require their users to own cryptocurrency in order to
          execute a transaction. This creates an enormous friction for mass market adoption of NFTs.
        </p>
        <p>
          <i>Subscription use case challenge: </i>Existing blockchains do not allow NFTs to be rented or managed by
          delegated parties. This breaks the conventional business model of building a stable income flow based on
          regular payments.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="check-mark" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>How did the specific USPs of Substrate solve the challenges faced?</h4>
        <p>
          <i>Rigid economic model challenge: </i>Substrate allows customization of transaction handling on all
          transaction stages.
        </p>
        <p>
          <i>Subscription use case challenge: </i>Substrate allows execution of code before and after each block.
        </p>

        <div className="flex items-center mt-10 mb-6">
          <Icon name="graph" className="fill-current text-substrateGreen mr-4" />
          <h2 id="result" className="mb-0 scroll-margin-top-100">
            Result
          </h2>
        </div>
        <h4>
          What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily
          reliant on one or more of the key features of Substrate?
        </h4>
        <p>
          <i>Rigid economic model challenge: </i>Dapp users are not required to pay transaction fees anymore, which
          means they can use the dapp without having to:
        </p>
        <ul className="mb-6 ml-4">
          <li>learn what a crypto address is</li>
          <li>register on the crypto exchange</li>
          <li>pass KYC</li>
          <li>buy volatile cryptocurrency </li>
          <li>create and fund a wallet from a crypto exchange.</li>
        </ul>

        <p>
          Substrate makes this possible using a Signed Extension to customize the address that pays the transaction fee.
          When the Signed Extension detects the transaction of certain types (e.g. a transfer in a particular NFT
          collection), it assigns the sponsor address to pay the transaction fee. This approach allows building
          frictionless dapps and enables true Freemium Gaming on blockchain.
        </p>

        <p>
          <i>Subscription use case challenge: </i>To enable subscription models, Unique Network created a scheduling
          solution based on the scheduler pallet provided by FRAME. With their custom scheduler pallet, a user may
          (safely from the block weight perspective) schedule any transaction from a simple balance transfer to an EVM
          smart contract call. This will help generate a stable income flow based on regular payments.
        </p>

        <p>
          <span className="font-bold">Pallets</span>(3-6 as top priority):
        </p>
        <ol className="ml-4">
          <li>nft</li>
          <li>nft-charge-transaction</li>
          <li>evm-transaction-payment</li>
          <li>scheduler</li>
        </ol>

        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://unique.network/ ">https://unique.network/</Link>
            </div>
            <div>
              Github: <Link to="https://github.com/UniqueNetwork">https://github.com/UniqueNetwork</Link>
            </div>
            <div>
              Sponsoring pallet repo:{' '}
              <Link to="https://github.com/UniqueNetwork/pallet-sponsoring">
                https://github.com/UniqueNetwork/pallet-sponsoring
              </Link>
            </div>
          </div>
        </div>
        <h4>More Case Studies</h4>
        <div className="font-bold leading-8 underline-animate">
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/acala/">Acala Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/astar/">Astar Network Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/moonbeam/">Moonbeam Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/polkadex/">Polkadex Case Study</Link>
          </div>
          <br />
          <div className="block">
            <Link to="/ecosystem/projects/">See All Projects</Link>
          </div>
        </div>
      </ArticleCols>
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
    logo: file(relativePath: { eq: "logos/Unique Network.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    avatar: file(relativePath: { eq: "photos/case-studies/bryan-chen-acala.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
