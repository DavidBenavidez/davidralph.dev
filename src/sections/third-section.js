import React, { Fragment } from 'react';
import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Heading } from '@common';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ScrollingItem = ({ image, heading, year, image2, content, id }) => (
  <div className="scrolling-section-item-container" id={id}>
    <div data-sal="slide-up">
      <Image fixed={image.childImageSharp.fixed} />
    </div>
    <div className="logo-shadow" />
    <Heading size="h2"> {heading} </Heading>
    <span className="scrolling-section-item-subheader">{year}</span>
    <div className="content-photo">
      <Image fixed={image2.childImageSharp.fixed} />
      <div
        data-sal="zoom-in"
        data-sal-delay="75"
        data-sal-easing="ease"
        className={`content-photo-frames content-photo-frames-${id}-1`}
      />
      <div
        data-sal="zoom-out"
        data-sal-delay="75"
        data-sal-easing="ease"
        className={`content-photo-frames content-photo-frames-${id}-2`}
      />
    </div>
    <div className="content">
      <span className="content-description">{content}</span>
    </div>
  </div>
);

export default ({ isFixed, isPastBottom }) => {
  const fixed_section_class = classNames(
    'fixed-section',
    { 'fixed-on': isFixed },
    { 'is-past-bottom': isPastBottom },
  );

  return (
    <Fragment>
      <div className="section third-section">
        <div className={fixed_section_class}>
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            className="experience-heading-container"
          >
            <Heading size="hero" white>
              Experience
            </Heading>
          </div>

          <span className="experience-navigator">
            <button
              className="experience-navigator-item"
              onClick={() => scrollTo('#experience-yses')}
            >
              {' '}
              YSES{' '}
            </button>
            |
            <button
              className="experience-navigator-item"
              onClick={() => scrollTo('#experience-futurity')}
            >
              {' '}
              Futurity Learning{' '}
            </button>
            |
            <button
              className="experience-navigator-item"
              onClick={() => scrollTo('#experience-srg')}
            >
              {' '}
              SRG{' '}
            </button>
            |
            <button
              className="experience-navigator-item"
              onClick={() => scrollTo('#experience-cheetah')}
            >
              {' '}
              Cheetah Digital{' '}
            </button>
          </span>
        </div>
        <div className="scrolling-section">
          <StaticQuery
            query={query}
            render={data => (
              <div className="scrolling-section-item">
                <ScrollingItem
                  id="experience-yses"
                  image={data.yses_logo}
                  heading="Young Software Engineers' Society (YSES)"
                  year="2017-2019"
                  image2={data.yses_photo}
                  content="In college, I joined YSES: an organization focused on bridging the gap
                  between the academe and the industry. I headed multiple committees during various
                  organizational events. Moreover, I learned new technologies
                  that the academe was not able to teach me."
                />
                <ScrollingItem
                  id="experience-futurity"
                  image={data.futurity_logo}
                  heading="Futurity Learning"
                  year="2019"
                  image2={data.futurity_photo}
                  content="In Futurity Learning we developed multiple mobile and web applications using
                  reactjs and firebase."
                />
                <ScrollingItem
                  id="experience-srg"
                  image={data.srg_logo}
                  heading="UPLB Systems Research Group"
                  year="2019"
                  image2={data.srg_photo}
                  content={[
                    'My college thesis adviser asked me to represent the UPLB SRG during the Best Special Problem Presentation.  I developed a Network Security Quantifier using Python and OpenVAS 9.  The code can be found ',
                    <a
                      href="https://github.com/DavidBenavidez/swiftvuln"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={1}
                    >
                      here
                    </a>,
                    '.',
                  ]}
                />
                <ScrollingItem
                  id="experience-cheetah"
                  image={data.cheetah_logo}
                  heading="Cheetah Digital"
                  year="2019 - present"
                  image2={data.cheetah_photo}
                  content="In Cheetah Digital, we develop customer engagement strategies through loyalty
                  programs and cross-channel messaging using Ruby on Rails and Java/Scala. I'm currently assigned as a Software Engineer 
                  in the integrations team."
                />
              </div>
            )}
          />
        </div>
      </div>
    </Fragment>
  );
};

const query = graphql`
  query {
    cheetah_logo: file(relativePath: { eq: "experience/cheetah_logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    cheetah_photo: file(relativePath: { eq: "experience/cheetah_photo.jpeg" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    futurity_logo: file(relativePath: { eq: "experience/futurity_learning_logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    futurity_photo: file(relativePath: { eq: "experience/futurity_learning_photo.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    yses_logo: file(relativePath: { eq: "experience/YSES_logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    yses_photo: file(relativePath: { eq: "experience/YSES_photo.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    srg_logo: file(relativePath: { eq: "experience/SRG_logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    srg_photo: file(relativePath: { eq: "experience/SRG_photo.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
