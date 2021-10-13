import { Link as LinkI18n } from 'gatsby-plugin-react-i18next';
import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

const addTrailingSlash = uri => {
  const addSlash = uri => {
    uri += uri.endsWith('/') ? '' : '/';
    return uri;
  };

  if (uri.indexOf('#') > 0) {
    const hash = uri.substring(uri.indexOf('#'), uri.length);
    uri = addSlash(uri.replace(hash, ''));
    return uri + hash;
  }
  uri = addSlash(uri);
  return uri;
};

const InfraLink = ({ to, title, children, ...other }) => {
  const { colorMode } = useContext(ThemeContext);

  const handleClick = (e, to) => {
    e.preventDefault();
    window.location.href = addTrailingSlash(to) + `?mode=${colorMode}`;
  };

  return (
    <a href={addTrailingSlash(to)} title={title} onClick={e => handleClick(e, to)} {...other}>
      {children}
    </a>
  );
};

const Link = ({ to, title, children, ...other }) => {
  const external = testExternalLink(to);
  const infraLink = testInfraLink(to);

  if (external) {
    return (
      <a href={to} title={title} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else if (infraLink) {
    return (
      <InfraLink to={to} title={title} {...other}>
        {children}
      </InfraLink>
    );
  } else {
    return (
      <LinkI18n to={addTrailingSlash(to)} title={title} {...other}>
        {children}
      </LinkI18n>
    );
  }
};

const LinkMenu = ({ prefix, slug, title, children, ...other }) => {
  const external = testExternalLink(slug);
  const infraLink = testInfraLink(slug);
  if (external) {
    return (
      <a href={slug} {...other} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  } else if (infraLink) {
    return (
      <InfraLink to={slug} title={title} {...other}>
        {children}
      </InfraLink>
    );
  } else {
    return (
      <LinkI18n to={addTrailingSlash(prefix + slug)} {...other}>
        {children}
      </LinkI18n>
    );
  }
};

const buildSubMenu = (menus, item) => {
  return menus[item.id];
};

const testInfraLink = href => {
  const regex = new RegExp(process.env.GATSBY_DOCS_URL, 'i');
  const match = regex.test(href);
  return match;
};

const testExternalLink = href => {
  if (testInfraLink(href)) {
    return false;
  }
  const regex = new RegExp('^(http|https)://', 'i');
  const match = regex.test(href);
  return match;
};

export { Link, buildSubMenu, testExternalLink, testInfraLink, LinkMenu };
