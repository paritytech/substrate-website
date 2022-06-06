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
                id
                heading
                links {
                  text
                  href
                  subText
                }
              }
            }
            developers {
              title
              subtitle
              menu {
                id
                heading
                links {
                  text
                  href
                  subText
                }
              }
            }
            about {
              title
              subtitle
              menu {
                id
                heading
                links {
                  text
                  href
                  subText
                }
              }
            }
            vision {
              id
              url
            }
            ecosystem {
              title
              subtitle
              gridArea
              menu {
                id
                heading
                links {
                  text
                  href
                  subText
                }
              }
            }
            opportunities {
              id
              url
            }
            resources {
              id
              url
            }
            connect {
              id
              url
            }
            legal {
              id
              url
            }
            extra {
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
