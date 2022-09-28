import { graphql } from 'gatsby';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React, { useEffect } from 'react';

import Card from '../../components/layout/ecosystem/projects/Card';
import ListCategories from '../../components/layout/ecosystem/projects/ListCategories';
import ListTypes from '../../components/layout/ecosystem/projects/ListTypes';
import { useProjects } from '../../hooks/use-projects';

export default function Projects() {
  const { projects } = useProjects();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const category = urlParams.get('category');

    console.log('searchParam: ' + type, category);
  }, []);

  return (
    <Layout>
      <SEO
        title="Substrate Projects"
        description="Substrate Projects. More than 150 projects are building on Substrate, meet the teams. Find out more!"
      />
      <Section>
        <h2 id="projects" className="mb-8 scroll-margin-top-100">
          Projects
        </h2>
      </Section>
      <Section>
        TYPES filter:
        <ListTypes />
      </Section>
      <Section className="container mb-20 lg:px-10">
        <div className="lg:flex">
          <div className="hidden lg:block lg:flex-none w-52">
            INDUSTRY filter:
            <ListCategories />
          </div>
          <div className="lg:flex-grow min-h-screen">
            <div className="w-1/1 grid md:grid-cols-2 2xl:grid-cols-3">
              {projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="relative bg-substrateGray-light dark:bg-substrateDark rounded-md shadow-xl duration-75 ease-in-out hover:scale-105 hover:z-10"
                  >
                    <Card model={project} />
                  </div>
                );
              })}
            </div>
          </div>
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
