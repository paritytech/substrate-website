import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Lottie from 'react-lottie';

import Icon from '../../components/default/Icon';
import Article from '../../components/layout/Article';
import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import PrimaryButton from '../../components/ui/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton';
import * as animationData from '../../images/animation/ecosystem/future-proof.json';

export default function BuildersProgram() {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout mode="full">
      <SEO title="Substrate Builders Program" />
      <Article>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div className="lg:col-start-2">
              <div className="aspect-w-5 aspect-h-3">
                <Lottie options={animationOptions} />
              </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-1">
              <h1>
                substrate
                <span className="text-substrateGreen">_</span> <br /> builders program
              </h1>
              <p>
                The Substrate Builders Program directly supports you by bringing you Parity’s extensive resources,
                taking your Substrate ecosystem project to the next level.
              </p>
              <PrimaryButton link="/ecosystem/teams">Apply</PrimaryButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-36 mb-44">
            <div className="aspect-w-7 aspect-h-4 bg-gray-200 row-start-1 lg:col-start-2">
              <div>Foto</div>
            </div>
            <div className="lg:col-start-1 flex justify-center flex-col">
              <h2>Who The Program Is For</h2>
              <p>
                The Substrate Builders Program identifies, supports and mentors current and potential Substrate-related
                projects. If you are a visionary builder who is considering or already developing a project in the
                Substrate ecosystem, we want to talk to you.
              </p>
              <SecondaryButton link="/ecosystem/teams">See Teams</SecondaryButton>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-36 mb-44">
            <h2 className="text-center">The program is divided into three tracks</h2>
            <div className="p-6 my-6 shadow-xl rounded-md">
              <h3 className="mb-4">
                <Icon
                  name="chain"
                  className="inline-block align-top mt-1 mr-1 fill-current text-substrateBlackish dark:text-white"
                />{' '}
                Chains track
              </h3>
              <p className="m-0 mb-1 text-substrateGreen text-xl font-bold">
                Those that are building impactful chains.
              </p>
              <p className="m-0">(independent chains, parachains and parathreads)</p>
            </div>

            <div className="p-6 my-6 shadow-xl rounded-md">
              <h3 className="mb-4">
                <Icon
                  name="layers"
                  className="inline-block align-top mt-1 mr-1 fill-current text-substrateBlackish dark:text-white"
                />{' '}
                Infrastructure track
              </h3>
              <p className="m-0 mb-1 text-substrateGreen text-xl font-bold">
                Those that are building Substrate/Polkadot-related infrastructure.
              </p>
              <p className="m-0">
                (Including bridges, UIs, tooling, smart contract support and validator infrastructure (and potentially
                more)
              </p>
            </div>

            <div className="p-6 my-6 shadow-xl rounded-md">
              <h3 className="mb-4">
                <Icon
                  name="computer"
                  className="inline-block align-top mt-1 mr-1 fill-current text-substrateBlackish dark:text-white"
                />{' '}
                Application Track
              </h3>
              <p className="m-0 mb-1 text-substrateGreen text-xl font-bold">
                Those that are building applications on top of Substrate-based chains.
              </p>
              <p className="m-0">
                (Including areas like DeFi, governance, identity, and anything that hasn’t been possible before without
                the benefits of the interoperable ecosystem.)
              </p>
            </div>
          </div>

          <div className="mt-36 mb-44">
            <h2 className="text-center mb-12">Builders Program Process</h2>
            <div className="grid grid-cols-7 lg:grid-cols-1 gap-8 mx-auto max-w-lg lg:max-w-full">
              <div className="col-span-2 lg:col-span-1 grid lg:grid-cols-7 grid-rows-7 lg:grid-rows-1 gap-12">
                <div className="relative flex flex-col justify-center lg:col-start-4 row-start-4 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <div className="relative z-10 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center">
                    Builder
                  </div>
                  <div className="relative z-10 mt-4 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center 2xl:tracking-wider uppercase">
                    Level 1
                  </div>
                </div>
                <div className="relative flex flex-col justify-center lg:col-start-5 row-start-5 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <div className="relative z-10 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center">
                    Builder
                  </div>
                  <div className="relative z-10 mt-4 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center 2xl:tracking-wider uppercase">
                    Level 2
                  </div>
                </div>
                <div className="relative flex flex-col justify-center lg:col-start-6 row-start-6 lg:row-start-1 font-bold overflow-visible text-sm xl:text-base">
                  <div className="absolute rounded-md border-dashed border-2 border-gray-200 -inset-x-2 lg:-inset-x-4 inset-y-4 lg:inset-y-8"></div>
                  <div className="relative z-10 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center">
                    Build
                  </div>
                  <div className="relative z-10 mt-4 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center 2xl:tracking-wider uppercase">
                    Completed
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1 grid lg:grid-cols-7 grid-rows-7 lg:grid-rows-1 gap-12">
                <div className="flex-1 relative row-start-1 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Application</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-2 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Evaluation</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-3 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>SBP Commitee</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-4 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Milestone 1</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-5 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Milestone 2</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-6 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Milestone 3</span>
                    </div>
                  </div>
                  <Icon
                    name="arrow-more"
                    className="mx-4 text-substrateGreen absolute -bottom-7 left-2/4 transform -translate-x-5 rotate-90 lg:transform-none lg:bottom-auto lg:left-auto lg:top-2/4 lg:-right-11"
                  />
                </div>
                <div className="flex-1 relative row-start-7 lg:row-start-1 col-span-full lg:col-span-1">
                  <div className="aspect-w-13 aspect-h-11">
                    <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
                      <span>Launch Support</span>
                    </div>
                  </div>
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
                    <span></span>
                    <span>P</span>
                    <span>H</span>
                    <span>A</span>
                    <span>S</span>
                    <span>E</span>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4 row-start-4 lg:row-start-1 row-span-3 lg:row-span-1 col-span-full lg:col-span-3 rounded-md border-2 border-dashed border-gray-200">
                  <div className="spaced-out-text">
                    <span>B</span>
                    <span>U</span>
                    <span>I</span>
                    <span>L</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span></span>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mt-36 mb-44">
            <div className="lg:col-span-5">
              <h2>FAQ</h2>
              <h4>Is this support offering exclusive to members of the program?</h4>
              <p>
                While nearly everything in the program is in principle available to any team building in the Substrate
                ecosystem, the Substrate Builders Program guides teams through the available support in a structured
                manner.
              </p>
              <h4>How is the Substrate Builders Program different from the Web3 Foundation Grants Program?</h4>
              <p>
                The grants program provides non-dilutive financial support to projects, whereas this program is focused
                on more comprehensive support throughout a project’s lifecycle. W3F grant recipients are also welcome to
                apply to the Builders Program!
              </p>
              <h4>Is the Substrate Builders Program an acceleration or incubation program?</h4>
              <p>
                No, the Substrate Builders Program is complementary to any external accelerator or incubator program
                that developers can enroll in. Much of what this program offers, such as technical support and
                invitations to Polkadot branded events, cannot be offered by an external program.
              </p>
              <PrimaryButton link="/ecosystem/teams">Apply</PrimaryButton>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 aspect-w-6 aspect-h-9">
              <div className="bg-gray-200 hidden lg:block">Image</div>
            </div>
          </div>

          <h2>Got Questions?</h2>
          <Link to="/ecosystem/connect/contact">
            <span className="inline-block font-bold border-b-2 border-black dark:border-white inline mr-1 hover:mr-2 transition-all">
              Contact us here
            </span>
            <span className="fill-current border-b-0 text-black dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </Link>
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
