import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import NavBreadcrumb from '../../../components/site/NavBreadcrumb';
import SEO from '../../../components/site/SEO';
import BlueTag from '../../../components/ui/BlueTag';

export default function AcceleratorsAndIncubators({ data }) {
  const { pageInfo } = data;

  return (
    <Layout mode="full">
      <SEO title="Substrate Delivery Partners Program" />
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
      <Section>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">Incubators</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {pageInfo.frontmatter.incubators.map((img, idx) => (
            <GatsbyImage key={idx} image={getImage(img)} alt={img.name} className="rounded-lg" />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl sm:text-4xl font-extrabold">Accelerators</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {pageInfo.frontmatter.accelerators.map((img, idx) => (
            <GatsbyImage key={idx} image={getImage(img)} alt={img.name} className="rounded-lg" />
          ))}
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
    pageInfo: markdownRemark(frontmatter: { title: { eq: "Accelerators & Incubators" } }) {
      id
      frontmatter {
        title
        org
        requirements
        devStage
        description
        incubators {
          childImageSharp {
            gatsbyImageData(height: 100)
          }
          name
        }
        accelerators {
          childImageSharp {
            gatsbyImageData(height: 100)
          }
          name
        }
      }
      html
    }
  }
`;
