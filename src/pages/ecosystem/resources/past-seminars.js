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
        <div className="border border-substrateSubtleGrey rounded-[9px] overflow-scroll">
          <table className="past-seminars-table">
            <tr className="bg-substrateBlackish text-white">
              <th className="rounded-tl-lg border-r">
                <div className="flex justify-center my-2">
                  <Icon name="calendar" className="fill-current text-white" />{' '}
                </div>
              </th>
              <th className="border-r">Speaker(s)</th>
              <th className="border-r">Description</th>
              <th className="rounded-tr-lg">Tags</th>
            </tr>
            {seminars.map(({ year, date, speakers, description, tags }, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap">
                  {date} {year}
                </td>
                <td>{speakers}</td>
                <td className="font-semibold min-w-[300px]">{description}</td>
                <td>
                  {tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F2F6FD] py-2 px-3 mb-2 mr-2 inline-block rounded-md border border-[#BCC3ED]"
                    >
                      {tag}
                    </div>
                  ))}
                </td>
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
