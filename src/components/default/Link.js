import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React from 'react';

const Link = ({ to, title, children, ...other }) => {
  const external = testExternalLink(to);
  const docsLink = testDocsLink(to);

  if (external) {
    return (
      <a href={to} title={title} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else if (docsLink) {
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

const LinkMenu = ({ prefix, slug, children, ...other }) => {
  const external = testExternalLink(slug);
  const docsLink = testDocsLink(slug);
  if (external) {
    return (
      <a href={slug} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else if (docsLink) {
    return (
      <a href={slug} {...other}>
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
