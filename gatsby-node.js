const { addLangFieldToMarkdown, addSlugFieldToMarkdown } = require('./gatsby-node/on-create-node.js');

// FIX: frontmatter missing in tag model
// const { createBlogPages, createBlogTagsPages } = require('./gatsby-node/create-pages.js');

exports.onCreateNode = props => {
  const { node } = props;
  if (node.internal.type === `MarkdownRemark`) {
    addLangFieldToMarkdown(props);
    addSlugFieldToMarkdown(props);
  }
};

exports.createPages = async props => {
  // await Promise.all([createBlogPages(props)]);
  // await Promise.all([createBlogTagsPages(props)]);
};
