import { graphql } from 'gatsby';
import React, { useState } from 'react';

import data from '../../../data/teams.json';
import TypeFilter from '../../components/layout/ecosystem/teams/TypeFilter';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';

export default function Teams() {
  const { types } = data;
  const [curType, setCurType] = useState('All Teams');
  console.log(curType);
  return (
    <Layout>
      <SEO title="Teams" />
      <section className="container h-[400px] w-full bg-substrateGray-light px-6 mb-20">
        <h3>_HeroSection</h3>
      </section>
      <section className="container px-6">
        <h2 className="mb-8">Teams</h2>
        <TypeFilter types={types} curType={curType} setCurType={setCurType} />
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
  }
`;
