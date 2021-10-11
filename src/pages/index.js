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
import PrimaryButtonLink from '../components/ui/PrimaryButtonLink';
import SecondaryButton from '../components/ui/SecondaryButton';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import * as heroAnimationData from '../images/animation/home/hero.json';
import * as polkadotAnimationData from '../images/animation/home/substrate-polkadot-simple.json';
import TeamLogos from '../images/svg/home/logos.svg';
import FlexibleIcon from '../images/svg/technology/icon-flexible.svg';
import FutureProofIcon from '../images/svg/technology/icon-future-proof.svg';
import InteroperableIcon from '../images/svg/technology/icon-interoperable.svg';
import OpenIcon from '../images/svg/technology/icon-open.svg';

export default function Home() {
  const { siteMetadata } = useSiteMetadata();

  const heroAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimationData,
    rendererSettings: {
      progressiveLoad: true,
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const polkadotAnimationOptions = {
    loop: false,
    autoplay: false,
    animationData: polkadotAnimationData,
    rendererSettings: {
      progressiveLoad: true,
      preserveAspectRatio: 'xMidYMid meet',
      viewBoxSize: '0 640 2160 880',
    },
  };

  const cards = [
    {
      title: 'Technology',
      icon: 'technology',
      description:
        'Learn why Substrate is the most powerful framework to quickly build customized future-proof blockchains.',
      link: '/technology',
      linkText: 'Explore the tech',
      delay: 0,
    },
    {
      title: 'Developers',
      icon: 'developers',
      description: 'Dive into the docs, tutorials, and resources to immediately get started building with Substrate.',
      link: siteMetadata.docsUrl,
      linkText: 'Start coding',
      delay: 200,
    },
    {
      title: 'Projects',
      icon: 'projects',
      description: 'Explore innovative use cases of Substrate implemented across many industries around the world.',
      link: '/ecosystem/projects',
      linkText: 'Discover projects',
      delay: 400,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [expandedTab, toggleExpandedTab] = useState(false);
  const [animationIsStopped, playAnimation] = useState(true);

  return (
    <Layout mode="full" header="home">
      <SEO title="Home" />
      <div className="-mt-36 bg-substrateGreen">
        <div className="aspect-w-12 aspect-h-12 md:aspect-h-10 lg:aspect-h-8 xl:aspect-h-6 2xl:aspect-h-5">
          <div className="home-hero">
            <Lottie options={heroAnimationOptions} isClickToPauseDisabled />
            <h1 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 font-title mb-0 mt-0 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-6xl lg:leading-tight text-white text-center home-hero__headline">
              The Blockchain Framework
              <br />
              for a Multichain Future
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish">
        <div className="container lg:px-10 lg:pb-10">
          <div className="mx-auto max-w-xl pt-14 pb-4">
            <p className="text-center text-xl md:text-2xl lg:text-3xl leading-8 md:leading-relaxed">
              Substrate enables developers to quickly and easily build future proof blockchains optimized for any use
              case.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-14 pb-4">
            {cards.map(({ title, icon, description, link, linkText, delay }, idx) => (
              <div key={idx} className="flex" data-aos="fade-up" data-aos-delay={delay}>
                <Link
                  to={link}
                  className="relative pb-14 pt-10 px-4 text-center hover:bg-white dark:hover:bg-darkBackground hover:shadow-xl hover:scale-105 transition-all rounded-md"
                >
                  <Icon name={icon} className="w-16 h-16 mx-auto mb-4 md:mb-8" />
                  <h3 className="md:text-2xl font-bold text-xl mb-2 md:mb-6">{title}</h3>
                  <p className="md:text-lg">{description}</p>
                  <div className="absolute bottom-10 left-0 w-full">
                    <LineArrowButton className="inline-block" centered large primary>
                      {linkText}
                    </LineArrowButton>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
          <div className="pl-6 lg:pl-0">
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
              <div
                className={cx('home-expand', {
                  'home-expand--active': expandedTab,
                })}
              >
                <p className="md:text-lg leading-relaxed">
                  As Ethereum’s co-founder and first CTO, Gavin Wood developed the Ethereum network and created the
                  smart-contract language, Solidity. While groundbreaking at the time, it soon became apparent that
                  Ethereum’s “all-purpose” nature imposed hard constraints on developers—from high gas fees to a lack of
                  core upgradeability. Blockchain frameworks that try to do everything on a single chain are
                  fundamentally constrained by generalist design choices and force developers to hack clunky workarounds
                  rather than build specialized solutions.
                </p>
                <p className="md:text-lg leading-relaxed">
                  In order to push the boundaries of blockchain technology, Gavin left the Ethereum Foundation and
                  started Parity, where the team implemented the fastest Ethereum client at the time, and also built a
                  Bitcoin, ZCash, and now, Polkadot client. It’s only from all this deep industry experience that
                  blockchains could be reimagined from the ground up. This led to the creation of Substrate, an open
                  source and future proof framework that powers a multichain, interoperable, and decentralized internet.
                </p>
              </div>
              <a className="home-expand__button" onClick={() => toggleExpandedTab(!expandedTab)}>
                {expandedTab ? 'Collapse' : 'Expand'}
                <Icon
                  name="arrow-more"
                  className="absolute -r-4 top-1.5 md:top-2 inline-block ml-2 rotate-90 transition-all"
                />
              </a>
            </div>
          )}
          {activeTab === 2 && (
            <div className="lg:col-span-2">
              <h3 className="h2 font-extrabold">Don&apos;t start from scratch. Start with Substrate</h3>
              <div
                className={cx('home-expand', {
                  'home-expand--active': expandedTab,
                })}
              >
                <p className="md:text-lg leading-relaxed">
                  Substrate takes the hard work out of blockchain development without imposing limits often found in
                  other frameworks. From its inception, it was designed to be a flexible and modular framework that is
                  highly customizable. It allows development teams to quickly build blockchains based on
                  academically-researched and field-tested code that have proven their worth on many live networks worth
                  billions of dollars.
                </p>
                <p className="md:text-lg leading-relaxed">
                  With Substrate, developers don’t need to start from zero. They gain a tremendous head start by being
                  able to leverage open source software built by Substrate&apos;s large ecosystem of top blockchain
                  development projects around the world—for free. Just as consumer applications don&apos;t need to be
                  built from scratch today, neither do blockchains anymore—thanks to Substrate.
                </p>
              </div>
              <a className="home-expand__button" onClick={() => toggleExpandedTab(!expandedTab)}>
                {expandedTab ? 'Collapse' : 'Expand'}
                <Icon
                  name="arrow-more"
                  className="absolute -r-4 top-1.5 md:top-2 inline-block ml-2 rotate-90 transition-all"
                />
              </a>
            </div>
          )}
          {activeTab === 3 && (
            <div className="lg:col-span-2">
              <h3 className="h2 font-extrabold">Blockchains without hidden compromises</h3>
              <div
                className={cx('home-expand', {
                  'home-expand--active': expandedTab,
                })}
              >
                <p className="md:text-lg leading-relaxed">
                  Pushing the envelope on blockchain scalability requires the balancing act of many factors, such as
                  speed, security and decentralization. It’s often when trying to optimize one of these pillars that
                  compromises can be found in others. Some blockchain platforms claim astonishing stats because they’re
                  not actually decentralized. Others are decentralized but suffer from performance issues that
                  don&apos;t allow for practical real world impact.
                </p>
                <p className="md:text-lg leading-relaxed">
                  The reality is that every choice has a trade-off; thus it’s about being able to decide on a design
                  that fits the requirements. It’s with this understanding that Substrate was developed to be as open,
                  flexible, and upgradeable as possible so that builders are able to optimize for their specific needs.
                  Its the ability to specialize while still balancing all crucial factors that makes Substrate a pioneer
                  in truly decentralized real-world solutions.
                </p>
              </div>
              <a className="home-expand__button" onClick={() => toggleExpandedTab(!expandedTab)}>
                {expandedTab ? 'Collapse' : 'Expand'}
                <Icon
                  name="arrow-more"
                  className="absolute -r-4 top-1.5 md:top-2 inline-block ml-2 rotate-90 transition-all"
                />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish">
        <div className="container max-w-6xl lg:px-10 pt-16 pb-24">
          <InView as="div" triggerOnce onChange={entry => playAnimation(!entry)} threshold={0.75}>
            <div className="aspect-w-10 aspect-h-6 lg:aspect-h-3 mb-8">
              <Lottie
                isStopped={animationIsStopped}
                isClickToPauseDisabled
                options={polkadotAnimationOptions}
                className="fill-current text-white"
              />
            </div>
          </InView>
          <p
            className="text-center text-xl md:text-2xl lg:text-3xl mb-12 leading-normal"
            onClick={() => playAnimation(false)}
          >
            Substrate-based chains are designed to seamlessly connect to{' '}
            <span className="font-bold">
              Polkadot, granting access to its system of parallel transactions, cross-chain transfers, and an expanding
              support network.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="interoperability" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">True Interoperablility</h3>
              <p className="leading-relaxed">
                By utilizing the Polkadot Relay Chain, all Substrate-based chains can interoperate with others in the
                ecosystem without the need for bridges.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="security" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">Shared Security</h3>
              <p className="leading-relaxed">
                Polkadot’s security is shared without compromise to all chains connected to it, removing the need for
                and expense of developing your own security network.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
                <Icon name="governance" className="fill-current text-white dark:text-substrateBlackish" />
              </div>
              <h3 className="text-xl mb-4 md:mb-6 mx-auto">Sovereign Governance</h3>
              <p className="leading-relaxed">
                While benefiting from the network effects on Polkadot, each chain also maintains independent governance
                for maximum freedom.
              </p>
            </div>
          </div>
          <div className="text-center mt-10 mb-8">
            <PrimaryButtonLink link="/vision/substrate-and-polkadot">Substrate Vision</PrimaryButtonLink>
          </div>
          <div className="text-center">
            <LineArrowButton className="inline-block" centered icon="external-link" link="https://polkadot.network/">
              Polkadot.network
            </LineArrowButton>
          </div>
        </div>
      </div>

      <div className="container lg:px-10 pt-24 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold max-w-3xl mx-auto mb-6 md:mb-10">
            The building blocks for a decentralized and fairer internet.
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Substrate makes building a blockchain far easier, faster, cheaper, and safer than ever before. As an
            open-source framework, developers gain free access to a wide codebase developed and used by industry-leading
            teams building some of the biggest networks today. Learn more.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 font-bold text-lg max-w-6xl mx-auto">
          <div className="p-8 hover:shadow-xl dark:hover:bg-substrateBlackish hover:scale-105 transition-all rounded-md">
            <div className="flex justify-center" data-aos="fade-up">
              <Link to="/technology/flexible" className="technology-teaser__icon text-center">
                <FlexibleIcon />
                Flexible
              </Link>
            </div>
          </div>
          <div className="p-8 hover:shadow-xl dark:hover:bg-substrateBlackish  hover:scale-105 transition-all rounded-md">
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/technology/open" className="technology-teaser__icon text-center">
                <OpenIcon />
                Open
              </Link>
            </div>
          </div>
          <div className="p-8 hover:shadow-xl dark:hover:bg-substrateBlackish  hover:scale-105 transition-all rounded-md">
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/technology/interoperable" className="technology-teaser__icon text-center">
                <InteroperableIcon />
                Interoperable
              </Link>
            </div>
          </div>
          <div className="p-8 hover:shadow-xl dark:hover:bg-substrateBlackish  hover:scale-105 transition-all rounded-md">
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="600">
              <Link to="/technology/future-proof" className="technology-teaser__icon text-center">
                <FutureProofIcon />
                Future-Proof
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="400">
          <SecondaryButton link="/technology">
            <p className="p-1 mb-0">Technology Overview</p>
          </SecondaryButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-11 sm:gap-8 md:gap-10 lg:gap-14 mt-24 md:mt-40 mb-40">
          <div className="lg:col-span-6 lg:col-start-6 md:mb-0">
            <Link to="/ecosystem/projects">
              <TeamLogos className="max-w-full mx-auto" />
            </Link>
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h2 className="mb-8 font-extrabold">More than 150 projects are building on Substrate</h2>
            <p className=" leading-relaxed">
              From DeFi to NFTs, gaming to decentralized indentity, and more, Substrate’s technology is fueling the next
              wave of innovation in the blockchain industry. Learn more about how the ecosystem of builders have
              addressed prominent challenges such as transaction costs, network security, and more.
            </p>
            <PrimaryButtonLink link="/ecosystem/projects">See all projects</PrimaryButtonLink>
            <br />
            <LineArrowButton className="inline-block mt-6" link="/ecosystem/projects/case-studies/acala">
              Read the case studies
            </LineArrowButton>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-40 mb-40">
          <h2 className="font-extrabold">The team behind Substrate</h2>
          <div className="aspect-w-14 aspect-h-5 my-12">
            <div>
              <StaticImage
                src="../images/photos/home/team.jpg"
                alt="People in an office"
                className="w-full h-full m-0 relative shadow-xl rounded-md"
              />
            </div>
          </div>
          <p className="text-lg leading-relaxed my-12">
            Parity Technologies is the software development company behind some of the world’s most trusted Web3
            technology. It was founded in 2015 and succeeded in building some of the fastest and most secure open-source
            software for Ethereum, Bitcoin, Zcash, and the decentralized web. Several years later it has evolved to
            address the previous limitations of blockchain by creating Substrate and developing the ground-breaking
            Kusama and Polkadot networks.{' '}
          </p>
          <LineArrowButton className="inline-block" centered link="https://parity.io/" icon="external-link">
            Learn more about Parity
          </LineArrowButton>
        </div>
      </div>

      <div className="shadow-xl mb-40 dark:bg-substrateGray-darkest">
        <div className="container md:flex lg:px-10 py-6">
          <p className="inline-block md:w-1/2 lg:w-auto text-2xl font-bold leading-relaxed md:mb-0 mr-20 my-4">
            Connect With Us
          </p>
          <div>
            <Link
              to="https://matrix.to/#/#substrate-technical:matrix.org"
              className="group inline-block text-xl leading-relaxed mr-20 my-4"
            >
              <Icon name="element2" className="inline-block mr-5 w-9 h-9 transition-all group-hover:opacity-50" />
              Substrate Tech Support
            </Link>
            <a href="mailto:general@parity.io" className="group inline-block text-xl leading-relaxed my-4">
              <Icon
                name="mail"
                className="fill-current text-substrateBlackish dark:text-white inline-block mr-5 w-9 h-9 transition-all group-hover:opacity-50"
              />
              General inquiries
            </a>
          </div>
        </div>
      </div>

      <div className="container lg:px-10 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="aspect-w-3 aspect-h-2">
            <div>
              <StaticImage
                src="../images/photos/home/newsletter.jpg"
                alt="Woman at computer"
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
            <p className="text-lg leading-relaxed mb-6 xl:w-1/2">
              Keep up to date with tech updates and helpful resources.
            </p>
            <SecondaryButton link="/ecosystem/connect/newsletter">
              <p className="mb-0 p-1">Sign up</p>
            </SecondaryButton>
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
