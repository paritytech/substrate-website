const { addLangFieldToMarkdown, addSlugFieldToMarkdown } = require('./gatsby-node/on-create-node.js');

exports.onCreateNode = props => {
  const { node } = props;
  if (node.internal.type === `MarkdownRemark`) {
    addLangFieldToMarkdown(props);
    addSlugFieldToMarkdown(props);
  }
};

const { modifyWebpackConfig } = require('./gatsby-node/on-create-webpack-config.js');

// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
exports.onCreateWebpackConfig = props => {
  const { stage } = props;
  // override config only during production JS & CSS build
  if (stage === 'build-javascript') {
    modifyWebpackConfig(props);
  }
};
