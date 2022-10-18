---
title: Astar Network
description: Astar Network is a scaling dapps platform on Substrate compatible with Ethereum Virtual Machine (EVM) and connected to Polkadot.
chain: true
type:
  - substrate-builders-program
  - evm
  - wasm
category:
  - smart-contracts
link: https://astar.network/
featured_image: /media/images/projects/astar-network.png
show_case_study: true
blockquote: Astar Network is a multi-chain decentralized application layer on Polkadot. Astar incorporates Ethereum Virtual Machine, WebAssembly. The platform supports various decentralized applications like DeFi, NFTs and DAOs.
blockquote_author: HOON KIM, CTO, Astar Network
blockquote_author_avatar: /media/images/avatars/hoon-kim-astar.png
---
Astar Network supports the building of dApps with EVM and WASM smart contracts and offers developers true interoperability, with cross-consensus messaging (XCM). We are made by developers and for developers. Astar’s unique Build2Earn model empowers developers to get paid through a dApp staking mechanism for the code they write and dApps they build.

Astar’s vibrant ecosystem has become Polkadot’s leading Parachain globally, supported by all major exchanges and Tier 1 VCs. Astar offers the flexibility of all Ethereum and WASM toolings for developers to start building their dApps. To accelerate growth on Polkadot and Kusama Networks, Astar Space Labs offers an Incubation Hub for top TVL dApps.

Challenge
---------

#### What challenges did the project face and what problems is it trying to solve?

Polkadot’s Relay Chain doesn’t support smart contract functionalities by design. Therefore, a parachain that supports smart contract functionalities well would be a great benefit to the Polkadot ecosystem.

Solution
--------

#### How did the specific features of Substrate solve the challenges faced?

When it comes to smart contracts, multi virtual machines and scalability are the key properties of the next-generation smart contract platform. Substrate is a customizable blockchain framework that natively supports WebAssembly smart contracts and has an EVM pallet. This allows Astar to support both of these virtual machines (VMs), allowing them to co-exist and be interoperable with one another.

The Build2Earn model of the network empowers the builders to earn by staking mechanism for the code they write and build on decentralized applications.

Result
------

#### What was the concrete solution or implementation that couldn’t be done without Substrate and is heavily reliant on one or more of the key features of Substrate?

Astar has developed a very innovative concept called “Dapps Staking”, which allows an account to stake tokens to a smart contract. This pallet utilizes Substrate’s pallet hooks to set staking rewards for each block. Another feature in Astar’s runtime is the Custom Signature Call. This pallet allows accounts to execute Substrate extrinsic calls using an external ECDSA signature (eg: signing a call with Ledger Ethereum account). Substrate’s extrinsics modularity made it possible to wrap native calls with external signatures for expandability. Finally, a key component of Astar is the Multi Virtual Machine. Both the contract pallet and EVM pallet that are part of the Substrate ecosystem allow the project to provide multiple contract execution environments. This usability was further improved by allowing interoperability between the two different VMs through precompiled contract calls.

**Links and Resources:**

[Website](https://astar.network)

[Github](https://github.com/PlasmNetwork/Astar)

[Twitter](https://twitter.com/AstarNetwork)

[Blog](https://medium.com/astar-network)

[Youtube](https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ)

[Tech Community](https://discord.gg/nywSgQR3NC)