import { graphql } from 'gatsby';
import React from 'react';

import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

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
        <div className="border border-substrateSubtleGrey rounded-[9px] overflow-hidden">
          <table className="past-seminars-table">
            <tr className="bg-substrateBlackish text-white">
              <th className="rounded-tl-lg border-r">
                <div className="flex justify-center my-2">
                  <Icon name="calendar" className="fill-current text-white" />{' '}
                </div>
              </th>
              <th className="rounded-tr-lg">Description</th>
            </tr>
            {seminars.map(({ date, description }, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap">{date}</td>
                <td className="font-semibold">{description}</td>
              </tr>
            ))}
          </table>
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
