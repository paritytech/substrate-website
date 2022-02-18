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

export default function Equilibrium({ data }) {
  const equilibriumData = teamsData.teams.find(team => team.name === 'Equilibrium');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title="Equilibrium Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={'Equilibrium'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={equilibriumData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{equilibriumData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">A decentralized interoperable money market</div>
        <div className="my-10">
          <div className="mb-3">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={equilibriumData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={equilibriumData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{equilibriumData.tag}</p>
          </div>
        </div>
        <Blockqoute
          text="“​We were dissatisfied with how DeFi 1.0 worked; the lack of blockchain interconnection, difficulty in moving liquidity, and more. We wanted a unified DeFi multi-tool, that's why we built Equilibrium using Substrate.”"
          name="Alex Melikhov, Co-Founder, Equilibrium"
          image={data.avatar}
        />
        <p>
          Equilibrium is a cross-chain DeFi solution that brings all known DeFi primitives to work in a seamless and
          unified way. It offers users a unique money market with novel liquidation mechanics — by using bailouts, no
          auctions are needed, and liquidity providers (bailsmen) supply liquidity in advance. Combined with on-chain
          risk modeling, the platform allows for use cases like: Borrowing, lending and stablecoin generation.
        </p>
        <p>A decentralized exchange with spot, margin, and derivative trading products.</p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges did the project face and what problems is it trying to solve?</h4>
        <p className="font-bold mb-2">A lack of DeFi interoperability</p>
        <p>
          There is currently a natural problem of liquidity fragmentation across multiple DeFi protocols and products.
          Because DeFi products and services are often built for specific blockchain ecosystems, there is a lack of
          interoperability that keeps liquidity locked in individual protocols, which can make users’ access to
          different markets cumbersome.
        </p>
        <p className="font-bold mb-2">DeFi concentration</p>
        <p>
          Around 90% of all DeFi is currently concentrated in Ethereum. Having all the DeFi development on one protocol
          (even one as diverse and flexible as Ethereum) limits free market potential. Ethereum-based DeFi runs the risk
          of becoming an overly large, cluttered ecosystem that developers are forced to adopt because of its dominance,
          leaving users with no products or services to explore other market opportunities.
        </p>
        <p className="font-bold mb-2">User experience</p>
        <p>
          The scope of DeFi products and services is vast, but as a result there can be a lack of user-focused
          functionality. Thanks to FinTech disruptors, legacy financial institutions have been creating UX-rich products
          to make trading activities easier, with less need to perform complex switches between platforms and associated
          liquidity processes. The historic siloed nature of DeFi protocols have contributed to a relative lack of
          strong UX in this space.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>What does Equilibrium do differently?</h4>
        <p className="font-bold mb-2">Making DeFi interoperable</p>
        <p>
          By building on Substrate, Equilibrium connects to other blockchain networks and significantly expands the
          universe of assets available to DeFi users. For example, DeFi users can use ETH-based assets outside of
          Ethereum. Moreover, since Equilibrium uses a portfolio margining approach, there are no single collateral
          positions; the system works with user portfolios to assess their risks and set individual interest rates.
        </p>
        <p className="font-bold mb-2">User-friendly</p>
        <p>
          Because it is multi-chain, Equilibrium combines all known DeFi use cases in one place. Users may lend assets,
          borrow assets, stake assets, earn rewards, exchange assets, and trade assets with leverage. There is no need
          to juggle liquidity back and forth between different protocols.
        </p>
        <p className="font-bold mb-2">Rewarding best practices</p>
        <p>
          Equilibrium tackles the problem of liquidation of bad debt in DeFi protocols that work with loans. Equilibrium
          doesn’t auction off collateral into distressed markets or dilute native tokens to cover the shortfall. Rather,
          the liquidity needed to cover debt is supplied by liquidity providers in advance. These liquidity providers
          are rewarded in native tokens for insuring the system against liquidations.
        </p>
        <h4>How did the specific features of Substrate solve the challenges faced?</h4>

        <p className="font-bold mb-2">Flexibility</p>
        <p>Equilibrium uses the following flexible advantages of Substrate:</p>
        <ul className="mb-6 pl-2">
          <li>Blockchain upgrades are automatic and avoid the problems associated with forking.</li>
          <li>
            The blockchain produced is fully customizable: block lengths, transaction limits, transaction fees, storage
            structure, costs of certain user actions, and more can be altered to meet different business needs.{' '}
          </li>
          <li>
            Pallets (Substrate building blocks) provide broader possibilities compared to smart contracts in covering
            particular business cases.
          </li>
          <li>Progressive decentralization and governance tools are provided out of the box. </li>
        </ul>
        <p className="font-bold mb-2">Tooling</p>
        <p>
          One of the main tools Equilibrium uses extensively is the off-chain worker functionality of the Substrate
          node. Off-chain workers help speed up the chain by offloading some of the business logic and computations
          related to oracles, interest fee write-offs, reward redistributions, and margin calls.{' '}
        </p>
        <p>Off-chain workers allow for building a faster, more efficient decentralized exchange.</p>
        <p className="font-bold mb-2">Interoperability</p>
        <p>
          Parachains and the “blockchain of blockchains” paradigm behind Polkadot let Equilibrium build great products
          that are interconnected with the entire ecosystem for everyone to use. With the help of common good parachains
          and third-party bridges, Equilibrium supports a much broader universe of assets compared to current DeFi
          analogues. Equilibrium already has bridges to the ETH and BSC networks, and will be connected to the entire
          Polkadot ecosystem as a parachain.
        </p>
        <div className="my-10">
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
            While all well known DeFi protocols work with aggregates in a ‘one size fits all’ model due to limitations
            of the underlying technology, Equilibrium leverages Substrate technology to treat each borrower
            individually.
          </p>
          <p>
            Off-chain workers let Equilibrium perform heavy computation and introduce additional actions for nodes. With
            the help of off-chain workers, Equilibrium can manage individual user portfolios with different combinations
            of collateral assets (positive balances) and debt assets (negative balances).
          </p>
          <p>
            It is important to make sure that off-chain actions do not lead to ‘unpleasant’ consequences for the
            blockchain, since they occur without consensus from the entire network. This is where one-way functions come
            to the rescue. Equilibrium offloads heavy computations to off-chain workers. The end result is better
            performance and low cost while still being able to validate the computations on chain.
          </p>
          <p>
            Equilibrium has several validators that are doing this intensive computation work. Since this work should
            not be duplicated, each separate node works only with its own subset of user accounts. Equilibrium avoids
            the duplication problem with a validate_unsigned method in the background — transaction dependencies are
            used to set user processing priority and process each request only once.
          </p>
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://equilibrium.io/en">https://equilibrium.io/en</Link>
            </div>
            <div>
              Github: <Link to="https://github.com/equilibrium-eosdt">https://github.com/equilibrium-eosdt</Link>
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
    logo: file(relativePath: { eq: "logos/equilibrium.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    avatar: file(relativePath: { eq: "photos/case-studies/alex-melikhov-equilibrium.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
