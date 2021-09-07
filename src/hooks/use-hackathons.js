import { graphql, useStaticQuery } from 'gatsby';

export const useHackathons = () => {
  const {
    allMarkdownRemark: { edges: hackathons },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(hackathons)/" } }) {
          edges {
            node {
              html
              frontmatter {
                title
                city
                date
                prize
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
  return { hackathons };
};
