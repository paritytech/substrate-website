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
                  href
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
                  href
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
                heading
                links {
                  id
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
