import { graphql, useStaticQuery } from 'gatsby';

export const useBanner = () => {
  const {
    markdownRemark: { html: banner },
  } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/banner/banner.md/" }) {
          html
        }
      }
    `
  );

  return { banner };
};
