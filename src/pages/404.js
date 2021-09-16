import { graphql, navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('404.title')} />
      <Section>
        <div className="w-2/3 mx-auto mt-10 text-center self-center">
          <h1 className="mb-10 four-oh-four-title text-9xl xl:text-four-oh-four">{t('404.title')}</h1>
          <h2 className="text-4xl mb-10 font-bold">{t('404.message')}</h2>
          <PrimaryButton onClick={() => navigate(-1)}>Go back</PrimaryButton>
        </div>
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
  }
`;
