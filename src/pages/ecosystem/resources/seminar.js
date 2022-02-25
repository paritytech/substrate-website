import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButtonLink from '../../../components/ui/PrimaryButtonLink';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Seminar() {
  return (
    <Layout layout="sidebar">
      <SEO title="Seminar" />
      <Section>
        <h2 className="text-4xl font-bold mb-10">Substrate Seminar</h2>
        <div className="grid md:grid-cols-2 md:gap-6 bg-substrateGray-light dark:bg-substrateBlackish rounded-md overflow-hidden image-rounded">
          <div className="p-8 self-center">
            <h5 className="text-2xl font-medium mb-4">
              Biweekly seminars,
              <br /> open to everyone.
            </h5>
            <p className="max-w-sm leading-loose">
              Join a collaborative learning space, where we hear from developers and projects building on Substrate. Run
              by DevHub, we meet <span className="font-bold">every other Tuesday</span> at{' '}
              <span className="font-bold">14:00UTC.</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <div>
                <SecondaryButton link="https://calendar.google.com/calendar/u/0?cid=Y192cXBsamk3cXY2ajBvcDVrbmdwMGR0cjUzc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
                  <span className="inline font-bold mr-3">View Calendar</span>
                  <span className="text-white dark:text-black fill-current">
                    <Icon name="calendar" className="inline mb-2 mt-1" />
                  </span>
                </SecondaryButton>
              </div>
              <PrimaryButtonLink link="https://www.crowdcast.io/e/substrate-seminar-2">Join Call</PrimaryButtonLink>
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
        <div>
          <h5 className="mb-8 font-medium text-2xl">Learn and Share</h5>
          <p className="leading-loose">
            We start by hearing from a member of the ecosystem and getting insights into what they&apos;re working on.
            The second half of each seminar is open for Q & A like office hours, so bring your questions. Got code that
            doesn’t compile? Bring that along, too! Participants will be invited on-screen to share their work and their
            questions. You may also join us between seminars on Element.
          </p>
          <p className="leading-loose">
            The seminar is generally developer-oriented, but less technical participants and questions are also welcome.
            If your questions turn out to be off-topic, we&apos;ll point in the direction of the resources you need.
          </p>
        </div>
      </Section>
      <Section>
        <div>
          <h5 className="mb-8 font-medium text-2xl">Past Seminars</h5>
          <p className="leading-loose">
            You can watch or read about past seminars{' '}
            <span className="underline-animate underline-animate-thin">
              <Link to="/ecosystem/resources/past-seminars">here.</Link>
            </span>
          </p>
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
