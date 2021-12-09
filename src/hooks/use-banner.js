import { graphql, useStaticQuery } from 'gatsby';

export const useBanner = () => {
  const {
    allMarkdownRemark: { edges: banner },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(banner)/" }, frontmatter: { active: { eq: true } } }
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

  return banner;
};
