import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Lottie from 'react-lottie';

import Icon from '../../components/default/Icon';
import Article from '../../components/layout/Article';
import BorderCard from '../../components/layout/ecosystem/BorderCard';
import ColorCard from '../../components/layout/ecosystem/ColorCard';
import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import LineArrowButton from '../../components/ui/LineArrowButton';
import PrimaryButtonLink from '../../components/ui/PrimaryButtonLink';
import SecondaryButton from '../../components/ui/SecondaryButton';
import * as animationData from '../../images/animation/ecosystem/builders-program.json';

const tracks = [
  {
    title: 'Chains Track',
    description: 'Those that are building impactful chains.',
    details: '(independent chains, parachains, and parathreads)',
    icon: 'chain',
  },
  {
    title: 'Infrastructure Track',
    description: 'Those that are building Substrate/Polkadot-related infrastructure.',
    details:
      '(Including bridges, UIs, tooling, smart contract support, validator infrastructure, and potentially more)',
    icon: 'layers',
  },
  {
    title: 'Application Track',
    description: 'Those that are building applications on top of Substrate-based chains.',
    details:
      '(Including areas like DeFi, governance, identity, and anything that hasn’t been possible before without the benefits of the interoperable ecosystem.)',
    icon: 'computer',
  },
];

export default function BuildersProgram() {
  return (
    <Layout mode="full">
      <SEO title="Substrate Builders Program" />
      <Article>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div className="lg:col-start-2">
              <div className="aspect-w-5 aspect-h-3">
                <Lottie options={{ animationData, loop: false }} isClickToPauseDisabled={true} />
              </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-1">
              <h1 className="mb-6 font-extrabold text-4xl md:text-5xl lg:text-6xl">
                substrate
                <span className="text-substrateGreen">_</span> <br /> builders program
              </h1>
              <p className="mb-8 text-lg font-medium leading-relaxed">
                The Substrate Builders Program directly supports you by connecting you with Parity’s extensive
                resources, taking your Substrate project to the next level.
              </p>
              <PrimaryButtonLink link="https://docs.google.com/forms/d/e/1FAIpQLSfEYJE3X0RQs3Kucqthe4D8zyUcV1yEvyIw98L2X9_78b4BVA/viewform">
                Apply
              </PrimaryButtonLink>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-36 mb-44">
            <div className="lg:col-start-1 flex justify-center flex-col">
              <h2 className="font-bold mb-4 text-3xl md:text-4xl">Who The Program Is For</h2>
              <p>
                The Substrate Builders Program identifies, supports, and mentors current and potential Substrate-related
                projects. If you&apos;re a visionary builder who is considering or already developing a project in the
                Substrate ecosystem, we want to talk to you.
              </p>
              <SecondaryButton link="/ecosystem/projects">See Builder Teams</SecondaryButton>
            </div>
            <StaticImage
              src="../../images/photos/ecosystem/builders-program/builders-program.jpg"
              alt="Two men talking"
              className="rounded-md overflow-hidden w-full h-auto"
            />
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto mt-36 mb-44">
            <h2 className="font-bold mb-4 text-3xl md:text-4xl">The program is divided into three tracks</h2>
            {tracks.map(({ title, description, details, icon }, idx) => (
              <div key={idx} className="p-6 my-6 rounded-md bg-substrateGray-light dark:bg-substrateBlackish">
                <h3 className="mb-4 text-xl md:text-2.5xl font-bold">
                  <Icon
                    name={icon}
                    className="inline-block align-top mr-2 fill-current text-substrateBlackish dark:text-white"
                  />{' '}
                  {title}
                </h3>
                <p className="m-0 mb-1 text-substrateGreen text-lg md:text-xl font-bold">{description}</p>
                <p className="m-0">{details}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mt-36 mb-44">
            <h2 className="text-center mb-12 font-bold text-3xl md:text-4xl">Builders Program Process</h2>
            <div className="grid grid-cols-7 lg:grid-cols-1 gap-8 mx-auto max-w-lg lg:max-w-full">
              <div className="col-span-2 lg:col-span-1 grid lg:grid-cols-7 grid-rows-7 lg:grid-rows-1 gap-12">
                <div className="relative flex flex-col justify-center lg:col-start-4 row-start-4 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <BorderCard className="mb-4">Builder</BorderCard>
                  <BorderCard>
                    <span className="uppercase">Level 1</span>
                  </BorderCard>
                </div>
                <div className="relative flex flex-col justify-center lg:col-start-5 row-start-5 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <BorderCard className="mb-4">Builder</BorderCard>
                  <BorderCard>
                    <span className="uppercase">Level 2</span>
                  </BorderCard>
                </div>
                <div className="relative flex flex-col justify-center lg:col-start-6 row-start-6 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <BorderCard className="mb-4">Build</BorderCard>
                  <BorderCard>
                    <span className="uppercase">Completed</span>
                  </BorderCard>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1 grid lg:grid-cols-7 grid-rows-7 lg:grid-rows-1 gap-12">
                <div className="flex-1 relative row-start-1 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Application</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-2 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Evaluation</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-3 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>SBP Commitee</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-4 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Milestone 1</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-5 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Milestone 2</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-6 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Milestone 3</ColorCard>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-7 lg:row-start-1 col-span-full lg:col-span-1">
                  <ColorCard>Launch Support</ColorCard>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 grid lg:grid-cols-7 grid-rows-7 lg:grid-rows-1 gap-12">
                <div className="flex justify-center items-center p-4 row-start-1 row-span-3 lg:row-span-1 col-span-full lg:col-span-3 rounded-md border-2 border-dashed border-gray-200">
                  <div className="spaced-out-text">
                    <span>E</span>
                    <span>V</span>
                    <span>A</span>
                    <span>L</span>
                    <span>U</span>
                    <span>A</span>
                    <span>T</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                    <span> </span>
                    <span>P</span>
                    <span>H</span>
                    <span>A</span>
                    <span>S</span>
                    <span>E</span>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4 row-start-4 lg:row-start-1 lg:col-start-4 row-span-3 lg:row-span-1 col-span-full lg:col-span-3 rounded-md border-2 border-dashed border-gray-200">
                  <div className="spaced-out-text">
                    <span>B</span>
                    <span>U</span>
                    <span>I</span>
                    <span>L</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span> </span>
                    <span>P</span>
                    <span>H</span>
                    <span>A</span>
                    <span>S</span>
                    <span>E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mt-36 mb-20">
            <div className="max-w-screen-md">
              <h2 className="font-bold mb-4 text-3xl md:text-4xl">What the program entails</h2>
              <p className="text-lg font-medium">
                As a builder, you&apos;ll receive Parity’s support in a systematic manner, including comprehensive
                assistance and advice in the following areas:
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="mt-16 lg:mt-24 mb-4 text-2xl">Technical support:</h3>
                <div className="relative pl-12 lg:pr-16">
                  <div className="absolute top-0 bottom-0 left-2 w-1 bg-substrateGreen rounded"></div>
                  <ul className="benefits-list">
                    <li>
                      <span className="font-bold">Category-specific chat support with other program members</span> of
                      the same category and category-expert engineers to collaborate and ask questions
                    </li>
                    <li>
                      <span className="font-bold">Regular office hours with the program&apos;s tech support lead</span>{' '}
                      to give and get feedback and answer questions
                    </li>
                    <li>
                      <span className="font-bold">Launch support with materials, calls and more</span> to ensure your
                      mainnet launch is successful
                    </li>
                    <li>
                      <span className="font-bold">Regular individual check-ins</span>
                    </li>
                  </ul>
                </div>

                <h3 className="mt-16 lg:mt-24 mb-4 text-2xl">Community support:</h3>
                <div className="relative pl-12 lg:pr-16">
                  <div className="absolute top-0 bottom-0 left-1 w-1 bg-substrateGreen rounded"></div>
                  <ul className="benefits-list">
                    <li>
                      Collaboration on <span className="font-bold">events, meetups, and webinars</span>
                    </li>
                    <li>
                      Collaboration on <span className="font-bold">milestone announcements</span>
                    </li>
                    <li>
                      Guidance on <span className="font-bold">community building</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mt-16 lg:mt-24 mb-4 text-2xl">Community funding opportunities:</h3>
                <div className="relative pl-12 lg:pr-16">
                  <div className="absolute top-0 bottom-0 left-1 w-1 bg-substrateGreen rounded"></div>
                  <ul className="benefits-list">
                    <li>
                      Support in helping your project navigate the{' '}
                      <span className="font-bold">Polkadot Network Treasury and Web3 Foundation Grants processes</span>
                    </li>
                  </ul>
                </div>

                <h3 className="mt-16 lg:mt-24 mb-4 text-2xl">Ecosystem support:</h3>
                <div className="relative pl-12 lg:pr-16">
                  <div className="absolute top-0 bottom-0 left-1 w-1 bg-substrateGreen rounded"></div>
                  <ul className="benefits-list">
                    <li>
                      <span className="font-bold">Introductions to relevant blockchain ecosystem players</span>{' '}
                      (clients, users, partners, etc.)
                    </li>
                    <li>
                      <span className="font-bold">A joint announcements/non-technical chat room</span> between all
                      members of both tracks
                    </li>
                    <li>
                      Regular office hours{' '}
                      <span className="font-bold">to give and get BD-related feedback and answer questions</span>
                    </li>
                  </ul>
                </div>

                <h3 className="mt-16 lg:mt-24 mb-4 text-2xl">Strategy & feedback:</h3>
                <div className="relative pl-12 lg:pr-16">
                  <div className="absolute top-0 bottom-0 left-1 w-1 bg-substrateGreen rounded"></div>
                  <ul className="benefits-list">
                    <li>
                      <span className="font-bold">Regular individual check-ins</span> with every member team (6 week
                      cycles) to understand your roadmap and get feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <PrimaryButtonLink link="https://docs.google.com/forms/d/e/1FAIpQLSfEYJE3X0RQs3Kucqthe4D8zyUcV1yEvyIw98L2X9_78b4BVA/viewform">
            Apply
          </PrimaryButtonLink>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24 mt-36 mb-44">
            <div className="lg:col-span-6">
              <h2 className="font-bold mb-4 text-3xl md:text-4xl">FAQ</h2>
              <h4 className="mb-5 font-bold text-lg md:text-2xl">
                Is this support offering exclusive to members of the program?
              </h4>
              <p className="mb-10">
                While nearly everything in the program is in principle available to any team building in the Substrate
                ecosystem, the Substrate Builders Program guides teams through the available support in a structured
                manner.
              </p>
              <h4 className="mb-5 font-bold text-lg md:text-2xl">
                How is the Substrate Builders Program different from the Web3 Foundation Grants Program?
              </h4>
              <p className="mb-10">
                The grants program provides non-dilutive financial support to projects, whereas this program is focused
                on more comprehensive support throughout a project’s lifecycle. W3F grant recipients are also welcome to
                apply to the Substrate Builders Program!
              </p>
              <h4 className="mb-5 font-bold text-lg md:text-2xl">
                Is the Substrate Builders Program an acceleration or incubation program?
              </h4>
              <p className="mb-14">
                No, the Substrate Builders Program is complementary to any external accelerator or incubator program
                that developers can enroll in. Much of what this program offers, such as technical support and
                invitations to Polkadot branded events, cannot be offered by an external program.
              </p>
              <PrimaryButtonLink link="https://docs.google.com/forms/d/e/1FAIpQLSfEYJE3X0RQs3Kucqthe4D8zyUcV1yEvyIw98L2X9_78b4BVA/viewform">
                Apply
              </PrimaryButtonLink>
            </div>
            <div className="hidden lg:block lg:col-span-6 lg:col-start-7">
              <StaticImage
                src="../../images/photos/ecosystem/builders-program/builders-program-2.jpg"
                alt="A woman on a computer, wearing headphones"
                className="rounded-md overflow-hidden"
              />
            </div>
          </div>
        </Section>

        <Section>
          <h2>Got Questions?</h2>
          <LineArrowButton link="/ecosystem/connect/contact">Send us an email here</LineArrowButton>
        </Section>
      </Article>
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
