---
title: Polkadex
description: Polkadex is a Open Source, Decentralized Exchange Platform that features feeless trades, Market Order, AMM and full focus on UI.
type:
  - substrate-builders-program
category:
  - defi
  - infrastructure
link: https://www.polkadex.trade
featured_image: /media/images/projects/polkadex.png
show_case_study: true
blockquote: The core principles that I enforced for Polkadex Orderbook include bringing a world-class UX without compromising user fund security. This is possible due to the flexibility and modular nature of the Substrate Framework.
blockquote_author: GAUTHAM J, CEO, POLKADEX
blockquote_author_avatar: 
---
Polkadex introduces a trading infrastructure without compromises. This trading infrastructure includes a decentralized peer-to-peer orderbook, automated market maker-based models, along with other trading accessories such as an initial decentralized exchange offering and perpetual liquidity mining.

Challenge
---------

#### What challenges is the project focusing and what problems is it trying to solve?

Polkadex solves two main challenges:

1.  There is a high chance of front-running attacks in the automated market maker (AMM) domain, as it is completely decentralized and transparent to everyone. Many projects have tried to solve this by making compromises, especially in the token utility or user experience.{' '}
2.  There are no usable orderbook-based decentralized exchanges that give the users control over their funds, let alone one that supports high-frequency trading and trading bot support.

Solution
--------

#### How did the specific features of Substrate solve the challenges faced?

In the Polkapool pallet, Polkadex utilizes Substrate’s flexibility to solve the problem of front-running attacks, without compromises, in just ten lines of code. This is made possible by modifying transaction priority to randomly shuffle the transactions utilizing the randomness provided by the BABE pallet’s cryptographically-secure verifiable randomness function.

Polkadex Orderbook solves the problem of orderbook operators holding custody of user funds. Substrate’s unique off-chain worker capabilities keep operators accountable for their actions. The off-chain workers pin and verify the Balance snapshots provided by operators in IPFS, thereby enabling users to withdraw if the operator is compromised.

Polkadex enables traders to bring funds cheaply (as low as a standard ETH or ERC20 transfer) from Ethereum using any generic software or hardware Ethereum wallet to Polkadex in an experience familiar to CEX traders. This is possible with Substrate's ability to add custom functionality to the consensus of Polkadex and the easy to use APIs that Substrate exposes to access the finality and other consensus states of the Polkadex network.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily reliant on one or more of the key features of Substrate?

1.  Eliminating frontrunning - Using Substrate’s BABE pallet, Polkadex easily eliminated frontrunning by providing randomness to modify transaction priority.{' '}
2.  Efficiency - Substrate’s off-chain worker capabilities allows Polkadex to achieve massive transaction performance while maintaining security by packaging the off-chain worker logic inside the node binary.
3.  Cost effectiveness - Substrate’s ability to turn on/off fee collection based on certain conditions more cost effective and leads to a better user experience.
4.  Excellent tooling - Polkadot JS, chain spec generation, running nodes, etc. Substrate has robust tooling for development, deployment, and debugging.
5.  Ability to add custom consensus layer to a Substrate node without affecting the core functionalities such as Finality and Block production.

**Links and Resources:**

Website: https://www.polkadex.trade/

Github:  https://github.com/Polkadex-Substrate/Polkadex

Polkapool \[In Progress\]:  https://github.com/Polkadex-Substrate/Polkadex/tree/develop/pallets/polkapool