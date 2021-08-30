import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../../components/default/Icon';
import Image from '../../../components/default/Image';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import SecondaryButton from '../../../components/ui/SecondaryButton';

const seminars = [
  {
    date: '18 May',
    description:
      'Aten, CTO at Patract Labs, will introduce the full-stack tools being built to power Wasm Smart Contract development for Substrate based chains.',
  },
  {
    date: '1 June',
    description:
      'Antonio from Kilt will showcase the DID management tools his team has developed using Substrate and give an overview on what DIDs are and their vision for using them.',
  },
  {
    date: 'June',
    description:
      'Parity Software Developer Kian will be demonstrating a recent tool he built called try-runtime to test storage migrations and runtime upgrades.',
  },
  {
    date: '29 June',
    description:
      'RMRK.app: Nested, reactive, useful, upgradeable NFTs that react to emotion and conditionally display different resources in different formats.',
  },
  {
    date: '13 July',
    description: 'TBD',
  },
];

export default function Seminar() {
  return (
    <Layout mode="sidebar">
      <SEO title="Seminar" />
      <Section>
        <div>
          <h2 className="text-4xl font-bold my-2">Substrate Seminar</h2>
          <h2 className="text-4xl font-bold my-2 mb-8">A Collaborative Learning Group</h2>
          <p className="font-medium">Substrate Seminar is an open collaborative learning call</p>
          <PrimaryButton link="https://web3.foundation/grants/">
            <p className="mb-0 inline font-medium">Live Call</p>
          </PrimaryButton>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6 bg-substrateGray-light">
          <div className="p-4 self-center">
            <h5 className="text-xl font-bold mb-4">An Open Collaborative Learning Call</h5>
            <p className="max-w-sm">
              Substrate Seminar is an open Collaborative Learning call where we learn about Substrate together. Run by
              DevHub, we meet every other Tuesday at 14:00UTC. Learn, show off a Substrate project, and make friends!
            </p>
            <p>Add next call to Google Calendar</p>
            <SecondaryButton>
              <p className="inline font-medium mr-3">Add Call</p>
              <span className="text-white fill-current">
                <Icon name="calendar" className="inline mb-1" />
              </span>
            </SecondaryButton>
          </div>
          <Image name="seminar" alt="Two men talking" className="order-first md:order-last w-full h-auto" />
        </div>
      </Section>
      <Section>
        <div className="md:grid grid-cols-2 gap-10">
          <div className="mb-16 md:mb-8">
            <h5 className="mb-8 font-medium text-2xl">FAQ</h5>
            <p className="font-bold">Can I ask my own questions?</p>
            <p>
              Yes! The second half of every Seminar is for open Q & A like office hours. You can ask questions or even
              bring your code that doesn&apos;t compile. Participants will be invited on-screen to share their work and
              their questions. You may also join us between Seminars on Element.
            </p>
            <p className="font-bold">I am not a [Substrate] developer, can I still participate?</p>
            <p>
              Yes! The second half of every Seminar is for open Q & A like office hours. You can ask questions or even
              bring your code that doesn&apos;t compile. Participants will be invited on-screen to share their work and
              their questions. You may also join us between Seminars on Element.
            </p>
            <p className="font-bold">Where are the recordings?</p>
            <p>Seminar has changed formats a few times so the recordings are in a few places:</p>
            <ul>
              <li>
                <span className="font-bold">23 June 2020</span> and later are on Crowdcast.
              </li>
              <li>
                <span className="font-bold">19 November 2019 - 23 June 2020</span> are on the Substrate Seminar YouTube
                playlist.
              </li>
              <li>
                <span className="font-bold">03 June 2019 - 02 November 2019</span> are on the Substrate Collaborative
                Learning YouTube playlist.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-8 font-medium text-2xl">Upcoming Seminars</h5>
            {seminars.map(({ date, description }) => (
              <>
                <p className="text-substrateGreen fill-current">
                  <Icon name="calendar" className="inline mb-1 mr-3" />
                  {date}
                </p>
                <p className="border-b border-substrateBlackish pb-8">{description}</p>
              </>
            ))}
          </div>
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
