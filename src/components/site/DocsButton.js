import { Link } from 'gatsby';
import React from 'react';

import Icon from '../default/Icon';

export default function DocsButton() {
  return (
    // TODO: add docs link
    // TODO: add docs title i18n
    <Link
      to="https://substrate-docs-staging.netlify.app/v3"
      className="block opacity-100 transform transition duration-300 ease-in-out hover:opacity-80"
    >
      <button className="flex items-center justify-center bg-substrateDark dark:bg-white  text-sm py-2 w-20 rounded focus:outline-none fill-current text-white dark:text-black">
        <Icon name="docs" />
        <span className="pl-2">Docs</span>
      </button>
    </Link>
  );
}
