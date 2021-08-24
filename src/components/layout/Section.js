import cx from 'classnames';
import React from 'react';

export default function Layout({ children }) {
  return <section className={cx('container pb-20')}>{children}</section>;
}
