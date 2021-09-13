import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React, { useEffect, useState } from 'react';

import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function AwesomeSubstrate({ pageContext, data }) {
  const [currentSection, setCurrentSection] = useState(null);

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const html = data.markdownRemark.html;

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3');

    const articleNav = document.querySelector('#article-nav');

    const options = {
      rootMargin: '-9% 0% -90% 0%',
      threshold: 0,
    };

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    headings.forEach((heading, index) => {
      if (index === 0) {
        return;
      }
      const articleLink = document.createElement('a');
      articleNav.appendChild(articleLink);
      articleLink.innerHTML = '<p class="mb-1">' + heading.innerHTML + '</p>';
      articleLink.setAttribute('href', '#' + heading.id);
      articleLink.id = heading.id + '-link';
      articleLink.classList.add('article-link');
      articleLink.onclick = () => {
        setTimeout(() => {
          setCurrentSection(heading.id);
        }, 700);
      };
    });

    headings.forEach((heading, index) => {
      if (index === 0) {
        return;
      }
      observer.observe(heading);
    });
  }, [html]);

  useEffect(() => {
    const current = document.querySelector(`#${currentSection}-link`);
    const allLinks = document.querySelectorAll('.article-link');
    if (current) {
      allLinks.forEach(link => {
        link.style.fontWeight = '400';
      });
      current.style.fontWeight = '700';
    }
  }, [currentSection]);

  return (
    <Layout layout="sidebar article-nav">
      <SEO title="Awesome Substrate" />
      <div className="container hidden md:block lg:px-10 mb-10 underline-animate underline-animate-thin">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel="Awesome Substrate"
          hiddenCrumbs={['/']}
          disableLinks={['/ecosystem/resources/awesome-substrate', '/ecosystem/resources']}
          className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
        />
      </div>
      <Section>
        <h2 id="awesome-substrate" className="text-4xl font-bold mb-6">
          Awesome Substrate
        </h2>
        <p className="text-lg font-medium">An awesome list is a list of awesome things curated by the community.</p>
        <p>
          Substrate is a framework for building upgradable, modular and efficient blockchains.
          <br />
          Substrate is an open-source library of Rust code that is maintained by{' '}
          <span className="underline-animate underline-animate-thin">
            <Link to="https://parity.io/">Parity Technologies</Link>.
          </span>
        </p>
      </Section>
      <Section>
        <div
          className="markdown underline-animate underline-animate-thin"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/awesome-substrate/index.md/" }) {
      html
    }
  }
`;
