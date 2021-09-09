const path = require('path');

/*
   Notes:
   - all graphql function call returns a Promise
 */

const createBlogPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
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
  `);
  if (!result || !result.data) return;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

const createBlogTagsPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
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
              title
              slug
            }
            fields {
              langKey
              slug
            }
          }
        }
      }
    }
  `);
  if (!result || !result.data) return;

  /* create a page for each tag, with all articles with this tag */
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `tags/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-tag.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  /* The /tags page (for all tags) is a gatsby page */
};

module.exports = {
  createBlogPages,
  createBlogTagsPages,
};
