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

export default function acala({ data }) {
  const acalaData = teamsData.teams.find(team => team.name === 'Acala Network');
  console.log(acalaData);
  const logo = getImage(data.logo);
  return (
    <Layout>
      <SEO title="Acala Network Case Study" />
      <article className="container pl-6 2xl:pl-12 max-w-4xl mb-20">
        <div className="tracking-wider uppercase mb-4">Case Study</div>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
          <GatsbyImage className="w-20 h-20 mr-4" image={logo} alt={acalaData.name} />
          <div className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{acalaData.name}</div>
        </div>
        <div className="mb-3 font-bold text-lg md:text-xl">
          DEX chain with no-gas economy, proof of liquidity and prevention of MEV / front-running
        </div>
        <div className="text-lg md:text-xl">Community, Forkless, Interoperable</div>
        <div className="my-10">
          <div className="mb-3 md:inline-flex">
            <div className="mr-8 flex">
              <div className="tracking-wider uppercase  mr-3">type:</div>
              <div>
                {acalaData.types
                  .filter(e => e != 'All Teams')
                  .map((e, i) => {
                    const lastIndex = acalaData.types.filter(e => e != 'All Teams').length - 1;
                    return (
                      <span key={i}>
                        {e}
                        {lastIndex != i && `, `}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className="flex">
              <div className="tracking-wider uppercase mr-3">Industry:</div>
              <div>
                {acalaData.category
                  .filter(e => e != 'All')
                  .map((e, i) => {
                    const lastIndex = acalaData.category.filter(e => e != 'All').length - 1;
                    return (
                      <span key={i}>
                        {e}
                        {lastIndex != i && `, `}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
            {` `}
            <p className="mb-0 ">{acalaData.tag}</p>
          </div>
        </div>
        <Blockqoute />
        <p>
          Mangata is a highly performant cross-chain DEX that aims for the best trading experience. By re-architecturing
          the blockchain principles, Mangata has no gas costs and a guarantee of transaction success. Frontrunning
          practices are prevented on all levels - no mempool frontrunning and no miner reordering.
        </p>
        <p>
          This is enabled by the custom consensus that prevents MEV and all network participants are equal. Buy & burn
          mechanism ensures the automatic demand for native token, that is as well distributed to treasury. This in
          combination with bridge to Ethereum ensures flow of liquidity to Polkadot ecosystem and a convenient trading
          interface for everyone.
        </p>
        <div id="challenge" className="flex items-center mt-10 mb-6">
          <Icon name="knight" className="fill-current text-substrateGreen mr-4" />
          <h2 className="mb-0">Challenge</h2>
        </div>
        <h4>What challenges is the project focusing and what problems is it trying to solve:</h4>
        <p>
          The cornerstone problem faced by any blockchain-based DEX is miner extractable value, or MEV. The issue lays
          on additional powers block builders possess, which allows them to cut a part of a user&apos;s gains, or even
          deny a trader&apos;s transaction completely and repeat it to claim the profit. This on-chain inequality causes
          DEX traders to suffer losses, which are now estimated to be more than billion dollars in total. The MEV can be
          split in two types: value extracted by reordering (VER) and value extracted by denial (VED), and Mangata is
          solving both.
        </p>
        mas
        <p>
          A lack of interoperability between the stake and the liquidity is causing a big part of value, provided by
          network participants as a stake, to be locked without actively participating in the protocol&apos;s processes.
          In Mangata, we are aiming to reduce the idleness of the stake in order to force stakers to participate in
          economic activities on-chain.
        </p>
        <p>
          With no-gas economy Mangata is aiming to solve ever-increasing transaction price and eliminate a situation
          when on-chain activity not related to the DEX is causing DEX traders to pay higher fees. Because
          non-application-specific chains are forced to have different economic models for on-chain apps and the chain
          itself, the network fee can sometimes be 100x more than the exchange commission, making DEX usage expensive.
        </p>
        <div id="solution" className="flex items-center mt-10 mb-6">
          <Icon name="check-mark" className="fill-current text-substrateGreen mr-4" />
          <h2 className="mb-0">Solution</h2>
        </div>
        <h4>Mangata is using Substrate framework to its widest extent to implement solutions:</h4>
        <p>
          <b>MEV prevention</b>
          <br />
          Since both kinds of MEV originated from excessive powers possessed by block builders, the chosen solution is
          withdrawing a power to control order of transactions in block and a power to deny transaction execution from
          node operators. Implementation is heavily dependent on ability to alter block creation and execution
          processes.
        </p>
        <p>
          <b>VER solution:</b>
          <br />
          In Mangata, block building and block execution are split in a way the block builder is able to pick a set of
          transactions to be executed, and the block executor is forced to execute predefined transaction in randomized
          order unknown to the block builder. In a simple words: transaction execution time is unknown at the time of
          building the block.
        </p>
        <p>
          <b>VED solution:</b>
          <br />
          Some types of exchange transactions, like arbitrage transactions, are able to create profit to their sender
          immediately during transaction execution. In order to prevent replacement of such transaction by block
          builder&apos;s similar transaction, Mangata implements transaction cyphering mechanism preventing transaction
          actions from being known before it&apos;s execution. Block builders can not look into the encrypted
          transaction, but are rewarded for including them into the block, making the transaction mandatory to execute.
        </p>
        <p>
          Because Substrate allows to modify even the consensus principles, a Proof-of-Liquidity was developed. PoL
          consensus utilizing provided liquidity as a stake. This mechanism provides additional incentivizations for the
          stakers for increasing the amount of liquidity in the DEX. Now, better price discovery is bound with better
          chain security. Staking and liquidity mining rewards are provided in native MGA tokens, which could be bridged
          to other parachains thanks to interoperability. Part of the exchange commision in used to buy and burn
          existing MGA tokens, making possible new tokens issuance even after token cap is reached.
        </p>
        <p>
          While Mangata tokens are required to send some transactions, the exchange transactions have no network fee.
          Because Mangata is a blockchain and a DEX at once, there is no need to separate business models. Fine-tuning
          runtime parameters helps to build the economy is a way If the fee is paid in a form of an exchange commision,
          transaction fee is not required. Predictable cost of the transaction helps to build better algorithmic trading
          strategies. Community-build tools like ORML tokens make it possible to implement the tokenomics with a small
          effort.
        </p>
        <h4>
          How did you use the specific USPs of Substrate to solve the problem that you are tackling with your project?
        </h4>
        <p>
          <b>Community</b>
        </p>
        <p>
          Community built around Polkadot and Substrate is huge, due to being very attractive to developer minds. Rust
          language is the most loved language 6 years in a row by StackOverflow survey and you can feel it in the
          Substrate community. By choosing a niche but intellectually compelling technology you attract the best of the
          best and the amount of creativity and delivery in the Substrate ecosystem is massive. This was exactly how
          Ethereum started, attracting developers and Substrate is the next generation of this principle.
        </p>
        <p>
          <b>Forkless</b>
        </p>
        <p>
          Not yet seen principle of forkless upgrades allows the protocol to work iteratively and better find
          product-market fit. Most protocols are built in one-shot attempts. They either get it right the first time or
          they’re screwed. By having forkless upgrades, you introduce new innovations, test them, and change them on an
          ongoing basis, while engaging the chain community to vote and give valuable feedback for the direction of the
          protocol. We embrace this paradigm in Mangata.
        </p>
        <p>
          <b>Interoperability</b>
        </p>
        <p>
          Because Substrate allows interoperability, we can build an app-specific chain, that will be specialized and
          work in conundrum of other specialized chains. Most of the technological landscape is about finding the best
          fit for their specialization. Without interoperability, it wouldn’t be possible. Crypto in 2015/2016 has seen
          a rise of app-specific chains, but no network effects happened because of lack of interoperability. This is
          allowed on Polkadot and in Mangata we rely on working with other chains.
        </p>
        <div id="result" className="flex items-center mt-10 mb-6">
          <Icon name="graph" className="fill-current text-substrateGreen mr-4" />
          <h2 className="mb-0">Result</h2>
        </div>
        <h4>
          To implement the proposed solution, it is not enough to bring new functionality with the pallets mechanism. A
          more fundamental changes in consensus are required to be made, and the Substrate framework does support
          modifications on the lowest level too.
        </h4>
        <p>
          As the result, Mangata provides secure and reliable trades for the assets from several interoperable
          ecosystems. With MEV prevention made possible by a deeply customizable framework and no-gas economy, our
          design provides better prices for all groups of traders- small-scale, institutional, algorithmic and more.
          Liquidity providers can choose to become Mangata stakers without a need to withdraw their liquidity from
          pools, and their rewards will be distributed even after the token cap is reached thanks to buy&burn mechanism.
        </p>
        <p>
          What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily
          relying on one or more of the key features of Substrate?
        </p>
        <ul className="list-outside ml-6">
          <li>
            <b>Attracting the developer talent because of Rust</b>
          </li>
          <li>
            <b>
              Building app-specific chain, where we re-architectured the blockchain design from ground up and adjusted
              consensus as well as fee market
            </b>
          </li>
        </ul>
        <div id="result" className="flex items-center mt-10 mb-6">
          <h2 className="mb-0">Runtimes&Pallets</h2>
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
        <div className="underline-animate text-substrateBlue font-bold leading-8">
          <div className="block">
            <Link to="#">Moonbeam Case Study</Link>
          </div>
          <div className="block">
            <Link to="#">Phala Case Study</Link>
          </div>
          <br />
          <div className="block">
            <Link to="/ecosystem/teams">See All Teams</Link>
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
    logo: file(relativePath: { eq: "logos/Acala Network.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
