import { graphql } from 'gatsby';
import React from 'react';

import HackathonCard from '../../../components/layout/ecosystem/HackathonCard';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import { useHackathons } from '../../../hooks/use-hackathons';

export default function Hackathons() {
  const { hackathons } = useHackathons();

  const isUpcoming = event => {
    if (new Date(event.node.frontmatter.date_end) >= new Date()) {
      return true;
    }
  };

  return (
    <Layout layout="sidebar">
      <SEO
        title="Blockchain Hackathons &amp; Prizes Apply now!"
        description="Blockchain Hackathons &amp; Prizes. Apply now! Challenge yourself, up your game, and connect with the community. There are great prizes up for grabs too. Find out more!"
      />
      <Section>
        <h1 className="text-4xl font-bold mb-4">Blockchain Hackathons &amp; Prizes</h1>
        <p>
          Challenge yourself, up your game, and connect with the community. There are great prizes up for grabs too.
        </p>
        {hackathons.map((hackathon, idx) => {
          return (
            <div key={idx}>
              {isUpcoming(hackathon) && idx === 0 ? (
                <h3 className="font-medium text-2xl mb-8 mt-14">Upcoming events:</h3>
              ) : idx === 0 || (!isUpcoming(hackathon) && isUpcoming(hackathons[idx - 1])) ? (
                <h3 className="font-medium text-2xl mb-8 mt-14">Past events:</h3>
              ) : null}
              <HackathonCard hackathon={hackathon} />
            </div>
          );
        })}
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
