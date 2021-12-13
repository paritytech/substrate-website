import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';

import teamsData from '../../../data/teams.json';
import Icon from '../../components/default/Icon';
import AllTeams from '../../components/layout/ecosystem/teams/AllTeams';
import CaseStudyFilter from '../../components/layout/ecosystem/teams/CaseStudyFilter';
import CatFilter from '../../components/layout/ecosystem/teams/CatFilter';
import TeamModal from '../../components/layout/ecosystem/teams/TeamModal';
import TypeFilter from '../../components/layout/ecosystem/teams/TypeFilter';
import Section from '../../components/layout/Section';
import Layout from '../../components/site/Layout';
import SEO from '../../components/site/SEO';
import useComponentVisible from '../../hooks/use-component-visible';
import { isBrowser } from '../../utils/browser';

export default function Projects({ data }) {
  const { types, categories, teams } = teamsData;
  const { logos } = data;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [curType, setCurType] = useState('All Teams');
  const [curCat, setCurCat] = useState('All');
  const [curTeam, setCurTeam] = useState();
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [modalIsOpen, modalSetOpen] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const category = urlParams.get('category');
    type && setCurType(type);
    category && setCurCat(category);
  }, []);

  useEffect(() => {
    setDidMount(true);
  });

  return (
    <Layout>
      {isBrowser && didMount && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={modalIsOpen}
          videoId="WFbUc15ZhgU"
          onClose={() => modalSetOpen(false)}
        />
      )}
      <SEO title="Projects" />

      <Section>
        <div className="grid lg:grid-cols-2">
          <div className="self-center lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-extrabold xl:text-6xl mb-6">Meet The Teams</h1>
            <p className="font-semibold text-xl md:text-2xl lg:text-3xl">
              More than 150 projects are building on Substrate
            </p>
            <p className="font-medium text-lg">
              Some of the most exciting projects in decentralized tech are building on Substrate, creating Polkadot
              parachains, independent layer-1 blockchains, and infrastructure.
            </p>
          </div>
          <div
            onClick={() => modalSetOpen(true)}
            className="w-full relative rounded-md shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <StaticImage
              src="../../images/photos/ecosystem/home/youtube.jpg"
              alt="Meet Substrate Teams"
              className="aspect-w-3 aspect-h-2 w-full h-full m-0 relative rounded-md overflow-hidden"
            />
            <h3 className="absolute top-8 left-8 text-white font-bold text-2xl mb-2">Meet Substrate teams</h3>
            <p className="absolute left-8 bottom-8 text-white opacity-75 m-0 text-lg">
              Find out why more than 150 projects are building on Substrate.
            </p>
            <Icon
              name="play"
              className="w-12 h-12 absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </Section>

      <Section>
        <h2 id="projects" className="mb-8 scroll-margin-top-100">
          Projects
        </h2>
        <TypeFilter types={types} curType={curType} setCurType={setCurType} />
        <CaseStudyFilter showCaseStudies={showCaseStudies} setShowCaseStudies={setShowCaseStudies} />
        <CatFilter categories={categories} curCat={curCat} setCurCat={setCurCat} />
        <AllTeams
          teams={teams}
          setCurTeam={setCurTeam}
          setIsComponentVisible={setIsComponentVisible}
          curType={curType}
          curCat={curCat}
          showCaseStudies={showCaseStudies}
          logos={logos}
        />
      </Section>

      {isComponentVisible && (
        <>
          <div
            id="content-container"
            className="flex justify-center items-center fixed inset-0 z-50 px-4 animate-fade-in"
          >
            <div
              ref={ref}
              className="bg-white h-auto dark:bg-darkBackground w-full max-w-md p-6 rounded-lg border-2 border-substrateDark shadow-xl"
            >
              <TeamModal curTeam={curTeam} logos={logos} setIsComponentVisible={setIsComponentVisible} />
            </div>
          </div>
          <div id="modal-background" className="opacity-25 dark:opacity-90 fixed inset-0 z-40 bg-substrateDark"></div>
        </>
      )}
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
    logos: allFile(filter: { sourceInstanceName: { eq: "icons" }, relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          publicURL
          name
          extension
        }
      }
    }
  }
`;
