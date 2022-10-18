import { graphql, useStaticQuery } from 'gatsby';

export const useProjectTypes = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(project-types)/" } }
          sort: { fields: frontmatter___index, order: ASC }
        ) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                slug
                index
              }
              html
            }
          }
        }
      }
    `
  );
  return {
    projectTypes: allMarkdownRemark.edges,
  };
};
