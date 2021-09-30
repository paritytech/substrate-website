import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { browserName } from 'react-device-detect';
import Lottie from 'react-lottie';

import Gif from '../../components/default/Gif';
import Article from '../../components/layout/Article';
import ExploreLinkSection from '../../components/layout/technology/ExploreLinkSection';
import BannerLink from '../../components/layout/vision/BannerLink';
import ArticleNav from '../../components/site/ArticleNav';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import BlockQuote from '../../components/ui/Blockquote';
import * as animationData from '../../images/animation/substrate-polkadot.json';

const isSafari = browserName === 'Safari';

const Vision = () => {
  return (
    <Layout mode="full">
      <SEO title="Substrate And Polkadot" />
      <Article>
        <header className="container -mt-10 mb-8">
          <figure className="w-full lg:w-3/4 lg:mx-auto aspect-w-5 lg:aspect-w-6 aspect-h-2">
            {!isSafari && (
              <Lottie
                options={{
                  animationData,
                  loop: false,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                isClickToPauseDisabled={true}
              />
            )}
          </figure>
        </header>
        <div className="container mb-20 lg:px-10">
          <div className="flex flex-row">
            <div className="xl:w-2/3 md:px-8 xl:pl-8">
              <section>
                <p className="text-3xl mb-12">
                  All Substrate-based chains are <span className="font-semibold">seamlessly compatible</span> with
                  Polkadot, granting access to a rich, interoperable ecosystem of parachains, applications, and
                  resources.
                </p>
                <h4 id="key-points" className="font-bold mb-8 text-2xl">
                  Key Points:
                </h4>
                <ul className="mb-12">
                  <li className="flex">
                    <div className="bg-substrateGreen rounded-full h-2 w-2 flex-none mt-2 mr-3"></div>
                    <p>
                      Polkadot is a layer-0 protocol and multichain network laying the foundation for the future of
                      Web3. Substrate is the primary blockchain SDK used by developers to create the parachains that
                      make up the Polkadot network.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-substrateGreen rounded-full h-2 w-2 flex-none mt-2 mr-3"></div>
                    <p>
                      Substrate allows you to create specialized blockchains for any use case, and was used by Parity
                      Technologies to create Polkadot itself, which attests to its high level of performance,
                      flexibility, and robustness.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-substrateGreen rounded-full h-2 w-2 flex-none mt-2 mr-3"></div>
                    <p>
                      While Substrate can be used to build any type of blockchain, not just Polkadot parachains,
                      connecting to Polkadot offers a multitude of benefits, including built-in security, cross-chain
                      interoperability, and access to Polkadot’s growing ecosystem of platforms, applications, and
                      end-users.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-substrateGreen rounded-full h-2 w-2 flex-none mt-2 mr-3"></div>
                    <p>
                      Building a custom blockchain with Substrate offers greater freedom, flexibility, and optimization
                      than building on top of a general-purpose smart-contract blockchain.
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h1 id="substrate-polkadot-web3-vision" className="mb-8 font-bold text-4xl font-body">
                  Substrate, Polkadot, and the Web3 Vision
                </h1>
                <div className="flex items-center mb-8">
                  <StaticImage
                    src="../../images/photos/vision/gavin-wood.png"
                    alt="Gavin Wood"
                    className="h-10 w-10 mr-3 flex-none"
                  />
                  <p className="mb-0">
                    By <span className="font-bold">Gavin Wood,</span> co-founder and former CTO of Ethereum, founder of
                    Polkadot and Parity Technologies
                  </p>
                </div>
                <p>
                  Substrate strives to be the best blockchain framework in which to build your custom blockchain.
                  Substrate is not a blockchain in itself, but akin to a blockchain SDK framework. Substrate empowers
                  you to build beyond the capabilities of others, giving you the freedom to define your chain however
                  you want.
                </p>

                <h3 id="substrate-and-polkadot" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  Substrate & Polkadot
                </h3>
                <p className="text-xl font-semibold mb-6 ">The relationship between the framework and the network</p>
                <div className="w-52 h-52 mb-6">
                  <Gif name="substrate-polkadot" />
                </div>
                <p>
                  Substrate-based chains are easy to integrate into Polkadot or Kusama to become a parachain or
                  parathread. Essentially, Substrate is the SDK with which you can build parachains and Polkadot is the
                  means of securing the chains and allowing them to communicate with each other.
                </p>
                <p>
                  However, although they&apos;re synergistic, Polkadot and Substrate are not dependent on each other.
                  Polkadot parachains can be built and maintained without ever touching Substrate (though alternative
                  software options for doing so are currently limited) and chains built with Substrate do not need to be
                  connected to Polkadot or Kusama. Substrate-based chains can exist as ‘solo-chains’ on an independent
                  basis.
                </p>

                <h3 id="greater-possibilities" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  Greater Possibilities
                </h3>
                <p className="text-xl font-semibold mb-4 ">
                  The limitations of general-purpose smart-contract blockchains
                </p>
                <p>
                  Developing a new project specific to your use-case by reusing a general-purpose smart-contract
                  blockchain forces you to inherit all of that blockchain’s design decisions, which are often made with
                  different priorities in your mind than your own.
                </p>
                <p>
                  For example, reusing the Ethereum codebase, implies several limitations: having to place all of your
                  business logic in terms of the EVM, being forced to use one of the two EVM languages, having all
                  business logic dynamically metered, and being limited to Ethereum&apos;s transaction pool and lack of
                  core upgradability.
                </p>
                <BlockQuote>
                  <p className="mb-0">
                    By forcing these design decisions on yourself, you already place hard constraints on what you can
                    practically engineer and how much you can really innovate. You also dramatically limit the
                    performance of your application logic.
                  </p>
                </BlockQuote>

                <BannerLink link="/technology" text="Explore how Substrate’s technology removes limitations" />

                <h3 id="the-road-to-substrate" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  The Road to Substrate
                </h3>
                <p className="text-xl font-semibold mb-4 ">
                  From Polkadot’s early days to the most advanced blockchain SDK
                </p>
                <p>
                  When we started building Polkadot at Parity, we considered this and knew that it would not be
                  realistic to build such an innovative new blockchain on top of the existing Ethereum design, even if
                  we were the ones who had designed and written it. Ethereum was simply not the right tool for the job.
                  So we started building Polkadot as an entirely fresh blockchain project without those design
                  constraints.
                </p>
                <StaticImage
                  src="../../images/photos/vision/reflection-man.jpg"
                  alt="Man in reflection"
                  className="w-full h-auto rounded-md overflow-hidden aspect-w-5 aspect-h-1 mb-8"
                />
                <p>
                  Before long, we knew that many of the components we were building for the Polkadot Relay Chain would
                  be useful when building Polkadot’s parachains. Substrate took shape soon after when we began
                  collecting those common components together and forming a blockchain framework around them. By
                  leveraging the cutting edge software built for the Polkadot Relay Chain, we could provide the
                  parachain community with the best technology for their own chains.
                </p>

                <BannerLink
                  link="/technology/future-proof"
                  text="No more forks in the road, see why Substrate is the first future proof blockchain framework"
                />

                <h3 id="the-web3-vision" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  The Web3 vision
                </h3>
                <p className="text-xl font-semibold mb-4 ">How Substrate relates to the broader goals of Web3</p>
                <p>
                  Substrate fulfils two main goals within the overall Web3 vision: it is the foundational technology
                  that allowed us at Parity to build the Polkadot Relay Chain; and, together with the Cumulus project,
                  it is the de facto SDK for Polkadot, allowing parachain teams to build and deploy their chains on
                  Polkadot.
                </p>
                <BlockQuote>
                  Having a flexibile blockchain development platform like Substrate is especially important for
                  Polkadot, &quot;the blockchain of blockchains&quot; and a foundational component of the Web3
                  technology stack. Without Substrate, there would be no easy way to build the blockchains that
                  constitute the Polkadot ecosystem, and many builders would be forced into using a constrictive and
                  uniform smart contract environment, limiting innovation and leaving Polkadot’s remarkable
                  heterogeneous sharding system unutilized.
                </BlockQuote>

                <BannerLink
                  link="/technology/interoperable"
                  text="Understand how Substrate’s interoperability enables compatibility and efficiency without sacrificing security"
                />

                <h3 id="substrate-specifics" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  Substrate Specifics
                </h3>
                <p className="text-xl font-semibold mb-4 ">Modularity, performance, and flexibility</p>
                <p>
                  All blockchains need some sort of business logic that defines (amongst other things) what transactions
                  do. Substrate chains are no different, and business logic is provided through a modular system known
                  as FRAME. Using FRAME, you can very easily create, compose and publish components to form your own
                  specialist business logic.
                </p>
                <p>
                  By providing you with a true open canvas, together with practical components that can be composed,
                  reused and published, Substrate opens up whole new worlds of design space and potential for
                  innovation. Indeed, the fact that Substrate is the underlying blockchain framework we used to build
                  the Polkadot Relay Chain attests to its performance and flexibility.
                </p>

                <BannerLink
                  link="/technology/flexible"
                  text="Discover how Substrate’s flexibility enables modularity and performance"
                />

                <h3 id="decentralization-and-usability" className="text-polkaPink font-bold mb-4 mt-12 text-2xl">
                  Decentralization & Usability
                </h3>
                <p className="text-xl font-semibold mb-4 ">
                  Enabling true decentralisation and usability as fundamental to the success of Web3
                </p>
                <p>
                  One chief goal of Substrate, as a core component of the Web3 vision, is to ensure true
                  decentralization, meaning users do not need to go through intermediaries in order to use
                  &quot;decentralized&quot; applications. Bitcoin started down this path with its &quot;SPV&quot; client
                  technology, but for more generalistic chains and frameworks, the task is rather more complex.
                </p>
                <p>
                  For this reason, Substrate is dedicated to the use of open, well-adopted and web-literate
                  technologies, such as Webassembly and libp2p, as well as light-client technology. Only with an
                  enduring focus on these can we deliver browser and mobile applications with no greater a barrier to
                  adoption than traditionally centralized applications, a critical requirement for delivering the
                  promised independence and self-sovereignty of the Web3 vision.
                </p>
              </section>
            </div>
            <div className="xl:w-1/3 hidden xl:block xl:pl-16">
              <div className="sticky top-16 pt-16 -mt-16 overflow-y-auto">
                <ArticleNav />
              </div>
            </div>
          </div>
        </div>
      </Article>
      <ExploreLinkSection links={['technology', 'developerHub', 'ecosystem']} />
    </Layout>
  );
};

export default Vision;

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
