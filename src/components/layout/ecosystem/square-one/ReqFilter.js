import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

export default function ReqFilter({ currentReq, setCurrentReq }) {
  const reqData = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(square-one/initiatives)/" } }) {
        edges {
          node {
            id
            frontmatter {
              requirements
            }
          }
        }
      }
    }
  `);
  const [requirements, setRequirements] = useState([]);
  useEffect(() => {
    reqData.allMarkdownRemark.edges.map(({ node }) => {
      setRequirements(prevState => [...new Set([...prevState, ...node.frontmatter.requirements])]);
    });
  }, []);

  return (
    <select
      className={cx('mb-2 w-full cursor-pointer text-sm', 'sm:w-auto', 'dark:bg-darkBackground', 'focus:outline-none')}
      value={currentReq}
      onChange={event => setCurrentReq(event.target.value)}
    >
      <option value="all">All Requirements</option>
      {requirements.map((req, index) => (
        <option key={index} value={req}>
          {req}
        </option>
      ))}
    </select>
  );
}
