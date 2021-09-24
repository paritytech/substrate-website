import cx from 'classnames';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Lottie from 'react-lottie';

import Icon from '../components/default/Icon';
import { Link } from '../components/default/Link';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import LineArrowButton from '../components/ui/LineArrowButton';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import * as heroAnimationData from '../images/animation/home/hero.json';
import * as polkadotAnimationData from '../images/animation/home/substrate-polkadot.json';
import TeamLogos from '../images/svg/home/logos.svg';
import FlexibleIcon from '../images/svg/technology/icon-flexible.svg';
import FutureProofIcon from '../images/svg/technology/icon-future-proof.svg';
import InteroperableIcon from '../images/svg/technology/icon-interoperable.svg';
import OpenIcon from '../images/svg/technology/icon-open.svg';

export default function BuildersProgram() {
  const heroAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const polkadotAnimationOptions = {
    loop: false,
    autoplay: false,
    animationData: polkadotAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [activeTab, setActiveTab] = useState(1);
  const [animationIsStopped, playAnimation] = useState(true);

  return (
    <Layout mode="full">
      <SEO title="Home" />
      <div className="-mt-12 bg-substrateGreen">
        <div className="aspect-w-12 aspect-h-12 md:aspect-h-8 lg:aspect-h-5">
          <div className="home-hero">
            <Lottie isClickToPauseDisabled options={heroAnimationOptions} />
            <h1 className="text-white text-center home-hero__headline absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
              The Blockchain Framework
              <br />
              for a Multi-chain Future
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish">
        <div className="container lg:px-10 pb-10">
          <div className="mx-auto max-w-xl pt-14 pb-12">
            <p className="text-center text-3xl">
              Substrate enables developers to quickly and easily build future-proof blockchains optimized for any use
              case.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
            <Link
              to="/technology"
              className="relative pb-14 pt-10 px-4 text-center hover:bg-white dark:hover:bg-darkBackground hover:shadow-xl hover:scale-105 transition-all rounded-md"
              data-aos="fade-up"
            >
              <Icon name="technology" className="w-20 h-20 mx-auto mb-12" />
              <h3 className="text-2.5xl mb-6">Technology</h3>
              <p className="text-xl leading-relaxed">
                Learn why Substrate is the most powerful framework to quickly build customized future-proof blockchains.
              </p>
              <LineArrowButton className="inline-block" primary large link="/technology">
                Explore the tech
              </LineArrowButton>
            </Link>
            <Link
              to="/"
              className="relative pb-14 pt-10 px-4 text-center hover:bg-white dark:hover:bg-darkBackground hover:shadow-xl hover:scale-105 transition-all rounded-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Icon name="developers" className="w-20 h-20 mx-auto mb-12" />
              <h3 className="text-2.5xl mb-6">Developers</h3>
              <p className="text-xl leading-relaxed">
                Dive into the docs, tutorials, and resources to immediately get started building with Substrate.
              </p>
              <LineArrowButton className="inline-block" primary large link="/">
                Start coding
              </LineArrowButton>
            </Link>
            <Link
              to="/ecosystem"
              className="relative pb-14 pt-10 px-4 text-center hover:bg-white dark:hover:bg-darkBackground hover:shadow-xl hover:scale-105 transition-all rounded-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Icon name="teams" className="w-20 h-20 mx-auto mb-12" />
              <h3 className="text-2.5xl mb-6">Projects</h3>
              <p className="text-xl leading-relaxed">
                See how Substrate has been implemented in innovative use cases in many industries around the world.
              </p>
              <LineArrowButton className="inline-block" primary large link="/ecosystem">
                Discover projects
              </LineArrowButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="container lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
          <div>
            <a
              className={cx('home-tabs__link', {
                'home-tabs__link--active': activeTab === 1,
              })}
              onClick={() => setActiveTab(1)}
            >
              <Icon name="arrow-more" className="absolute -left-6 top-3" />
              Why Substrate Exists
            </a>
            <br />
            <a
              className={cx('home-tabs__link', {
                'home-tabs__link--active': activeTab === 2,
              })}
              onClick={() => setActiveTab(2)}
            >
              <Icon name="arrow-more" className="absolute -left-6 top-3" />
              Why Use Substrate
            </a>
            <br />
            <a
              className={cx('home-tabs__link', {
                'home-tabs__link--active': activeTab === 3,
              })}
              onClick={() => setActiveTab(3)}
            >
              <Icon name="arrow-more" className="absolute -left-6 top-3" />
              Why Substrate Is Unique
            </a>
          </div>
          {activeTab === 1 && (
            <div className="lg:col-span-2">
              <h3 className="h2 font-extrabold">Taking the learnings from Ethereum to Substrate</h3>
              <p className="text-xl leading-relaxed">
                As Ethereum’s co-founder and first CTO, Gavin Wood developed the Ethereum network and created the
                smart-contract language Solidity. While groundbreaking at the time, it soon became apparent that
                Ethereum&apos;s &quot;all-purpose&quot; nature imposed hard constraints on developers – from high gas
                fees core upgradeability. Blockchain frameworks that try to do everything on a single chain are
                fundamentally constrained by generalist design choices and force developers to hack clunky work-arounds
                rather than build specialized solutions.
              </p>
              <p className="text-xl leading-relaxed">
                In order to push the boundaries of blockchain technology, Gavin left the Ethereum Foundation and started
                Parity, where the team implemented the fastest Ethereum client at the time, and also built a Bitcoin,
                ZCash, and now, Polkadot client. It’s only from all this deep industry experience that blockchains could
                be reimagined from the ground up. This led to the creation of Substrate, an open source and future-proof
                framework that powers a multi-chain, interoperable, and decentralized internet.
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="lg:col-span-2">
              <h3 className="h2 font-extrabold">Taking the learnings from Ethereum to Substrate</h3>
              <p className="text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p className="text-xl leading-relaxed">
                In order to push the boundaries of blockchain technology, Gavin left the Ethereum Foundation and started
                Parity, where the team implemented the fastest Ethereum client at the time, and also built a Bitcoin,
                ZCash, and now, Polkadot client. It’s only from all this deep industry experience that blockchains could
                be reimagined from the ground up. This led to the creation of Substrate, an open source and future-proof
                framework that powers a multi-chain, interoperable, and decentralized internet.
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div className="lg:col-span-2">
              <h3 className="h2 font-extrabold">Taking the learnings from Ethereum to Substrate</h3>
              <p className="text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p className="text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish">
        <div className="container max-w-6xl lg:px-10 pt-16 pb-24">
          <InView as="div" triggerOnce onChange={entry => playAnimation(!entry)}>
            <div className="home-hero aspect-w-5 aspect-h-2 mb-8">
              <Lottie isStopped={animationIsStopped} isClickToPauseDisabled options={polkadotAnimationOptions} />
            </div>
          </InView>
          <p className="text-center text-3xl mb-12" onClick={() => playAnimation(false)}>
            Substrate-based chains are designed to seamlessly connect to{' '}
            <span className="font-bold">
              Polkadot, granting access to its system of parallel transactions, cross-chain transfers, and an expanding
              support network.
            </span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-6 rounded-full">
                <Icon name="interoperability" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-2xl mb-6">True Interoperablility</h3>
              <p className="text-xl leading-relaxed">
                By utilizing the Polkadot Relay Chain, all Substrate-based chains can interoperate with others in the
                ecosystem without the need for bridges.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-6 rounded-full">
                <Icon name="security" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-2xl mb-6">Shared Security</h3>
              <p className="text-xl leading-relaxed">
                Polkadot’s security is shared without compromise to all chains connected to it, removing the need for
                and expense of developing your own security network.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-6 rounded-full">
                <Icon name="governance" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-2xl mb-6">Sovereign Governance</h3>
              <p className="text-xl leading-relaxed">
                While benefiting from the network effects on Polkadot, each chain also maintains independent governance
                for maximum freedom.
              </p>
            </div>
          </div>
          <div className="text-center mt-10 mb-8">
            <PrimaryButton link="/vision/substrate-and-polkadot">Substrate Vision</PrimaryButton>
          </div>
          <div className="text-center">
            <Link
              to="https://polkadot.network/"
              className="text-xl border-b-2 pb-1 font-bold hover:border-substrateBlackish dark:hover:border-navItemColor transition-all"
            >
              Polkadot Network
              <Icon name="external-link" className="inline-block ml-2 mb-1 fill-current dark:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container lg:px-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold mb-10">The building blocks for a decentralized and fairer internet.</h2>
          <p className="text-2xl leading-relaxed mb-10">
            Substrate makes building a blockchain far easier, faster, cheaper, and safer than ever before. Blockchains
            built with Substrate are compatible with the Polkadot ecosystem, or can be run independently. Discover more.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 font-bold text-xl max-w-6xl mx-auto">
          <div className="technology-teaser__icon text-center" data-aos="fade-up">
            <FlexibleIcon />
            Flexible
          </div>
          <div className="technology-teaser__icon text-center" data-aos="fade-up" data-aos-delay="200">
            <OpenIcon />
            Open
          </div>
          <div className="technology-teaser__icon text-center" data-aos="fade-up" data-aos-delay="400">
            <InteroperableIcon />
            Interoperable
          </div>
          <div className="technology-teaser__icon text-center" data-aos="fade-up" data-aos-delay="600">
            <FutureProofIcon />
            Future-proof
          </div>
        </div>
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <SecondaryButton link="/technology">Technology Overview</SecondaryButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-14 mt-56 mb-52">
          <div className="lg:col-span-6 lg:col-start-6">
            <TeamLogos className="max-w-full" />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h2 className="mb-8 font-extrabold">More than 150 projects are building on Substrate</h2>
            <p className="text-xl leading-relaxed">
              From DeFi to NFTs, gaming to decentralized indentity, and more, Substrate’s technology is fueling the next
              wave of innovation in the blockchain industry. Learn more about how the ecosystem of builders have
              addressed prominent challenges such as transaction costs, network security, and more.
            </p>
            <PrimaryButton link="/ecosystem/teams">See All Teams</PrimaryButton>
            <br />
            <Link
              to=""
              className="inline-block mt-6 text-xl border-b-2 font-bold hover:border-substrateBlackish dark:hover:border-navItemColor transition-all"
            >
              Read Case Studies
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-52 mb-52">
          <h2 className="font-extrabold">The team behind Substrate</h2>
          <div className="aspect-w-14 aspect-h-5 my-12">
            <div>
              <StaticImage
                src="../images/photos/home/team.jpg"
                className="w-full h-full m-0 relative shadow-xl rounded-md"
              />
            </div>
          </div>
          <p className="text-xl leading-relaxed my-12">
            Parity Technologies is the software development company behind some of the world’s most trusted Web3
            technology. It was founded in 2015 and succeeded in building some of the fastest and most secure open-source
            software for Ethereum, Bitcoin, Zcash, and the decentralized web. Several years later it has evolved to
            address the previous limitations of blockchain by creating Substrate and developing the ground-breaking
            Kusama and Polkadot networks.{' '}
          </p>
          <Link
            to="https://parity.io/"
            className="text-xl border-b-2 pb-1 font-bold hover:border-substrateBlackish dark:hover:border-navItemColor transition-all"
          >
            Learn more about Parity
            <Icon name="external-link" className="inline-block ml-2 mb-1 fill-current dark:text-white" />
          </Link>
        </div>
      </div>

      <div className="shadow-xl mb-40">
        <div className="container lg:px-10 py-6">
          <span className="inline-block text-2.5xl font-bold leading-relaxed mr-20 my-4">Connect With Us</span>
          <Link
            to="https://matrix.to/#/#substrate-technical:matrix.org"
            className="inline-block text-2xl leading-relaxed mr-20 my-4"
          >
            <Icon name="element2" className="inline-block mr-5 w-9 h-9" />
            Substrate Tech Support
          </Link>
          <Link to="/ecosystem/connect/contact" className="inline-block text-2xl leading-relaxed my-4">
            <Icon
              name="mail"
              className="fill-current text-substrateBlackish dark:text-white inline-block mr-5 w-9 h-9"
            />
            General inquiries
          </Link>
        </div>
      </div>

      <div className="container lg:px-10 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="aspect-w-3 aspect-h-2">
            <div>
              <StaticImage
                src="../images/photos/home/newsletter.jpg"
                className="w-full h-full m-0 relative shadow-xl rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <h2 className="mb-6 font-extrabold">
              Substrate
              <br />
              Developer Newsletter
            </h2>
            <p className="text-xl leading-relaxed mb-6 lg:w-1/2">
              Keep up to date with tech updates and helpful resources.
            </p>
            <SecondaryButton link="/ecosystem/connect/newsletter">Sign up</SecondaryButton>
          </div>
        </div>
      </div>
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
