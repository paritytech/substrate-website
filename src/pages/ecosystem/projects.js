import { graphql } from 'gatsby';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React, { useEffect, useState } from 'react';

// import ListTypes from '../../components/layout/ecosystem/projects/ListTypes';
import CaseStudyBreadcrumb from '../../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';
import Card from '../../components/layout/ecosystem/projects/Card';
import ListCategories from '../../components/layout/ecosystem/projects/ListCategories';
import LocalSearch from '../../components/layout/ecosystem/projects/LocalSearch';
import { useProjects } from '../../hooks/use-projects';

export default function Projects() {
  const { projects } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
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
        <CaseStudyBreadcrumb />
        <h2 id="projects" className="scroll-margin-top-100 mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Projects
        </h2>
        <hr />
      </Section>
      <Section>
        <div className="flex items-center border-b mb-9 lg:ml-52">
          <LocalSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </Section>
      {/* <Section>
        TYPES filter:
        <ListTypes />
      </Section> */}
      <Section className="container mb-20 lg:px-10">
        <div className="lg:flex">
          <div className="hidden lg:block lg:flex-none w-52">
            <ListCategories />
          </div>
          <div className="lg:flex-grow min-h-screen">
            <div className="w-1/1 grid md:grid-cols-2 2xl:grid-cols-3">
              {projects.map((project, index) => {
                return <Card key={index} model={project} />;
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
