import { graphql } from 'gatsby';
import React from 'react';

import seminars from '../../../../data/seminars.json';
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
        <table className="past-seminars-table">
          <tr className="bg-substrateBlackish text-white">
            <th className="rounded-tl-lg border-r border-b">Date</th>
            <th className="rounded-tr-lg border-b">Description</th>
          </tr>
          {seminars.map(({ date, description }, idx) => (
            <tr key={idx}>
              <td>{date}</td>
              <td>{description}</td>
            </tr>
          ))}
        </table>
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
