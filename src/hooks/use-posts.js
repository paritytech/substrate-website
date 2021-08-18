import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(posts)/" } }) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                tags
                featured_image {
                  childImageSharp {
                    gatsbyImageData(width: 200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );
  return { posts };
};
