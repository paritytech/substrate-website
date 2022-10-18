import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

export default function BreadcrumbNav(props) {
  return (
    <nav className="hidden md:block mb-10 text-sm underline-animate underline-animate-thin font-medium">
      <Link to="/ecosystem">
        <span>Ecosystem</span>
      </Link>
      <span className="mx-2">»</span>
      {props.title ? (
        <>
          <Link to="/ecosystem/projects">
            <span>Projects</span>
          </Link>
          <span className="mx-2">»</span>
          <span>{props.title}</span>
        </>
      ) : (
        <span>Projects</span>
      )}
    </nav>
  );
}
