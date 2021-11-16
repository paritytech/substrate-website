import { graphql, useStaticQuery } from 'gatsby';

export const useBanner = () => {
  const { markdownRemark: banner } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/banner/banner.md/" }) {
          html
          frontmatter {
            title
          }
        }
      }
    `
  );

  return { banner };
};
