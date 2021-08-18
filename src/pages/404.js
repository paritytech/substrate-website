import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('404.title')} />
      <h1>{t('404.title')}</h1>
      <p>{t('404.message')}</p>
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
