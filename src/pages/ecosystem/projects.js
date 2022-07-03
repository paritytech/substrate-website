import { graphql } from 'gatsby';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React, { useEffect } from 'react';

import Card from '../../components/layout/ecosystem/projects/Card';
import { useProjects } from '../../hooks/use-projects';

export default function Projects() {
  const { projects } = useProjects();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const category = urlParams.get('category');

    console.log(type, category);
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
        <div className="flex flex-wrap pl-px -mr-px">
          {projects.map((project, index) => {
            return (
              <div key={index} className="w-1/1 md:w-1/2 xl:w-1/3 -mt-px -ml-px">
                <Card model={project} />
              </div>
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
