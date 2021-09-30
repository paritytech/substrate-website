import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';

import teamsData from '../../../data/teams.json';
import Icon from '../../components/default/Icon';
import AllTeams from '../../components/layout/ecosystem/teams/AllTeams';
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
      <SEO title="Teams" />

      <Section>
        <div className="flex flex-col lg:flex-row">
          <div className="self-center lg:pr-12">
            <h1 className="text-4xl lg:text-5xl font-bold xl:text-6xl">Meet The Teams</h1>
            <p className="font-semibold text-xl lg:text-2xl">More than 150 projects are building on Substrate</p>
            <p>
              Some of the most exciting projects in decentralized tech are building on Substrate, creating Polkadot
              parachains, independent layer-1 blockchains, and infrastructure.
            </p>
            <p>Start building</p>
          </div>
          <div
            onClick={() => modalSetOpen(true)}
            className="flex-none w-full lg:w-1/2 relative rounded-md shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <StaticImage
              src="../images/photos/ecosystem/home/youtube.jpg"
              alt="Meet Substrate Teams"
              className="aspect-w-3 aspect-h-2 w-full h-full m-0 relative rounded-md"
            />
            <h3 className="absolute left-0 top-0 p-8 text-white font-bold text-2xl">Meet Substrate teams</h3>
            <div className="absolute left-0 bottom-0 p-8">
              <p className="text-white opacity-75 m-0 text-lg">
                Find out why more than 150 projects are building on Substrate.
              </p>
            </div>
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
        <CatFilter categories={categories} curCat={curCat} setCurCat={setCurCat} />
        <AllTeams
          teams={teams}
          setCurTeam={setCurTeam}
          setIsComponentVisible={setIsComponentVisible}
          curType={curType}
          curCat={curCat}
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
