import { graphql } from 'gatsby';
import React from 'react';

import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import LineArrowButton from '../../../components/ui/LineArrowButton';

export default function PastSeminars() {
  return (
    <Layout layout="sidebar">
      <SEO title="Past Seminars" />
      <Section>
        <h1 id="awesome-substrate" className="text-4xl font-bold font-body mb-6">
          Past Seminars
        </h1>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {seminars.map(({ title, date, description, link }, idx) => (
            <div key={idx} className="shadow-xl p-8 max-w-md rounded-md bg-white dark:bg-substrateBlackish">
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="flex">
                <Icon className="mr-2 mt-0.5 fill-current text-black dark:text-white" name="date" />
                <p>{date}</p>
              </div>
              <p>{description}</p>
              <LineArrowButton link={link} primary>
                Watch
              </LineArrowButton>
            </div>
          ))}
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
