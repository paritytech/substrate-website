import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
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
        <div>
          <h2 className="text-4xl font-bold mb-6">Substrate Seminar</h2>
          <p className="text-xl font-medium capitalize">Biweekly conversations on the cutting-edge of blockchain</p>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 md:gap-6 bg-substrateGray-light dark:bg-substrateBlackish rounded-md overflow-hidden image-rounded">
          <div className="p-8 self-center">
            <h5 className="text-xl font-bold mb-4">An Open Collaborative Learning Call</h5>
            <p className="max-w-sm leading-loose">
              Substrate Seminar is a biweekly collaborative learning space, where we hear from developers and projects
              building on Substrate. Run by DevHub, we meet <span className="font-bold">every other Tuesday</span> at{' '}
              <span className="font-bold">14:00UTC.</span>
            </p>
            <PrimaryButtonLink link="https://www.crowdcast.io/e/substrate-seminar-2">Live Call</PrimaryButtonLink>
            <p className="mb-4 mt-8 font-bold">Add next call to Google Calendar</p>
            <SecondaryButton link="https://calendar.google.com/calendar/u/0?cid=Y192cXBsamk3cXY2ajBvcDVrbmdwMGR0cjUzc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
              <span className="inline font-bold mr-3">Add Call</span>
              <span className="text-white dark:text-black fill-current">
                <Icon name="calendar" className="inline mb-1" />
              </span>
            </SecondaryButton>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/seminar/seminar.jpg"
            alt="Two men talking"
            className="order-first md:order-last w-full h-full object-cover"
          />
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="mb-16 md:mb-8">
            <h5 className="mb-8 font-medium text-2xl">Learn and Share</h5>
            <p className="leading-loose">
              We begin by hearing from a member of the ecosystem and getting insights into what they&apos;re working on.
            </p>
            <p className="leading-loose">
              The second half of each seminar is open for Q & A like office hours, so bring your questions. Got code
              that doesn’t compile? Bring that along, too! Participants will be invited on-screen to share their work
              and their questions. You may also want to provide feedback to an upcoming seminar plan by looking through
              the proposed topics in the{' '}
              <span className="underline-animate underline-animate-thin">
                <Link to="https://www.youtube.com/playlist?list=PLp0_ueXY_enXRfoaW7sTudeQH10yDvFOS">dedicated GitHub repository</Link>.
              </span>
            </p>
            <p className="leading-loose">
              Seminars are generally developer-oriented, but less technical participants and questions are also
              welcome. If your questions turn out to be off-topic, we&apos;ll make sure to point you to the resources
              you need.
            </p>
          </div>
          <div className="order-first md:order-last">
            <h5 className="mb-8 font-medium text-2xl">View Past Seminars</h5>
            <p className="leading-loose">
              Check out our{' '}
              <span className="underline-animate underline-animate-thin">
                <Link to="https://www.youtube.com/playlist?list=PLp0_ueXY_enXRfoaW7sTudeQH10yDvFOS">Youtube playlist</Link>
              </span>
              {' '}to revisit past seminars.
            </p>
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
