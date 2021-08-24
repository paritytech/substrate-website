import cx from 'classnames';
import React from 'react';

export default function Layout({ children }) {
  return <section className={cx('container mb-20')}>{children}</section>;
}
