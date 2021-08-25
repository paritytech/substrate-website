import cx from 'classnames';
import React from 'react';

export default function Layout({ children, className }) {
  return <section className={cx(className, 'container pb-20')}>{children}</section>;
}
