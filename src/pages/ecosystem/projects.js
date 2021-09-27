import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import teamsData from '../../../data/teams.json';
import AllTeams from '../../components/layout/ecosystem/teams/AllTeams';
import CatFilter from '../../components/layout/ecosystem/teams/CatFilter';
import TeamModal from '../../components/layout/ecosystem/teams/TeamModal';
import TypeFilter from '../../components/layout/ecosystem/teams/TypeFilter';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import useComponentVisible from '../../hooks/use-component-visible';

export default function Projects({ data }) {
  const { types, categories, teams } = teamsData;
  const { logos } = data;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [curType, setCurType] = useState('All Teams');
  const [curCat, setCurCat] = useState('All');
  const [curTeam, setCurTeam] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const category = urlParams.get('category');
    type && setCurType(type);
    category && setCurCat(category);
  }, []);

  return (
    <Layout>
      <SEO title="Teams" />
      <section className="container h-[400px] w-full bg-substrateGray-light dark:bg-substrateDark px-6 mb-20">
        <h3>_HeroSection</h3>
      </section>
      <section className="container px-6 mb-20">
        <h2 id="projects" className="mb-8 scroll-margin-top-100">
          Projects
        </h2>
        <TypeFilter types={types} curType={curType} setCurType={setCurType} />
        <CatFilter categories={categories} curCat={curCat} setCurCat={setCurCat} />
        <AllTeams
          teams={teams}
          setCurTeam={setCurTeam}
          setIsComponentVisible={setIsComponentVisible}
          curType={curType}
          curCat={curCat}
          logos={logos}
        />
      </section>
      {isComponentVisible && (
        <>
          <div
            id="content-container"
            className="flex justify-center items-center fixed inset-0 z-50 px-4 animate-fade-in"
          >
            <div
              ref={ref}
              className="bg-white h-auto dark:bg-darkBackground w-full max-w-md p-6 rounded-lg border-2 border-substrateDark shadow-xl"
            >
              <TeamModal curTeam={curTeam} logos={logos} setIsComponentVisible={setIsComponentVisible} />
            </div>
          </div>
          <div id="modal-background" className="opacity-25 dark:opacity-90 fixed inset-0 z-40 bg-substrateDark"></div>
        </>
      )}
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
