import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import Blockqoute from '../components/layout/ecosystem/case-studies/Blockqoute';
import CaseStudyBreadcrumb from '../components/layout/ecosystem/case-studies/CaseStudyBreadcrumb';

export default function ProjectPageTemplate({ pageContext }) {
  const { node } = pageContext;
  const { html, frontmatter } = node;
  const {
    title,
    type,
    description,
    category,
    featured_image,
    link,
    show_case_study,
    blockqoute,
    blockqoute_author,
    blockqoute_author_image,
  } = frontmatter;
  const image = getImage(featured_image);
  const hasCaseStudy = show_case_study && html && true;
  const hasBlockqoute = blockqoute && blockqoute_author && true;
  // console.log(images);

  return (
    <Layout layout="sidebar" hasBreadcrumbs={false}>
      <SEO title={title} />
      <Section>
        <CaseStudyBreadcrumb title={title} />
        <article>
          <header>
            <div id="overview" className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <GatsbyImage
                className="h-[110px] w-[110px] mr-4 object-contain mb-6 rounded-full"
                image={image}
                alt={`${title} Project Logo`}
              />
              <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
            </div>
            <p className="text-xl lead">{description}</p>
            <p className="text-xl lead">{link}</p>
            <div>
              <div className="text-sm">
                TYPE:
                {type &&
                  type.map((name, index) => {
                    return (
                      <span key={index}>
                        {index > 0 && ', '} {name}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div>
              <div className="text-sm">
                INDUSTRY:
                {category &&
                  category.map((name, index) => {
                    return (
                      <span key={index}>
                        {index > 0 && ', '} {name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </header>
          {hasCaseStudy && (
            <div id="case-study">
              <h2 className="tracking-wider uppercase mb-4">Case Study</h2>
              {hasBlockqoute && (
                <Blockqoute text={blockqoute} name={blockqoute_author} image={blockqoute_author_image} />
              )}
              <main>
                <div dangerouslySetInnerHTML={{ __html: html }} />
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
