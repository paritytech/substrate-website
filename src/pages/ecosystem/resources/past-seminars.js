import { graphql } from 'gatsby';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

const oldPlaylists = [
  'PLp0_ueXY_enU7jbm_A-3BrXiMbHPR0he0',
  'PLp0_ueXY_enWgF4FEhMUOZgK7DQJIswDM',
  'PLp0_ueXY_enXRfoaW7sTudeQH10yDvFOS',
  'PLp0_ueXY_enVAh4AfpAJtdBNCxL_eCs9K',
];

export default function PastSeminars() {
  return (
    <Layout layout="sidebar">
      <SEO
        title="Blockchain Past Webinars &amp; Seminars"
        description="Blockchain Past Webinars &amp; Seminars. Access to all our content. Substrate blockchain enables developers to quickly and easily build future-proof blockchains optimized for any use case. "
      />
      <Section>
        <h1 className="text-4xl font-bold font-body mb-6">Past Seminars</h1>
      </Section>
      <Section>
        <h2 className="text-2xl font-normal font-body mb-6 ">Substrate Seminar Live Streams (2023)</h2>
        <div className="flex flex-wrap gap-8">
          <iframe
            className="w-full lg:w-5/12 seminar-video rounded"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLOyWqupZ-WGsfgxkwTdMOwnbRW4nx_T-i"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-normal font-body mb-6">Substrate Seminar Live Streams (2021-2022)</h2>
        <div className="flex flex-wrap gap-8">
          {oldPlaylists.map((playlist, idx) => {
            return (
              <iframe
                key={idx}
                className="seminar-video w-full lg:w-5/12 rounded"
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            );
          })}
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
