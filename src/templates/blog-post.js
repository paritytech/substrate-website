import { graphql } from 'gatsby';
import React from 'react';

import BlogSingle from '../components/blog/Single';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function BlogPostPage({ data }) {
  const { markdownRemark } = data;
  return (
    <Layout>
      <SEO title="Post" />
      {markdownRemark && <BlogSingle model={markdownRemark} />}
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
    markdownRemark(
      fields: { slug: { eq: $slug }, langKey: { eq: $language } }
      fileAbsolutePath: { regex: "//(posts)/" }
    ) {
      html
      frontmatter {
        title
        slug
        tags
        featured_image {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
