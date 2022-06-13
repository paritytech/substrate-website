import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMenus = () => {
  const {
    site: {
      siteMetadata: { menus },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menus {
            main {
              id
              url
            }
            footerMain {
              id
              url
            }
            technology {
              title
              subtitle
              menu {
                heading
                links {
                  id
                  url
                  subText
                }
              }
            }
            developers {
              title
              subtitle
              menu {
                heading
                links {
                  id
                  url
                  subText
                }
              }
            }
            about {
              title
              subtitle
              menu {
                heading
                links {
                  id
                  url
                  subText
                }
              }
            }
            ecosystem {
              title
              subtitle
              gridArea
              menu {
                heading
                links {
                  id
                  url
                  subText
                }
              }
            }
            legal {
              id
              url
            }
          }
        }
      }
    }
  `);
  return { menus };
};
