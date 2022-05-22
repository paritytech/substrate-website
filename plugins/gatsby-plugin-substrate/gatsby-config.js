/* read the `.env.*` files, gatsby builtin */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    /* work with images
       - need to be after sourcing images
       - docs: https://www.gatsbyjs.com/plugins/gatsby-plugin-image */
    `gatsby-plugin-image`,
    /* transform and get data from images */
    `gatsby-plugin-sharp`,
    /* querying for images used in dynamic components */
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`],
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
  ],
};
