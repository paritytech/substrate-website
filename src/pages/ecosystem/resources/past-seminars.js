import { graphql } from 'gatsby';
import { Icon, Layout, LineArrowButton, Link, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import seminars from '../../../../data/seminars.json';

export default function PastSeminars() {
  return (
    <Layout layout="sidebar">
      <SEO
        title="Blockchain Past Webinars &amp; Seminars"
        description="Blockchain Past Webinars &amp; Seminars. Access to all our content. Substrate blockchain enables developers to quickly and easily build future-proof blockchains optimized for any use case. "
      />
      <Section>
        <h1 className="text-4xl font-bold font-body mb-6">Blockchain Past Webinars &amp; Seminars</h1>
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
