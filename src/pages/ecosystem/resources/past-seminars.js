import { graphql } from 'gatsby';
import React from 'react';

import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import LineArrowButton from '../../../components/ui/LineArrowButton';

export default function PastSeminars() {
  return (
    <Layout layout="sidebar">
      <SEO title="Past Seminars" />
      <Section>
        <h1 className="text-4xl font-bold font-body mb-6">Past Seminars</h1>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
          {seminars.map(({ id, title, date }, idx) => (
            <Link to={`https://www.youtube.com/watch?v=${id}`} key={idx}>
              <div className="h-full shadow-xl p-8 rounded-md bg-white dark:bg-substrateBlackish flex flex-col justify-between hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div>
                  <div className="flex mb-4">
                    <Icon className="mr-2 mt-0.5 fill-current text-black dark:text-white" name="date" />
                    <p className="mb-0">{date}</p>
                  </div>
                  <LineArrowButton link={`https://www.youtube.com/watch?v=${id}`} primary>
                    Watch
                  </LineArrowButton>
                </div>
              </div>
            </Link>
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
