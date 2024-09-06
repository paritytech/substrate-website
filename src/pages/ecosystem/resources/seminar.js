import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Icon, Link, PrimaryButtonLink, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import Layout from '../../../components/layout/Layout';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Seminar() {
  return (
    <Layout layout="sidebar">
      <SEO
        title="Blockchain Webinars &amp; Seminars Watch now!"
        description="Blockchain Webinars &amp; Seminars. Watch now!. Biweekly collaborative learning space, where we hear from developers and projects building on Substrate."
      />

      <Section>
        <h1 className="text-4xl font-bold mb-10">Substrate Seminar</h1>
        <div className="grid md:grid-cols-2 md:gap-6 bg-substrateGray-light dark:bg-substrateBlackish rounded-md overflow-hidden image-rounded">
          <div className="p-8 self-center">
            <h5 className="text-2xl font-medium mb-4">
              Biweekly seminars,
              <br /> open to everyone.
            </h5>
            <p className="max-w-sm leading-loose">
              Substrate Seminar is a biweekly collaborative learning space, where we hear from developers and projects
              building on Substrate. Run by DevHub, we meet <span className="font-bold">every other Tuesday</span> at{' '}
              <span className="font-bold">14:00UTC.</span>
            </p>
            <div className="max-w-[220px]">
              <SecondaryButton
                className="mb-3 w-full flex justify-center"
                link="https://calendar.google.com/calendar/u/0?cid=Y192cXBsamk3cXY2ajBvcDVrbmdwMGR0cjUzc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              >
                <span className="inline font-bold mr-3">Add schedule</span>
                <span className="text-white dark:text-black fill-current">
                  <Icon name="calendar" className="inline mb-1" />
                </span>
              </SecondaryButton>
              <PrimaryButtonLink
                fullWidth
                slim
                link="https://github.com/substrate-developer-hub/substrate-seminar/issues/new"
              >
                Propose a topic
              </PrimaryButtonLink>
            </div>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/seminar/seminar.jpg"
            alt="Two men talking"
            className="order-first md:order-last w-full h-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 font-medium text-2xl">Previous Seminars</h2>
        <p className="leading-loose underline-animate underline-animate-thin">
          Browse our <Link to="/ecosystem/resources/past-seminars">list of past seminars</Link> or watch the{' '}
          <Link to="https://www.youtube.com/playlist?list=PLp0_ueXY_enXRfoaW7sTudeQH10yDvFOS">
            seminars on Youtube.
          </Link>
        </p>
      </Section>

      <Section className="underline-animate underline-animate-thin">
        <h2 className="mb-8 font-medium text-2xl">Learn and Share</h2>
        <p className="mb-6">
          Seminars are livestreamed <Link to="https://www.twitch.tv/polkadotdev">on Twitch</Link>, where attendees are
          encouraged to ask questions in the chat and interact directly with the presenters. They typically take the
          format of learning from other developers showcasing what they&apos;re working on in the Polkadot ecosystem,
          including parachain developers, smart contract developers and core Substrate engineers. Each seminar has an
          associated lesson plan which can be found in{' '}
          <Link to="https://github.com/substrate-developer-hub/substrate-seminar/">the Seminars GitHub repository</Link>
          . Use this repository to suggest new topics or propose topics you&apos;d like to see in future seminars.
        </p>
        <p className="mb-0">
          Seminars are generally developer-oriented, but less technical participants and questions are also welcome. If
          your questions turn out to be off-topic, we&apos;ll make sure to point you to the resources you need.
        </p>
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
