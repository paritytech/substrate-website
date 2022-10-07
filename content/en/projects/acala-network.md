---
title: Acala Network
description: Acala is a decentralized stablecoin platform that powers cross-blockchain open finance applications.
type:
  - substrate-builders-program
  - building-for-polkadot
category:
  - defi
link: https://acala.network
featured_image: /media/images/projects/acala-network.png
show_case_study: true
blockquote: Acala is a DeFi and liquidity hub for Polkadot that leverages Substrate to provide a parachain and Ethereum-compatible dapp platform customized for DeFi developers and users. Substrate allows us to build DeFi primitives and optimizations to improve developer and user experience, while Substrate and Polkadot’s upgradability enables us to future-proof our chain.
blockquote_author: Bryan Chen, Co-founder of Acala
blockquote_author_avatar: /media/images/avatars/bryan-chen-acala.jpg
---
Acala is an Ethereum-compatible platform for financial applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security. It offers a suite of financial applications with micro gas fees that can be paid in any token.

Challenge
---------

#### What challenges is the project focusing and what problems is it trying to solve?

On most of the major layer-1 (L1) platforms, native tokens are required to pay for transaction fees. This is a major hurdle for newcomers to decentralized finance (DeFi). For example, they may want to convert fiat to stablecoins and use them to participate in DeFi protocols. But this might also require them to purchase the native tokens of the DeFi platform they are using in order to be able to actually use their stablecoins. This involves a lot more work and brings them unwanted exposure to the crypto market.

Oracles are a very important component in many DeFi protocols. Oracle operators fetch external data and feed them back to the blockchain. However, there are few major issues with existing oracle solutions on current major DeFi platforms. Firstly, oracle feed transactions are beneficial to the platform, but those transactions are still subject to a transaction fee. This significantly increases the cost of using oracles and requires additional incentives to cover the cost. Secondly, oracle transactions are usually in the same category as other transactions in terms of priority. This means when the network is congested, those security-critical transactions have to compete with other user transactions and may not be included in the block in a timely manner, resulting in damage to the protocols. Similarly, oracle feed transactions can also be arbitrarily reordered by block producers and can increase MEV (miner extractable value) and other attack vectors like Sandwich attacks.

Many existing DeFi protocols are implemented in Solidity, which has a large developer community. This imposes a challenge to any DeFi platforms that do not support EVM & Solidity as a lot of effort is required to onboard developers and existing EVM & Solidity tools and libraries cannot be reused.

Solution
--------

#### How did the specific features of Substrate solve the challenges faced?

Acala aims to be a user-friendly, secure, and efficient platform for DeFi applications.

Substrate is very flexible. That allows customizing almost everything, including fee payment logic. Acala built a custom transaction payment pallet that integrates with their DEX pallet for transaction fee handling. This means users can pay fees with any tokens listed in the Acala DEX without holding any native tokens.

Additionally, Substrate allows customizing transaction pools and marking certain transactions as operational, with a higher priority over other transactions. This means Acala can ensure that oracle feed transactions are always highest priority; they are always included at the beginning of the block and therefore avoid the problem of block producers arbitrarily reordering the transactions. Valid oracle feed transactions were also made feeless to reduce the cost of oracle operators. With all those features combined, Acala will be able to have more oracle operators, have the feed transactions included even when the network is congested, and reduce MEV. As a result, the protocols on Acala will be more secure.

Substrate also provides an EVM pallet that allows Acala to support EVM & Solidity smart contracts with Acala’s custom-built EVM+. This means that existing Solidity smart contracts can be ported to the Acala platform with minimal changes, and Solidity developers can develop DeFi applications on Acala with familiar tools and libraries. At the same time, they can still customize the Acala EVM+ to include new features that are not available on other EVM platforms. This will allow Solidity smart contracts to also leverage all the advanced features of Acala as well as the multichain ecosystem of Polkadot.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily reliant on one or more of the key features of Substrate?

Acala developed and implemented a set of Substrate pallets with different capabilities. All of these could be achieved thanks to the modularity of Substrate. To start with, the{' '}  Transaction Payment pallet{' '} {' '} handles the fees to be paid in different assets. It uses a DEX to handle the transaction fees, and the SignedExtension to execute them. This pallet is very tightly coupled with the{' '}  Oracle pallet , which is feeless and equipped with MEV Protection, thanks to the way Substrate allows each pallet to be built. The Oracle pallet leverages the Weight Class in Substrate and the ability to customize the information to be dispatched. On top of all of that, Acala also built its own implementation of the{' '} EVM pallet{' '} leveraging on the extensibility property of all pallets in Substrate. Finally, Acala is also utilizing{' '}  ECDSA Crypto {' '} from Substrate to power the EVM Accounts.

**Links and Resources:**

Website: https://acala.network/

Github: https://github.com/AcalaNetwork/Acala