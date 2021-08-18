const { createFilePath } = require('gatsby-source-filesystem');

const addLangFieldToMarkdown = ({ actions, getNode, node }) => {
  /* Add a `langKey` field on each node;
     based on which "root /content" folder, the nodes are in */
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  const langKey = fileNode.relativePath.split('/')[0];
  createNodeField({
    node,
    name: `langKey`,
    value: langKey,
  });
};

const addSlugFieldToMarkdown = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const filepaths = createFilePath({ node, getNode, basePath: `pages` })
    .split('/')
    .filter(pathElement => pathElement);
  const slugPath = filepaths[filepaths.length - 1];
  const slug = node.frontmatter && node.frontmatter.slug ? node.frontmatter.slug : slugPath;
  createNodeField({
    node,
    name: `slug`,
    value: slug,
  });
};

module.exports = {
  addLangFieldToMarkdown,
  addSlugFieldToMarkdown,
};
