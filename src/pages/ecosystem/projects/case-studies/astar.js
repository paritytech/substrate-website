import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Icon from '../../../../components/default/Icon';
import { Link } from '../../../../components/default/Link';
import Blockqoute from '../../../../components/layout/ecosystem/case-studies/Blockqoute';
import CaseStudyBreadcrumb from '../../../../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';
import Section from '../../../../components/layout/Section';
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

export default function AstarCaseStudy({ data }) {
  const astarData = teamsData.teams.find(team => team.name === 'Astar Network');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title="Astar Network Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={'Astar Network Case Study'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={astarData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{astarData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">A multi virtual machine dapp hub</div>
        <div className="text-lg md:text-xl">Flexibility, Interoperability, Security</div>
        <div className="my-10">
          <div className="mb-3">
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
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges did the project face and what problems is it trying to solve?</h4>
        <p>
          Polkadot’s Relay Chain doesn’t support smart contract functionalities by design. Therefore, a parachain that
          supports smart contract functionalities well would be a great benefit to the Polkadot ecosystem.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>How did the specific USPs of Substrate solve the challenges faced?</h4>
        <p>
          When it comes to smart contracts, multi virtual machines and scalability are the key properties of the
          next-generation smart contract platform. Substrate is a customizable blockchain framework that natively
          supports WebAssembly smart contracts and has an EVM pallet. This allows Astar to support both of these virtual
          machines (VMs), allowing them to co-exist and be interoperable with one another.
        </p>
        <p>
          Additionally, Substrate is upgradable without hard forks. This allows Astar to add their layer 2 (L2) and
          basic income pallet accordingly.
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
        <p>
          Astar has developed a very innovative concept called “dApps Staking”, which allows an account to stake tokens
          to a smart contract. This pallet utilizes Substrate’s pallet hooks to set staking rewards for each block.
          Another feature in Astar’s runtime is the Custom Signature Call. This pallet allows accounts to execute
          Substrate extrinsic calls using an external ECDSA signature (eg: signing a call with Ledger Ethereum account).
          Substrate’s extrinsics modularity made it possible to wrap native calls with external signatures for
          expandability. Finally, a key component of Astar is the Multi Virtual Machine. Both the contract pallet and
          EVM pallet that are part of the Substrate ecosystem allow the project to provide multiple contract execution
          environments. This usability was further improved by allowing interoperability between the two different VMs
          through precompiled contract calls.
        </p>
        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://astar.network">https://astar.network</Link>
            </div>
            <div>
              Github: <Link to="https://github.com/PlasmNetwork/Astar">https://github.com/PlasmNetwork/Astar</Link>
            </div>
            <div>
              Twitter: <Link to="https://twitter.com/AstarNetwork">https://twitter.com/AstarNetwork</Link>
            </div>
            <div>
              Blog: <Link to="https://medium.com/astar-network">https://medium.com/astar-network</Link>
            </div>
            <div>
              Youtube:{' '}
              <Link to="https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ">
                https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ
              </Link>
            </div>
            <div>
              Tech Community: <Link to="https://discord.gg/nywSgQR3NC">https://discord.gg/nywSgQR3NC</Link>
            </div>
          </div>
        </div>
        <h4>More Case Studies</h4>
        <div className="underline-animate text-substrateBlue font-bold leading-8">
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/acala/">Acala Network Case Study</Link>
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
