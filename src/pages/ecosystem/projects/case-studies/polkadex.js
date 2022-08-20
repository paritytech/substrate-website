import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon, Layout, Link, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Blockquote from '../../../../components/layout/ecosystem/case-studies/Blockquote';
import CaseStudyBreadcrumb from '../../../../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';

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

export default function PolkadexCaseStudy({ data }) {
  const polkadexData = teamsData.teams.find(team => team.name === 'Polkadex');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false} navSidebarData={teamsData.teams}>
      <SEO title="Polkadex Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={'Polkadex'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={polkadexData.name} />
          <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{polkadexData.name}</h1>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">
          A fully decentralized peer-to-peer orderbook-based cryptocurrency exchange for DeFi, built on Substrate
        </div>
        <div className="my-10">
          <div className="mb-3">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={polkadexData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={polkadexData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{polkadexData.tag}</p>
          </div>
        </div>
        <Blockquote
          text="“The core principles that I enforced for Polkadex Orderbook include bringing a world-class UX without compromising user fund security. This is possible due to the flexibility and modular nature of the Substrate Framework.”"
          name="Gautham J, CEO, Polkadex"
          image={false}
        />
        <p>
          Polkadex introduces a trading infrastructure without compromises. This trading infrastructure includes a
          decentralized peer-to-peer orderbook, automated market maker-based models, along with other trading
          accessories such as an initial decentralized exchange offering and perpetual liquidity mining.
        </p>
        <div className="flex items-center mt-10 mb-6 ">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges is the project focusing and what problems is it trying to solve?</h4>
        <p>Polkadex solves two main challenges:</p>
        <ol className="ml-4">
          <li>
            There is a high chance of front-running attacks in the automated market maker (AMM) domain, as it is
            completely decentralized and transparent to everyone. Many projects have tried to solve this by making
            compromises, especially in the token utility or user experience.{' '}
          </li>
          <li>
            There are no usable orderbook-based decentralized exchanges that give the users control over their funds,
            let alone one that supports high-frequency trading and trading bot support.{' '}
          </li>
        </ol>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>How did the specific features of Substrate solve the challenges faced?</h4>
        <p>
          In the Polkapool pallet, Polkadex utilizes Substrate’s flexibility to solve the problem of front-running
          attacks, without compromises, in just ten lines of code. This is made possible by modifying transaction
          priority to randomly shuffle the transactions utilizing the randomness provided by the BABE pallet’s
          cryptographically-secure verifiable randomness function.
        </p>

        <p>
          Polkadex Orderbook solves the problem of orderbook operators holding custody of user funds. Substrate’s unique
          off-chain worker capabilities keep operators accountable for their actions. The off-chain workers pin and
          verify the Balance snapshots provided by operators in IPFS, thereby enabling users to withdraw if the operator
          is compromised.
        </p>

        <p>
          Polkadex enables traders to bring funds cheaply (as low as a standard ETH or ERC20 transfer) from Ethereum
          using any generic software or hardware Ethereum wallet to Polkadex in an experience familiar to CEX traders.
          This is possible with Substrate&apos;s ability to add custom functionality to the consensus of Polkadex and
          the easy to use APIs that Substrate exposes to access the finality and other consensus states of the Polkadex
          network.
        </p>

        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="result" className="mb-0 scroll-margin-top-100">
            Result
          </h2>
        </div>
        <h4>
          What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily
          reliant on one or more of the key features of Substrate?
        </h4>
        <ol className="ml-4">
          <li>
            Eliminating frontrunning - Using Substrate’s BABE pallet, Polkadex easily eliminated frontrunning by
            providing randomness to modify transaction priority.{' '}
          </li>
          <li>
            Efficiency - Substrate’s off-chain worker capabilities allows Polkadex to achieve massive transaction
            performance while maintaining security by packaging the off-chain worker logic inside the node binary.
          </li>
          <li>
            Cost effectiveness - Substrate’s ability to turn on/off fee collection based on certain conditions more cost
            effective and leads to a better user experience.
          </li>
          <li>
            Excellent tooling - Polkadot JS, chain spec generation, running nodes, etc. Substrate has robust tooling for
            development, deployment, and debugging.
          </li>
          <li>
            Ability to add custom consensus layer to a Substrate node without affecting the core functionalities such as
            Finality and Block production.
          </li>
        </ol>
        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://www.polkadex.trade/">https://www.polkadex.trade/</Link>
            </div>
            <div>
              Github:{' '}
              <Link to="https://github.com/Polkadex-Substrate/Polkadex">
                https://github.com/Polkadex-Substrate/Polkadex
              </Link>
            </div>
            <div>
              Polkapool [In Progress]:{' '}
              <Link to="https://github.com/Polkadex-Substrate/Polkadex/tree/develop/pallets/polkapool">
                https://github.com/Polkadex-Substrate/Polkadex/tree/develop/pallets/polkapool
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
            <Link to="/ecosystem/projects/case-studies/moonbeam/">Moonbeam Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/unique/">Unique Network Case Study</Link>
          </div>
          <br />
          <div className="block">
            <Link to="/ecosystem/projects/">See All Projects</Link>
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
    logo: file(relativePath: { eq: "logos/Polkadex.png" }) {
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
