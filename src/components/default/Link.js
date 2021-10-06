import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React from 'react';

// TODO: replace sameWindow with testDocsLink?

const Link = ({ to, title, children, sameWindow = false, ...other }) => {
  const external = testExternalLink(to);
  if (external && !sameWindow) {
    return (
      <a href={to} title={title} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else if (external && sameWindow) {
    return (
      <a href={to} title={title} {...other}>
        {children}
      </a>
    );
  } else {
    return (
      <LinkI18n to={to} title={title} {...other}>
        {children}
      </LinkI18n>
    );
  }
};

const LinkMenu = ({ prefix, slug, children, internal = null, ...other }) => {
  const external = testExternalLink(slug);
  if (external && internal) {
    return (
      <a href={slug} {...other}>
        {children}
      </a>
    );
  } else if (external) {
    return (
      <a href={slug} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else {
    return (
      <LinkI18n to={prefix + slug} {...other}>
        {children}
      </LinkI18n>
    );
  }
};

const buildSubMenu = (menus, item) => {
  return menus[item.id];
};

const testDocsLink = href => {
  const regex = new RegExp(process.env.GATSBY_DOCS_URL, 'i');
  const match = regex.test(href);
  return match;
};

const testExternalLink = href => {
  if (testDocsLink(href)) {
    return false;
  }
  const regex = new RegExp('^(http|https)://', 'i');
  const match = regex.test(href);
  return match;
};

export { Link, buildSubMenu, testExternalLink, LinkMenu };
