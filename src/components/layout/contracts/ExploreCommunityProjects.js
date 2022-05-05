import React from 'react';

import { Link } from '../../default/Link';

export default function ExploreCommunityProjects() {
  const content = [
    {
      name: 'Networks',
      items: [
        {
          name: 'Canvas',
          link: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-canvas-rpc.polkadot.io#/explorer',
          description: 'A smart contract testnet on Roccoco.',
        },
        {
          name: 'Moonbeam',
          link: '/ecosystem/projects/case-studies/moonbeam/',
          description: 'An Ethereum-compatible smart contract parachain.',
        },
        {
          name: 'Astar',
          link: '/ecosystem/projects/case-studies/astar/',
          description: 'Jump right into the technical components required to build a parachain.',
        },
      ],
    },
    {
      name: 'Tooling',
      items: [
        {
          name: 'cargo-contract',
          link: 'https://crates.io/crates/cargo-contract/0.8.0',
          description: 'CLI tool to setup and deploy ink! smart contracts.',
        },
        {
          name: 'Contracts UI',
          link: 'https://contracts.substrate.io/',
          description: 'Deploy and interact with smart contracts on Substrate-based chains.',
        },
        {
          name: 'ink! Playground',
          link: 'https://ink-playground.xyz/',
          description: 'Prototype and share ink! smart contracts in-browser.',
        },
      ],
    },
    {
      name: 'Further Resources',
      items: [
        {
          name: 'ink! Documentation',
          link: 'https://paritytech.github.io/ink-docs/',
          description: 'Dive deep into the ink! smart contract language.',
        },
        {
          name: 'Solang Solidity Compiler',
          link: 'https://solang.readthedocs.io/',
          description: 'Write Solidity contracts.',
        },
        {
          name: 'Patract',
          link: 'https://patract.io/',
          description: 'Tools and products for Wasm smart contracts.',
        },
      ],
    },
  ];
  return (
    <div className="md:flex md:justify-start xl:justify-between">
      {content.map((section, index) => (
        <div key={index} className="md:w-96 xl:mr-6">
          <div className="mb-14">
            <div className="text-2xl font-extrabold mb-9">{section.name}</div>
            <ul className="px-4 leading-7 ml-0">
              {section.items.map((item, index) => (
                <Link key={index} to={item.link}>
                  <li className="ml-0 pl-0">
                    <div className="">
                      <b>{item.name}</b>
                    </div>
                    <p className="leading-7">{item.description}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
