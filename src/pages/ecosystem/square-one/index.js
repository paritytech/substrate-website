import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Lottie from 'react-lottie';

import Icon from '../../../components/default/Icon';
import GeneralInfo from '../../../components/layout/ecosystem/square-one/GeneralInfo';
import HubspotFormReact from '../../../components/layout/ecosystem/square-one/HubspotFormReact';
import InitiativeSection from '../../../components/layout/ecosystem/square-one/InitiativeSection';
import RequirementsInfo from '../../../components/layout/ecosystem/square-one/RequirementsInfo';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButtonLink from '../../../components/ui/PrimaryButtonLink';
import * as animationData from '../../../images/animation/ecosystem/square-one.json';
import IndustryConnectLogo from '../../../images/png/sqaure-one/industry-connect.png';

export default function SquareOne({ data }) {
  const { heroInfo, generalInfo, requirementsInfo, initiativesInfo } = data;
  const {
    frontmatter: { title, subTitle, paragraphOne, paragraphTwo, heroButtonText, heroButtonLink },
  } = heroInfo;
  const [currentStage, setCurrentStage] = useState('all');
  const [currentReq, setCurrentReq] = useState('all');

  return (
    <Layout mode="full">
      <SEO title="Substrate Square One" />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-16">
          <div className="hidden lg:block lg:col-span-6 lg:col-start-6">
            <div className="aspect-w-10 aspect-h-10 xl:aspect-h-7 xl:w-full mb-8">
              <Lottie options={{ loop: false, animationData }} isClickToPauseDisabled height="full" width="full" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold">{title}</h1>
            <h3 className="mb-6 text-2xl md:text-3xl font-medium lg:pr-4">{subTitle}</h3>
            <p className="mb-8 md:text-lg font-medium leading-relaxed">{paragraphOne}</p>
            <p className="mb-8 md:text-lg font-medium leading-relaxed">{paragraphTwo}</p>
            <PrimaryButtonLink link={heroButtonLink}>{heroButtonText}</PrimaryButtonLink>
          </div>
        </div>
      </Section>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish pt-10 pb-2 lg:pt-20 lg:pb-14">
        <div className="container lg:px-10">
          <GeneralInfo data={generalInfo.edges} />
        </div>
      </div>
      <Section className="hidden lg:block">
        <div className="flex justify-around items-center mt-40 pb-32">
          <Icon name="polkadot-logo" className="w-64 fill-current dark:text-white" />
          <Icon name="w3f-logo" className="w-56 fill-current text-black dark:text-white" />
          <img src={IndustryConnectLogo} alt="Industry Connect Logo" className="w-[230px] h-auto rounded" />
        </div>
      </Section>
      <Section className="mt-20 lg:mt-0">
        <div className="mb-12 lg:text-center">
          <h2 className="text-2xl lg:font-extrabold lg:text-4xl mb-6">Begin your tailer-made Substrate journey</h2>
          <p className="capitalize text-xl">
            Explore the Substrate guide to the resources available to your team, based on your needs:
          </p>
        </div>
        <div>
          <RequirementsInfo data={requirementsInfo.edges} setCurrentReq={setCurrentReq} />
        </div>
      </Section>
      <Section>
        <div id="initiatives">
          <InitiativeSection
            data={initiativesInfo.edges}
            reqFilterData={requirementsInfo.edges}
            currentReq={currentReq}
            setCurrentReq={setCurrentReq}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        </div>
      </Section>
      <Section className="relative pt-4 sm:pt-24 sm:pb-20">
        <Icon name="diamond-green" className="hidden md:block absolute top-56 -left-80 opacity-20 w-1/3 -z-10" />
        <div className="mx-auto sm:p-8 max-w-[36.5rem] sm:shadow-xl bg-white dark:bg-darkBackground sm:dark:bg-substrateDark">
          <HubspotFormReact />
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    heroInfo: markdownRemark(fileAbsolutePath: { regex: "//(hero-section/hero.md)/" }) {
      id
      frontmatter {
        title
        subTitle
        paragraphOne
        paragraphTwo
        heroButtonText
        heroButtonLink
      }
    }
    generalInfo: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(info-section)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            icon
            order
          }
          html
        }
      }
    }
    requirementsInfo: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(square-one/requirements)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            link
            description
            order
          }
        }
      }
    }
    initiativesInfo: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(square-one/initiatives)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            org
            description
            link
            requirements
            devStage
          }
        }
      }
    }
  }
`;
