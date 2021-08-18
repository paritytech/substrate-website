/* read the `.env.*` files, gatsby builtin */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = require('./config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    /* Custom ESLint to your Gatsby dev environment  */
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    /* use sass instead of css */
    {
      resolve: 'gatsby-plugin-sass',
    },

    /* Progressive Web App + Offline functionality
       (docs: https://gatsby.dev/offline) */
    /* `gatsby-plugin-offline`, */

    /* add seo headers and page titles, from pages/components */
    'gatsby-plugin-react-helmet',

    /* generate an application manifest.json */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e6007a`,
        theme_color: `#e6007a`,
        display: `minimal-ui`,
        /* icon path is relative to the root of the site. */
        icon: `media/favicon/favicon.png`,
      },
    },

    /* source file system for (code based) icon images (svg) */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs/`,
        },
      },
    },

    /* source file system for (cms) images/media/upload dir */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
      },
    },

    /* work with images
       - need to be after sourcing images
       - docs: https://www.gatsbyjs.com/plugins/gatsby-plugin-image */
    `gatsby-plugin-image`,
    /* transform and get data from images */
    `gatsby-plugin-sharp`,
    /* querying for images used in dynamic components */
    `gatsby-transformer-sharp`,

    /* allow to use relative path for images in markdown and frontmatter;
     used to work with netlify-cms, loaded after the media themselves */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // relative path for images in markdown content
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: `${__dirname}`, // `/media/` already in img.src
              include: ['featured_image', 'markdownremark']
            },
          },
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
        ],
      },
    },

    /* source file system for content dir */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content/`,
      },
    },

    /* source the locales for gatsby-react-i18next */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `de`, `fr`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          fallbackLng: 'en',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /* call the js file, instead of yaml */
        manualInit: true,
        /* Netlify CMS customization code directory. */
        modulePath: `${__dirname}/src/cms/index.js`,
        /* use netlify-identity widget to login */
        enableIdentityWidget: true,
      },
    },
  ],
};
