import { graphql } from 'gatsby';
import React from 'react';

import HackathonCard from '../../../components/layout/ecosystem/HackathonCard';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import { useHackathons } from '../../../hooks/use-hackathons';

export default function Hackathons() {
  const { past, upcoming } = useHackathons();

  return (
    <Layout layout="sidebar">
      <SEO title="Hackathons" />
      <Section>
        <h2 className="text-4xl font-bold mb-4">Hackathons</h2>
        <p>
          Challenge yourself, up your game, and connect with the commmunity. There are great prizes up for grabs, too.
        </p>
        {upcoming && (
          <div className="mb-20">
            <h3 className="font-medium text-2xl mb-8 mt-10">Upcoming events:</h3>
            {upcoming.map((hackathon, idx) => (
              <HackathonCard key={idx} hackathon={hackathon} />
            ))}
          </div>
        )}
        <h3 className="font-medium text-2xl mb-8 mt-10">Past events:</h3>
        {past && past.map((hackathon, idx) => <HackathonCard key={idx} hackathon={hackathon} />)}
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
