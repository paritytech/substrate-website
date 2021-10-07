import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

const DocsLink = ({ to, title, children, ...other }) => {
  const { colorMode } = useContext(ThemeContext);

  const handleDocsLink = (e, to) => {
    if (colorMode === 'light') return;
    e.preventDefault();
    window.location.href = to + `?mode=${colorMode}`;
  };

  return (
    <a href={to} title={title} onClick={e => handleDocsLink(e, to)} {...other}>
      {children}
    </a>
  );
};

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
      <DocsLink to={to} title={title} {...other}>
        {children}
      </DocsLink>
    );
  } else {
    return (
      <LinkI18n to={to} title={title} {...other}>
        {children}
      </LinkI18n>
    );
  }
};

const LinkMenu = ({ prefix, slug, title, children, ...other }) => {
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
      <DocsLink to={slug} title={title} {...other}>
        {children}
      </DocsLink>
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
