import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import CaseStudyBreadcrumb from '../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function ProjectPageTemplate({ pageContext }) {
  const { node } = pageContext;
  const { html, frontmatter } = node;
  const { title, featured_image } = frontmatter;
  const image = getImage(featured_image);

  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title={title} />
      <Section>
        <CaseStudyBreadcrumb title={title} />
        <article>
          <header>
            <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <GatsbyImage className="w-20 h-20 mr-4" image={image} alt={`${title} Project Logo`} />
              <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
            </div>
          </header>
          <div className="tracking-wider uppercase mb-4">Case Study</div>
          <main>{html && <div id="case-study" dangerouslySetInnerHTML={{ __html: html }} />}</main>
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
