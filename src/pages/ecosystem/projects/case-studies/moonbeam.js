import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Icon from '../../../../components/default/Icon';
import { Link } from '../../../../components/default/Link';
import Blockqoute from '../../../../components/layout/ecosystem/case-studies/Blockqoute';
import Layout from '../../../../components/site/Layout';
import SEO from '../../../../components/site/SEO';
import Tag from '../../../../components/ui/Tag';

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

export default function MoonbeamCaseStudy({ data }) {
  const moonbeamData = teamsData.teams.find(team => team.name === 'Moonbeam');
  const logo = getImage(data.logo);
  return (
    <Layout>
      <SEO title="Acala Network Case Study" />
      <article className="container px-6 mb-20 ">
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center scroll-margin-top-100">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} objectFit="contain" alt={moonbeamData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{moonbeamData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">Ethereum-compatible smart contract platform</div>
        <div className="text-lg md:text-xl">
          Flexibility Tooling, Community, Forkless, Interoperability, Security, Cost, Future Proof, Modular
        </div>
        <div className="my-10">
          <div className="mb-3 md:inline-flex">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={moonbeamData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={moonbeamData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{moonbeamData.tag}</p>
          </div>
        </div>
        <Blockqoute
          text="“​Moonbeam is an Ethereum-compatible smart contract platform that simplifies the path to multi-chain deployments. Substrate provides the team at Moonbeam the ability to deploy, scale and iterate better than any other platform in the industry.”"
          name="Derek Yoo, Founder, Moonbeam Network"
          image={data.avatar}
        />
        {/* <p>
          Astar Network (previously known as Plasm Network) is a dapp hub in the Polkadot ecosystem, supporting EVM,
          WebAssembly, and Layer2 solutions like Rollups.
        </p> */}
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="knight" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0">
            Challenge
          </h2>
        </div>
        <h4>What challenges did the project face and what problems is it trying to solve?</h4>
        <p>
          To be fully Ethereum compatible while also building on Substrate and connecting to Polkadot, a project needs
          to keep up with the changes in both ecosystems. Finding ways to harmonize different design decisions between
          Ethereum and Polkadot can be challenging in many areas, including the existential deposit, the ability to lock
          or reserve tokens and the standard signature scheme..
        </p>
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="check-mark" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0">
            Solution
          </h2>
        </div>
        <h4>How did the specific USPs of Substrate solve the challenges faced?</h4>
        <ul className="list-outisde ml-6 my-6">
          <li>The modular notion of account ID allowed us to use H160 and get our unified accounts</li>
          <li>The extensible RPC layer allowed us to implement Ethereum-style RPC endpoints</li>
          <li>Its modular consensus layer allowed us to build our own consensus framework</li>
          <li>FRAME itself allows all the great pallets from various repos to compose together well</li>
        </ul>
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="graph" className="fill-current text-substrateGreen mr-4" />
          <h2 id="result" className="mb-0">
            Result
          </h2>
        </div>
        <h4>
          What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily
          relying on one or more of the key features of Substrate?
        </h4>
        <p>
          <b>Pallets:</b>
          <ol className="list-outisde ml-6 my-6">
            <li className="mb-6">Frontier&apos;s Pallet EVM and Pallet Ethereum</li>
            <li className="mb-6">Cumulus&apos; parachain system (all of cumulus, not just the pallets)</li>
            <li className="mb-6">Our own parachain staking pallet</li>
            <li className="mb-6">Substrate&apos;s democracy</li>
          </ol>
        </p>
        <div id="runtimes-pallets" className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <h2 className="mb-0">Runtimes&Pallets</h2>
        </div>
        <span className="tracking-wider uppercase">Substrate Runtimes:</span>
        <div className="flex flex-wrap mb-16">
          {moonbeamData.runtimes.map((runtime, index) => {
            return (
              <div key={index}>
                <Tag title={runtime.title} />
              </div>
            );
          })}
        </div>
        <h4>More Case Studies</h4>
        <div className="underline-animate text-substrateBlue font-bold leading-8">
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/acala">Acala Network Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/astar">Astar Network Case Study</Link>
          </div>
          <br />
          <div className="block">
            <Link to="/ecosystem/projects">See All Projects</Link>
          </div>
        </div>
      </article>
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
    logo: file(relativePath: { eq: "logos/Moonbeam.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    avatar: file(relativePath: { eq: "photos/case-studies/derek-yoo-moonbeam.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
