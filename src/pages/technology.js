import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../components/default/Icon';
import Section from '../components/layout/Section';
import Card from '../components/layout/technology/Card';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Substrate Technology" />
      <Section>
        <div className="lg:grid grid-cols-2 gap-8 lg:mt-8">
          <div className="mr-8">
            <h1 className="text-7xl font-extrabold my-10 md:my-20">Substrate Technology</h1>
            <p className="text-2xl font-bold">
              What if developers could build on a blockchain framework specifically optimized for their requirements
              that seamlessly evolves with their needs and without forks?
            </p>
            <p className="text-2xl font-bold">
              Welcome to Substrate, the only flexible, open, interoperable, and future proof blockchain framework.
            </p>
          </div>
          <div>
            <div className="bg-gray-200 h-80 w-160">Placeholder</div>
            <p>
              Substrate was created by OGs of blockchain who set out to overcome the limitations they experienced
              building blockchains. Through the process of building clients in the early days of Bitcoin and Ethereum,
              these developers realized they were recreating much of the same functionality but with different
              limitations such as scale, governance, forks, interoperability, and upgrades.
            </p>
            <p>
              {`Substrate was born from the realization that developers shouldn't have to recreate fundamentals to build
                a blockchain that alleviates their limitations. The information below will help you understand why
                Substrate is the best technology to build on now and into the future.`}
            </p>
            <p>
              Be sure to head over to the playground to try it out for yourself and don’t be shy to ask questions in the
              super friendly community.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 xl:gap-24">
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Cross-Language Support with WebAssembly</h5>
            <p>
              WebAssembly is the next web standard. Write your blockchain logic in any language that can compile to it,
              including C/C++, C#, Typescript, and Rust.
            </p>
          </div>
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Light-Client Friendly</h5>
            <p>Substrate comes with a light client built in from day one. Use your mobile-ready blockchain anywhere.</p>
          </div>
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Forkless Upgrades</h5>
            <p>Upgrading blockchains has never been easier. With Substrate, everybody stays on the same path.</p>
          </div>
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Built-In Coordination</h5>
            <p>Substrate comes with the tools to help networks decide which upgrades to implement.</p>
          </div>
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Deterministic Finality</h5>
            <p>Substrate’s GRANDPA algorithm reaches and finalizes consensus quickly, across networks big and small.</p>
          </div>
          <div>
            <Icon name="placeholder" />
            <h5 className="my-4">Seamless Integration</h5>
            <p>
              Integrate your existing data, business logic, and other complex tasks into your blockchain with low
              overhead using off-chain workers.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2>Substrate is:</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <div className="flex justify-between">
              <div className="w-1/2">
                <h3>Flexible</h3>
                <p>
                  The flexible nature of Substrate alleviates the tension of tradeoffs by enabling developers to create
                  the most optimal blockchain for their specific needs.
                </p>
              </div>
              <div className="bg-gray-200 w-40 h-40 m-8">Placeholder</div>
            </div>
            <p className="font-bold border-b-2 border-black inline">Read More {'->'}</p>
          </Card>
          <Card>
            <div className="flex justify-between">
              <div className="w-1/2">
                <h3>Open</h3>
                <p>
                  The combination of an open source, customizable architecture that enables developers to use the
                  tooling of their choice with a robust, active community makes Substrate the most open way to build.
                </p>
              </div>
              <div className="bg-gray-200 w-40 h-40 m-8">Placeholder</div>
            </div>
            <p className="font-bold border-b-2 border-black inline">Read More {'->'}</p>
          </Card>
          <Card>
            <div className="flex justify-between">
              <div className="w-1/2">
                <h3>Interoperable</h3>
                <p>
                  Interoperability without forgoing compatibility, security, or efficiency; learn how Substrate takes a
                  unique, multifaceted approach to address each of these.
                </p>
              </div>
              <div className="bg-gray-200 w-40 h-40 m-8">Placeholder</div>
            </div>
            <p className="font-bold border-b-2 border-black inline">Read More {'->'}</p>
          </Card>
          <Card>
            <div className="flex justify-between">
              <div className="w-1/2">
                <h3>Future Proof</h3>
                <p>
                  Substrate enables developers to move faster and evolve their architecture as their needs evolve.
                  Founders and Developers can be confident that their blockchain is ready for whatever the future
                  brings.
                </p>
              </div>
              <div className="bg-gray-200 w-40 h-40 m-8">Placeholder</div>
            </div>
            <p className="font-bold border-b-2 border-black inline">Read More {'->'}</p>
          </Card>
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
  }
`;
