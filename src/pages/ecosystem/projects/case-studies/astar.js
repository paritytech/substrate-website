import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Icon from '../../../../components/default/Icon';
import { Link } from '../../../../components/default/Link';
import Blockqoute from '../../../../components/layout/ecosystem/case-studies/Blockqoute';
import Layout from '../../../../components/site/Layout';
import SEO from '../../../../components/site/SEO';
// import Tag from '../../../../components/ui/Tag';

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

export default function AstarCaseStudy({ data }) {
  const astarData = teamsData.teams.find(team => team.name === 'Astar Network');
  const logo = getImage(data.logo);
  return (
    <Layout>
      <SEO title="Astar Network Case Study" />
      <article className="container px-6 mb-20 ">
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center scroll-margin-top-100">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={astarData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{astarData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">A multi virtual machine dapp hub</div>
        <div className="text-lg md:text-xl">Flexibility, Interoperability, Security</div>
        <div className="my-10">
          <div className="mb-3 md:inline-flex">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={astarData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={astarData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{astarData.tag}</p>
          </div>
        </div>
        <Blockqoute
          text="“​Astar Network is a multi-chain decentralized application layer on Polkadot. Astar incorporates Ethereum Virtual Machine, WebAssembly, and Layer2 solutions. The platform supports various decentralized applications like DeFi, NFTs and DAOs.”"
          name="Hoon Kim, Product Manager, Astar Network."
          image={data.avatar}
        />
        <p>
          Astar Network (previously known as Plasm Network) is a dapp hub in the Polkadot ecosystem, supporting EVM,
          WebAssembly, and Layer2 solutions like Rollups.
        </p>
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="knight" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0">
            Challenge
          </h2>
        </div>
        <h4>What challenges did the project face and what problems is it trying to solve?</h4>
        <p>
          Polkadot’s Relay Chain doesn’t support smart contract functionalities by design. Therefore, a parachain that
          supports smart contract functionalities well would be a great benefit to the Polkadot ecosystem.
        </p>
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="check-mark" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0">
            Solution
          </h2>
        </div>
        <h4>How did the specific USPs of Substrate solve the challenges faced?</h4>
        <p>
          When it comes to smart contracts, multi virtual machines and scalability are the key properties of the
          next-generation smart contract platform. Substrate is a customizable blockchain framework that natively
          supports WebAssembly smart contracts and has an EVM pallet.
          <b>
            This allows Astar to support both of these virtual machines (VMs), allowing them to co-exist and be
            interoperable with one another.
          </b>
        </p>
        <p>
          Additionally, Substrate is upgradable without hard forks. This allows Astar to add their layer 2 (L2) and
          basic income pallet accordingly.
        </p>
        <div className="flex items-center mt-10 mb-6 scroll-margin-top-100">
          <Icon name="graph" className="fill-current text-substrateGreen mr-4" />
          <h2 id="result" className="mb-0">
            Result
          </h2>
        </div>
        <p>
          <b>Pallets:</b>
          <ol className="list-outisde ml-6 my-6">
            <li className="mb-6">
              dApp Staking: a pallet that allows an account to stake their tokens to a smart contract. This pallet
              utilizes Substrate’s pallet hooks to set staking rewards for each block
            </li>
            <li className="mb-6">
              Custom Signature Call: This pallet allows accounts to execute Substrate extrinsic calls using an external
              ECDSA signature (eg: signing a call with Ledger Ethereum account). Thanks to the modularity of Substrate
              extrinsics, we’re able to wrap native calls with external signatures for expandability.
            </li>
            <li className="mb-6">
              Multi-Virtual Machine: Both the contract pallet and EVM pallet that is part of the Substrate ecosystem
              allows us to provide multiple contract execution environments. We further improve this usability by
              allowing interoperability between the two different VMs through precompiled contract calls.
            </li>
          </ol>
        </p>
        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <a href="https://astar.network">https://astar.network</a>
            </div>
            <div>
              Github: <a href="https://github.com/PlasmNetwork/Astar">https://github.com/PlasmNetwork/Astar</a>
            </div>
            <div>
              Twitter: <a href="https://twitter.com/AstarNetwork">https://twitter.com/AstarNetwork</a>
            </div>
            <div>
              Blog: <a href="https://medium.com/astar-network">https://medium.com/astar-network</a>
            </div>
            <div>
              Youtube:{' '}
              <a href="https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ">
                https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ
              </a>
            </div>
            <div>
              Tech Community: <a href="https://discord.gg/nywSgQR3NC">https://discord.gg/nywSgQR3NC</a>
            </div>
          </div>
        </div>
        <h4>More Case Studies</h4>
        <div className="underline-animate text-substrateBlue font-bold leading-8">
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/acala">Acala Network Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/moonbeam">Moonbeam Case Study</Link>
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
    logo: file(relativePath: { eq: "logos/Astar Network.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    avatar: file(relativePath: { eq: "photos/case-studies/hoon-kim-astar.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;