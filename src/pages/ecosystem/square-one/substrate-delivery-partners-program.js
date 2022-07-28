import { graphql } from 'gatsby';
import { Layout, NavBreadcrumb, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import BlueTag from '../../../components/ui/BlueTag';

export default function DeliveryPartners({ data }) {
  const { pageInfo } = data;

  return (
    <Layout mode="full">
      <SEO
        title="Substrate Delivery Partners Program"
        description="Substrate teams have access to a rich ecosystem of motivated third-parties interested in taking services from the community."
      />
      <Section>
        <div className="hidden md:block mb-12 underline-animate underline-animate-thin capitalize">
          <NavBreadcrumb linkMiddleParent />
        </div>
        <div className="mb-20">
          <div className="mb-4">
            {pageInfo.frontmatter.requirements.map((req, index) => (
              <BlueTag key={index} title={req} />
            ))}
          </div>
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold">{pageInfo.frontmatter.title}</h1>
          <h3 className="font-semibold text-xl sm:text-2xl">{pageInfo.frontmatter.org}</h3>
        </div>
        <div className="markdown underline-animate underline-animate-thin max-w-4xl pb-20">
          <div dangerouslySetInnerHTML={{ __html: pageInfo.html }}></div>
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    pageInfo: markdownRemark(frontmatter: { title: { eq: "Substrate Delivery Partners Program" } }) {
      id
      frontmatter {
        title
        org
        requirements
        devStage
        description
      }
      html
    }
  }
`;
