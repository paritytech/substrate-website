import { graphql } from 'gatsby';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React, { useEffect, useState } from 'react';

// import ListTypes from '../../components/layout/ecosystem/projects/ListTypes';
import CaseStudyBreadcrumb from '../../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';
import Card from '../../components/layout/ecosystem/projects/Card';
import ListCategories from '../../components/layout/ecosystem/projects/ListCategories';
import LocalSearch from '../../components/layout/ecosystem/projects/LocalSearch';
import { useProjects } from '../../hooks/use-projects';

const Projects = ({ location }) => {
  //console.log('location: ' + location.pathname);
  const { projects } = useProjects();
  // const [searchQuery, setSearchQuery] = useState('');
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const type = urlParams.get('type');
  //   const category = urlParams.get('category');

  //   console.log('searchParam: ' + type, category);
  // }, []);
  const currentUrl = location.href || 'https://substrate.io';
  const searchParams = new URL(currentUrl).searchParams;
  const activeCategory = searchParams.get('category');

  //const [selectedVersion, setSelectedVersion] = useState('VERSION_3_0');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setSelectedCategory(activeCategory || 'all');
  }, [activeCategory]);

  useEffect(() => {
    const url = currentUrl.split('?');
    if (selectedCategory) {
      if (selectedCategory === 'all') history.replaceState(null, null, url[0]);
      else history.replaceState(null, null, '?category=' + selectedCategory.toString());
    }
  }, [currentUrl, selectedCategory]);

  return (
    <Layout>
      <SEO
        title="Projects"
        description="Substrate Projects. More than 150 projects are building on Substrate, meet the teams. Find out more!"
      />
      <Section>
        <div className="mb-12 underline-animate underline-animate-thin">
          <CaseStudyBreadcrumb />
        </div>
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mb-8">
            <h2 id="projects" className="font-bold mb-0 lg:text-5xl capitalize">
              Projects
            </h2>
          </div>
          <hr className="hidden lg:block" />
        </div>
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
            <ListCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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
};

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

export default Projects;
