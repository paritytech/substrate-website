---
title: Unique Network
description: Unique Network is an infrastructure for the next generation NFTs, offering developers independence from network-wide transaction fees and upgrades.
chain: true
type:
  - building-for-polkadot
  - substrate-builders-program
category:
  - nfts
link: https://unique.network/
featured_image: /media/images/projects/unique-network.png
show_case_study: true
blockquote: Flexibility is the strongest side of Substrate - it allows unmatched customization that is needed to handle non-fungible asset classes on-chain. We used it to create the next generation NFT chain, capable of supporting innovative use cases and liberating NFTs from the collectables.
blockquote_author: GREG ZAYTSEV AND ALEXANDER MITROVICH, FOUNDERS, UNIQUE NETWORK
blockquote_author_avatar: 
---
Unique Network is a Substrate-based NFT chain for the Polkadot and Kusama ecosystems. It provides all basic NFT functionality provided by other blockchains – minting, transferring, or burning NFTs, along with the basic tools needed – a wallet, minting solution, gallery and a marketplace as a white-label suite, ready to use. Demonstrating the power and flexibility of Substrate, Unique Network offers advanced functionality such as flexible economic models, scheduling, and refungibility – all in an interoperable environment with EVM and Solidity. Unique Network is built to enable the next generation of NFT use cases.

Challenge
---------

#### What challenges is the project focusing and what problems is it trying to solve?

_Rigid economic model challenge:_ Other blockchains require their users to own cryptocurrency in order to execute a transaction. This creates an enormous friction for mass market adoption of NFTs.

_Subscription use case challenge:_ Existing blockchains do not allow NFTs to be rented or managed by delegated parties. This breaks the conventional business model of building a stable income flow based on regular payments.

Solution
--------

#### How did the specific features of Substrate solve the challenges faced?

_Rigid economic model challenge:_ Substrate allows customization of transaction handling on all transaction stages.

_Subscription use case challenge:_ Substrate allows execution of code before and after each block.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily reliant on one or more of the key features of Substrate?

_Rigid economic model challenge:_ Dapp users are not required to pay transaction fees anymore, which means they can use the dapp without having to:

*   learn what a crypto address is
*   register on the crypto exchange
*   pass KYC
*   buy volatile cryptocurrency
*   create and fund a wallet from a crypto exchange.

Substrate makes this possible using a Signed Extension to customize the address that pays the transaction fee. When the Signed Extension detects the transaction of certain types (e.g. a transfer in a particular NFT collection), it assigns the sponsor address to pay the transaction fee. This approach allows building frictionless dapps and enables true Freemium Gaming on blockchain.

_Subscription use case challenge:_ To enable subscription models, Unique Network created a scheduling solution based on the scheduler pallet provided by FRAME. With their custom scheduler pallet, a user may (safely from the block weight perspective) schedule any transaction from a simple balance transfer to an EVM smart contract call. This will help generate a stable income flow based on regular payments.

Pallets (3-6 as top priority):

1.  nft
2.  nft-charge-transaction
3.  evm-transaction-payment
4.  scheduler

**Links and Resources:**

[Website](https://unique.network/)

[Github](https://github.com/UniqueNetwork)

[Sponsoring pallet repo](https://github.com/UniqueNetwork/pallet-sponsoring)