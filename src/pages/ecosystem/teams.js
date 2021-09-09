// import cx from 'classnames';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import teamsData from '../../../data/teams.json';
import AllTeams from '../../components/layout/ecosystem/teams/AllTeams';
import CatFilter from '../../components/layout/ecosystem/teams/CatFilter';
import TypeFilter from '../../components/layout/ecosystem/teams/TypeFilter';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

export default function Teams({ data }) {
  const { types, categories, teams } = teamsData;
  const { logos } = data;
  const [curType, setCurType] = useState('All Teams');
  const [curCat, setCurCat] = useState('All');

  return (
    <Layout>
      <SEO title="Teams" />
      <section className="container h-[400px] w-full bg-substrateGray-light dark:bg-substrateDark px-6 mb-20">
        <h3>_HeroSection</h3>
      </section>
      <section className="container px-6 mb-20">
        <h2 className="mb-8">Teams</h2>
        <TypeFilter types={types} curType={curType} setCurType={setCurType} />
        <CatFilter categories={categories} curCat={curCat} setCurCat={setCurCat} />
        <AllTeams teams={teams} curType={curType} curCat={curCat} logos={logos} />
      </section>
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
    logos: allFile(filter: { sourceInstanceName: { eq: "icons" }, relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          publicURL
          name
          extension
        }
      }
    }
  }
`;
