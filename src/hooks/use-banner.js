import { graphql, useStaticQuery } from 'gatsby';

export const useBanner = () => {
  const {
    allMarkdownRemark: { edges: banner },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(banner)/" }, frontmatter: { active: { eq: true } } }
          sort: { fields: frontmatter___date_end, order: DESC }
          limit: 1
        ) {
          edges {
            node {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  return banner[0];
};
