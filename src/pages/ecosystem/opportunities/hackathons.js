import { graphql } from 'gatsby';
import React from 'react';

import HackathonCard from '../../../components/layout/ecosystem/HackathonCard';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import { useHackathons } from '../../../hooks/use-hackathons';

export default function Hackathons() {
  const { hackathons } = useHackathons();

  return (
    <Layout layout="sidebar">
      <SEO title="Hackathons" />
      <Section>
        <h2 className="text-4xl font-bold mb-4">Hackathons</h2>
        <p>Ready for the challenge? Build, create, and hack to your heart&apos;s content. Join a hackathon</p>
        <h3 className="font-medium text-2xl mb-8 mt-10">Recent events:</h3>
        {hackathons && hackathons.map((hackathon, idx) => <HackathonCard key={idx} hackathon={hackathon} />)}
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
