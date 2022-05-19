import { useI18next } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-plugin-substrate/src/components/default/Link';
import React from 'react';

const SelectLanguage = () => {
  const { languages, originalPath } = useI18next();
  const links = languages.map(lang => (
    <li key={lang}>
      <Link to={originalPath} language={lang}>
        {lang}
      </Link>
    </li>
  ));

  return <ul>{links}</ul>;
};

export default SelectLanguage;
