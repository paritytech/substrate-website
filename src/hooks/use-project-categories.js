import { graphql, useStaticQuery } from 'gatsby';

export const useProjectCategories = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//(project-categories)/" } }
          sort: { fields: frontmatter___slug, order: ASC }
        ) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                slug
              }
              html
            }
          }
        }
      }
    `
  );
  return {
    projectCategories: allMarkdownRemark.edges,
  };
};
