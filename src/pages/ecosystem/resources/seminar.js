import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import faq from '../../../../data/faq.json';
import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Seminar({ pageContext }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout layout="sidebar">
      <SEO title="Seminar" />
      <div className="container hidden md:block lg:px-10 mb-10 underline-animate underline-animate-thin">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel="Substrate Seminar"
          hiddenCrumbs={['/']}
          disableLinks={['/ecosystem/resources/seminar', '/ecosystem/resources']}
          className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
        />
      </div>
      <Section>
        <div>
          <h2 className="text-4xl font-bold mb-6">Substrate Seminar</h2>
          <p className="font-medium capitalize">Substrate Seminar is an open collaborative learning call</p>
          <PrimaryButton link="https://web3.foundation/grants/">Live Call</PrimaryButton>
          <div className="mt-8">
            {/* TODO: Will be put back in the future */}
            {/* <Link to="/">
              <p className="font-bold border-b-2 border-black inline hover:mr-1 transition-all">Past Seminars</p>{' '}
              <span className="fill-current border-b-0 text-black dark:text-white inline-block">
                <Icon name="arrow-more" />
              </span>
            </Link> */}
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 md:gap-6 bg-substrateGray-light dark:bg-substrateBlackish rounded-md overflow-hidden">
          <div className="p-8 self-center">
            <h5 className="text-xl font-bold mb-4">An Open Collaborative Learning Call</h5>
            <p className="max-w-sm">
              Substrate Seminar is an open Collaborative Learning call where we learn about Substrate together. Run by
              DevHub, we meet every other Tuesday at 14:00UTC. Learn, show off a Substrate project, and make friends!
            </p>
            <p className="mb-4 font-bold">Add next call to Google Calendar</p>
            <SecondaryButton>
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
            <h5 className="mb-8 font-medium text-2xl">FAQ</h5>
            {faq.map(({ q, a }) => (
              <>
                <p className="font-bold">{q}</p>
                <p dangerouslySetInnerHTML={{ __html: a }}></p>
              </>
            ))}
          </div>
          <div className="order-first md:order-last">
            <h5 className="mb-8 font-medium text-2xl">Upcoming Seminars</h5>
            {seminars.map(({ date, description }) => (
              <>
                <p className="text-substrateGreen font-bold fill-current">
                  <Icon name="calendar" className="inline mb-1 mr-3" />
                  {date}
                </p>
                <p className="border-b border-substrateBlackish dark:border-substrateDarkThemeGrey pb-8">
                  {description}
                </p>
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
