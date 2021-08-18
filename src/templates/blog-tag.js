import { graphql } from 'gatsby';
import React from 'react';

import BlogList from '../components/blog/List';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import TagCard from '../components/tags/Card';

export default function BlogPostPage({ data }) {
  return (
    <Layout>
      <SEO title="Tag" />
      <main>
        <TagCard model={data.tag} />
        <BlogList models={data.posts.edges} />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!, $language: String) {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    tag: markdownRemark(
      fields: { slug: { eq: $slug }, langKey: { eq: $language } }
      fileAbsolutePath: { regex: "//(tags)/" }
    ) {
      html
      frontmatter {
        name
      }
      fields {
        slug
      }
    }
    posts: allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: $language } }
        fileAbsolutePath: { regex: "//(posts)/" }
        frontmatter: { tags: { in: [$slug] } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
