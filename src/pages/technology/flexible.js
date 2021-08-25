import { graphql } from 'gatsby';
import React from 'react';

import Icon from '../../components/default/Icon';
import Section from '../../components/layout/Section';
import Feature from '../../components/layout/technology/Feature';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import Blockquote from '../../components/ui/Blockquote';

const Flexible = () => {
  return (
    <Layout>
      <SEO title="Flexible" />
      <Section col={2} children2={<Icon name="placeholder" className="w-full h-auto" />}>
        <Feature
          title="Intentional"
          learnMore="If you want to know more about this feature"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the
            specific intent of the applications in mind. General purpose blockchains require developers to work within
            the rigid boundaries of the design decisions made by others.
          </p>
          <Blockquote>
            {`Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
            within the confines of others' design decisions.`}
          </Blockquote>
          <p>
            The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the
            specific intent of the applications in mind. General purpose blockchains require developers to work within
            the rigid boundaries of the design decisions made by others.
          </p>
        </Feature>
      </Section>
      <Section col={2} mode="reversed" children2={<Icon name="placeholder" className="w-full h-auto" />}>
        <Feature
          title="Forkless"
          learnMore="If you want to know more about this feature"
          link="/"
          linkText="Explore Architecture"
        >
          <p>
            The root cause of developers having to make tradeoffs is that legacy blockchains are not designed with the
            specific intent of the applications in mind. General purpose blockchains require developers to work within
            the rigid boundaries of the design decisions made by others.
          </p>
          <Blockquote>
            {`Substrate is a fully modular blockchain framework that unleashes developers instead of forcing them to work
            within the confines of others' design decisions.`}
          </Blockquote>
        </Feature>
      </Section>
    </Layout>
  );
};

export default Flexible;

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
