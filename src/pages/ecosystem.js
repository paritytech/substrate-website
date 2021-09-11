import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';

// import { Link } from '../components/default/Link';
import Icon from '../components/default/Icon';
import Article from '../components/layout/Article';
import Card from '../components/layout/ecosystem/Card';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButton from '../components/ui/PrimaryButton';
import { isBrowser } from '../utils/browser';

export default function Home() {
  const [modalIsOpen, modalSetOpen] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  });

  return (
    <Layout mode="full">
      {isBrowser && didMount && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={modalIsOpen}
          videoId="WFbUc15ZhgU"
          onClose={() => modalSetOpen(false)}
        />
      )}
      <SEO title="Substrate Ecosystem" />
      <Article>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
            <div className="lg:col-span-3 lg:col-start-3">
              <div className="grid grid-cols-3 gap-6 ecosystem-home-anim">
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 1</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 7</div>
                </div>
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 2</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 8</div>
                </div>
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 3</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 9</div>
                </div>
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 4</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 10</div>
                </div>
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 5</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 11</div>
                </div>
                <div className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item">
                  <div className="ecosystem-home-anim__logo">Logo 6</div>
                  <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">Logo 12</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
              <h1>Substrate Builders Teams</h1>
              <h3>More than 150 Teams Are Building on Substrate</h3>
              <p>
                Some of the most exciting projects in decentralized tech are building on Substrate, including
                parachains, independent layer-1 blockchains, and infrastructure and tooling solutions for a wide range
                of use cases.
              </p>
              <PrimaryButton link="/ecosystem/teams">View Teams</PrimaryButton>
            </div>
          </div>

          <div
            onClick={() => modalSetOpen(true)}
            className="mt-36 mb-44 aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-12 lg:aspect-h-5 bg-substrateDark rounded-md shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <div>
              <StaticImage
                src="../images/photos/ecosystem/home/youtube.jpg"
                className="w-full h-full m-0 relative rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-8">
                <h3 className="text-white mb-2">Meet Substrate teams</h3>
                <p className="text-white opacity-75 m-0">Find out why more than 150 teams are building on Substrate.</p>
              </div>
              <Icon
                name="play"
                className="hidden sm:block absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 hover:scale-105 transition-transform"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-44">
            <div className="aspect-w-7 aspect-h-5 bg-gray-200 row-start-1 lg:col-start-2">
              <div>Foto</div>
            </div>
            <div className="lg:col-start-1">
              <h2 className="h1">Substrate Builders Program</h2>
              <h3>Accelerate Your Project</h3>
              <p>
                The Substrate Builders Program directly supports you by bringing you Parity’s extensive resources,
                taking your Substrate ecosystem project to the next level.
              </p>
              <PrimaryButton link="/ecosystem/teams">Learn More</PrimaryButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-start-3 aspect-w-16 aspect-h-9 bg-gray-200">
              <div>Illustration</div>
            </div>
            <div className="lg:row-start-1 lg:col-span-2">
              <h2 className="h1">Explore the Ecosystem</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a orci commodo, porta purus a, feugiat
                ligula. Etiam odio ex, venenatis id nibh interdum, finibus condimentum ipsum.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="opportunities" />
              Opportunities
            </h2>
            <p>Jump start your project or your career in the blockchain space</p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Hackathons"
                icon="hackathons"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Upcoming Events"
                color="#ddcdff"
              />
              <Card
                title="Grants"
                icon="dollar"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Projects"
                color="#ddcdff"
              />
              <Card
                title="Jobs"
                icon="desktop"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Now Hiring"
                color="#ddcdff"
              />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="resources" />
              Resources
            </h2>
            <p>Additional learning materials provided by the community for the community. </p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Substrate Seminar"
                icon="graduation"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Upcoming Events"
                color="#f8bfdd"
              />
              <Card
                title="Awesome Substrate"
                icon="smile"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Projects"
                color="#f8bfdd"
              />
              <Card
                title="Community Resources"
                icon="house"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Now Hiring"
                color="#f8bfdd"
              />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="connect" />
              Connect
            </h2>
            <p>Follow Substrate news and updates; get in touch with other devs in the community.</p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Contact"
                icon="contact"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Upcoming Events"
                color="#f6fd9d"
              />
              <Card
                title="Events"
                icon="event"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Projects"
                color="#f6fd9d"
              />
              <Card
                title="Newsletter"
                icon="paperplane"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Now Hiring"
                color="#f6fd9d"
              />
              <Card
                title="Blog"
                icon="pen"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed."
                link="/"
                linkText="Projects"
                color="#f6fd9d"
              />
            </div>
          </div>
        </Section>
      </Article>
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
