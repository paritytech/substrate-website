---
title: Moonbeam
description: Decentralized and permissionless, Moonbeam provides an Ethereum-compatible smart contract platform that makes it easy to build natively interoperable applications.
chain: true
type:
  - building-for-polkadot
  - substrate-developers-program
  - enterprise-ready
category:
  - smart-contracts
link: https://moonbeam.network/
featured_image: /media/images/projects/moonbeam.png
show_case_study: true
blockquote: Moonbeam is an Ethereum-compatible smart contract platform that simplifies the path to multi-chain deployments. Substrate provides the team at Moonbeam the ability to deploy, scale and iterate better than any other platform in the industry.
blockquote_author: DEREK YOO, FOUNDER, MOONBEAM NETWORK
blockquote_author_avatar: /media/images/avatars/derek-yoo-moonbeam.png
---
Challenge
---------

#### What challenges did the project face and what problems is it trying to solve?

To be fully Ethereum compatible while also building on Substrate and connecting to Polkadot, a project needs to keep up with the changes in both ecosystems. Finding ways to harmonize different design decisions between Ethereum and Polkadot can be challenging in many areas, including the existential deposit, the ability to lock or reserve tokens and the standard signature scheme.

Solution
--------

#### How did the specific features of Substrate solve the challenges faced?

Leveraging the modular notion of account ID, Moonbeam used H160 to achieve their unified accounts. On top of that, the extensible RPC layer allowed them to implement Ethereum-style RPC endpoints.

Finally, because of Substrate’s modular consensus layer, Moonbeam could build their own consensus framework. FRAME itself allows all the great pallets from various projects to compose together well.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily relying on one or more of the key features of Substrate?

All of the above resulted in the development of different pallets. To start with, Moonbeam developed the Frontier's Pallet EVM and Pallet Ethereum, both of which host the logic of the Ethereum Virtual Machine and account management. The Moonbeam team also developed a custom-built staking pallet that any parachain with staking can integrate to allow users to stake and back that parachain’s collators.

Moonbeam added Substrate's democracy pallet to its runtime to allow for a governance structure. They added almost the same codebase to Moonriver, their canary network, which is now integrated as a parachain on the Kusama network.

**Links and Resources:**

Website: https://moonbeam.network/

Dcoumentation: https://docs.moonbeam.network/