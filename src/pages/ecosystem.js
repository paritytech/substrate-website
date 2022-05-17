import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';

import Icon from '../components/default/Icon';
import Article from '../components/layout/Article';
import IconCard from '../components/layout/ecosystem/IconCard';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButtonLink from '../components/ui/PrimaryButtonLink';
import { isBrowser } from '../utils/browser';

const logos = [
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-1.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-7.png" alt="logo" />,
  },
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-2.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-8.png" alt="logo" />,
  },
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-3.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-9.png" alt="logo" />,
  },
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-4.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-10.png" alt="logo" />,
  },
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-5.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-11.png" alt="logo" />,
  },
  {
    logo: <StaticImage src="../images/png/ecosystem/logo-6.png" alt="logo" />,
    alt: <StaticImage src="../images/png/ecosystem/logo-12.png" alt="logo" />,
  },
];

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
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-16">
            <div className="lg:col-span-6 lg:col-start-6">
              <div className="grid grid-cols-3 gap-6 ecosystem-home-anim">
                {logos.map(({ logo, alt }, idx) => (
                  <div
                    key={idx}
                    className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item"
                  >
                    <div className="ecosystem-home-anim__logo">{logo}</div>
                    <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">{alt}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold">Substrate Builders Teams</h1>
              <h3 className="mb-6 text-2xl md:text-3xl font-medium lg:pr-4">
                More than 150 projects are building on Substrate
              </h3>
              <p className="mb-8 md:text-lg font-medium leading-relaxed">
                Some of the most exciting projects in decentralized tech are building on Substrate, including
                parachains, independent layer-1 blockchains, and infrastructure and tooling solutions for a wide range
                of use cases.
              </p>
              <PrimaryButtonLink link="/ecosystem/projects/">View Projects</PrimaryButtonLink>
            </div>
          </div>
        </Section>

        <Section>
          <div
            onClick={() => modalSetOpen(true)}
            className="mt-32 mb-44 aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-12 lg:aspect-h-5 bg-substrateDark rounded-md shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <div>
              <StaticImage
                src="../images/photos/ecosystem/home/youtube.jpg"
                alt="Meet Substrate teams"
                className="w-full h-full m-0 relative rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-4 sm:p-8">
                <h3 className="text-white mb-2 text-2xl md:text-3xl">Meet Substrate teams</h3>
                <p className="text-white opacity-75 m-0 text-base md:text-lg">
                  Find out why more than 150 projects are building on Substrate.
                </p>
              </div>
              <Icon
                name="play"
                className="w-12 h-12 md:w-24 md:h-24 absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-44">
            <div className="row-start-1 lg:col-start-2">
              <StaticImage
                src="../images/photos/ecosystem/builders-program/builders-program.jpg"
                alt="Substrate Builders Program"
                className="rounded-md"
              />
            </div>
            <div className="lg:col-start-1">
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Substrate
                <br /> Builders Program
              </h2>
              <h3 className="mb-6 text-2xl md:text-3xl font-medium lg:pr-4">Accelerate your project</h3>
              <p className="md:text-lg font-medium">
                The Substrate Builders Program directly supports you by connecting you with Parity’s extensive
                resources, taking your Substrate project to the next level.
              </p>
              <PrimaryButtonLink link="/ecosystem/substrate-builders-program/">Learn More</PrimaryButtonLink>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-start-3 relative hidden lg:block">
              <div className="absolute top-12 -right-8 w-full aspect-w-1 aspect-h-1">
                <Icon name="explore" />
              </div>
            </div>
            <div className="lg:row-start-1 lg:col-span-2 mb-11">
              <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">Explore the Ecosystem</h2>
            </div>
          </div>
          <div>
            <h2 className="font-extrabold mb-4 text-3xl lg:text-4xl">
              <Icon className="inline-block mr-4" name="opportunities" />
              Opportunities
            </h2>
            <p className="md:text-lg font-medium">Jump-start your project or your career in the blockchain space</p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <IconCard
                title="Hackathons"
                icon="hackathons"
                description="Ready for the challenge? Build, create, and hack."
                link="/ecosystem/opportunities/hackathons/"
                linkText="Join a hackathon"
                color="#ffbeed"
              />
              <IconCard
                title="Grants"
                icon="dollar"
                description="Got an idea that's ready to go? Web3 Foundation supports open source development work."
                link="/ecosystem/opportunities/grants/"
                linkText="Apply for a grant"
                color="#ffbeed"
                delay="200"
              />
              <IconCard
                title="Careers"
                icon="desktop"
                description="Substrate projects are always on the lookout for talented developers who are passionate about building a better future."
                link="https://careers.substrate.io"
                linkText="Find your role"
                color="#ffbeed"
                delay="400"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="font-extrabold mb-4 text-3xl lg:text-4xl">
              <Icon className="inline-block mr-4" name="resources" />
              Resources
            </h2>
            <p className="text-lg font-medium">
              Additional learning materials provided by the community for the community.{' '}
            </p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <IconCard
                title="Substrate Seminar"
                icon="graduation"
                description="Get the latest on the cutting-edge of blockchain in open seminars with developers and projects building on Substrate."
                link="/ecosystem/resources/seminar/"
                linkText="Join in"
                color="#d6ffcf"
              />
              <IconCard
                title="Awesome Substrate"
                icon="smile"
                description="A rich source of content covering everything you need to know to get started, troubleshoot, and fine-tune your skills."
                link="https://github.com/substrate-developer-hub/awesome-substrate/blob/master/README.md"
                linkText="Dive in"
                color="#d6ffcf"
                delay="200"
              />
              <IconCard
                title="Community Resources"
                icon="house"
                description="One of Substrate's greatest strengths is its thriving and engaged community, which has created an ever-increasing list of resources."
                link="/ecosystem/resources/community-resources/"
                linkText="Discover more"
                color="#d6ffcf"
                delay="400"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="font-extrabold mb-4 text-3xl lg:text-4xl">
              <Icon className="inline-block mr-4" name="connect" />
              Connect
            </h2>
            <p className="text-lg font-medium">
              Follow Substrate news and updates; get in touch with other devs in the community.
            </p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <IconCard
                title="Contact"
                icon="contact"
                description="Haven't found what you're looking for?"
                link="/ecosystem/connect/contact/"
                linkText="Get in touch"
                color="#ccc8ff"
              />
              <IconCard
                title="Events"
                icon="event"
                description="In person or online, from meetups to conferences, check out the growing number of events in the ecosystem."
                link="https://www.parity.io/events/"
                linkText="Upcoming events"
                color="#ccc8ff"
                delay="200"
              />
              <IconCard
                title="Newsletter"
                icon="paperplane"
                description="Get the latest technical updates and helpful developer resources right in your inbox."
                link="/ecosystem/connect/newsletter/"
                linkText="Sign up"
                color="#ccc8ff"
                delay="400"
              />
              <IconCard
                title="Blog"
                icon="pen"
                description="Tech, news, hackathons, events, milestones, and more. Follow our blog for detailed info on the latest updates."
                link="https://parity.io/blog"
                linkText="Head to the blog"
                color="#ccc8ff"
                delay="200"
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
