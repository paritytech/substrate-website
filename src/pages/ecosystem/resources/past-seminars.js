import { graphql } from 'gatsby';
import { Icon, Layout, LineArrowButton, Link, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

const Playlists = [
  { id: 'PLOyWqupZ-WGsfgxkwTdMOwnbRW4nx_T-i', title: 'Substrate Seminars', date: 'Jul 2023' },
  { id: 'PLp0_ueXY_enU7jbm_A-3BrXiMbHPR0he0', title: 'Runtime Development', date: 'Sept 2022' },
  { id: 'PLp0_ueXY_enWgF4FEhMUOZgK7DQJIswDM', title: 'Application Development', date: 'Oct 2022' },
  { id: 'PLp0_ueXY_enXRfoaW7sTudeQH10yDvFOS', title: 'Testing, Launching and Tooling', date: 'Oct 2022' },
  { id: 'PLp0_ueXY_enVAh4AfpAJtdBNCxL_eCs9K', title: 'Parachain Builders', date: 'Sept 2022' },
];

export default function PastSeminars() {
  return (
    <Layout layout="sidebar">
      <SEO title="Past Seminars" />
      <Section>
        <h1 id="awesome-substrate" className="text-4xl font-bold font-body mb-6">
          Past Seminars
        </h1>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
          {Playlists.map(({ id, title, date }, idx) => (
            <Link to={`https://www.youtube.com/playlist?list=${id}`} key={idx}>
              <div className="mb-1 h-full shadow-xl p-8 rounded-md bg-white dark:bg-substrateBlackish flex flex-col justify-between hover:scale-105 transition-transform">
                <h3 className="mb-4 text-xl font-bold">{title}</h3>
                <div>
                  <div className="flex mb-2">
                    <Icon className="mr-2 mt-0.5 fill-current text-black dark:text-white" name="date" />
                    <p className="mb-0">{date}</p>
                  </div>
                  <LineArrowButton link={`https://www.youtube.com/playlist?list=${id}`} primary>
                    Watch Playlist
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
