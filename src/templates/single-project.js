import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon, Layout, Section, SEO } from 'gatsby-plugin-substrate';
import React from 'react';

import Blockquote from '../components/layout/ecosystem/case-studies/Blockquote';
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
    blockquote,
    blockquote_author,
    blockquote_author_avatar,
  } = frontmatter;
  const image = getImage(featured_image);
  const hasCaseStudy = show_case_study && html && true;
  const hasBlockquote = blockquote && blockquote_author && true;
  console.log(pageContext);

  return (
    <Layout layout="sidebar" hasBreadcrumbs={false} hasArticleNav={false} navSidebarData={['one', 'teo', 'there']}>
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
            <div className="flex items-center mb-2">
              <div className="bg-substrateGreen rounded-full h-2 w-2 flex-none mr-3"></div>
              <a
                href={link}
                className="text-substrateGreen underline-animate underline-animate-thin text-xl lead group flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
                <Icon
                  name="external-link"
                  className="lg:hidden group-hover:block h-3 w-3 ml-2 fill-current text-substrateGreen animate-fade-in duration-75"
                />
              </a>
            </div>
            <div className="mb-2">
              <b>TYPE:</b>
              {type &&
                type.map((name, index) => {
                  return (
                    <span key={index} className="capitalize">
                      {index > 0 && ', '} {name.replaceAll('-', ' ')}
                    </span>
                  );
                })}
            </div>
            <div>
              <div className="mb-2">
                <b>CATEGORY:</b>
                {category &&
                  category.map((name, index) => {
                    return (
                      <span key={index} className="capitalize">
                        {index > 0 && ', '} {name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </header>
          <hr className="my-5" />
          {hasCaseStudy && (
            <div
              id="case-study"
              className="lg:bg-substrateGray-light lg:dark:bg-substrateBlackish dark:border-substrateDarkThemeGrey p-6"
            >
              <h2 className="uppercase mb-4">Case Study</h2>
              {hasBlockquote && (
                <Blockquote text={blockquote} name={blockquote_author} image={blockquote_author_avatar} />
              )}
              <main>
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: html }} />
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
