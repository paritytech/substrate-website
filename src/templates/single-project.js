import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import CaseStudyBreadcrumb from '../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';

export default function ProjectPageTemplate({ pageContext }) {
  const { node } = pageContext;
  const { html, frontmatter } = node;
  const { title, featured_image, show_case_study } = frontmatter;
  const image = getImage(featured_image);
  const hasCaseStudy = show_case_study && html && true;

  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title={title} />
      <Section>
        <CaseStudyBreadcrumb title={title} />
        <article>
          <header>
            <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <GatsbyImage
                className="w-20 h-20 mr-4 object-contain mb-6 dark:bg-gray-300 rounded-full"
                image={image}
                alt={`${title} Project Logo`}
              />
              <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
            </div>
          </header>
          {hasCaseStudy && (
            <div>
              <div className="tracking-wider uppercase mb-4">Case Study</div>
              <main>
                <div id="case-study" dangerouslySetInnerHTML={{ __html: html }} />
              </main>
            </div>
          )}
        </article>
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
