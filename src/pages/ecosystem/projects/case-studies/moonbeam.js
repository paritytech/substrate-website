import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon, Layout, Link, Section, SEO, Tag } from 'gatsby-plugin-substrate';
import React from 'react';

import teamsData from '../../../../../data/teams.json';
import Blockqoute from '../../../../components/layout/ecosystem/case-studies/Blockqoute';
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

export default function MoonbeamCaseStudy({ data }) {
  const moonbeamData = teamsData.teams.find(team => team.name === 'Moonbeam');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false} navSidebarData={teamsData.teams}>
      <SEO title="Moonbeam Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={`Moonbeam`} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} objectFit="contain" alt={moonbeamData.name} />
          <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{moonbeamData.name}</h1>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">An Ethereum-compatible smart contract platform</div>
        <div className="my-10">
          <div className="mb-3">
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
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges did the project face and what problems is it trying to solve?</h4>
        <p>
          To be fully Ethereum compatible while also building on Substrate and connecting to Polkadot, a project needs
          to keep up with the changes in both ecosystems. Finding ways to harmonize different design decisions between
          Ethereum and Polkadot can be challenging in many areas, including the existential deposit, the ability to lock
          or reserve tokens and the standard signature scheme.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>How did the specific features of Substrate solve the challenges faced?</h4>
        <p>
          Leveraging the modular notion of account ID, Moonbeam used H160 to achieve their unified accounts. On top of
          that, the extensible RPC layer allowed them to implement Ethereum-style RPC endpoints.
        </p>
        <p>
          Finally, because of Substrate’s modular consensus layer, Moonbeam could build their own consensus framework.
          FRAME itself allows all the great pallets from various projects to compose together well.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="result" className="mb-0 scroll-margin-top-100">
            Result
          </h2>
        </div>
        <h4>
          What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily
          relying on one or more of the key features of Substrate?
        </h4>
        <p>
          All of the above resulted in the development of different pallets. To start with, Moonbeam developed the
          Frontier&apos;s Pallet EVM and Pallet Ethereum, both of which host the logic of the Ethereum Virtual Machine
          and account management. The Moonbeam team also developed a custom-built staking pallet that any parachain with
          staking can integrate to allow users to stake and back that parachain’s collators.
        </p>{' '}
        <p>
          Moonbeam added Substrate&apos;s democracy pallet to its runtime to allow for a governance structure. They
          added almost the same codebase to Moonriver, their canary network, which is now integrated as a parachain on
          the Kusama network.
        </p>
        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://moonbeam.network/">https://moonbeam.network/</Link>
            </div>
            <div>
              Dcoumentation: <Link to="https://docs.moonbeam.network/">https://docs.moonbeam.network/</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-6">
          <div className="mb-0 text-4xl font-bold">Runtimes</div>
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
            <Link to="/ecosystem/projects/case-studies/acala/">Acala Network Case Study</Link>
          </div>
          <div className="block">
            <Link to="/ecosystem/projects/case-studies/astar/">Astar Network Case Study</Link>
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
