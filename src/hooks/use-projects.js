import { graphql, useStaticQuery } from 'gatsby';

export const useProjects = () => {
  const {
    allMarkdownRemark: { edges: projects },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(projects)//" } }
          sort: { order: ASC, fields: fileAbsolutePath }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                description
                category
                link
                featured_image {
                  childImageSharp {
                    gatsbyImageData(width: 1200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
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
    `
  );
  return { projects };
};
