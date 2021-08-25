import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React from 'react';

const Link = ({ to, title, children, ...other }) => {
  const external = testExternalLink(to);
  if (external) {
    return (
      <a href={to} title={title} {...other} target="_blank" rel="noreferrer noopener">
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

const testExternalLink = href => {
  const regex = new RegExp('^(http|https)://', 'i');
  const match = regex.test(href);
  return match;
};

export { Link, buildSubMenu, testExternalLink, LinkMenu };
