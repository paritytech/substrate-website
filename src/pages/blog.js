import { graphql } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import BlogList from '../components/blog/List';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function BlogPage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>{t('posts.title')}</h1>
      <nav>
        <Link to="/tags">{t('tags.title')}</Link>
      </nav>
      <BlogList models={posts} />
    </Layout>
  );
}

export const query = graphql`
  query ($language: String) {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(filter: { fields: { langKey: { eq: $language } }, fileAbsolutePath: { regex: "//(posts)/" } }) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            slug
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          fields {
            langKey
            slug
          }
        }
      }
    }
  }
`;
