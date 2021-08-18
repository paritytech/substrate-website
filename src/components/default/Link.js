import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React from 'react';

const Link = ({ to, title, children, ...other }) => {
  const external = testExternalLink(to);
  if (external) {
    return (
      <a href={to} title={title} target="_blank" rel="noreferrer noopener">
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

const buildSubMenu = (menus, item) => {
  return menus[item.id];
};

const testExternalLink = href => {
  const regex = new RegExp('^(http|https)://', 'i');
  const match = regex.test(href);
  return match;
};

export { Link, buildSubMenu };
