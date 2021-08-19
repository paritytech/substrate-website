import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Layout from '../components/site/Layout';
import NavMain from '../components/site/NavMain';
import SEO from '../components/site/SEO';

export default function IndexPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-9xl">{t('Hello')}</h1>
      <NavMain />
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
  }
`;
