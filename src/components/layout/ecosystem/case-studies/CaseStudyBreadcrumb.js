import React from 'react';

import { Link } from '../../../default/Link';

export default function BreadcrumbNav(props) {
  return (
    <nav className="px-4 mb-10 text-sm underline-animate underline-animate-thin font-medium">
      <Link to="/ecosystem">
        <span>Ecosystem</span>
      </Link>
      <span className="mx-2">»</span>
      <Link to="/ecosystem/projects">
        <span>Projects</span>
      </Link>
      <span className="mx-2">»</span>
      <span>{props.title}</span>
    </nav>
  );
}
