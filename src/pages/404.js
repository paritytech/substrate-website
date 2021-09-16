import { graphql, navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Icon from '../components/default/Icon';
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
        <div className="w-2/3 mx-auto mt-32 text-center self-center">
          <Icon name="four-oh-four" className="fill-current text-black dark:text-white w-full h-auto mb-16" />
          <h2 className="text-4xl mb-10 font-medium">{t('404.message')}</h2>
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
