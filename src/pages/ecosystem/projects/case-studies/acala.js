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

export default function AcalaCaseStudy({ data }) {
  const acalaData = teamsData.teams.find(team => team.name === 'Acala Network');
  const logo = getImage(data.logo);
  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title="Acala Network Case Study" />
      <Section>
        <CaseStudyBreadcrumb title={'Acala Network'} />
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={acalaData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{acalaData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">DeFi and liquidity hub for Polkadot</div>
        <div className="my-10">
          <div className="mb-3">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <Types types={acalaData.types} />
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <Categories categories={acalaData.category} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{acalaData.tag}</p>
          </div>
        </div>
        <Blockqoute
          text="“Acala is a DeFi and liquidity hub for Polkadot that leverages Substrate to provide a parachain and Ethereum-compatible dapp platform customized for DeFi developers and users. Substrate allows us to build DeFi primitives and optimizations to improve developer and user experience, while Substrate and Polkadot’s upgradability enables us to future-proof our chain.”"
          name="Bryan Chen, Co-founder of Acala"
          image={data.avatar}
        />
        <p>
          Acala is an Ethereum-compatible platform for financial applications to use smart contracts or built-in
          protocols with out-of-the-box cross-chain capabilities and robust security. It offers a suite of financial
          applications with micro gas fees that can be paid in any token.
        </p>
        <div className="flex items-center mt-10 mb-6 ">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="challenge" className="mb-0 scroll-margin-top-100">
            Challenge
          </h2>
        </div>
        <h4>What challenges is the project focusing and what problems is it trying to solve?</h4>
        <p>
          On most of the major layer-1 (L1) platforms, native tokens are required to pay for transaction fees. This is a
          major hurdle for newcomers to decentralized finance (DeFi). For example, they may want to convert fiat to
          stablecoins and use them to participate in DeFi protocols. But this might also require them to purchase the
          native tokens of the DeFi platform they are using in order to be able to actually use their stablecoins. This
          involves a lot more work and brings them unwanted exposure to the crypto market.
        </p>
        <p>
          Oracles are a very important component in many DeFi protocols. Oracle operators fetch external data and feed
          them back to the blockchain. However, there are few major issues with existing oracle solutions on current
          major DeFi platforms. Firstly, oracle feed transactions are beneficial to the platform, but those transactions
          are still subject to a transaction fee. This significantly increases the cost of using oracles and requires
          additional incentives to cover the cost. Secondly, oracle transactions are usually in the same category as
          other transactions in terms of priority. This means when the network is congested, those security-critical
          transactions have to compete with other user transactions and may not be included in the block in a timely
          manner, resulting in damage to the protocols. Similarly, oracle feed transactions can also be arbitrarily
          reordered by block producers and can increase MEV (miner extractable value) and other attack vectors like
          Sandwich attacks.
        </p>
        <p>
          Many existing DeFi protocols are implemented in Solidity, which has a large developer community. This imposes
          a challenge to any DeFi platforms that do not support EVM & Solidity as a lot of effort is required to onboard
          developers and existing EVM & Solidity tools and libraries cannot be reused.
        </p>
        <div className="flex items-center mt-10 mb-6">
          <Icon name="flag" className="fill-current text-substrateGreen mr-4" />
          <h2 id="solution" className="mb-0 scroll-margin-top-100">
            Solution
          </h2>
        </div>
        <h4>How did the specific features of Substrate solve the challenges faced?</h4>
        <p>Acala aims to be a user-friendly, secure, and efficient platform for DeFi applications.</p>
        <p>
          Substrate is very flexible. That allows customizing almost everything, including fee payment logic. Acala
          built a custom transaction payment pallet that integrates with their DEX pallet for transaction fee handling.
          This means users can pay fees with any tokens listed in the Acala DEX without holding any native tokens.
        </p>

        <p>
          Additionally, Substrate allows customizing transaction pools and marking certain transactions as operational,
          with a higher priority over other transactions. This means Acala can ensure that oracle feed transactions are
          always highest priority; they are always included at the beginning of the block and therefore avoid the
          problem of block producers arbitrarily reordering the transactions. Valid oracle feed transactions were also
          made feeless to reduce the cost of oracle operators. With all those features combined, Acala will be able to
          have more oracle operators, have the feed transactions included even when the network is congested, and reduce
          MEV. As a result, the protocols on Acala will be more secure.
        </p>

        <p>
          Substrate also provides an EVM pallet that allows Acala to support EVM & Solidity smart contracts with Acala’s
          custom-built EVM+. This means that existing Solidity smart contracts can be ported to the Acala platform with
          minimal changes, and Solidity developers can develop DeFi applications on Acala with familiar tools and
          libraries. At the same time, they can still customize the Acala EVM+ to include new features that are not
          available on other EVM platforms. This will allow Solidity smart contracts to also leverage all the advanced
          features of Acala as well as the multichain ecosystem of Polkadot.
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
        <p className="underline-animate underline-animate-thin">
          Acala developed and implemented a set of Substrate pallets with different capabilities. All of these could be
          achieved thanks to the modularity of Substrate. To start with, the{' '}
          <Link to="https://github.com/AcalaNetwork/Acala/blob/master/modules/transaction-payment/src/lib.rs">
            Transaction Payment pallet{' '}
          </Link>{' '}
          handles the fees to be paid in different assets. It uses a DEX to handle the transaction fees, and the
          SignedExtension to execute them. This pallet is very tightly coupled with the{' '}
          <Link to="https://github.com/open-web3-stack/open-runtime-module-library/blob/master/oracle/src/lib.rs">
            Oracle pallet
          </Link>
          , which is feeless and equipped with MEV Protection, thanks to the way Substrate allows each pallet to be
          built. The Oracle pallet leverages the Weight Class in Substrate and the ability to customize the information
          to be dispatched. On top of all of that, Acala also built its own implementation of the{' '}
          <Link to="https://github.com/AcalaNetwork/Acala/blob/master/modules/evm/src/lib.rs">EVM pallet</Link>{' '}
          leveraging on the extensibility property of all pallets in Substrate. Finally, Acala is also utilizing{' '}
          <Link to="https://github.com/AcalaNetwork/Acala/blob/master/modules/evm-accounts/src/lib.rs">
            ECDSA Crypto
          </Link>{' '}
          from Substrate to power the EVM Accounts.
        </p>
        <div className="my-10">
          <b>Links and Resources:</b>
          <div className="underline-animate font-bold my-6 leading-loose">
            <div>
              Website: <Link to="https://acala.network/">https://acala.network/</Link>
            </div>
            <div>
              Github: <Link to="https://github.com/AcalaNetwork/Acala">https://github.com/AcalaNetwork/Acala</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-6">
          <div className="mb-0 text-4xl font-bold">Runtimes</div>
        </div>
        <span className="tracking-wider uppercase">Substrate Runtimes:</span>
        <div className="flex flex-wrap mb-16">
          {acalaData.runtimes.map((runtime, index) => {
            return (
              <div key={index}>
                <Tag title={runtime.title} />
              </div>
            );
          })}
        </div>
        <h4>More Case Studies</h4>
        <div className="font-bold leading-8 underline-animate">
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
    logo: file(relativePath: { eq: "logos/Acala Network.png" }) {
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
