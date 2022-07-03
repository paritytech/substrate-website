---
title: Acala Network
description: Acala is a decentralized stablecoin platform that powers cross-blockchain open finance applications.
category: ["DeFi", Infrastructure]
link: https://acala.network
featured_image: /media/images/projects/acala-network.png
---

## Challenge

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
