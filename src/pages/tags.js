import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import TagList from '../components/tags/List';

export default function BlogPage({ data }) {
  const tags = data.allMarkdownRemark.edges;
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Tags" />
      <h1>{t('tags.title')}</h1>
      <TagList models={tags} />
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
    allMarkdownRemark(filter: { fields: { langKey: { eq: $language } }, fileAbsolutePath: { regex: "//(tags)/" } }) {
      edges {
        node {
          frontmatter {
            name
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
