---
title: Equilibrium
description: Equilibrium introduces a cross-chain money market that combines pooled lending with synthetic asset generation and trading.
chain: true
type:
  - building-for-polkadot
  - substrate-builders-program
category:
  - defi
link: https://equilibrium.io/
featured_image: /media/images/projects/equilibrium.png
show_case_study: true
blockquote: We were dissatisfied with how DeFi 1.0 worked; the lack of blockchain interconnection, difficulty in moving liquidity, and more. We wanted a unified DeFi multi-tool, that's why we built Equilibrium using Substrate.
blockquote_author: HALEX MELIKHOV, CO-FOUNDER, EQUILIBRIUM
blockquote_author_avatar: /media/images/avatars/alex-melikhov-equilibrium.jpeg
---
Equilibrium is a cross-chain DeFi solution that brings all known DeFi primitives to work in a seamless and unified way. It offers users a unique money market with novel liquidation mechanics — by using bailouts, no auctions are needed, and liquidity providers (bailsmen) supply liquidity in advance. Combined with on-chain risk modeling, the platform allows for use cases like: Borrowing, lending and stablecoin generation.

A decentralized exchange with spot, margin, and derivative trading products.

Challenge
---------

#### What challenges did the project face and what problems is it trying to solve?

A lack of DeFi interoperability

There is currently a natural problem of liquidity fragmentation across multiple DeFi protocols and products. Because DeFi products and services are often built for specific blockchain ecosystems, there is a lack of interoperability that keeps liquidity locked in individual protocols, which can make users’ access to different markets cumbersome.

DeFi concentration

Around 90% of all DeFi is currently concentrated in Ethereum. Having all the DeFi development on one protocol (even one as diverse and flexible as Ethereum) limits free market potential. Ethereum-based DeFi runs the risk of becoming an overly large, cluttered ecosystem that developers are forced to adopt because of its dominance, leaving users with no products or services to explore other market opportunities.

User experience

The scope of DeFi products and services is vast, but as a result there can be a lack of user-focused functionality. Thanks to FinTech disruptors, legacy financial institutions have been creating UX-rich products to make trading activities easier, with less need to perform complex switches between platforms and associated liquidity processes. The historic siloed nature of DeFi protocols have contributed to a relative lack of strong UX in this space.

Solution
--------

#### What does Equilibrium do differently?

Making DeFi interoperable

By building on Substrate, Equilibrium connects to other blockchain networks and significantly expands the universe of assets available to DeFi users. For example, DeFi users can use ETH-based assets outside of Ethereum. Moreover, since Equilibrium uses a portfolio margining approach, there are no single collateral positions; the system works with user portfolios to assess their risks and set individual interest rates.

User-friendly

Because it is multi-chain, Equilibrium combines all known DeFi use cases in one place. Users may lend assets, borrow assets, stake assets, earn rewards, exchange assets, and trade assets with leverage. There is no need to juggle liquidity back and forth between different protocols.

Rewarding best practices

Equilibrium tackles the problem of liquidation of bad debt in DeFi protocols that work with loans. Equilibrium doesn’t auction off collateral into distressed markets or dilute native tokens to cover the shortfall. Rather, the liquidity needed to cover debt is supplied by liquidity providers in advance. These liquidity providers are rewarded in native tokens for insuring the system against liquidations.

#### How did the specific features of Substrate solve the challenges faced?

Flexibility

Equilibrium uses the following flexible advantages of Substrate:

*   Blockchain upgrades are automatic and avoid the problems associated with forking.
*   The blockchain produced is fully customizable: block lengths, transaction limits, transaction fees, storage structure, costs of certain user actions, and more can be altered to meet different business needs.
*   Pallets (Substrate building blocks) provide broader possibilities compared to smart contracts in covering particular business cases.
*   Progressive decentralization and governance tools are provided out of the box.

Tooling

One of the main tools Equilibrium uses extensively is the off-chain worker functionality of the Substrate node. Off-chain workers help speed up the chain by offloading some of the business logic and computations related to oracles, interest fee write-offs, reward redistributions, and margin calls.

Off-chain workers allow for building a faster, more efficient decentralized exchange.

Interoperability

Parachains and the “blockchain of blockchains” paradigm behind Polkadot let Equilibrium build great products that are interconnected with the entire ecosystem for everyone to use. With the help of common good parachains and third-party bridges, Equilibrium supports a much broader universe of assets compared to current DeFi analogues. Equilibrium already has bridges to the ETH and BSC networks, and will be connected to the entire Polkadot ecosystem as a parachain.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily reliant on one or more of the key features of Substrate?

While all well known DeFi protocols work with aggregates in a ‘one size fits all’ model due to limitations of the underlying technology, Equilibrium leverages Substrate technology to treat each borrower individually.

Off-chain workers let Equilibrium perform heavy computation and introduce additional actions for nodes. With the help of off-chain workers, Equilibrium can manage individual user portfolios with different combinations of collateral assets (positive balances) and debt assets (negative balances).

It is important to make sure that off-chain actions do not lead to ‘unpleasant’ consequences for the blockchain, since they occur without consensus from the entire network. This is where one-way functions come to the rescue. Equilibrium offloads heavy computations to off-chain workers. The end result is better performance and low cost while still being able to validate the computations on chain.

Equilibrium has several validators that are doing this intensive computation work. Since this work should not be duplicated, each separate node works only with its own subset of user accounts. Equilibrium avoids the duplication problem with a validate\_unsigned method in the background — transaction dependencies are used to set user processing priority and process each request only once.

**Links and Resources:**

[Website](https://equilibrium.io/en)

[Github](https://github.com/equilibrium-eosdt)