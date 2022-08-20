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

export default function AstarCaseStudy({ data }) {
  const astarData = teamsData.teams.find(team => team.name === 'Astar Network');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false} navSidebarData={teamsData.teams}>
      <SEO title="Astar Network Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={'Astar Network'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={astarData.name} />
          <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{astarData.name}</h1>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">The Innovation Hub on Polkadot</div>
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
        <Blockquote
          text="“​Astar Network is a multi-chain decentralized application layer on Polkadot. Astar incorporates Ethereum Virtual Machine, WebAssembly. The platform supports various decentralized applications like DeFi, NFTs and DAOs.”"
          name="Hoon Kim, CTO, Astar Network."
          image={data.avatar}
        />
        <p>
          Astar Network supports the building of dApps with EVM and WASM smart contracts and offers developers true
          interoperability, with cross-consensus messaging (XCM). We are made by developers and for developers. Astar’s
          unique Build2Earn model empowers developers to get paid through a dApp staking mechanism for the code they
          write and dApps they build.
        </p>
        <p>
          Astar’s vibrant ecosystem has become Polkadot’s leading Parachain globally, supported by all major exchanges
          and Tier 1 VCs. Astar offers the flexibility of all Ethereum and WASM toolings for developers to start
          building their dApps. To accelerate growth on Polkadot and Kusama Networks, Astar Space Labs offers an
          Incubation Hub for top TVL dApps.
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
        <h4>How did the specific features of Substrate solve the challenges faced?</h4>
        <p>
          When it comes to smart contracts, multi virtual machines and scalability are the key properties of the
          next-generation smart contract platform. Substrate is a customizable blockchain framework that natively
          supports WebAssembly smart contracts and has an EVM pallet. This allows Astar to support both of these virtual
          machines (VMs), allowing them to co-exist and be interoperable with one another.
        </p>
        <p>
          The Build2Earn model of the network empowers the builders to earn by staking mechanism for the code they write
          and build on decentralized applications.
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
          Astar has developed a very innovative concept called “Dapps Staking”, which allows an account to stake tokens
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
