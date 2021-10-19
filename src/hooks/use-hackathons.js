import { graphql, useStaticQuery } from 'gatsby';

export const useHackathons = () => {
  const {
    pastHackathons: { edges: past },
    upcomingHackathons: { edges: upcoming },
  } = useStaticQuery(
    graphql`
      query {
        pastHackathons: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(hackathons)/" }, isFuture: { eq: false } }
          sort: { fields: frontmatter___date_start, order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                date_start
                date_end
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
        upcomingHackathons: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(hackathons)/" }, isFuture: { eq: true } }
          sort: { fields: frontmatter___date_start, order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                date_start
                date_end
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

  return { past, upcoming };
};
